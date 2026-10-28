import ExcelJS from 'exceljs'
import { buildOnPageSeoRows } from '../data/dmOnPageSeoTitles'

const HEADERS = [
  'URL',
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

  for (const row of rows) {
    sheet.addRow([
      row.url,
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
    ])
  }

  sheet.columns = [
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
  ]

  sheet.eachRow((excelRow, index) => {
    excelRow.alignment = { vertical: 'top', wrapText: true }
    if (index === 1) return
    excelRow.font = { name: 'Calibri', size: 11 }
    const metaChange = excelRow.getCell(8).value
    const h1Change = excelRow.getCell(11).value
    if (metaChange === 'Keep') {
      excelRow.getCell(8).font = { name: 'Calibri', size: 11, color: { argb: 'FF64748B' } }
    }
    if (h1Change === 'No H1') {
      excelRow.getCell(11).font = { name: 'Calibri', size: 11, color: { argb: 'FF64748B' } }
    }
  })

  sheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: HEADERS.length },
  }

  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })
  downloadBlob(blob, 'SmartEdu-Hub-On-Page-SEO.xlsx')
}
