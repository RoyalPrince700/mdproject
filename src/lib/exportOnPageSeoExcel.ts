import ExcelJS from 'exceljs'
import { buildOnPageSeoRows } from '../data/dmOnPageSeoTitles'

const HEADERS = [
  'URL',
  'Current canonical',
  'Canonical address',
  'Current title',
  'Recommended title',
  'Title characters',
  'Current meta description',
  'Recommended meta description',
  'Meta characters',
  'Meta change',
  'Current H1',
  'Recommended H1',
  'H1 change',
  'Crawled',
  'Index label',
  'Indexability status',
  'Robots meta',
] as const

function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = fileName
  anchor.rel = 'noopener'
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

export async function exportOnPageSeoExcel() {
  const rows = buildOnPageSeoRows()
  const workbook = new ExcelJS.Workbook()
  workbook.creator = 'SmartEdu Hub'
  const sheet = workbook.addWorksheet('On-page SEO', {
    views: [{ state: 'frozen', ySplit: 1 }],
  })

  sheet.addRow([...HEADERS])
  const header = sheet.getRow(1)
  header.font = { bold: true, color: { argb: 'FFFFFFFF' }, name: 'Calibri', size: 11 }
  header.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1E4F8A' },
  }
  header.alignment = { vertical: 'middle', wrapText: true }
  header.height = 22
  sheet.getCell(1, 3).note =
    'Recommended canonical. The live pages do not declare one. Uses https://smarteduhub.ng, the host in the sitemap, with a single clean path.'
  sheet.getCell(1, 14).note =
    'Screaming Frog HTML crawl on 31 October 2026. Crawled means Screaming Frog fetched the URL.'
  sheet.getCell(1, 15).note =
    'Screaming Frog indexability on 31 October 2026. Indexable means the page is allowed to be indexed. This is not Google Search Console.'
  sheet.getCell(1, 17).note =
    'The meta tag name="robots" in the page HTML, checked 31 October 2026. This is not the robots.txt file.'

  for (const row of rows) {
    sheet.addRow([
      row.url,
      row.currentCanonical,
      row.canonicalAddress,
      row.currentTitle,
      row.recommendedTitle,
      row.recommendedTitleCharacters,
      row.currentMeta,
      row.recommendedMeta,
      row.recommendedMetaCharacters,
      row.metaChange,
      row.currentH1,
      row.recommendedH1,
      row.h1Change,
      row.crawled,
      row.indexLabel,
      row.indexStatus,
      row.robotsMeta,
    ])
  }

  sheet.columns = [
    { width: 62 },
    { width: 18 },
    { width: 62 },
    { width: 52 },
    { width: 58 },
    { width: 16 },
    { width: 70 },
    { width: 70 },
    { width: 16 },
    { width: 14 },
    { width: 62 },
    { width: 52 },
    { width: 12 },
    { width: 14 },
    { width: 18 },
    { width: 22 },
    { width: 22 },
  ]

  sheet.eachRow((excelRow, index) => {
    excelRow.alignment = { vertical: 'top', wrapText: true }
    if (index === 1) return
    excelRow.font = { name: 'Calibri', size: 11 }
    const metaChange = excelRow.getCell(10).value
    const h1Change = excelRow.getCell(13).value
    if (metaChange === 'Keep') {
      excelRow.getCell(10).font = { name: 'Calibri', size: 11, color: { argb: 'FF64748B' } }
    }
    if (h1Change === 'No H1') {
      excelRow.getCell(13).font = { name: 'Calibri', size: 11, color: { argb: 'FF64748B' } }
    }
    if (excelRow.getCell(15).value === 'Non-indexable') {
      excelRow.getCell(15).font = { name: 'Calibri', size: 11, bold: true, color: { argb: 'FF9A3412' } }
      excelRow.getCell(16).font = { name: 'Calibri', size: 11, color: { argb: 'FF9A3412' } }
    }
    if (excelRow.getCell(17).value !== 'index, follow') {
      excelRow.getCell(17).font = { name: 'Calibri', size: 11, bold: true, color: { argb: 'FF9A3412' } }
    }
  })

  sheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: HEADERS.length },
  }

  const siteFiles = workbook.addWorksheet('Robots and sitemap', {
    views: [{ state: 'frozen', ySplit: 1 }],
  })
  siteFiles.addRow(['File', 'Address', 'Status'])
  const siteHeader = siteFiles.getRow(1)
  siteHeader.font = { bold: true, color: { argb: 'FFFFFFFF' }, name: 'Calibri', size: 11 }
  siteHeader.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1E4F8A' },
  }
  siteHeader.alignment = { vertical: 'middle', wrapText: true }
  siteHeader.height = 22
  siteFiles.getCell(1, 3).note =
    'Checked 31 October 2026. Available means the file opened. This sheet does not judge whether the file needs improvement.'
  siteFiles.addRow(['robots.txt', 'https://smarteduhub.ng/robots.txt', 'Available'])
  siteFiles.addRow(['sitemap.xml', 'https://smarteduhub.ng/sitemap.xml', 'Available'])
  siteFiles.columns = [{ width: 18 }, { width: 46 }, { width: 16 }]
  siteFiles.eachRow((excelRow, index) => {
    excelRow.alignment = { vertical: 'middle', wrapText: true }
    if (index === 1) return
    excelRow.font = { name: 'Calibri', size: 11 }
  })

  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })
  downloadBlob(blob, 'SmartEdu-Hub-On-Page-SEO.xlsx')
}
