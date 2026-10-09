/** Constitutionally recognised states. LGA counts follow the 774-LGA structure (Lagos is 20 LGAs, not LCDAs). */
export type NigerianState = {
  slug: string
  name: string
  capital: string
  lgaCount: number
}

export const NIGERIAN_STATES: NigerianState[] = [
  { slug: 'abia', name: 'Abia', capital: 'Umuahia', lgaCount: 17 },
  { slug: 'adamawa', name: 'Adamawa', capital: 'Yola', lgaCount: 21 },
  { slug: 'akwa-ibom', name: 'Akwa Ibom', capital: 'Uyo', lgaCount: 31 },
  { slug: 'anambra', name: 'Anambra', capital: 'Awka', lgaCount: 21 },
  { slug: 'bauchi', name: 'Bauchi', capital: 'Bauchi', lgaCount: 20 },
  { slug: 'bayelsa', name: 'Bayelsa', capital: 'Yenagoa', lgaCount: 8 },
  { slug: 'benue', name: 'Benue', capital: 'Makurdi', lgaCount: 23 },
  { slug: 'borno', name: 'Borno', capital: 'Maiduguri', lgaCount: 27 },
  { slug: 'cross-river', name: 'Cross River', capital: 'Calabar', lgaCount: 18 },
  { slug: 'delta', name: 'Delta', capital: 'Asaba', lgaCount: 25 },
  { slug: 'ebonyi', name: 'Ebonyi', capital: 'Abakaliki', lgaCount: 13 },
  { slug: 'edo', name: 'Edo', capital: 'Benin City', lgaCount: 18 },
  { slug: 'ekiti', name: 'Ekiti', capital: 'Ado-Ekiti', lgaCount: 16 },
  { slug: 'enugu', name: 'Enugu', capital: 'Enugu', lgaCount: 17 },
  { slug: 'gombe', name: 'Gombe', capital: 'Gombe', lgaCount: 11 },
  { slug: 'imo', name: 'Imo', capital: 'Owerri', lgaCount: 27 },
  { slug: 'jigawa', name: 'Jigawa', capital: 'Dutse', lgaCount: 27 },
  { slug: 'kaduna', name: 'Kaduna', capital: 'Kaduna', lgaCount: 23 },
  { slug: 'kano', name: 'Kano', capital: 'Kano', lgaCount: 44 },
  { slug: 'katsina', name: 'Katsina', capital: 'Katsina', lgaCount: 34 },
  { slug: 'kebbi', name: 'Kebbi', capital: 'Birnin Kebbi', lgaCount: 21 },
  { slug: 'kogi', name: 'Kogi', capital: 'Lokoja', lgaCount: 21 },
  { slug: 'kwara', name: 'Kwara', capital: 'Ilorin', lgaCount: 16 },
  { slug: 'lagos', name: 'Lagos', capital: 'Ikeja', lgaCount: 20 },
  { slug: 'nasarawa', name: 'Nasarawa', capital: 'Lafia', lgaCount: 13 },
  { slug: 'niger', name: 'Niger', capital: 'Minna', lgaCount: 25 },
  { slug: 'ogun', name: 'Ogun', capital: 'Abeokuta', lgaCount: 20 },
  { slug: 'ondo', name: 'Ondo', capital: 'Akure', lgaCount: 18 },
  { slug: 'osun', name: 'Osun', capital: 'Osogbo', lgaCount: 30 },
  { slug: 'oyo', name: 'Oyo', capital: 'Ibadan', lgaCount: 33 },
  { slug: 'plateau', name: 'Plateau', capital: 'Jos', lgaCount: 17 },
  { slug: 'rivers', name: 'Rivers', capital: 'Port Harcourt', lgaCount: 23 },
  { slug: 'sokoto', name: 'Sokoto', capital: 'Sokoto', lgaCount: 23 },
  { slug: 'taraba', name: 'Taraba', capital: 'Jalingo', lgaCount: 16 },
  { slug: 'yobe', name: 'Yobe', capital: 'Damaturu', lgaCount: 17 },
  { slug: 'zamfara', name: 'Zamfara', capital: 'Gusau', lgaCount: 14 },
]

/** The other 35 states. Ekiti already has its own proposal seed. */
export const OTHER_NIGERIAN_STATES = NIGERIAN_STATES.filter(
  (state) => state.slug !== 'ekiti',
)
