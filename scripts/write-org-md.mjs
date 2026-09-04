import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = fs.readFileSync(path.join(root, 'src/data/educationNgos.ts'), 'utf8')
const start = src.indexOf('export const EDUCATION_NGOS')
const body = src.slice(start)

function field(block, name) {
  const match = block.match(new RegExp(`${name}:\\s*'((?:\\\\'|[^'])*)'`))
  return match ? match[1].replace(/\\'/g, "'") : ''
}

const orgs = []
const re = /\{\s*slug: '([^']+)'([\s\S]*?)\n  \},/g
let match
while ((match = re.exec(body))) {
  const block = `slug: '${match[1]}'${match[2]}`
  orgs.push({
    slug: match[1],
    name: field(block, 'name'),
    shortName: field(block, 'shortName'),
    attention: field(block, 'attention'),
    website: field(block, 'website'),
    email: field(block, 'email'),
    phone: field(block, 'phone'),
    address: field(block, 'address'),
    city: field(block, 'city'),
    category: field(block, 'category'),
  })
}

const lines = [
  '# Education NGOs and organisations — Top 50',
  '',
  'Research directory for **SmartEdu Hub** partnership outreach by Accessible Publishers Limited.',
  '',
  'Compiled **September 2026** from public websites and directories. Contacts (email, phone, address) change. Verify the correct partnership inbox before sending.',
  '',
  'Proposal template: the SmartEdu Hub proposal to **Florence Ifeoluwa Otedola (Cuppy Foundation)** — competition sponsorship, AI Books, and the Accessible Publishers catalogue. Each organisation below has a tailored proposal in the in-app Documents library (download as DOCX).',
  '',
  'Humanitarian and UN agencies are listed because they fund or implement education. Their proposals are written as technical partnership conversations, not casual CSI title-sponsorship asks.',
  '',
  `Listed organisations: **${orgs.length}**.`,
  '',
  '---',
  '',
]

orgs.forEach((org, index) => {
  lines.push(`## ${index + 1}. ${org.name}`)
  lines.push('')
  lines.push(`- **Short name:** ${org.shortName}`)
  lines.push(`- **Category:** ${org.category}`)
  lines.push(`- **Attention:** ${org.attention}`)
  lines.push(`- **Email:** ${org.email}`)
  lines.push(`- **Phone:** ${org.phone}`)
  lines.push(`- **Address:** ${org.address}`)
  lines.push(`- **City:** ${org.city}`)
  lines.push(`- **Website:** ${org.website}`)
  lines.push(`- **In-app proposal:** SmartEdu Hub Proposal to ${org.shortName}`)
  lines.push('')
})

lines.push('---')
lines.push('')
lines.push('## Accessible Publishers Limited (sender)')
lines.push('')
lines.push('- **Head office:** 121/123, The Knowledge Hub, Obafemi Awolowo Way, Oke-Ado, Ibadan, Oyo State')
lines.push('- **Website:** www.accessiblepublishers.com · www.smarteduhub.ng')
lines.push('- **Email:** info@accessiblepublishers.com; cpo@accessiblepublishers.com')
lines.push('- **Customer service:** +234 803 323 4827; +234 817 461 5807; +234 703 708 9870')
lines.push('')

fs.writeFileSync(path.join(root, 'org.md'), `${lines.join('\n')}\n`)
console.log(`Wrote org.md with ${orgs.length} organisations`)
