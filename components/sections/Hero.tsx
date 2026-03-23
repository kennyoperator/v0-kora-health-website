'use client'

import { ShieldCheck } from 'lucide-react'
import CTAButton from '@/components/ui/CTAButton'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="pt-24 pb-12 md:pt-28 md:pb-16 text-center"
      style={{ backgroundColor: 'var(--kora-bg)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div
            className="hero-fade inline-flex items-center rounded-full text-xs font-medium uppercase tracking-widest"
            style={{
              animationDelay: '0ms',
              backgroundColor: 'var(--kora-brand-subtle)',
              color: 'var(--kora-brand)',
              padding: '6px 16px',
            }}
          >
            Physician-Led &nbsp;·&nbsp; FDA-Regulated &nbsp;·&nbsp; Philippines
          </div>

          {/* Headline */}
          <h1
            className="hero-fade font-sans font-bold mt-6 text-balance"
            style={{
              animationDelay: '100ms',
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: 'var(--kora-text-primary)',
            }}
          >
            Lose Weight With Real Medical Treatment. Prescribed by Licensed Doctors. Delivered to Your Door.
          </h1>

          {/* Subheadline */}
          <p
            className="hero-fade text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed"
            style={{
              animationDelay: '200ms',
              color: 'var(--kora-text-body)',
            }}
          >
            Kora Health is the Philippines&apos; physician-led weight management platform. Free consultation, personalized prescription, ongoing medical support — all online.
          </p>

          {/* Primary CTA */}
          <div className="hero-fade mt-8" style={{ animationDelay: '300ms' }}>
            <CTAButton
              variant="primary"
              size="lg"
              onClick={scrollToForm}
            >
              Book Your Free Consultation
            </CTAButton>
          </div>

          {/* Supporting line */}
          <div
            className="hero-fade flex items-center justify-center gap-1.5 mt-3 text-sm"
            style={{ animationDelay: '360ms', color: 'var(--kora-text-muted)' }}
          >
            <ShieldCheck size={14} strokeWidth={1.75} />
            <span>Free &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; 15 minutes</span>
          </div>

          {/* Bottom of hero */}
          <div
            className="hero-fade mt-12 pt-6 text-sm"
            style={{
              animationDelay: '440ms',
              borderTop: '1px solid var(--kora-border-light)',
              color: 'var(--kora-text-muted)',
            }}
          >
            Now accepting consultations across the Philippines
          </div>
        </div>
      </div>
    </section>
  )
}
