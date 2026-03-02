import Button from '../component/button'
import {
  Shield,
  Home,
  Gavel,
  ArrowBigLeftDashIcon,
  CheckCircle2,
  Star,
  Users,
  Award,
  ClipboardList,
  DraftingCompass,
  BadgeCheck,
  Scale,
  Coins,
  KeyRound,
  Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Devider from '../component/devider'
import { motion } from 'framer-motion'
import Form from '../component/form'

interface Specialty {
  h: string
  p: string
  s: string[]
  icon: LucideIcon
  popular: boolean
  img: string
  alt: string
}

const specialty: Specialty[] = [
  {
    h: 'מפקח בניה',
    p: 'פיקוח מקצועי על כל שלבי הבנייה, הבטחת עמידה בתקנים, תכניות ולוחות זמנים – מהיתר ועד מסירה.',
    s: ['פיקוח עליון', 'בקרת איכות', 'תיאום קבלנים'],
    icon: Shield,
    popular: false,
    img: '/imgs/whallak.avif',
    alt: 'מפקח בניה',
  },
  {
    h: 'בדק בית',
    p: 'בדיקה מקיפה של נכסים לפני רכישה או מסירה – איתור ליקויים נסתרים, חוות דעת מקצועית ודוח מפורט.',
    s: ['ליקויי בנייה', 'רטיבות ועובש', 'בטיחות מבנה'],
    icon: Home,
    popular: true,
    img: '/imgs/indor.avif',
    alt: 'בדק בית',
  },
  {
    h: 'מומחה מטעם בתי המשפט',
    p: 'חוות דעת מקצועיות ועדות מומחה בהליכים משפטיים – ניסיון רב בניתוח ליקויים והוכחת טענות הנדסיות.',
    s: ['חוות דעת', 'עדות מומחה', 'ייעוץ משפטי'],
    icon: Gavel,
    popular: false,
    img: '/imgs/wall.avif',
    alt: 'מומחה מטעם בתי המשפט',
  },
]
interface Stats {
  num: string
  label: string
}

const stats: Stats[] = [
  { num: '10+', label: 'שנות ניסיון' },
  { num: '500+', label: 'פרויקטים' },
  { num: '100%', label: 'שקיפות ומקצועיות' },
]

export default function Landing() {
  return (
    <div>
      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className='relative min-h-screen overflow-hidden bg-sec flex flex-col pt-6'>
        {/* ── Ambient light orbs ── */}
        <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-pri/10 blur-[120px]' />
        <div className='pointer-events-none absolute top-40 -right-40 h-96 w-96 rounded-full bg-pri/15 blur-[100px]' />
        <div className='pointer-events-none absolute top-70 -left-40 h-80 w-80 rounded-full bg-pri/20 blur-[90px]' />

        {/* ── Subtle grid pattern ── */}
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(190,160,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(190,160,110,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* ── Thin gold top border ── */}
        <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent' />

        {/* ════════════════ TEXT CONTENT ════════════════ */}
        <div className='relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-16 lg:pt-28 lg:pb-20'>
          {/* Logo */}
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className=' mb-8'>
            <img
              src='/imgs/orel_logo.svg'
              alt='אוראל הנדסה'
              className='h-24 md:h-32 lg:h-40 drop-shadow-[0_0_24px_rgba(190,160,110,0.5)]'
            />
          </motion.div>

          {/* Pill badge */}
          <div
            className='animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri backdrop-blur-sm'
            style={{ animationDelay: '100ms' }}
          >
            <span className='h-1.5 w-1.5 rounded-full bg-pri animate-pulse' />
            מעל 10 שנות ניסיון בתחום ההנדסה
          </div>

          {/* H1 */}
          <h1
            className='animate-fade-up text-shimmer mb-6 font-extrabold leading-tight'
            style={{ animationDelay: '200ms' }}
          >
            אוראל הנדסה
          </h1>

          {/* Gold divider */}
          <Devider />

          {/* Sub-headline */}
          <p
            className='animate-fade-up mb-10 max-w-2xl text-lg md:text-xl lg:text-2xl leading-relaxed text-white/70'
            style={{ animationDelay: '340ms' }}
          >
            מפקח בניה · בדק בית · מומחה מטעם בתי המשפט
            <br />
            <span className='text-white/50 text-base md:text-lg'>
              מעטפת הנדסית מלאה – מקצועיות, אמינות, תוצאות.
            </span>
          </p>

          {/* CTAs */}
          <div
            className='animate-fade-up flex flex-wrap items-center justify-center gap-4 mb-14'
            style={{ animationDelay: '420ms' }}
          >
            <Button variant='secondary' size='lg'>
              התחילו עכשיו
            </Button>
            <button className='group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-3 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-pri/60 hover:bg-white/10 hover:text-pri'>
              שיחת ייעוץ חינם
              <Phone
                className='h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </button>
          </div>

          {/* Trust stats row */}
          <div
            className='animate-fade-up grid grid-cols-3 gap-6 md:gap-12'
            style={{ animationDelay: '500ms' }}
          >
            {stats.map(({ num, label }) => (
              <div key={label} className='flex flex-col items-center gap-1'>
                <span className='text-2xl md:text-3xl font-extrabold text-gradient'>
                  {num}
                </span>
                <span className='text-xs md:text-sm text-white/50 font-medium'>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════ HERO IMAGE ════════════════ */}
        <div className='relative z-10 flex justify-center px-4 pb-0'>
          {/* Glow behind image */}
          <div className='pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-40 w-3/4 rounded-full bg-pri/20 blur-3xl' />

          {/* Frame */}
          <div className='group relative w-full max-w-4xl overflow-hidden bg-radial-[at_50%_75%] from-pri/70  to-transparent to-70% shadow-xl '>
            <img
              src='/imgs/flexOrel.png'
              alt='פתרונות הנדסיים מתקדמים'
              className='w-full h-auto max-h-[420px] md:max-h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]'
            />

            {/* Bottom overlay fade into next section */}

            {/* Floating badge */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex glass px-6 py-3 flex items-center gap-3 shadow-xl'>
              <span className='text-md md:text-lg font-bold text-light'>
                מצוינות
              </span>
              <span className='h-2 w-2 rounded-full bg-pri animate-pulse' />
              <span className='text-md md:text-lg font-bold text-light'>
                אמינות
              </span>
              <span className='h-2 w-2 rounded-full bg-pri animate-pulse' />
              <span className='text-md md:text-lg font-bold text-light'>
                תוצאות
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════ */}
      <section className='relative bg-sec overflow-hidden'>
        {/* ── Ambient orbs (continuity from hero) ── */}

        {/* ── Thin gold divider from hero ── */}

        <div className='relative  max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32'>
          {/* ── Section header ── */}
          <div className='flex flex-col items-center text-center mb-20'>
            <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri mb-6'>
              <span className='h-1.5 w-1.5 rounded-full bg-pri' />
              התמחויות
            </div>

            <h2 className='text-light mb-6'>העיסוקים המרכזיים שלנו</h2>

            {/* Gold divider */}
            <Devider />

            <p className='max-w-2xl'>
              מעטפת הנדסית מלאה המשלבת ידע טכני רב עם ניסיון מעשי בשטח ובאולמות
              בתי המשפט.
            </p>
          </div>

          {/* ── Cards grid ── */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
            {specialty.map((item) => {
              const Icon = item.icon
              return (
                <div
                  className={`group relative rounded-2xl overflow-hidden bg-sec-light backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${
                    item.popular
                      ? 'border border-light hover:border-pri hover:shadow-lg hover:shadow-pri md:-translate-y-3'
                      : 'border border-pri hover:border-pri/50 hover:shadow-lg hover:shadow-pri'
                  }`}
                >
                  {/* Featured decorations */}
                  {item.popular && (
                    <>
                      <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent' />
                      <div className='absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-40 rounded-full bg-pri/20 blur-2xl pointer-events-none' />
                      <div className='absolute top-4 left-4 z-10 rounded-full bg-pri px-3 py-1 text-xs font-bold text-sec'>
                        פופולרי
                      </div>
                    </>
                  )}

                  {/* Image */}
                  <div className='relative h-60 overflow-hidden'>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-sec-light via-sec/40 to-transparent' />
                    {/* Icon badge */}
                    <div className='absolute top-4 right-4 h-10 w-10 rounded-full bg-pri/20 border border-pri/40 backdrop-blur-sm flex items-center justify-center'>
                      <Icon className='h-5 w-5 text-pri' />
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    key={item.h}
                    initial={{ y: -100, opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    viewport={{ once: true }}
                    animate={{ y: 0, opacity: 1 }}
                    className='p-6 flex flex-col gap-4'
                  >
                    <h3 className=' text-light'>{item.h}</h3>
                    <p className=' leading-relaxed'>{item.p}</p>
                    <div className='flex flex-wrap gap-2 mt-1'>
                      {item.s.map((tag) => (
                        <span
                          key={tag}
                          className={`text-sm px-3 py-1 rounded-full text-pri border bg-pri/15 border-pri/30`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className='mt-2 pt-4 border-t border-white/8'>
                      <Button variant='secondary' size='sm'>
                        צור קשר
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* ── Bottom CTA strip ── */}
          <div className='mt-16 flex flex-col items-center gap-4 text-center'>
            <p className=''>לא בטוח מה אתה צריך?</p>
            <Button
              variant='secondary'
              className='inline-flex items-center gap-2 text-pri font-semibold text-base hover:gap-3 transition-all duration-300 group'
            >
              דבר איתנו ונמצא יחד את הפתרון המתאים
              <ArrowBigLeftDashIcon className='h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1' />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY US SECTION
      ═══════════════════════════════════════ */}
      <section className='relative bg-bac overflow-hidden'>
        {/* Ambient top glow */}
        <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-pri/8 blur-[120px]' />

        <div
          className='pointer-events-none absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage:
              'linear-gradient(sec 1px, transparent 1px), linear-gradient(90deg, sec 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32'>
          {/* ── Section header ── */}
          <div className='flex flex-col items-center text-center mb-20'>
            <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri mb-6'>
              <span className='h-1.5 w-1.5 rounded-full bg-pri' />
              למה אנחנו?
            </div>
            <h2 className='mb-6 text-sec'>הסיפור מאחורי אוראל הנדסה</h2>
            <Devider />
          </div>

          {/* ── Two-column layout ── */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20'>
            {/* Left – story text */}
            <div className='flex flex-col gap-6'>
              <p className='text-sec/80 leading-relaxed'>
                אוראל הנדסה מתמחה בפיקוח בניה ובדק בית והוקמה לאחר ניסיון עשיר
                בחברות בנייה ג-5 המובילות בישראל — מתוך צורך אישי לשמור על מי
                שקונה, בונה או משפץ.
              </p>
              <p className='text-sec/80 leading-relaxed'>
                אוראל הנדסה רואה לנגד עיניו להגן על רוכשי הדירות, לשפר את איכות
                הבנייה, להפחית את הסיכונים ברכישת נכס ובנייה, ולתרום להעלאת
                הסטנדרטים של הבנייה בישראל.
              </p>
              <p className='text-sec/80 leading-relaxed'>
                אוראל הנדסה מומחה מטעם בתי המשפט בישראל בתחום ליקויי הבנייה, וכן
                מוסמך מטעם מכון התקנים הישראלי לביצוע בדק בית ואיתור ליקויי
                בנייה.
              </p>
              <p className='text-sec/80 leading-relaxed'>
                אנו יודעים לתת מענה מקיף ומלא ללקוחותינו משלב היתר הבניה ועד
                קבלת אישור האיכלוס.
              </p>
            </div>

            {/* Right – value pillars */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {[
                {
                  icon: Award,
                  title: 'ניסיון רב-שנים',
                  desc: 'ניסיון עשיר בחברות הבנייה הגדולות בישראל',
                },
                {
                  icon: BadgeCheck,
                  title: 'מוסמך ומוכר',
                  desc: 'מוסמך מכון התקנים ומומחה מטעם בתי המשפט',
                },
                {
                  icon: Users,
                  title: 'הגנה על הלקוח',
                  desc: 'מייצגים אך ורק את האינטרס שלך',
                },
                {
                  icon: Star,
                  title: 'סטנדרטים גבוהים',
                  desc: 'מחויבים לשדרג את איכות הבנייה בישראל',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className='flex flex-col gap-3 rounded-2xl border border-pri/20 bg-white/60 backdrop-blur-sm p-5 hover:border-pri/50 hover:shadow-md hover:shadow-pri/10 transition-all duration-300'
                >
                  <div className='h-10 w-10 rounded-xl bg-pri/10 border border-pri/30 flex items-center justify-center'>
                    <Icon className='h-5 w-5 text-pri' />
                  </div>
                  <p
                    className='font-bold text-sec text-base leading-snug'
                    style={{ color: 'var(--color-sec)' }}
                  >
                    {title}
                  </p>
                  <p
                    className='text-sm text-sec/60 leading-relaxed'
                    style={{ fontSize: '0.9rem' }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Services list strip ── */}
          <div className='rounded-3xl border border-pri/20 bg-white/50 backdrop-blur-sm p-8 lg:p-12'>
            <div className='flex flex-col items-center text-center mb-10'>
              <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri mb-4'>
                <span className='h-1.5 w-1.5 rounded-full bg-pri' />
                בין השירותים שאנו מספקים
              </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
              {[
                { icon: DraftingCompass, label: 'פיקוח בניה ובקרת איכות' },
                { icon: ClipboardList, label: 'ניהול פרויקטים' },
                { icon: Home, label: 'בדק בית' },
                { icon: KeyRound, label: 'ייעוץ טופס 4' },
                { icon: Scale, label: 'ליווי משפטי במקרה הצורך' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className='flex flex-col items-center gap-3 rounded-2xl border border-pri/20 bg-bac/60 p-4 text-center hover:border-pri/60 hover:bg-pri/5 transition-all duration-300 group'
                >
                  <div className='h-12 w-12 rounded-full bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors duration-300'>
                    <Icon className='h-6 w-6 text-pri' />
                  </div>
                  <p
                    className='text-sm font-semibold text-sec leading-snug'
                    style={{ fontSize: '0.85rem', color: 'var(--color-sec)' }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
      </section>

      {/* ═══════════════════════════════════════
         form
      ═══════════════════════════════════════ */}

      <section>
        <Form />
      </section>

      {/* ═══════════════════════════════════════
          WHY CONSTRUCTION SUPERVISION SECTION
      ═══════════════════════════════════════ */}
      <section className='relative bg-sec overflow-hidden'>
        {/* Ambient orbs */}
        <div className='pointer-events-none absolute top-20 -right-40 h-96 w-96 rounded-full bg-pri/10 blur-[100px]' />
        <div className='pointer-events-none absolute bottom-20 -left-40 h-80 w-80 rounded-full bg-pri/8 blur-[90px]' />
        <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent' />

        <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32'>
          {/* ── Section header ── */}
          <div className='flex flex-col items-center text-center mb-20'>
            <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri mb-6'>
              <span className='h-1.5 w-1.5 rounded-full bg-pri animate-pulse' />
              פיקוח בניה
            </div>
            <h2 className='text-light mb-6 text-shadow-md'>למה פיקוח בניה?</h2>
            <Devider />
            <p className='max-w-3xl text-white/70'>
              פיקוח בניה הוא שירות חיוני שמלווה את הפרויקט מהתכנון הראשוני ועד
              למסירת המפתח, במטרה להבטיח את איכות הביצוע בהתאם לתוכניות, התקנים
              והאיכות המצופה עם מינימום ליקויי בניה. המפקח מייצג את האינטרסים של
              הלקוח מול קבלנים, ספקים ויועצים, ומבטיח שקט נפשי לאורך כל הדרך.
            </p>
            <p className='mt-4 max-w-2xl text-white/50 text-base'>
              אתם בונים את הממלכה שלכם — ולכן חשוב שתצטיידו במפקח מקצועי שיבטיח
              לכם תוצאה מושלמת.
            </p>
          </div>

          {/* ── 4 pillar cards ── */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
            {/* Card 1 – מפרטי עבודה */}
            <div className='group rounded-2xl border border-pri/20 bg-sec-light backdrop-blur-sm p-8 hover:border-pri/50 hover:shadow-lg hover:shadow-pri/10 transition-all duration-500'>
              <div className='flex items-start gap-4 mb-5'>
                <div className='h-12 w-12 shrink-0 rounded-xl bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors duration-300'>
                  <ClipboardList className='h-6 w-6 text-pri' />
                </div>
                <div>
                  <h3 className='text-light text-xl font-bold leading-snug'>
                    הגדרת מפרטי עבודה
                  </h3>
                  <p className='text-white/50 text-sm mt-1'>
                    הכנת מפרטים לביצוע עבור כלל עבודות הבנייה
                  </p>
                </div>
              </div>
              <p className='text-white/70 leading-relaxed text-base'>
                ללא מפרט עבודה מסודר ומוגדר, קשה להבטיח תוצאה באיכות גבוהה. אנו
                נדאג להכין עבורכם מפרטים מדויקים שיבטיחו תיאום ציפיות, ביצוע
                איכותי, והתנהלות מקצועית מול כלל הגורמים בפרויקט.
              </p>
            </div>

            {/* Card 2 – מכרז קבלנים */}
            <div className='group rounded-2xl border border-pri/20 bg-sec-light backdrop-blur-sm p-8 hover:border-pri/50 hover:shadow-lg hover:shadow-pri/10 transition-all duration-500'>
              <div className='flex items-start gap-4 mb-5'>
                <div className='h-12 w-12 shrink-0 rounded-xl bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors duration-300'>
                  <DraftingCompass className='h-6 w-6 text-pri' />
                </div>
                <div>
                  <h3 className='text-light text-xl font-bold leading-snug'>
                    ביצוע מכרז קבלנים
                  </h3>
                  <p className='text-white/50 text-sm mt-1'>
                    הליך מסודר ומקצועי לבחירת הקבלן המבצע
                  </p>
                </div>
              </div>
              <ul className='flex flex-col gap-2 mt-2'>
                {[
                  'בדיקת איתנות כלכלית של הקבלן',
                  'בחינה של פרויקטים שביצע בעבר',
                  'בדיקת המלצות ממזמיני עבודה קודמים',
                  'אימות סיווג קבלני מתאים לפרויקט',
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-2 text-white/70 text-base'
                  >
                    <CheckCircle2 className='h-4 w-4 text-pri mt-1 shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 – פיקוח שלד וגמרים */}
            <div className='group rounded-2xl border border-pri/20 bg-sec-light backdrop-blur-sm p-8 hover:border-pri/50 hover:shadow-lg hover:shadow-pri/10 transition-all duration-500'>
              <div className='flex items-start gap-4 mb-5'>
                <div className='h-12 w-12 shrink-0 rounded-xl bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors duration-300'>
                  <Shield className='h-6 w-6 text-pri' />
                </div>
                <div>
                  <h3 className='text-light text-xl font-bold leading-snug'>
                    פיקוח על עבודות השלד והגמרים
                  </h3>
                  <p className='text-white/50 text-sm mt-1'>
                    נוכחות מקצועית בכל שלבי הביצוע
                  </p>
                </div>
              </div>
              <ul className='flex flex-col gap-2'>
                {[
                  'הגעה לאתר מספר פעמים בשבוע',
                  'פיקוח בכל נתיב קריטי ופתיחת מלאכה חדשה',
                  'השתתפות בכל ישיבות הפרויקט',
                  'דו"ח חתך עם תמונות ותקנים לפי הנדרש',
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-2 text-white/70 text-base'
                  >
                    <CheckCircle2 className='h-4 w-4 text-pri mt-1 shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4 – בקרה תקציבית */}
            <div className='group rounded-2xl border border-pri/20 bg-sec-light backdrop-blur-sm p-8 hover:border-pri/50 hover:shadow-lg hover:shadow-pri/10 transition-all duration-500'>
              <div className='flex items-start gap-4 mb-5'>
                <div className='h-12 w-12 shrink-0 rounded-xl bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors duration-300'>
                  <Coins className='h-6 w-6 text-pri' />
                </div>
                <div>
                  <h3 className='text-light text-xl font-bold leading-snug'>
                    בקרה תקציבית
                  </h3>
                  <p className='text-white/50 text-sm mt-1'>
                    ניהול תשלומים ולוח אבני דרך
                  </p>
                </div>
              </div>
              <ul className='flex flex-col gap-2'>
                {[
                  'הגדרת מחיר מטרה',
                  'הכנת לוח תשלומים מחולק לפי אחוזי התקדמות',
                  'תשלום רק לאחר סיום אבן דרך מאומתת',
                  'לא יבוצע תשלום ללא אישור המפקח',
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-2 text-white/70 text-base'
                  >
                    <CheckCircle2 className='h-4 w-4 text-pri mt-1 shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── טופס 4 bonus card ── */}
          <div className='mt-14  group rounded-2xl border border-pri/40 bg-gradient-to-l from-pri/10 to-sec-light backdrop-blur-sm p-8 hover:border-pri hover:shadow-lg hover:shadow-pri/15 transition-all duration-500'>
            <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent rounded-t-2xl' />
            <div className='flex flex-col md:flex-row items-start md:items-center justify-center gap-6'>
              <div className='flex flex-col gap-2 items-center text-center'>
                <div className='flex items-center gap-2'>
                  <div className='h-14 w-14 shrink-0 rounded-xl bg-pri/20 border border-pri/40 flex items-center justify-center'>
                    <KeyRound className='h-7 w-7 text-pri' />
                  </div>
                  <h2 className='text-light  leading-snug'>טופס 4</h2>
                </div>

                <h3 className='text-light leading-snug'>ייעוץ אישור איכלוס</h3>
                <p className='text-white/70 leading-relaxed text-base max-w-3xl'>
                  ייעוץ והכוונה לצלוח את אישור האיכלוס בקלות ובמהירות — ללא
                  תשלום נוסף. כשלושה שבועות לפני סיום העבודה יבוצע דו"ח בדק מסכם
                  עם ריג'קטים עבור הקבלן לפי פירוט תמונות ותקנים, לצורך בקרה של
                  המזמין ושיקוף כנה על מצב הנכס.
                </p>
              </div>
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className='mt-16 flex flex-col items-center gap-4 text-center'>
            <p className='text-white/60'>מוכנים להתחיל? נשמח לעמוד לרשותכם</p>
            <Button
              variant='secondary'
              className='inline-flex items-center gap-2 text-sec font-semibold text-base hover:gap-3 transition-all duration-300 group'
              size='lg'
            >
              לשיחת ייעוץ חינם
              <ArrowBigLeftDashIcon className='h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1' />
            </Button>
          </div>
        </div>

        {/* Bottom fade */}
      </section>
    </div>
  )
}
