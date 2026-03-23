'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="py-16 md:py-20 text-center"
      style={{ backgroundColor: 'var(--kora-surface-alt)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2
            className="font-sans font-bold"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              lineHeight: 1.15,
              color: 'var(--kora-text-primary)',
            }}
          >
            Your Free Consultation Is Waiting
          </h2>
          <p
            className="text-lg max-w-lg mx-auto mt-4 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Book a free consultation with a licensed physician. No cost, no pressure, no obligation.
          </p>
          <div className="mt-6">
            <CTAButton variant="primary" size="lg" onClick={scrollToForm}>
              Book Your Free Consultation
            </CTAButton>
          </div>
          <p
            className="text-sm mt-4"
            style={{ color: 'var(--kora-text-muted)' }}
          >
            Licensed physicians &nbsp;·&nbsp; FDA-regulated pharmacy &nbsp;·&nbsp; No hidden fees
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
