import Button from '../component/button'

export default function Landingcopy() {
  return (
    <div className='h-screen'>
      {/* Hero Section */}
      <section className='relative  overflow-hidden'>
        {/* Decorative background blobs */}
        <div className='pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pri/20 blur-3xl'></div>
        <div className='pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sec/20 blur-3xl'></div>
        <div className='absolute -z-1 opacity-30 '>
          <img src='/imgs/indor.avif' alt='' className=' ' />
        </div>

        <div className='container max-w-7xl mx-auto px-6 lg:px-12 '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 lg:py-24'>
            {/* Left: content */}
            <div className='flex flex-col items-start gap-6'>
              <img
                src='/imgs/orel_logo.svg'
                alt='אוראל הנדסה'
                className='h-32 md:h-44 lg:h-52'
              />

              <h1 className=' font-semibold tracking-tight text-pri text-shadow-md'>
                אוראל הנדסה
              </h1>

              <p className='text-base md:text-lg lg:text-xl text-sec/90 max-w-xl'>
                ליווי עסקי אסטרטגי, פיתוח טכנולוגי ושיווק מבוסס תוצאות. הכל תחת
                קורת גג אחת כדי להבטיח שהעסק שלך לא רק ישרוד – אלא ינצח.
              </p>

              {/* CTAs */}
              <div className='flex flex-wrap items-center gap-4 mt-2'>
                <Button variant='primary' size='md'>
                  התחילו עכשיו
                </Button>
                <Button variant='secondary' size='md'>
                  שיחת ייעוץ
                </Button>
              </div>

              {/* Trust indicators */}
              <div className='mt-6 flex flex-wrap gap-6 text-sm text-sec/80'>
                <div className='flex items-center gap-2'>
                  <span className='inline-block h-2 w-2 rounded-full bg-pri'></span>
                  ניסיון של מעל 10 שנים
                </div>
                <div className='flex items-center gap-2'>
                  <span className='inline-block h-2 w-2 rounded-full bg-pri'></span>
                  מקצועיות ללא פשרות
                </div>
                <div className='flex items-center gap-2'>
                  <span className='inline-block h-2 w-2 rounded-full bg-pri'></span>
                  מענה מהיר ושקוף
                </div>
              </div>
            </div>

            {/* Right: image with overlay */}
            <div className='relative'>
              <div className='group relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-sec '>
                <img
                  src='/imgs/flexOrel.png'
                  alt='פתרונות הנדסיים מתקדמים'
                  className='w-fit h-full max-h-100 lg:max-h-160 object-cover  group-hover:scale-105 transition-transform duration-500 '
                />
                <div className='absolute inset-0 bg-gradient-to-t from-pri/80 via-pri/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity -z-1'></div>
                <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between'>
                  <div className='backdrop-blur-sm bg-white/60 px-4 py-2 rounded-lg shadow-sm'>
                    <p className='text-sm font-medium text-sec'>
                      מצוינות. אמינות. תוצאות.
                    </p>
                  </div>
                  <Button variant='secondary' size='sm'>
                    צור קשר
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ...existing code... */}
      <section className='bg-sec text-white py-10 px-6 relative overflow-hidden'>
        <div className='absolute -top-30 -right-30 h-100 w-100 bg-pri/30 rounded-full'></div>
        <div className='py-8 '>
          <h2>העיסוקים המרכזיים שלנו</h2>
          <p>
            מעטפת הנדסית מלאה המשלבת ידע טכני רב עם ניסיון מעשי בשטח ובאולמות
            בתי המשפט.
          </p>
        </div>
        <div className='grid grid-cols-3 text-center gap-8 '>
          <div className='border border-pri hover:border-2 rounded-lg overflow-hidden relative group'>
            <div className='absolute inset-0 bg-black/50 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400'>
              <p className='text-white'>מפקח בניה</p>
              <Button variant='secondary' size='sm'>
                צור קשר
              </Button>
            </div>
            <img src='/imgs/whallak.avif' alt='' className='w-fit h-auto ' />
          </div>
          <div className='border border-pri hover:border-2 rounded-lg overflow-hidden relative group'>
            <div className='absolute inset-0 bg-black/50 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400'>
              <p>בדק בית </p>
              <Button variant='secondary' size='sm'>
                צור קשר
              </Button>
            </div>
            <img src='/imgs/indor.avif' alt='' className='w-fit h-auto' />
          </div>
          <div className='border border-pri hover:border-2 rounded-lg overflow-hidden relative group'>
            <div className='absolute inset-0 bg-black/50 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400'>
              <p>מומחה מטעם בתי המשפט</p>
              <Button variant='secondary' size='sm'>
                צור קשר
              </Button>
            </div>
            <img src='/imgs/wall.avif' alt='' className='w-fit h-auto' />
          </div>
        </div>
      </section>
    </div>
  )
}
