import accessibleLogoUrl from '../../assets/accessiblelogo.png'
import smehLogoUrl from '../../assets/smeh.png'

export function AccessibleSummerLogos() {
  return (
    <>
      <div className="slide-corner-logo slide-corner-logo--left" aria-hidden="true">
        <img src={smehLogoUrl} alt="SmartEdu Hub" />
      </div>
      <div className="slide-corner-logo slide-corner-logo--right" aria-hidden="true">
        <img src={accessibleLogoUrl} alt="Accessible Publishers" />
      </div>
    </>
  )
}
