import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Home,
  Gavel,
  Instagram,
  Facebook,
} from 'lucide-react'
import Devider from './devider'
import { navLinks, contactInfo } from '../data/gObjects'

const services = [
  { icon: Shield, label: 'מפקח בניה' },
  { icon: Home, label: 'בדק בית' },
  { icon: Gavel, label: 'מומחה מטעם בתי המשפט' },
]

const links = navLinks.map((link) => ({ label: link.label, href: link.to }))

export default function Footer() {
  return (
    <footer className='relative bg-sec overflow-hidden'>
      {/* ── Top gold border ── */}
      <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent' />

      {/* ── Ambient orbs ── */}
      <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-pri/8 blur-[140px]' />
      <div className='pointer-events-none absolute bottom-0 -right-40 h-72 w-72 rounded-full bg-pri/10 blur-[100px]' />

      {/* ════════ MAIN CONTENT ════════ */}
      <div className='relative px-10 lg:px-20 pt-20 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6'>
          {/* ── Col 1: Brand ── */}
          <div className='flex flex-col gap-5  '>
            <img
              src='/imgs/orel_logo.svg'
              alt='אוראל הנדסה'
              className='h-16 w-auto drop-shadow-sm drop-shadow-pri self-start'
            />
            <Devider />

            <p className=' leading-relaxed'>
              מעטפת הנדסית מלאה – פיקוח בניה, בדק בית וחוות דעת מומחה. מחויבים
              לשקיפות, מקצועיות ותוצאות.
            </p>

            {/* Social icons */}
            <div className='flex items-center gap-3 mt-2'>
              {[
                {
                  Icon: Facebook,
                  href: contactInfo.facebook,
                  label: 'Facebook',
                },
                {
                  Icon: Instagram,
                  href: contactInfo.instagram,
                  label: 'Instagram',
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className='h-10 w-10 rounded-full border border-pri/30 bg-pri/10 flex items-center justify-center text-pri hover:bg-pri hover:text-sec transition-all duration-300'
                >
                  <Icon className='h-5 w-5' />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Services ── */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-light/70 tracking-wide'>השירותים שלנו</h4>
            <div className='h-px w-10 bg-pri/50 mb-1' />
            <ul className='flex flex-col gap-3'>
              {services.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href='#'
                    className='group flex items-center gap-3 text-white/60 text-lg hover:text-pri transition-colors duration-200'
                  >
                    <span className='h-7 w-7 rounded-lg bg-pri/10 border border-pri/20 flex items-center justify-center group-hover:bg-pri/25 transition-colors duration-200'>
                      <Icon className='h-3.5 w-3.5 text-pri' />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Navigation ── */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-light/70 tracking-wide'>ניווט מהיר</h4>
            <div className='h-px w-10 bg-pri/50 mb-1' />
            <ul className='flex flex-col gap-3'>
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className='text-white/60 text-lg hover:text-pri transition-colors duration-200 flex items-center gap-2 group'
                  >
                    <span className='h-1 w-1 rounded-full bg-pri/40 group-hover:bg-pri transition-colors duration-200' />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-light/70 tracking-wide'>צור קשר</h4>
            <div className='h-px w-10 bg-pri/50 mb-1' />
            <ul className='flex flex-col gap-4'>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className='group flex items-center gap-3 text-white/60 text-lg hover:text-pri transition-colors duration-200'
                >
                  <span className='h-9 w-9 rounded-xl bg-pri/10 border border-pri/20 flex items-center justify-center group-hover:bg-pri/25 transition-colors duration-200 shrink-0'>
                    <Phone className='h-4 w-4 text-pri' />
                  </span>
                  <span>{contactInfo.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='group flex items-center gap-3 text-white/60 text-lg hover:text-pri transition-colors duration-200'
                >
                  <span className='h-9 w-9 rounded-xl bg-pri/10 border border-pri/20 flex items-center justify-center group-hover:bg-pri/25 transition-colors duration-200 shrink-0'>
                    <Mail className='h-4 w-4 text-pri' />
                  </span>
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <div className='flex items-center gap-3 text-white/60 text-lg'>
                  <span className='h-9 w-9 rounded-xl bg-pri/10 border border-pri/20 flex items-center justify-center shrink-0 mt-0.5'>
                    <MapPin className='h-4 w-4 text-pri' />
                  </span>
                  <span>{contactInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
        </div>

        {/* ════════ BOTTOM BAR ════════ */}
        <div className=' flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className='text-white/30 text-xs'>
            © {new Date().getFullYear()} אוראל הנדסה · כל הזכויות שמורות
          </p>
          <div className='flex items-center gap-1 text-white/20 text-xs'>
            <span>עוצב ופותח ע״י עידן סרור</span>
            <span className='text-pri'>♥</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
