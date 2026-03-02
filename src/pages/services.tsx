import { motion } from 'framer-motion'
import {
  Shield,
  Home,
  Gavel,
  CheckCircle2,
  ClipboardList,
  DraftingCompass,
  KeyRound,
  Scale,
  Coins,
  BadgeCheck,
  FileSearch,
  Hammer,
  Layers,
  AlertTriangle,
  Droplets,
  TrendingUp,
  FileText,
  Phone,
} from 'lucide-react'
import Devider from '../component/devider'
import Button from '../component/button'
import Form from '../component/form'

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const services = [
  /* ── 1. פיקוח בניה ── */
  {
    id: 'supervision',
    badge: 'פיקוח בניה',
    heading: 'פיקוח בניה מקצועי',
    sub: 'ליווי מלא מהיתר ועד מפתח — כך שהפרויקט שלך יבוצע נכון, בזמן, ובתקציב.',
    icon: Shield,
    img: '/imgs/whallak.avif',
    alt: 'פיקוח בניה',
    color: 'from-pri/20 to-transparent',
    items: [
      {
        icon: ClipboardList,
        title: 'הגדרת מפרטי עבודה',
        desc: 'הכנת מפרטים מדויקים לכל עבודות הבניה — תיאום ציפיות וביצוע איכותי.',
      },
      {
        icon: DraftingCompass,
        title: 'מכרז קבלנים',
        desc: 'בחינת איתנות כלכלית, ניסיון קודם, המלצות וסיווג קבלני מתאים.',
      },
      {
        icon: Shield,
        title: 'פיקוח שלד וגמרים',
        desc: 'נוכחות קבועה באתר, השתתפות בישיבות וד״ח חתך תקופתיים.',
      },
      {
        icon: Coins,
        title: 'בקרה תקציבית',
        desc: 'לוח תשלומים לפי אחוזי התקדמות — אף תשלום לא יאושר ללא אישורנו.',
      },
      {
        icon: KeyRound,
        title: 'ייעוץ טופס 4',
        desc: "ליווי לאישור האיכלוס כולל ד״ח בדק מסכם ורשימת ריג'קטים לקבלן.",
      },
    ],
    cta: 'קבל הצעה לפיקוח',
  },

  /* ── 2. בדק בית ── */
  {
    id: 'inspection',
    badge: 'בדק בית',
    heading: 'בדק בית מקיף ומוסמך',
    sub: 'בדיקה מעמיקה לפני כל רכישה או מסירה — כי כסף שלא מושקע נכון עכשיו עולה הרבה יותר מאוחר.',
    icon: Home,
    img: '/imgs/indor.avif',
    alt: 'בדק בית',
    color: 'from-sec/30 to-transparent',
    items: [
      {
        icon: FileSearch,
        title: 'סקר ליקויים מלא',
        desc: 'בדיקה ויזואלית ומכשירנית של כל רכיבי המבנה — גג, קירות, רצפות, פתחים.',
      },
      {
        icon: Droplets,
        title: 'רטיבות ועובש',
        desc: 'איתור חדירות מים, נזילות נסתרות ומוקדי עובש באמצעות ציוד מתקדם.',
      },
      {
        icon: AlertTriangle,
        title: 'ליקויי בניה ובטיחות',
        desc: 'זיהוי פגמים קונסטרוקטיביים, סטיות מתקן ובעיות בטיחות שיש לתקן.',
      },
      {
        icon: Layers,
        title: 'מערכות טכניות',
        desc: 'בדיקת מערכות חשמל, אינסטלציה, מיזוג וריצוף לאיתור כשלים נסתרים.',
      },
      {
        icon: FileText,
        title: 'דו"ח מפורט ומאובחן',
        desc: 'דו״ח כתוב עם תמונות, תיאור הממצאים, חומרתם והמלצות לטיפול.',
      },
    ],
    cta: 'קבע בדיקה',
  },

  /* ── 3. מומחה מטעם בתי המשפט ── */
  {
    id: 'expert',
    badge: 'ייצוג משפטי',
    heading: 'מומחה מטעם בתי המשפט',
    sub: 'ניתוח טכני מעמיק, חוות דעת מנומקת ועדות מקצועית — כלים שיוצרים הבדל בהליך.',
    icon: Gavel,
    img: '/imgs/wall.avif',
    alt: 'מומחה מטעם בתי המשפט',
    color: 'from-pri/15 to-transparent',
    items: [
      {
        icon: Gavel,
        title: 'חוות דעת הנדסית',
        desc: 'ניתוח מקצועי ומפורט של ליקויים, גורמיהם והשלכותיהם ההנדסיות.',
      },
      {
        icon: Scale,
        title: 'עדות מומחה בבית משפט',
        desc: 'הגשת חוות דעת ועדות מפי מומחה מוכר על-ידי ערכאות שיפוטיות.',
      },
      {
        icon: BadgeCheck,
        title: 'ייעוץ לפני תביעה',
        desc: 'הערכת סיכויים, כימות נזקים וסיוע בהכנת תיק תביעה מבוסס.',
      },
      {
        icon: TrendingUp,
        title: 'כימות ועלות תיקון',
        desc: 'חישוב מקצועי של עלות שיקום הליקויים לצורך פיצוי ריאלי.',
      },
      {
        icon: Hammer,
        title: 'פיקוח תיקונים',
        desc: 'וידוא שהקבלן ביצע את תיקון הליקויים כנדרש ובאיכות הנדרשת.',
      },
    ],
    cta: 'פנה לייעוץ ראשוני',
  },
]

const allFeatures = [
  { icon: BadgeCheck, label: 'מוסמך מכון התקנים' },
  { icon: Scale, label: 'מומחה בית משפט מוכר' },
  { icon: Shield, label: 'ניסיון מחברות G5' },
  { icon: FileText, label: 'דוחות מפורטים' },
  { icon: Phone, label: 'זמינות גבוהה' },
  { icon: Coins, label: 'תמחור שקוף' },
]

/* ─────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55 },
  }),
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Services() {
  return (
    <div dir='rtl'>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className='relative min-h-[55vh] bg-sec overflow-hidden flex flex-col items-center justify-center pt-28 pb-20 px-6'>
        {/* ambient orbs */}
        <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-pri/12 blur-[130px]' />
        <div className='pointer-events-none absolute bottom-0 -right-32 h-72 w-72 rounded-full bg-pri/10 blur-[90px]' />
        {/* grid */}
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(190,160,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(190,160,110,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* gold border */}
        <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent' />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl'
        >
          <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri'>
            <span className='h-1.5 w-1.5 rounded-full bg-pri animate-pulse' />
            מעטפת הנדסית מלאה
          </div>

          <h1 className='text-shimmer leading-tight'>השירותים שלנו</h1>

          <Devider />

          <p className='text-white/65 max-w-xl text-lg md:text-xl leading-relaxed'>
            שלושה תחומי מומחיות, גוף מקצועי אחד — כל מה שצריך כדי להגן על ההשקעה
            שלך לאורך כל מסלול הנדסי.
          </p>

          {/* trust pills */}
          <div className='flex flex-wrap justify-center gap-3 mt-2'>
            {allFeatures.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className='inline-flex items-center gap-1.5 rounded-full border border-pri/30 bg-pri/8 px-4 py-1.5 text-sm text-pri/90'
              >
                <Icon className='h-3.5 w-3.5' />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICE BLOCKS
      ═══════════════════════════════════════ */}
      {services.map((svc, idx) => {
        const Icon = svc.icon
        const isEven = idx % 2 === 0

        return (
          <section
            key={svc.id}
            id={svc.id}
            className={`relative overflow-hidden ${isEven ? 'bg-sec' : 'bg-bac'}`}
          >
            {/* ambient glow */}
            {isEven && (
              <>
                <div className='pointer-events-none absolute top-20 -left-32 h-80 w-80 rounded-full bg-pri/8 blur-[110px]' />
                <div className='pointer-events-none absolute bottom-20 -right-32 h-64 w-64 rounded-full bg-pri/10 blur-[90px]' />
                <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri/40 to-transparent' />
              </>
            )}
            {!isEven && (
              <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-60 w-[500px] rounded-full bg-pri/6 blur-[80px]' />
            )}

            <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32'>
              {/* ── Header ── */}
              <motion.div
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.2 }}
                custom={0}
                variants={fadeUp}
                className='flex flex-col items-center text-center mb-16'
              >
                <div
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium mb-5 ${
                    isEven
                      ? 'border-pri/40 bg-pri/10 text-pri'
                      : 'border-pri/50 bg-pri/10 text-pri-dark'
                  }`}
                >
                  <Icon className='h-3.5 w-3.5' />
                  {svc.badge}
                </div>

                <h2 className={`mb-4 ${isEven ? 'text-light' : 'text-sec'}`}>
                  {svc.heading}
                </h2>
                <Devider />
                <p
                  className={`max-w-2xl mt-2 ${isEven ? 'text-white/60' : 'text-sec/65'}`}
                >
                  {svc.sub}
                </p>
              </motion.div>

              {/* ── Body: image + feature cards ── */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image column */}
                <motion.div
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.2 }}
                  custom={1}
                  variants={fadeUp}
                  className={`${isEven ? 'lg:order-2' : 'lg:order-1'} relative rounded-2xl overflow-hidden shadow-2xl`}
                >
                  <img
                    src={svc.img}
                    alt={svc.alt}
                    className='w-full h-80 lg:h-[460px] object-cover'
                  />
                  {/* overlay gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${svc.color}`}
                  />
                  {/* icon badge */}
                  <div className='absolute top-5 right-5 h-14 w-14 rounded-full bg-pri/25 border border-pri/50 backdrop-blur-md flex items-center justify-center shadow-lg'>
                    <Icon className='h-7 w-7 text-pri' />
                  </div>
                  {/* CTA on image */}
                  <div className='absolute bottom-6 inset-x-6 flex justify-center'>
                    <a href='#contact'>
                      <Button variant='secondary' size='lg'>
                        {svc.cta}
                      </Button>
                    </a>
                  </div>
                </motion.div>

                {/* Feature cards column */}
                <div
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col gap-4`}
                >
                  {svc.items.map((item, i) => {
                    const ItemIcon = item.icon
                    return (
                      <motion.div
                        key={item.title}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0.15 }}
                        custom={i + 2}
                        variants={fadeUp}
                        className={`group flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300 ${
                          isEven
                            ? 'border-pri/20 bg-sec-light hover:border-pri/50 hover:shadow-md hover:shadow-pri/10'
                            : 'border-pri/20 bg-white/70 backdrop-blur-sm hover:border-pri/60 hover:shadow-md hover:shadow-pri/10'
                        }`}
                      >
                        <div
                          className={`shrink-0 h-11 w-11 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
                            isEven
                              ? 'bg-pri/10 border-pri/30 group-hover:bg-pri/20'
                              : 'bg-pri/10 border-pri/30 group-hover:bg-pri/20'
                          }`}
                        >
                          <ItemIcon className='h-5 w-5 text-pri' />
                        </div>
                        <div className='flex flex-col gap-1'>
                          <p
                            className={`font-bold text-base leading-snug ${isEven ? 'text-light' : 'text-sec'}`}
                            style={{
                              color: isEven
                                ? 'var(--color-light)'
                                : 'var(--color-sec)',
                            }}
                          >
                            {item.title}
                          </p>
                          <p
                            className={`text-sm leading-relaxed ${isEven ? 'text-white/55' : 'text-sec/60'}`}
                            style={{ fontSize: '0.92rem' }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ═══════════════════════════════════════
          PROCESS STRIP
      ═══════════════════════════════════════ */}
      <section className='relative bg-sec overflow-hidden'>
        <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent' />
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(190,160,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(190,160,110,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28'>
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeUp}
            className='flex flex-col items-center text-center mb-14'
          >
            <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri mb-5'>
              <span className='h-1.5 w-1.5 rounded-full bg-pri animate-pulse' />
              איך עובד התהליך?
            </div>
            <h2 className='text-light mb-4'>מהפנייה הראשונה ועד לתוצאה</h2>
            <Devider />
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                step: '01',
                title: 'פנייה ראשונית',
                desc: 'יוצרים קשר, מתאמים שיחת ייעוץ קצרה ומבינים את הצרכים.',
              },
              {
                step: '02',
                title: 'הצעת מחיר שקופה',
                desc: 'מקבלים הצעה מפורטת וברורה ללא הפתעות — כולל היקף השירות.',
              },
              {
                step: '03',
                title: 'ביצוע מקצועי',
                desc: 'מומחה מוסמך מבצע את הבדיקה / הפיקוח עם תיעוד מלא.',
              },
              {
                step: '04',
                title: 'דו"ח וליווי',
                desc: 'מקבלים דו״ח מפורט, הסבר אישי על הממצאים והמלצות המשך.',
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.15 }}
                custom={i + 1}
                variants={fadeUp}
                className='relative flex flex-col gap-4 rounded-2xl border border-pri/20 bg-sec-light p-6 hover:border-pri/50 hover:shadow-lg hover:shadow-pri/10 transition-all duration-300'
              >
                {/* connector line (desktop only) */}
                {i < 3 && (
                  <div className='hidden lg:block absolute top-8 left-0 -translate-x-1/2 w-px h-6 bg-pri/20' />
                )}
                <span className='text-4xl font-black text-gradient leading-none'>
                  {s.step}
                </span>
                <p
                  className='font-bold text-light text-lg leading-snug'
                  style={{ color: 'var(--color-light)' }}
                >
                  {s.title}
                </p>
                <p
                  className='text-white/55 text-sm leading-relaxed'
                  style={{ fontSize: '0.92rem' }}
                >
                  {s.desc}
                </p>
                <CheckCircle2 className='h-5 w-5 text-pri/40 mt-auto' />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT FORM
      ═══════════════════════════════════════ */}
      <section id='contact'>
        <Form />
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════ */}
      <section className='relative bg-sec overflow-hidden'>
        <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent' />
        <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-pri/10 blur-[100px]' />

        <div className='relative max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-6'>
          <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri'>
            <span className='h-1.5 w-1.5 rounded-full bg-pri animate-pulse' />
            מוכנים להתחיל?
          </div>
          <h2 className='text-light'>נשמח להיות לצידך</h2>
          <Devider />
          <p className='text-white/60 max-w-lg text-lg leading-relaxed'>
            שיחת ייעוץ ראשונה ללא עלות — נבין את הצורך שלך ונמצא יחד את הפתרון
            המתאים.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <a href='#contact'>
              <Button variant='secondary' size='lg'>
                קבע שיחת ייעוץ חינם
              </Button>
            </a>
            <a
              href='https://wa.me/972524716151'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-3 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-pri/60 hover:bg-white/10 hover:text-pri'>
                <Phone className='h-5 w-5' />
                שלח הודעה ב-WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
