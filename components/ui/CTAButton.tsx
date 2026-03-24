'use client'

import { type ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  target?: string
}

export default function CTAButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
  disabled = false,
  target,
}: CTAButtonProps) {
  const sizeStyles: Record<string, string> = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-[15px]',
    lg: 'px-8 py-4 text-base',
  }

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    borderRadius: '0.75rem',
    transition: 'all 200ms ease',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.6 : 1,
    textDecoration: 'none',
  }

  const variantStyle: React.CSSProperties =
    variant === 'primary'
      ? { backgroundColor: 'var(--kora-brand)', color: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }
      : variant === 'secondary'
      ? { backgroundColor: 'transparent', color: 'var(--kora-brand)', border: '1.5px solid var(--kora-brand)' }
      : { backgroundColor: 'transparent', color: 'var(--kora-brand)', textDecoration: 'underline', textUnderlineOffset: '4px' }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) return
    const t = e.currentTarget as HTMLElement
    if (variant === 'primary') {
      t.style.backgroundColor = 'var(--kora-brand-hover)'
      t.style.transform = 'translateY(-2px)'
      t.style.boxShadow = '0 8px 20px rgba(27, 58, 92, 0.18)'
    } else if (variant === 'secondary') {
      t.style.backgroundColor = 'var(--kora-brand-subtle)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) return
    const t = e.currentTarget as HTMLElement
    if (variant === 'primary') {
      t.style.backgroundColor = 'var(--kora-brand)'
      t.style.transform = 'translateY(0)'
      t.style.boxShadow = '0 1px 2px rgba(0,0,0,0.08)'
    } else if (variant === 'secondary') {
      t.style.backgroundColor = 'transparent'
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) return
    const t = e.currentTarget as HTMLElement
    if (variant === 'primary') {
      t.style.transform = 'translateY(0)'
      t.style.boxShadow = '0 4px 10px rgba(27, 58, 92, 0.12)'
    }
  }

  const combinedStyle = { ...baseStyle, ...variantStyle }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`${sizeStyles[size]} ${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
        style={combinedStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${sizeStyles[size]} ${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
      style={combinedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
    >
      {children}
    </button>
  )
}
