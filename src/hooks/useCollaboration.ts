import { useCallback, useEffect, useRef, useState } from 'react'
import { getCollaboratorIdentity } from '../lib/collaborationIdentity'
import {
  emitDocumentUpdate,
  emitPresenceUpdate,
  getCollaborationSocket,
  joinDocument,
  leaveDocument,
  type CollaboratorPresence,
  type CollaborationStatus,
  type DocumentUpdatePayload,
} from '../lib/collaborationSocket'
import type { PresentationState } from '../types/slide'

const SYNC_DEBOUNCE_MS = 300

interface Options {
  documentId: string
  enabled: boolean
  state: PresentationState
  applyRemoteState: (state: PresentationState) => void
  focusTarget?: string
  isEditing?: boolean
}

export function useCollaboration({
  documentId,
  enabled,
  state,
  applyRemoteState,
  focusTarget,
  isEditing = false,
}: Options) {
  const identity = getCollaboratorIdentity()
  const [status, setStatus] = useState<CollaborationStatus>('connecting')
  const [statusDetail, setStatusDetail] = useState<string | null>(null)
  const [collaborators, setCollaborators] = useState<CollaboratorPresence[]>([])
  const skipNextEmit = useRef(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const stateRef = useRef(state)

  useEffect(() => {
    stateRef.current = state
  }, [state])

  useEffect(() => {
    const socket = getCollaborationSocket()

    const onConnect = () => {
      setStatus('live')
      setStatusDetail(null)
      if (enabled) {
        joinDocument(documentId, identity, stateRef.current)
      }
    }

    const onDisconnect = (reason: string) => {
      setStatus(reason === 'io client disconnect' ? 'offline' : 'connecting')
      if (reason === 'io server disconnect') {
        setStatusDetail('Sync server closed the connection')
      }
    }

    const onConnectError = (error: Error) => {
      setStatus('offline')
      setStatusDetail(
        import.meta.env.PROD && !import.meta.env.VITE_SOCKET_URL
          ? 'No sync server configured for this deployment'
          : `Cannot reach sync server (${error.message})`,
      )
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('connect_error', onConnectError)
    setStatus(socket.connected ? 'live' : 'connecting')

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('connect_error', onConnectError)
    }
  }, [documentId, enabled, identity])

  useEffect(() => {
    if (!enabled) return

    const socket = getCollaborationSocket()

    const onSync = ({
      documentId: id,
      state: remoteState,
    }: {
      documentId: string
      state: PresentationState | null
    }) => {
      if (id !== documentId || !remoteState) return
      skipNextEmit.current = true
      applyRemoteState(remoteState)
    }

    const onUpdate = (payload: DocumentUpdatePayload) => {
      if (payload.documentId !== documentId) return
      if (payload.clientId === identity.id) return
      skipNextEmit.current = true
      applyRemoteState(payload.state)
    }

    const onPresenceList = ({
      documentId: id,
      collaborators: list,
    }: {
      documentId: string
      collaborators: CollaboratorPresence[]
    }) => {
      if (id !== documentId) return
      setCollaborators(list.filter((c) => c.id !== identity.id))
    }

    const onPresenceUpdate = (payload: {
      documentId: string
      clientId: string
      focusTarget?: string
      isEditing?: boolean
    }) => {
      if (payload.documentId !== documentId) return
      if (payload.clientId === identity.id) return
      setCollaborators((prev) => {
        const index = prev.findIndex((c) => c.id === payload.clientId)
        if (index < 0) return prev
        const next = [...prev]
        next[index] = {
          ...next[index],
          focusTarget: payload.focusTarget,
          isEditing: payload.isEditing,
        }
        return next
      })
    }

    if (socket.connected) {
      joinDocument(documentId, identity, stateRef.current)
    }

    socket.on('document:sync', onSync)
    socket.on('document:update', onUpdate)
    socket.on('presence:list', onPresenceList)
    socket.on('presence:update', onPresenceUpdate)

    return () => {
      leaveDocument(documentId, identity.id)
      socket.off('document:sync', onSync)
      socket.off('document:update', onUpdate)
      socket.off('presence:list', onPresenceList)
      socket.off('presence:update', onPresenceUpdate)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentId, enabled])

  const connected = status === 'live'

  useEffect(() => {
    if (!enabled || !connected) return
    if (skipNextEmit.current) {
      skipNextEmit.current = false
      return
    }

    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      emitDocumentUpdate(documentId, state, identity.id)
    }, SYNC_DEBOUNCE_MS)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [connected, documentId, enabled, identity.id, state])

  useEffect(() => {
    if (!enabled || !connected) return
    emitPresenceUpdate(documentId, identity.id, focusTarget, isEditing)
  }, [connected, documentId, enabled, focusTarget, identity.id, isEditing])

  const editorsByTarget = useCallback(() => {
    const map = new Map<string, CollaboratorPresence[]>()
    for (const collaborator of collaborators) {
      if (!collaborator.focusTarget) continue
      const list = map.get(collaborator.focusTarget) ?? []
      list.push(collaborator)
      map.set(collaborator.focusTarget, list)
    }
    return map
  }, [collaborators])

  return {
    connected,
    status,
    statusDetail,
    identity,
    collaborators,
    editorsByTarget: editorsByTarget(),
  }
}
