import logoUrl from '../../assets/westclifflogo.svg'

interface Props {
  variant?: 'light' | 'dark'
}

export function SlideLogo({ variant = 'light' }: Props) {
  return (
    <div className={`slide-logo slide-logo--${variant}`} aria-label="Westcliff University">
      <img src={logoUrl} alt="Westcliff University" />
    </div>
  )
}
