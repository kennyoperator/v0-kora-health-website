'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

const stats = [
  {
    stat: '20.2%',
    label: 'Average body weight reduction with tirzepatide in a 72-week head-to-head trial vs semaglutide',
    source: 'SURMOUNT-5, NEJM 2025',
  },
  {
    stat: '82%',
    label: 'Of patients on tirzepatide achieved at least 10% body weight loss',
    source: 'SURMOUNT-5, NEJM 2025',
  },
  {
    stat: '48%',
    label: 'Of patients achieved at least 20% body weight loss — nearly 1 in 2',
    source: 'SURMOUNT-5, NEJM 2025',
  },
]

export default function ResultsSection() {
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
            What the Evidence Shows
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Tirzepatide has been studied in the largest weight management clinical trials ever conducted. Here&apos;s what they found.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {stats.map((item, i) => (
            <ScrollReveal key={item.stat} delay={i * 80}>
              <div
                className="rounded-2xl p-6 h-full flex flex-col"
                style={{
                  backgroundColor: 'var(--kora-surface)',
                  border: '1px solid var(--kora-border-light)',
                }}
              >
                <p
                  className="font-sans font-bold"
                  style={{
                    fontSize: 48,
                    lineHeight: 1,
                    color: 'var(--kora-brand)',
                  }}
                >
                  {item.stat}
                </p>
                <p
                  className="text-sm leading-relaxed mt-3 flex-1"
                  style={{ color: 'var(--kora-text-body)' }}
                >
                  {item.label}
                </p>
                <p
                  className="text-xs mt-3"
                  style={{ color: 'var(--kora-text-muted)' }}
                >
                  {item.source}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240}>
          <p
            className="text-sm font-normal text-center mt-8 max-w-xl mx-auto"
            style={{ color: 'var(--kora-text-muted)' }}
          >
            Real Kora Health patient results will be published here as our program grows. These figures are from published peer-reviewed clinical trials.
          </p>
          <div className="flex justify-center mt-6">
            <CTAButton variant="primary" onClick={scrollToForm}>
              Book Your Free Consultation
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
