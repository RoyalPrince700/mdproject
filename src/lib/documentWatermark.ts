import watermarkUrl from '../../smehtemplates/smarteduhublogo.png'

let watermarkBytes: Uint8Array | null = null

export { watermarkUrl }

export async function loadWatermarkBytes(): Promise<Uint8Array | null> {
  if (watermarkBytes) return watermarkBytes
  try {
    const res = await fetch(watermarkUrl)
    if (!res.ok) return null
    const buffer = await res.arrayBuffer()
    watermarkBytes = new Uint8Array(buffer)
    return watermarkBytes
  } catch {
    return null
  }
}
