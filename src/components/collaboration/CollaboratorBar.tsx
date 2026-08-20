import type { CSSProperties } from 'react'
import type {
  CollaboratorPresence,
  CollaborationStatus,
} from '../../lib/collaborationSocket'

interface Props {
  status: CollaborationStatus
  statusDetail?: string | null
  collaborators: CollaboratorPresence[]
  selfName: string
}

function statusLabel(status: CollaborationStatus) {
  if (status === 'live') return 'Live'
  if (status === 'connecting') return 'Connecting…'
  return 'Offline'
}

export function CollaboratorBar({
  status,
  statusDetail,
  collaborators,
  selfName,
}: Props) {
  const editing = collaborators.filter((c) => c.isEditing)

  return (
    <div className="collab-bar" role="status" aria-live="polite">
      <span
        className={`collab-bar__status${
          status === 'live' ? ' collab-bar__status--live' : ''
        }${status === 'connecting' ? ' collab-bar__status--connecting' : ''}`}
        title={
          status === 'live'
            ? 'Connected — edits sync in real time'
            : statusDetail ??
              (status === 'connecting'
                ? 'Connecting to sync server…'
                : 'Sync server not reachable')
        }
      >
        <span className="collab-bar__dot" aria-hidden />
        {statusLabel(status)}
      </span>

      {status !== 'live' && statusDetail ? (
        <span className="collab-bar__offline-hint">{statusDetail}</span>
      ) : null}

      <span className="collab-bar__you" style={{ '--collab-color': '#c9a227' } as CSSProperties}>
        {selfName} (you)
      </span>

      {collaborators.map((c) => (
        <span
          key={c.id}
          className={`collab-bar__peer${c.isEditing ? ' collab-bar__peer--editing' : ''}`}
          style={{ '--collab-color': c.color } as CSSProperties}
          title={c.isEditing ? `${c.name} is editing` : `${c.name} is viewing`}
        >
          {c.name}
          {c.isEditing ? ' · editing' : ''}
        </span>
      ))}

      {editing.length > 0 ? (
        <span className="collab-bar__hint">
          {editing.length === 1
            ? `${editing[0].name} is editing`
            : `${editing.length} people editing`}
        </span>
      ) : null}
    </div>
  )
}
