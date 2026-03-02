import { useEffect, useRef, useState } from 'react'
import {
  Accessibility,
  Minus,
  Plus,
  Moon,
  Sun,
  RotateCcw,
  X,
} from 'lucide-react'

const SCALE_CLASSES = [
  'text-scale-90',
  'text-scale-100',
  'text-scale-110',
  'text-scale-125',
] as const

type ScaleKey = (typeof SCALE_CLASSES)[number]

function applyScale(scale: ScaleKey) {
  const root = document.documentElement
  // remove any previous scale classes
  SCALE_CLASSES.forEach((cls) => root.classList.remove(cls))
  root.classList.add(scale)
}

function applyDarkMode(enabled: boolean) {
  const root = document.documentElement
  root.classList.toggle('dark', enabled)
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState<boolean>(false)
  const [scaleIndex, setScaleIndex] = useState<number>(0) // 0:100,1:110,2:125
  const panelRef = useRef<HTMLDivElement | null>(null)

  // init from localStorage
  useEffect(() => {
    const savedDark = localStorage.getItem('a11y:dark')
    const savedScale = localStorage.getItem('a11y:scale') as ScaleKey | null

    const darkEnabled = savedDark === '1'
    setDark(darkEnabled)
    applyDarkMode(darkEnabled)

    const scaleToUse: ScaleKey =
      savedScale && SCALE_CLASSES.includes(savedScale as ScaleKey)
        ? (savedScale as ScaleKey)
        : 'text-scale-100'
    const idx = SCALE_CLASSES.indexOf(scaleToUse)
    setScaleIndex(idx)
    applyScale(scaleToUse)
  }, [])

  // close on outside click / escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return
      if (open && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    applyDarkMode(next)
    localStorage.setItem('a11y:dark', next ? '1' : '0')
  }

  const increase = () => {
    const next = Math.min(scaleIndex + 1, SCALE_CLASSES.length - 1)
    setScaleIndex(next)
    const cls = SCALE_CLASSES[next]
    applyScale(cls)
    localStorage.setItem('a11y:scale', cls)
  }

  const decrease = () => {
    const next = Math.max(scaleIndex - 1, 0)
    setScaleIndex(next)
    const cls = SCALE_CLASSES[next]
    applyScale(cls)
    localStorage.setItem('a11y:scale', cls)
  }

  const reset = () => {
    setScaleIndex(0)
    applyScale('text-scale-100')
    setDark(false)
    applyDarkMode(false)
    localStorage.setItem('a11y:scale', 'text-scale-100')
    localStorage.setItem('a11y:dark', '0')
  }

  return (
    <div className='fixed bottom-5 right-5 z-50'>
      {/* Toggle button */}
      <button
        aria-label='תפריט נגישות'
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className='flex items-center gap-2 rounded-full bg-light text-text shadow-lg shadow-black/20 hover:shadow-xl border border-white/20 px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent/70 backdrop-blur'
      >
        <Accessibility className='h-5 w-5' aria-hidden='true' />
        <span className='font-medium'>נגישות</span>
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role='dialog'
          aria-label='הגדרות נגישות'
          className='mt-3 w-80 max-w-[92vw] rounded-2xl border border-white/15 bg-light text-sec shadow-2xl backdrop-blur-md p-4'
        >
          <div className='flex items-center justify-between mb-2'>
            <h4 className='text-lg font-semibold'>הגדרות נגישות</h4>
            <button
              aria-label='סגירת תפריט נגישות'
              className='p-1 rounded-full hover:bg-light/5 '
              onClick={() => setOpen(false)}
            >
              <X className='h-5 w-5' />
            </button>
          </div>

          {/* Dark mode */}
          <div className='flex items-center justify-between py-2'>
            <div>
              <div className='font-medium'>מצב לילה</div>
              <div className='text-sm opacity-80'>
                החלפת צבעי האתר לניגודיות גבוהה יותר
              </div>
            </div>
            <button
              aria-pressed={dark}
              onClick={toggleDark}
              className='inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 hover:bg-sec/50 '
            >
              {dark ? (
                <Sun className='h-4 w-4' />
              ) : (
                <Moon className='h-4 w-4' />
              )}
              <span>{dark ? 'בהיר' : 'לילה'}</span>
            </button>
          </div>

          <hr className='my-3 border-white/20' />

          {/* Text size */}
          <div className='flex items-center justify-between py-2'>
            <div>
              <div className='font-medium'>גודל טקסט</div>
              <div className='text-sm opacity-80'>
                הגדלה/הקטנה של הטקסט באתר
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <button
                aria-label='הקטנת טקסט'
                onClick={decrease}
                disabled={scaleIndex === 0}
                className='inline-flex items-center justify-center rounded-md border border-white/20 w-9 h-9 hover:bg-sec/50 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <Minus className='h-4 w-4' />
              </button>
              <div className='min-w-[3.5rem] text-center text-sm font-medium'>
                {scaleIndex === 0 ? '100%' : scaleIndex === 1 ? '110%' : '125%'}
              </div>
              <button
                aria-label='הגדלת טקסט'
                onClick={increase}
                disabled={scaleIndex === SCALE_CLASSES.length - 1}
                className='inline-flex items-center justify-center rounded-md border border-white/20 w-9 h-9 hover:bg-sec/50 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <Plus className='h-4 w-4' />
              </button>
            </div>
          </div>

          <div className='mt-3'>
            <button
              onClick={reset}
              className='inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 hover:bg-sec/50'
            >
              <RotateCcw className='h-4 w-4' />
              אפס הגדרות
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
