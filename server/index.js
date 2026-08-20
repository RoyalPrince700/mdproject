import { createServer } from 'node:http'
import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'

const PORT = Number(process.env.PORT) || 3001
const HOST = process.env.HOST || '0.0.0.0'
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

function isOriginAllowed(origin) {
  if (!origin) return true
  if (allowedOrigins.includes('*')) return true
  if (allowedOrigins.includes(origin)) return true
  // Allow localhost and LAN dev URLs when running locally
  if (process.env.NODE_ENV !== 'production') {
    return /^https?:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+)(:\d+)?$/.test(
      origin,
    )
  }
  return false
}

const app = express()
app.use(
  cors({
    origin(origin, callback) {
      if (isOriginAllowed(origin)) callback(null, true)
      else callback(new Error(`Blocked by CORS: ${origin}`))
    },
  }),
)
app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin(origin, callback) {
      if (isOriginAllowed(origin)) callback(null, true)
      else callback(new Error(`Blocked by CORS: ${origin}`))
    },
    methods: ['GET', 'POST'],
  },
})

/** @type {Map<string, object>} */
const documents = new Map()

/** @type {Map<string, Map<string, { id: string, name: string, color: string, focusTarget?: string, isEditing?: boolean }>>} */
const roomPresence = new Map()

function getRoomPresence(documentId) {
  if (!roomPresence.has(documentId)) {
    roomPresence.set(documentId, new Map())
  }
  return roomPresence.get(documentId)
}

function presenceList(documentId) {
  const room = getRoomPresence(documentId)
  return [...room.values()]
}

function broadcastPresence(documentId) {
  io.to(documentId).emit('presence:list', {
    documentId,
    collaborators: presenceList(documentId),
  })
}

io.on('connection', (socket) => {
  /** @type {string | null} */
  let activeDocumentId = null
  /** @type {string | null} */
  let clientId = null

  socket.on('document:join', ({ documentId, client, state }) => {
    if (!documentId || !client?.id) return

    if (activeDocumentId && activeDocumentId !== documentId) {
      socket.leave(activeDocumentId)
      const prevRoom = getRoomPresence(activeDocumentId)
      prevRoom.delete(clientId ?? client.id)
      broadcastPresence(activeDocumentId)
    }

    activeDocumentId = documentId
    clientId = client.id
    socket.join(documentId)

    const room = getRoomPresence(documentId)
    room.set(client.id, {
      id: client.id,
      name: client.name || 'Anonymous',
      color: client.color || '#64748b',
    })

    if (!documents.has(documentId) && state) {
      documents.set(documentId, state)
    }

    const serverState = documents.get(documentId) ?? state ?? null
    if (serverState && !documents.has(documentId)) {
      documents.set(documentId, serverState)
    }

    socket.emit('document:sync', { documentId, state: serverState })
    socket.to(documentId).emit('presence:joined', { client })
    broadcastPresence(documentId)
  })

  socket.on('document:update', ({ documentId, state, clientId: senderId }) => {
    if (!documentId || !state) return
    documents.set(documentId, state)
    socket.to(documentId).emit('document:update', {
      documentId,
      state,
      clientId: senderId,
    })
  })

  socket.on('presence:update', ({ documentId, clientId: senderId, focusTarget, isEditing }) => {
    if (!documentId || !senderId) return
    const room = getRoomPresence(documentId)
    const existing = room.get(senderId)
    if (!existing) return
    room.set(senderId, {
      ...existing,
      focusTarget,
      isEditing: Boolean(isEditing),
    })
    socket.to(documentId).emit('presence:update', {
      documentId,
      clientId: senderId,
      focusTarget,
      isEditing: Boolean(isEditing),
    })
    broadcastPresence(documentId)
  })

  socket.on('document:leave', ({ documentId, clientId: leavingId }) => {
    if (!documentId) return
    socket.leave(documentId)
    const room = getRoomPresence(documentId)
    room.delete(leavingId ?? clientId ?? '')
    broadcastPresence(documentId)
    if (activeDocumentId === documentId) activeDocumentId = null
  })

  socket.on('disconnect', () => {
    if (!activeDocumentId || !clientId) return
    const room = getRoomPresence(activeDocumentId)
    room.delete(clientId)
    broadcastPresence(activeDocumentId)
    socket.to(activeDocumentId).emit('presence:left', { clientId })
  })
})

httpServer.listen(PORT, HOST, () => {
  console.log(`Collaboration server listening on http://${HOST}:${PORT}`)
  console.log(`Allowed client origins: ${allowedOrigins.join(', ')}`)
})
