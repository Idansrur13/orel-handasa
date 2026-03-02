export interface NavLink {
  to: string
  label: string
}

export const navLinks: NavLink[] = [
  { to: '/', label: 'בית' },
  { to: '/services', label: 'שירותים' },
  { to: '/gallery', label: 'גלרייה' },
  { to: '/about', label: 'עליי' },
  { to: '/contact', label: 'צור קשר' },
]

// ─────────────────────────────────────────
//  Contact Info
// ─────────────────────────────────────────
export interface ContactInfo {
  phone: string
  phoneDisplay: string
  email: string
  address: string
  city: string
  instagram: string
  facebook: string
  whatsapp: string
}

export const contactInfo: ContactInfo = {
  phone: '+972524716151',
  phoneDisplay: '052-471-6151',
  email: 'orelhandasa@gmail.com',
  address: 'ישראל',
  city: 'ישראל',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  whatsapp: 'https://wa.me/972524716151',
}
