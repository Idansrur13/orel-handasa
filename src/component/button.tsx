import React from 'react'

export type ButtonProps = {
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info'

  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  type = 'button',
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  size = 'md',
}: ButtonProps) {
  const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-sec hover:bg-sec/80  text-white font-bold ',
    secondary:
      ' bg-pri  hover:bg-pri/80   text-white focus:ring-gray-500 font-bold',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    warning:
      'bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-yellow-400',
    info: 'bg-cyan-600 hover:bg-cyan-700 text-white focus:ring-cyan-500',
  }

  const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3 text-base',
  }

  const baseClasses = [
    'flex items-center justify-center rounded-lg gap-2',
    'transition-colors duration-200',
    'focus:outline-none',
    'whitespace-nowrap',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
