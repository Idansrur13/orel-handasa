import { useState } from 'react'
import { Send, User, Phone } from 'lucide-react'
import Button from './button'
import { motion } from 'framer-motion'

export default function Form() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setSubmitted(true)
        setMessage('הטופס נשלח בהצלחה')
      }, 1200)
    }
  }

  return (
    <section
      id='contact'
      className='relative overflow-hidden bg-pri py-10 px-4 relative'
    >
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='absolute right-0 top-3'
      >
        <img
          src='/imgs/undraw_fill-forms_npwp.svg  '
          alt=''
          className='opacity-20'
        />
      </motion.div>
      {/* Decorative background blobs */}
      <div className='relative z-10  mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-10 px-10 text-shadow-md'>
        {/* Heading */}
        <div className='text-center lg:text-start flex flex-col items-center lg:items-start gap-3'>
          <span className='inline-block bg-light/10 text-light text-sm font-semibold tracking-widest  px-4 py-1.5 rounded-full border border-light/30'>
            צור קשר
          </span>
          <h3 className=' text-light '>השאר פרטים וניצור איתך קשר</h3>
          <span className='text-light/80 max-w-sm'>
            מלא את הטופס ונחזור אליך בהקדם עם הצעה מותאמת אישית
          </span>
        </div>

        {/* Card */}
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          className='bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-2xl '
        >
          {submitted ? (
            <div className='flex flex-col items-center gap-4 py-8 text-center'>
              <div className='w-16 h-16 rounded-full bg-pri/20 border border-pri/40 flex items-center justify-center'>
                <Send className='text-pri w-7 h-7' />
              </div>
              <h3 className='text-light m-0'>תודה, {name}!</h3>
              <p className='text-light/60'>
                קיבלנו את פרטיך וניצור איתך קשר בקרוב.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className='flex flex-col md:flex-row  gap-6 justify-center shadow-md '
              noValidate
            >
              {/* Name field */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='form-name'
                  className='text-light text-lg font-medium'
                >
                  שם מלא
                </label>
                <div className='relative'>
                  <span className='absolute right-4 top-1/2 -translate-y-1/2 text-sec/70'>
                    <User size={22} />
                  </span>
                  <input
                    id='form-name'
                    type='text'
                    placeholder='ישראל ישראלי'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='w-full bg-white/8 border border-white/15 text-light placeholder-white/30 rounded-xl pr-11 pl-4 py-3.5 text-base outline-none transition focus:border-pri/60 focus:bg-white/12 focus:ring-2 focus:ring-pri/20'
                  />
                </div>
              </div>

              {/* Phone field */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='form-phone'
                  className='text-light text-lg font-medium'
                >
                  מספר טלפון
                </label>
                <div className='relative'>
                  <span className='absolute right-4 top-1/2 -translate-y-1/2 text-sec/70'>
                    <Phone size={22} />
                  </span>
                  <input
                    id='form-phone'
                    type='tel'
                    placeholder='050-000-0000'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className='w-full bg-white/8 border border-white/15 text-light placeholder-white/30 rounded-xl pr-11 pl-4 py-3.5 text-base outline-none transition focus:border-pri/60 focus:bg-white/12 focus:ring-2 focus:ring-pri/20'
                  />
                </div>
              </div>

              {/* Submit */}
              <div className='flex items-end'>
                <Button
                  className=''
                  size='lg'
                  type='submit'
                  variant='primary'
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className='w-5 h-5 border-2 border-sec/40 border-t-sec rounded-full animate-spin' />
                      שולח...
                    </>
                  ) : (
                    <>
                      <Send size={22} />
                      שלח פרטים
                    </>
                  )}
                </Button>
              </div>
              {message && <div></div>}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
