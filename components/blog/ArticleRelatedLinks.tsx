'use client'

import Link from 'next/link'
import type { Article } from '@/lib/articles'

interface Props {
  related: Article[]
}

export function ArticleRelatedLinks({ related }: Props) {
  return (
    <div
      className="mt-16 pt-8"
      style={{ borderTop: '1px solid var(--kora-border-light)' }}
    >
      <p
        className="font-medium text-lg mb-6"
        style={{ color: 'var(--kora-text-primary)' }}
      >
        Continue Reading
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map(rel => (
          <div key={rel.slug}>
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: 'var(--kora-brand-subtle)',
                color: 'var(--kora-brand)',
              }}
            >
              {rel.category}
            </span>
            <h3 className="mt-2">
              <Link
                href={`/learn/${rel.slug}`}
                className="font-medium text-base leading-snug transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm hover:text-[var(--kora-brand)]"
                style={{ color: 'var(--kora-text-primary)' }}
              >
                {rel.title}
              </Link>
            </h3>
            <p
              className="text-sm mt-1 line-clamp-2 leading-relaxed"
              style={{ color: 'var(--kora-text-body)' }}
            >
              {rel.excerpt}
            </p>
            <p
              className="text-xs mt-2"
              style={{ color: 'var(--kora-text-muted)' }}
            >
              {rel.readingTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
