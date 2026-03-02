export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src='/imgs/orel_logo.svg'
        alt='אוראל הנדסה לוגו'
        className='h-16 w-auto drop-shadow-lg'
      />
    </div>
  )
}
