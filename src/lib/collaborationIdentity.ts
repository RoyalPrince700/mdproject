const CLIENT_ID_KEY = 'md-collab-client-id'
const CLIENT_NAME_KEY = 'md-collab-client-name'
const CLIENT_COLOR_KEY = 'md-collab-client-color'

const COLORS = [
  '#e11d48',
  '#ea580c',
  '#ca8a04',
  '#16a34a',
  '#0891b2',
  '#2563eb',
  '#7c3aed',
  '#db2777',
]

export interface CollaboratorIdentity {
  id: string
  name: string
  color: string
}

function randomId() {
  return `user-${Math.random().toString(36).slice(2, 10)}`
}

function pickColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)]
}

export function getCollaboratorIdentity(): CollaboratorIdentity {
  let id = localStorage.getItem(CLIENT_ID_KEY)
  if (!id) {
    id = randomId()
    localStorage.setItem(CLIENT_ID_KEY, id)
  }

  let name = localStorage.getItem(CLIENT_NAME_KEY)
  if (!name) {
    const suffix = id.slice(-4).toUpperCase()
    name = `Editor ${suffix}`
    localStorage.setItem(CLIENT_NAME_KEY, name)
  }

  let color = localStorage.getItem(CLIENT_COLOR_KEY)
  if (!color) {
    color = pickColor()
    localStorage.setItem(CLIENT_COLOR_KEY, color)
  }

  return { id, name, color }
}

export function setCollaboratorName(name: string) {
  const trimmed = name.trim()
  if (!trimmed) return
  localStorage.setItem(CLIENT_NAME_KEY, trimmed)
}
