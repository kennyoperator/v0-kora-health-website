'use client'

import Link from 'next/link'

interface ArticleLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function ArticleLink({ href, className = '', children }: ArticleLinkProps) {
  return (
    <Link
      href={href}
      className={`transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm hover:[color:var(--kora-brand)] ${className}`}
      style={{ color: 'var(--kora-text-primary)' }}
    >
      {children}
    </Link>
  )
}
