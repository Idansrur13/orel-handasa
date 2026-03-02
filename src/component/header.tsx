// import Button from './button'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Button from './button'
import Logo from './logo.tsx'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, contactInfo } from '../data/gObjects'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      <nav className='fixed top-0 right-0 left-0 z-50 transition-all duration-300'>
        {/* Top info bar - visible on desktop only */}

        {/* Main navigation bar */}
        <div
          className={`backdrop-blur-sm border-b transition-all duration-300 ${
            scrolled
              ? 'border-white/20 shadow-xl shadow-black/20 bg-pri/60 '
              : 'border-white/10 shadow-lg bg-pri '
          }`}
        >
          <div className='max-w-7xl mx-auto px-6 md:px-10 py-2'>
            <div className='h-20 flex items-center justify-between gap-4'>
              {/* Logo Section */}
              <div className='flex gap-10'>
                <Link
                  to='/'
                  className='flex items-center gap-3 group transition-transform hover:scale-105'
                >
                  <div className='relative'>
                    <div className='absolute inset-0 bg-white/20  blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity ' />
                    <Logo />
                  </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className='hidden md:flex items-center gap-2'>
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.to
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`relative px-4 py-2 text-xl font-medium transition-all  duration-300 group  ${
                          isActive ? 'text-sec' : 'text-light hover:text-sec'
                        }`}
                      >
                        <span className='relative z-10'>{link.label}</span>
                        {/* Hover effect background */}
                        <div
                          className={`absolute inset-0 rounded-lg bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity ${
                            isActive ? 'opacity-100' : ''
                          }`}
                        />
                        {/* Active indicator */}
                        <div
                          className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-sec to-sec rounded-full transition-all duration-300 ${
                            isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                          }`}
                        />
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* CTA and Mobile Menu Button */}
              <div className='flex items-center gap-3'>
                <div className='hidden md:block'>
                  <Link to='/courses'>
                    <Button variant='primary' className='gap-2' size='md'>
                      {' '}
                      <Phone />
                      שיחת ייעוץ חינם
                    </Button>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className='md:hidden relative p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-black hover:bg-white/20 transition-all duration-300 group'
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label='תפריט'
                  aria-expanded={isOpen}
                >
                  <div className='relative w-6 h-6'>
                    <Menu
                      className={`absolute inset-0 transition-all duration-300 ${
                        isOpen
                          ? 'opacity-0 rotate-90 scale-0'
                          : 'opacity-100 rotate-0 scale-100'
                      }`}
                    />
                    <X
                      className={`absolute inset-0 transition-all duration-300 ${
                        isOpen
                          ? 'opacity-100 rotate-0 scale-100'
                          : 'opacity-0 -rotate-90 scale-0'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient line */}
        <div className='h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50' />
      </nav>

      {/* Spacer to offset fixed header height */}

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden fixed z-50 inset-x-0 transition-all duration-500 ease-out ${
          scrolled ? 'top-20' : 'top-[90px]'
        } ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className='bg-sec/85 backdrop-blur-lg border-b border-light/20 shadow-2xl'>
          <div className='px-6 py-6 space-y-1'>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block relative px-4 py-3 rounded-xl  font-medium transition-all duration-300 `}
                >
                  <span
                    className={`flex items-center justify-between text-xl ${
                      isActive ? 'text-pri ' : 'text-light'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            })}

            <div className='pt-4 space-y-3'>
              <Link to='/courses' className='block'>
                <Button variant='secondary' className='w-full '>
                  שיחת ייעוץ חינם
                </Button>
              </Link>

              {/* Contact info in mobile menu */}
              <div className=' border-t border-white/10 space-y-4 p-4 text-md text-light hover:text-accent  transition-colors'>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className='flex items-center gap-2 '
                >
                  <Phone className='w-4 h-4 text-pri' />
                  <span>{contactInfo.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='flex items-center gap-2 '
                >
                  <Mail className='w-4 h-4 text-pri' />
                  <span>{contactInfo.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className='md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40'
          style={{ top: scrolled ? '80px' : '120px' }}
          onClick={() => setIsOpen(false)}
          aria-hidden='true'
        />
      )}
    </>
  )
}
