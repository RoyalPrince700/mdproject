import accessibleLogoUrl from '../assets/accessiblelogo.png'
import watermarkUrl from '../../smehtemplates/smarteduhublogo.png'

let watermarkBytes: Uint8Array | null = null
let accessibleLogoBytes: Uint8Array | null = null

export { accessibleLogoUrl, watermarkUrl }

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

export async function loadAccessibleLogoBytes(): Promise<Uint8Array | null> {
  if (accessibleLogoBytes) return accessibleLogoBytes
  try {
    const res = await fetch(accessibleLogoUrl)
    if (!res.ok) return null
    const buffer = await res.arrayBuffer()
    accessibleLogoBytes = new Uint8Array(buffer)
    return accessibleLogoBytes
  } catch {
    return null
  }
}

export interface LogoDimensions {
  data: Uint8Array
  width: number
  height: number
}

export async function loadAccessibleLogoAsset(): Promise<LogoDimensions | null> {
  const data = await loadAccessibleLogoBytes()
  if (!data) return null
  let objectUrl: string | null = null
  try {
    const sourceBlob = new Blob([data], { type: 'image/png' })
    objectUrl = URL.createObjectURL(sourceBlob)
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('Unable to read logo dimensions'))
      img.src = objectUrl as string
    })
    return {
      data,
      width: image.naturalWidth || image.width,
      height: image.naturalHeight || image.height,
    }
  } catch {
    return { data, width: 402, height: 125 }
  } finally {
    if (objectUrl) URL.revokeObjectURL(objectUrl)
  }
}
