'use client'

import { X, Check } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

const others = [
  'No medical consultation or screening',
  'Unverified, unregulated product sourcing',
  'No prescription or physician oversight',
  'Zero follow-up after purchase',
  'Anonymous sellers with no accountability',
]

const kora = [
  'Free physician consultation before any prescription',
  'FDA-regulated Philippine compounding pharmacy',
  'Cold-chain delivery protecting medication integrity',
  'Structured onboarding and weekly medical check-ins',
  'Named founders and licensed physicians behind every treatment',
]

export default function WhyKora() {
  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="py-16 md:py-28"
      style={{ backgroundColor: 'var(--kora-surface-alt)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2
            className="font-sans font-bold text-center"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              lineHeight: 1.15,
              color: 'var(--kora-text-primary)',
            }}
          >
            A Different Standard of Care
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Most weight loss sellers in the Philippines operate without medical oversight. We built Kora Health because that&apos;s not good enough.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Others card */}
          <ScrollReveal delay={80}>
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                backgroundColor: 'var(--kora-surface-alt)',
                border: '1px solid var(--kora-border)',
              }}
            >
              <p
                className="text-[11px] uppercase tracking-widest mb-4"
                style={{ color: 'var(--kora-text-muted)' }}
              >
                Typical Online Sellers
              </p>
              <ul className="flex flex-col gap-3">
                {others.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={16} strokeWidth={1.75} className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(239,68,68,0.7)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--kora-text-body)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Kora card */}
          <ScrollReveal delay={160}>
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                backgroundColor: 'var(--kora-surface)',
                border: '1.5px solid color-mix(in srgb, var(--kora-brand) 20%, transparent)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <p
                className="text-[11px] uppercase tracking-widest font-medium mb-4"
                style={{ color: 'var(--kora-brand)' }}
              >
                Kora Health
              </p>
              <ul className="flex flex-col gap-3">
                {kora.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={1.75} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--kora-success)' }} />
                    <span className="text-sm font-medium leading-relaxed" style={{ color: 'var(--kora-text-primary)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={240}>
          <div className="flex justify-center mt-8">
            <CTAButton variant="primary" onClick={scrollToForm}>
              Book Your Free Consultation
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
