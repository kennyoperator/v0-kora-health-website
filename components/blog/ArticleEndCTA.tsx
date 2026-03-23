'use client'

import CTAButton from '@/components/ui/CTAButton'

export function ArticleEndCTA() {
  return (
    <div
      className="rounded-2xl p-8 md:p-10 text-center mt-12"
      style={{ backgroundColor: 'var(--kora-surface-alt)' }}
    >
      <h2
        className="font-sans font-bold"
        style={{
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          color: 'var(--kora-text-primary)',
        }}
      >
        Start With a Free Consultation
      </h2>
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: 'var(--kora-text-body)' }}
      >
        Talk to a licensed physician about your weight management options. No cost, no pressure.
      </p>
      <div className="mt-6">
        <CTAButton href="/#qualify" variant="primary">
          Book Your Free Consultation
        </CTAButton>
      </div>
    </div>
  )
}
