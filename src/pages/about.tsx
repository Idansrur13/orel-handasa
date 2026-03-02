import { motion } from 'framer-motion'
import {
  Award,
  BadgeCheck,
  Users,
  Star,
  Shield,
  Home,
  ClipboardList,
  DraftingCompass,
  KeyRound,
  Scale,
  CheckCircle2,
  Coins,
  Layers,
  Phone,
  ArrowBigLeftDashIcon,
} from 'lucide-react'
import Devider from '../component/devider'
import Button from '../component/button'
import Form from '../component/form'

/* ─────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.55 },
  }),
}

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65 },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65 },
  },
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const pillars = [
  {
    icon: Award,
    title: 'ניסיון רב-שנים',
    desc: 'ניסיון עשיר בחברות הבנייה G-5 המובילות בישראל — ידע שנרכש מבפנים.',
  },
  {
    icon: BadgeCheck,
    title: 'מוסמך ומוכר',
    desc: 'מוסמך מכון התקנים הישראלי ומומחה מוכר מטעם בתי המשפט.',
  },
  {
    icon: Users,
    title: 'הגנה על הלקוח',
    desc: 'מייצגים אך ורק את האינטרס שלך — מול קבלנים, ספקים ויועצים.',
  },
  {
    icon: Star,
    title: 'סטנדרטים גבוהים',
    desc: 'מחויבים לשדרג את איכות הבנייה בישראל ולצמצם ליקויים לאפס.',
  },
]

const servicesList = [
  { icon: DraftingCompass, label: 'פיקוח בניה ובקרת איכות' },
  { icon: ClipboardList, label: 'ניהול פרויקטים' },
  { icon: Home, label: 'בדק בית' },
  { icon: KeyRound, label: 'ייעוץ טופס 4' },
  { icon: Scale, label: 'ליווי משפטי במקרה הצורך' },
]

const supervision = [
  {
    icon: ClipboardList,
    title: 'הגדרת מפרטי עבודה',
    body: 'ללא מפרט עבודה מסודר ומוגדר, קשה להבטיח תוצאה באיכות גבוהה. אנו נכין עבורך מפרטים מדויקים שיבטיחו תיאום ציפיות, ביצוע איכותי והתנהלות מקצועית מול כל הגורמים בפרויקט.',
    bullets: [],
  },
  {
    icon: DraftingCompass,
    title: 'ביצוע מכרז קבלנים',
    body: 'הליך מסודר ומקצועי לבחירת הקבלן המבצע — כדי שתבחר מושכל ובטוח:',
    bullets: [
      'בדיקת איתנות כלכלית של הקבלן',
      'בחינה של פרויקטים קודמים',
      'בדיקת המלצות ממזמיני עבודה קודמים',
      'אימות סיווג קבלני מתאים להיקף ולסוג הפרויקט',
    ],
  },
  {
    icon: Shield,
    title: 'פיקוח על עבודות השלד והגמרים',
    body: 'נוכחות מקצועית קבועה באתר לאורך כל שלבי הביצוע:',
    bullets: [
      'הגעה לאתר מספר פעמים בשבוע',
      'פיקוח בכל נתיב קריטי ופתיחת מלאכה חדשה',
      'השתתפות בכל ישיבות הפרויקט',
      'דו"ח חתך עם תמונות ותקנים לפי הנדרש',
    ],
  },
  {
    icon: Coins,
    title: 'בקרה תקציבית',
    body: 'שליטה מלאה בתקציב הפרויקט — ללא הפתעות:',
    bullets: [
      'הגדרת מחיר מטרה',
      'לוח תשלומים לפי אחוזי התקדמות',
      'תשלום רק לאחר סיום אבן דרך מאומתת',
      'לא יבוצע תשלום לקבלן ללא אישור המפקח',
    ],
  },
  {
    icon: KeyRound,
    title: 'ייעוץ אישור איכלוס — טופס 4',
    body: 'ייעוץ והכוונה לצלוח את אישור האיכלוס בקלות ובמהירות, ללא תשלום נוסף. כשלושה שבועות לפני סיום העבודה יבוצע דו"ח בדק מסכם עם ריג\'קטים לקבלן לפי פירוט תמונות ותקנים, לצורך בקרה ושיקוף כנה על מצב הנכס.',
    bullets: [],
  },
]

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function About() {
  return (
    <div dir='rtl'>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className='relative min-h-[60vh] bg-bac overflow-hidden flex flex-col items-center justify-center pt-32 pb-20 px-6'>
        {/* orbs */}
        <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-[500px] rounded-full bg-pri/10 blur-[130px]' />
        <div className='pointer-events-none absolute bottom-0 -right-32 h-72 w-72 rounded-full bg-pri/8 blur-[90px]' />
        {/* gold bottom border */}
        <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri to-transparent' />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='relative z-10 flex flex-col items-center text-center gap-5 max-w-3xl'
        >
          <div className='inline-flex items-center gap-2 rounded-full border border-pri/50 bg-pri/10 px-5 py-2 text-sm font-medium text-pri-dark'>
            <span className='h-1.5 w-1.5 rounded-full bg-pri animate-pulse' />
            הסיפור שלנו
          </div>

          <h1 className='text-sec leading-tight'>
            <span className='text-gradient'>אוראל הנדסה</span>
          </h1>

          <Devider />

          <p className='text-sec/65 max-w-2xl text-lg md:text-xl leading-relaxed'>
            הוקמה מתוך שליחות אחת — לשמור על מי שקונה, בונה ומשפץ.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          STORY + PILLARS
      ═══════════════════════════════════════ */}
      <section className='relative bg-bac overflow-hidden'>
        <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-60 w-[600px] rounded-full bg-pri/6 blur-[80px]' />

        <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start'>
            {/* Left — Story */}
            <motion.div
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
              className='flex flex-col gap-6'
            >
              <div className='inline-flex items-center gap-2 rounded-full border border-pri/50 bg-pri/10 px-5 py-2 text-sm font-medium text-pri-dark w-fit'>
                <Layers className='h-3.5 w-3.5 text-pri' />
                למה אנחנו?
              </div>
              <h2 className='text-sec leading-snug'>ניסיון שנולד מהשטח</h2>
              <Devider />

              <p className='text-sec/75 leading-relaxed'>
                אוראל הנדסה מתמחה בפיקוח בניה ובדק בית, והוקמה לאחר ניסיון עשיר
                בחברות בנייה G-5 המובילות בישראל — מתוך צורך אישי לשמור על מי
                שקונה, בונה או משפץ.
              </p>
              <p className='text-sec/75 leading-relaxed'>
                אנחנו רואים לנגד עינינו להגן על רוכשי הדירות, לשפר את איכות
                הבנייה, להפחית את הסיכונים ברכישת נכס ובבנייה, ולתרום להעלאת
                הסטנדרטים של הבנייה בישראל.
              </p>
              <p className='text-sec/75 leading-relaxed'>
                אוראל הנדסה מוסמך מטעם מכון התקנים הישראלי לביצוע בדק בית ואיתור
                ליקויי בנייה, וכן משמש מומחה מטעם בתי המשפט בישראל בתחום ליקויי
                הבנייה.
              </p>
              <p className='text-sec/75 leading-relaxed'>
                אנו יודעים לתת מענה מקיף ומלא ללקוחותינו — משלב היתר הבנייה ועד
                קבלת אישור האיכלוס.
              </p>

              {/* CTA */}
              <div className='mt-2'>
                <a href='#contact'>
                  <Button variant='primary' size='lg'>
                    <Phone className='h-4 w-4' />
                    שיחת ייעוץ חינם
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right — Pillars */}
            <motion.div
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeLeft}
              className='grid grid-cols-1 sm:grid-cols-2 gap-5'
            >
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.1 }}
                  custom={i}
                  variants={fadeUp}
                  className='group flex flex-col gap-3 rounded-2xl border border-pri/25 bg-white/70 backdrop-blur-sm p-6 hover:border-pri/60 hover:shadow-lg hover:shadow-pri/10 transition-all duration-300'
                >
                  <div className='h-11 w-11 rounded-xl bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors duration-300'>
                    <Icon className='h-5 w-5 text-pri' />
                  </div>
                  <p
                    className='font-bold text-sec text-base leading-snug'
                    style={{ color: 'var(--color-sec)' }}
                  >
                    {title}
                  </p>
                  <p
                    className='text-sec/60 text-sm leading-relaxed'
                    style={{ fontSize: '0.9rem' }}
                  >
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES STRIP
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
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={fadeUp}
            className='flex flex-col items-center text-center mb-12'
          >
            <div className='inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-5 py-2 text-sm font-medium text-pri mb-5'>
              <span className='h-1.5 w-1.5 rounded-full bg-pri' />
              בין השירותים שאנו מספקים
            </div>
            <h2 className='text-light mb-4'>מה אנחנו עושים?</h2>
            <Devider />
          </motion.div>

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
            {servicesList.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.1 }}
                custom={i + 1}
                variants={fadeUp}
                className='group flex flex-col items-center gap-3 rounded-2xl border border-pri/20 bg-sec-light p-5 text-center hover:border-pri/60 hover:bg-pri/5 transition-all duration-300'
              >
                <div className='h-12 w-12 rounded-full bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors duration-300'>
                  <Icon className='h-6 w-6 text-pri' />
                </div>
                <p
                  className='text-sm font-semibold text-light leading-snug'
                  style={{ fontSize: '0.88rem', color: 'var(--color-light)' }}
                >
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY SUPERVISION — DEEP DIVE
      ═══════════════════════════════════════ */}
      <section className='relative bg-bac overflow-hidden'>
        <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pri/40 to-transparent' />
        <div className='pointer-events-none absolute top-20 -right-40 h-96 w-96 rounded-full bg-pri/8 blur-[110px]' />

        <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32'>
          {/* Header */}
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeUp}
            className='flex flex-col items-center text-center mb-16'
          >
            <div className='inline-flex items-center gap-2 rounded-full border border-pri/50 bg-pri/10 px-5 py-2 text-sm font-medium text-pri-dark mb-5'>
              <span className='h-1.5 w-1.5 rounded-full bg-pri animate-pulse' />
              פיקוח בניה
            </div>
            <h2 className='text-sec mb-4'>למה פיקוח בניה?</h2>
            <Devider />
            <p className='max-w-3xl text-sec/65 leading-relaxed mt-1'>
              פיקוח בניה הוא שירות חיוני שמלווה את הפרויקט מהתכנון הראשוני ועד
              למסירת המפתח — להבטיח ביצוע בהתאם לתוכניות, לתקנים ולאיכות המצופה,
              עם מינימום ליקויי בניה. המפקח מייצג את האינטרסים שלך מול קבלנים,
              ספקים ויועצים, ומספק שקט נפשי לאורך כל הדרך.
            </p>
            <p className='mt-4 max-w-2xl text-sec/45 text-base'>
              אתם בונים את הממלכה שלכם — ולכן חשוב שתצטיידו במפקח מקצועי שיבטיח
              לכם תוצאה מושלמת.
            </p>
          </motion.div>

          {/* Cards */}
          <div className='flex flex-col gap-6'>
            {supervision.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.15 }}
                  custom={i + 1}
                  variants={fadeUp}
                  className='group rounded-2xl border border-pri/20 bg-white/70 backdrop-blur-sm p-8 hover:border-pri/50 hover:shadow-lg hover:shadow-pri/8 transition-all duration-400'
                >
                  <div className='flex items-start gap-5 mb-4'>
                    <div className='shrink-0 h-12 w-12 rounded-xl bg-pri/10 border border-pri/30 flex items-center justify-center group-hover:bg-pri/20 transition-colors duration-300'>
                      <Icon className='h-6 w-6 text-pri' />
                    </div>
                    <div>
                      <h3 className='text-sec leading-snug'>{item.title}</h3>
                    </div>
                  </div>
                  <p className='text-sec/70 leading-relaxed mb-4'>
                    {item.body}
                  </p>
                  {item.bullets.length > 0 && (
                    <ul className='flex flex-col gap-2'>
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className='flex items-start gap-2 text-sec/65'
                        >
                          <CheckCircle2 className='h-4 w-4 text-pri mt-1 shrink-0' />
                          <span className='text-base'>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )
            })}
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
        <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[280px] w-[500px] rounded-full bg-pri/10 blur-[100px]' />

        <div className='relative max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-6'>
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
              className='inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-3 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-pri/60 hover:bg-white/10 hover:text-pri'
            >
              <Phone className='h-5 w-5' />
              שלח הודעה ב-WhatsApp
            </a>
          </div>
          <p className='text-white/30 text-sm mt-2'>
            <ArrowBigLeftDashIcon className='inline h-4 w-4 mb-0.5 ml-1' />
            ניצור אליך קשר תוך 24 שעות
          </p>
        </div>
      </section>
    </div>
  )
}
