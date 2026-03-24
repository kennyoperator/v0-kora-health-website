'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fadeUp' | 'scale'
  as?: keyof JSX.IntrinsicElements
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'fadeUp',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const effectiveDelay = isMobile ? 0 : delay

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), effectiveDelay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const baseClass = variant === 'scale' ? 'scroll-scale' : 'scroll-reveal'

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`${baseClass} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

