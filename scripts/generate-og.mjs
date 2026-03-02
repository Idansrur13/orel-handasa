import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.join(__dirname, '../public/imgs/og-image.png')

const W = 1200
const H = 630
const SEC = '#14143c'
const PRI = '#bea06e'
const PRI_LIGHT = '#e8c87a'
const WHITE = '#ffffff'

const personImgPath = path.join(__dirname, '../public/imgs/flexOrel.png')

// Resize so height = 630, show from top (face visible)
const resizedPerson = await sharp(personImgPath)
  .resize({
    height: H,
    fit: 'contain',
    background: { r: 20, g: 20, b: 60, alpha: 1 },
  })
  .png()
  .toBuffer()

const personMeta = await sharp(resizedPerson).metadata()
const personBase64 = resizedPerson.toString('base64')
const personW = personMeta.width ?? 400
const personX = W - personW

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${SEC}" />
      <stop offset="100%" stop-color="#0a0a24" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9a7f52" />
      <stop offset="50%" stop-color="${PRI_LIGHT}" />
      <stop offset="100%" stop-color="${PRI}" />
    </linearGradient>
    <linearGradient id="photoFade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${SEC}" stop-opacity="1" />
      <stop offset="25%" stop-color="${SEC}" stop-opacity="0.5" />
      <stop offset="60%" stop-color="${SEC}" stop-opacity="0" />
    </linearGradient>
    <radialGradient id="glow" cx="25%" cy="50%" r="55%">
      <stop offset="0%" stop-color="${PRI}" stop-opacity="0.12" />
      <stop offset="100%" stop-color="${PRI}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="${PRI}" stroke-width="0.4" opacity="0.12"/>
    </pattern>
    <clipPath id="photoClip">
      <rect x="${personX}" y="0" width="${personW}" height="${H}" />
    </clipPath>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)" />
  <rect width="${W}" height="${H}" fill="url(#glow)" />
  <rect width="${W}" height="${H}" fill="url(#grid)" />

  <image
    href="data:image/png;base64,${personBase64}"
    x="${personX}" y="0"
    width="${personW}" height="${H}"
    preserveAspectRatio="xMidYMin meet"
    clip-path="url(#photoClip)"
  />
  <rect x="${personX}" y="0" width="${personW}" height="${H}" fill="url(#photoFade)" />

  <rect x="0" y="0" width="${W}" height="5" fill="url(#gold)" />
  <rect x="0" y="0" width="5" height="${H}" fill="url(#gold)" />
  <rect x="0" y="${H - 5}" width="${W}" height="5" fill="url(#gold)" />

  <text x="45" y="72" font-family="Arial, sans-serif" font-size="13" font-weight="700"
    fill="${PRI}" letter-spacing="3">| אוראל הנדסה |</text>
  <rect x="45" y="82" width="180" height="2" fill="url(#gold)" rx="1" opacity="0.7" />

  <text x="45" y="195" font-family="Arial, sans-serif" font-size="78" font-weight="900"
    fill="${WHITE}">פיקוח בנייה</text>
  <text x="45" y="285" font-family="Arial, sans-serif" font-size="78" font-weight="900"
    fill="url(#gold)">ובדק בית</text>

  <rect x="45" y="308" width="300" height="2.5" fill="url(#gold)" rx="1" opacity="0.6" />

  <text x="45" y="350" font-family="Arial, sans-serif" font-size="21" fill="${WHITE}" opacity="0.75">מומחה מטעם בתי המשפט</text>
  <text x="45" y="382" font-family="Arial, sans-serif" font-size="18" fill="${WHITE}" opacity="0.5">מעל 10 שנות ניסיון · מוסמך מכון התקנים</text>

  <rect x="45" y="408" width="138" height="34" rx="17" fill="${PRI}" fill-opacity="0.18"
    stroke="${PRI}" stroke-width="1.2" stroke-opacity="0.7" />
  <text x="114" y="430" font-family="Arial, sans-serif" font-size="14" font-weight="600"
    fill="${PRI}" text-anchor="middle">מפקח בניה</text>

  <rect x="193" y="408" width="138" height="34" rx="17" fill="${PRI}" fill-opacity="0.18"
    stroke="${PRI}" stroke-width="1.2" stroke-opacity="0.7" />
  <text x="262" y="430" font-family="Arial, sans-serif" font-size="14" font-weight="600"
    fill="${PRI}" text-anchor="middle">בדק בית</text>

  <rect x="341" y="408" width="165" height="34" rx="17" fill="${PRI}" fill-opacity="0.18"
    stroke="${PRI}" stroke-width="1.2" stroke-opacity="0.7" />
  <text x="423" y="430" font-family="Arial, sans-serif" font-size="14" font-weight="600"
    fill="${PRI}" text-anchor="middle">חוות דעת מומחה</text>

  <rect x="45" y="494" width="230" height="52" rx="11" fill="${PRI}" />
  <text x="160" y="526" font-family="Arial, sans-serif" font-size="18" font-weight="800"
    fill="${SEC}" text-anchor="middle">לשיחת ייעוץ חינם</text>

  <text x="45" y="${H - 20}" font-family="Arial, sans-serif" font-size="15"
    fill="${WHITE}" opacity="0.2">orel-handasa.web.app</text>
</svg>
`

await sharp(Buffer.from(svg)).png({ quality: 95 }).toFile(outPath)

console.log(`✅  OG image generated → ${outPath}`)
console.log(`   Person: ${personW}px wide, placed at x=${personX}`)
