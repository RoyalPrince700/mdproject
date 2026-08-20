import { io, type Socket } from 'socket.io-client'
import type { PresentationState } from '../types/slide'
import type { CollaboratorIdentity } from './collaborationIdentity'

export interface CollaboratorPresence extends CollaboratorIdentity {
  focusTarget?: string
  isEditing?: boolean
}

export interface DocumentUpdatePayload {
  documentId: string
  state: PresentationState
  clientId: string
}

export interface PresenceUpdatePayload {
  documentId: string
  clientId: string
  focusTarget?: string
  isEditing?: boolean
}

export type CollaborationStatus = 'connecting' | 'live' | 'offline'

function resolveSocketUrl() {
  const configured = import.meta.env.VITE_SOCKET_URL?.trim()
  if (configured) return configured
  if (import.meta.env.DEV) return window.location.origin
  return window.location.origin
}

let socket: Socket | null = null

export function getCollaborationSocket(): Socket {
  if (!socket) {
    socket = io(resolveSocketUrl(), {
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      transports: ['websocket', 'polling'],
    })
  }
  return socket
}

export function getCollaborationSocketUrl() {
  return resolveSocketUrl()
}

export function joinDocument(
  documentId: string,
  client: CollaboratorIdentity,
  state: PresentationState,
) {
  getCollaborationSocket().emit('document:join', { documentId, client, state })
}

export function leaveDocument(documentId: string, clientId: string) {
  getCollaborationSocket().emit('document:leave', { documentId, clientId })
}

export function emitDocumentUpdate(
  documentId: string,
  state: PresentationState,
  clientId: string,
) {
  getCollaborationSocket().emit('document:update', { documentId, state, clientId })
}

export function emitPresenceUpdate(
  documentId: string,
  clientId: string,
  focusTarget: string | undefined,
  isEditing: boolean,
) {
  getCollaborationSocket().emit('presence:update', {
    documentId,
    clientId,
    focusTarget,
    isEditing,
  })
}
