import type { LucideProps } from 'lucide-react'
import { getSlideIcon } from '../../lib/slideIcons'

interface Props extends Omit<LucideProps, 'ref' | 'name'> {
  name?: string | null
}

export function SlideIcon({ name, size = 28, strokeWidth = 1.75, ...props }: Props) {
  const Icon = getSlideIcon(name)
  if (!Icon) return null
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" {...props} />
}
