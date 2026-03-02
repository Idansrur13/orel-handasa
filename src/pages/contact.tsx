import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  Clock,
  Instagram,
  Facebook,
} from 'lucide-react'
import Devider from '../component/devider'
import Button from '../component/button'
import { contactInfo } from '../data/gObjects'

/* ─────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55 },
  }),
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const contactCards = [
  {
    icon: Phone,
    label: 'טלפון',
    value: contactInfo.phoneDisplay,
    sub: 'זמינים א׳–ו׳, 08:00–20:00',
    href: `tel:${contactInfo.phone}`,
    cta: 'התקשר עכשיו',
  },
  {
    icon: Mail,
    label: 'אימייל',
    value: contactInfo.email,
    sub: 'מענה תוך 24 שעות',
    href: `mailto:${contactInfo.email}`,
    cta: 'שלח מייל',
  },
  {
    icon: MapPin,
    label: 'אזור פעילות',
    value: 'כל הארץ',
    sub: 'מגיעים אליך לכל מקום',
    href: null,
    cta: null,
  },
]

const whyUs = [
  { icon: Clock, text: 'מענה מהיר — חוזרים אליך תוך 24 שעות' },
  { icon: CheckCircle2, text: 'ייעוץ ראשוני ללא עלות וללא התחייבות' },
  { icon: CheckCircle2, text: 'הצעת מחיר מפורטת ושקופה' },
  { icon: CheckCircle2, text: 'מומחה מוסמך שמגיע אליך לשטח' },
]

/* ─────────────────────────────────────────
   FORM COMPONENT (inline — dedicated page)
───────────────────────────────────────── */
function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1300)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className='flex flex-col items-center gap-5 py-16 text-center'
      >
        <div className='h-20 w-20 rounded-full bg-pri/15 border border-pri/40 flex items-center justify-center'>
          <CheckCircle2 className='h-10 w-10 text-pri' />
        </div>
        <h3 className='text-light m-0'>תודה, {name}!</h3>
        <p className='text-white/60 max-w-sm'>
          קיבלנו את פרטיך וניצור איתך קשר בהקדם האפשרי.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setName('')
            setPhone('')
            setSubject('')
            setNote('')
          }}
          className='text-pri/70 text-sm hover:text-pri transition-colors underline underline-offset-4 mt-2'
        >
          שלח פנייה נוספת
        </button>
      </motion.div>
    )
  }

  const inputClass =
    'w-full bg-white/6 border border-white/15 text-light placeholder-white/30 rounded-xl pr-11 pl-4 py-3.5 text-base outline-none transition focus:border-pri/60 focus:bg-white/10 focus:ring-2 focus:ring-pri/20'

  const inputClassNoIcon =
    'w-full bg-white/6 border border-white/15 text-light placeholder-white/30 rounded-xl px-4 py-3.5 text-base outline-none transition focus:border-pri/60 focus:bg-white/10 focus:ring-2 focus:ring-pri/20'

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5' noValidate>
      {/* Name */}
      <div className='flex flex-col gap-2'>
        <label htmlFor='c-name' className='text-light/80 text-sm font-semibold'>
          שם מלא <span className='text-pri'>*</span>
        </label>
        <div className='relative'>
          <span className='absolute right-4 top-1/2 -translate-y-1/2 text-white/30'>
            <User size={18} />
          </span>
          <input
            id='c-name'
            type='text'
            placeholder='ישראל ישראלי'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone */}
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='c-phone'
          className='text-light/80 text-sm font-semibold'
        >
          מספר טלפון <span className='text-pri'>*</span>
        </label>
        <div className='relative'>
          <span className='absolute right-4 top-1/2 -translate-y-1/2 text-white/30'>
            <Phone size={18} />
          </span>
          <input
            id='c-phone'
            type='tel'
            placeholder='050-000-0000'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Subject */}
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='c-subject'
          className='text-light/80 text-sm font-semibold'
        >
          נושא הפנייה
        </label>
        <select
          id='c-subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className='w-full bg-white/6 border border-white/15 text-light rounded-xl px-4 py-3.5 text-base outline-none transition focus:border-pri/60 focus:bg-white/10 focus:ring-2 focus:ring-pri/20 appearance-none cursor-pointer'
        >
          <option value='' className='bg-sec text-light'>
            בחר נושא...
          </option>
          <option value='supervision' className='bg-sec text-light'>
            פיקוח בניה
          </option>
          <option value='inspection' className='bg-sec text-light'>
            בדק בית
          </option>
          <option value='expert' className='bg-sec text-light'>
            מומחה מטעם בית המשפט
          </option>
          <option value='form4' className='bg-sec text-light'>
            ייעוץ טופס 4
          </option>
          <option value='other' className='bg-sec text-light'>
            אחר
          </option>
        </select>
      </div>

      {/* Note */}
      <div className='flex flex-col gap-2'>
        <label htmlFor='c-note' className='text-light/80 text-sm font-semibold'>
          הערות / פרטים נוספים
        </label>
        <div className='relative'>
          <span className='absolute right-4 top-4 text-white/30'>
            <MessageSquare size={18} />
          </span>
          <textarea
            id='c-note'
            rows={4}
            placeholder='ספר לנו בקצרה על הצורך שלך...'
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className={`${inputClassNoIcon} resize-none pr-11`}
          />
        </div>
      </div>

      {/* Submit */}
      <Button
        type='submit'
        variant='secondary'
        size='lg'
        disabled={loading}
        className='mt-1 w-full justify-center'
      >
        {loading ? (
          <>
            <span className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
            שולח...
          </>
        ) : (
          <>
            <Send size={18} />
            שלח פנייה
          </>
        )}
      </Button>

      <p className='text-white/30 text-xs text-center'>
        * שדות חובה · הפרטים שלך מאובטחים ולא יועברו לצד שלישי
      </p>
    </form>
  )
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Contact() {
  return (
    <div dir='rtl'>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className='relative min-h-[50vh] bg-sec overflow-hidden flex flex-col items-center justify-center pt-32 pb-20 px-6'>
        {/* ambient */}
        <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[500px] rounded-full bg-pri/12 blur-[130px]' />
        <div className='pointer-events-none absolute bottom-0 -left-32 h-64 w-64 rounded-full bg-pri/8 blur-[90px]' />
        {/* grid */}
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(190,160,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(190,160,110,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent' />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='relative z-10 flex flex-col items-center text-center gap-5 max-w-2xl'
        >
          <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri'>
            <span className='h-1.5 w-1.5 rounded-full bg-pri animate-pulse' />
            נשמח לשמוע ממך
          </div>
          <h1 className='text-shimmer leading-tight'>צור קשר</h1>
          <Devider />
          <p className='text-white/60 text-lg md:text-xl leading-relaxed'>
            שיחת ייעוץ ראשונה ללא עלות וללא התחייבות — נבין את הצורך שלך ונמצא
            יחד את הפתרון המתאים.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT CARDS ROW
      ═══════════════════════════════════════ */}
      <section className='relative bg-bac overflow-hidden'>
        <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-48 w-[500px] rounded-full bg-pri/6 blur-[80px]' />

        <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-16'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
            {contactCards.map(
              ({ icon: Icon, label, value, sub, href, cta }, i) => (
                <motion.div
                  key={label}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  variants={fadeUp}
                  className='group flex flex-col items-center text-center gap-4 rounded-2xl border border-pri/25 bg-white/80 backdrop-blur-sm p-7 hover:border-pri/60 hover:shadow-xl hover:shadow-pri/10 transition-all duration-300'
                >
                  <div className='h-14 w-14 rounded-full bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors duration-300'>
                    <Icon className='h-6 w-6 text-pri' />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='text-xs font-semibold text-pri/70 uppercase tracking-widest'>
                      {label}
                    </p>
                    <p
                      className='font-bold text-sec text-base leading-snug'
                      style={{ color: 'var(--color-sec)' }}
                    >
                      {value}
                    </p>
                    <p className='text-sec/50 text-sm'>{sub}</p>
                  </div>
                  {href && cta && (
                    <a
                      href={href}
                      className='mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-pri hover:text-pri-dark transition-colors underline underline-offset-4'
                    >
                      {cta}
                    </a>
                  )}
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FORM + SIDE INFO
      ═══════════════════════════════════════ */}
      <section className='relative bg-sec overflow-hidden'>
        <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri/40 to-transparent' />
        <div className='pointer-events-none absolute top-20 -right-40 h-96 w-96 rounded-full bg-pri/8 blur-[110px]' />
        <div className='pointer-events-none absolute bottom-20 -left-40 h-80 w-80 rounded-full bg-pri/6 blur-[90px]' />
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(190,160,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(190,160,110,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start'>
            {/* ── Side Info ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className='flex flex-col gap-8'
            >
              <div>
                <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri mb-5'>
                  <span className='h-1.5 w-1.5 rounded-full bg-pri' />
                  השאר פרטים
                </div>
                <h2 className='text-light mb-4 leading-snug'>
                  נחזור אליך בהקדם
                </h2>
                <Devider />
                <p className='text-white/60 leading-relaxed mt-2'>
                  מלא את הטופס ואחד מהמומחים שלנו יחזור אליך עם מענה מקצועי
                  מותאם אישית — ללא עלות וללא התחייבות.
                </p>
              </div>

              {/* Why contact us */}
              <div className='flex flex-col gap-3'>
                {whyUs.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={text}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.1 }}
                    custom={i}
                    variants={fadeUp}
                    className='flex items-center gap-3'
                  >
                    <Icon className='h-4 w-4 text-pri shrink-0' />
                    <span className='text-white/65 text-base'>{text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Direct links */}
              <div className='flex flex-col gap-4 rounded-2xl border border-pri/20 bg-sec-light p-6'>
                <p className='text-light/70 text-sm font-semibold'>
                  או פנה ישירות
                </p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className='group flex items-center gap-3 text-white/70 hover:text-pri transition-colors duration-200'
                >
                  <div className='h-9 w-9 rounded-full bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors'>
                    <Phone className='h-4 w-4 text-pri' />
                  </div>
                  <span className='font-semibold'>
                    {contactInfo.phoneDisplay}
                  </span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='group flex items-center gap-3 text-white/70 hover:text-pri transition-colors duration-200'
                >
                  <div className='h-9 w-9 rounded-full bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors'>
                    <Mail className='h-4 w-4 text-pri' />
                  </div>
                  <span className='font-semibold'>{contactInfo.email}</span>
                </a>
                <a
                  href={contactInfo.whatsapp}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-3 text-white/70 hover:text-pri transition-colors duration-200'
                >
                  <div className='h-9 w-9 rounded-full bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors'>
                    {/* WhatsApp icon via SVG */}
                    <svg
                      className='h-4 w-4 text-pri fill-current'
                      viewBox='0 0 24 24'
                    >
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z' />
                      <path d='M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.571a.75.75 0 00.921.921l5.726-1.476A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.95-1.354l-.355-.21-3.678.947.964-3.546-.23-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z' />
                    </svg>
                  </div>
                  <span className='font-semibold'>WhatsApp</span>
                </a>

                {/* Social */}
                <div className='flex items-center gap-3 pt-2 border-t border-white/8'>
                  <a
                    href={contactInfo.instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram'
                    className='h-9 w-9 rounded-full border border-pri/30 bg-pri/10 flex items-center justify-center text-pri hover:bg-pri hover:text-sec transition-all duration-300'
                  >
                    <Instagram className='h-4 w-4' />
                  </a>
                  <a
                    href={contactInfo.facebook}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Facebook'
                    className='h-9 w-9 rounded-full border border-pri/30 bg-pri/10 flex items-center justify-center text-pri hover:bg-pri hover:text-sec transition-all duration-300'
                  >
                    <Facebook className='h-4 w-4' />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── Form card ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className='rounded-2xl border border-pri/25 bg-sec-light backdrop-blur-sm p-8 lg:p-10 shadow-2xl shadow-black/20'
            >
              {/* gold top accent */}
              <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent rounded-t-2xl' />
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
