'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import CTAButton from '@/components/ui/CTAButton'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth - 0.5) * 20
    const y = (clientY / window.innerHeight - 0.5) * 20
    setMousePos({ x, y })
  }

  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  const isIdle = mousePos.x === 0 && mousePos.y === 0

  return (
    <section
      className="pt-24 pb-12 md:pt-28 md:pb-16 text-center"
      style={{ backgroundColor: 'var(--kora-bg)', position: 'relative', overflow: 'hidden' }}
      onMouseMove={handleMouseMove}
    >
      {/* Floating vial background — desktop only */}
      <div
        className="absolute pointer-events-none select-none hidden md:block"
        style={{
          right: '-5%',
          top: '50%',
          transform: isIdle
            ? undefined
            : `translate(${mousePos.x}px, calc(${mousePos.y}px - 50%)) rotate(${mousePos.x * 0.3}deg)`,
          transition: 'transform 0.3s ease-out',
          animation: isIdle ? 'gentleFloat 6s ease-in-out infinite' : 'none',
          opacity: 0.08,
          zIndex: 0,
        }}
      >
        <Image
          src="/reta-vial-hero.png"
          alt=""
          width={600}
          height={600}
          className="w-[400px] md:w-[550px] lg:w-[650px] h-auto"
          priority
        />
      </div>

      <div className="max-w-[1120px] mx-auto px-6 md:px-8" style={{ position: 'relative', zIndex: 1 }}>
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
            {'Triple-Agonist Treatment · Physician-Led · Philippines'}
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
            Retatrutide Treatment in the Philippines Delivered To Your Door.
          </h1>

          {/* Subheadline */}
          <p
            className="hero-fade text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
            style={{
              animationDelay: '200ms',
              color: 'var(--kora-text-body)',
            }}
          >
            The most advanced GLP-1 treatment available — activating three metabolic pathways for greater appetite control, energy expenditure, and weight loss. Free physician consultation. Personalized prescribing. Ongoing medical support.
          </p>

          {/* Clinical anchor */}
          <p
            className="font-sans text-sm font-medium tracking-wide hero-fade mt-5"
            style={{
              color: 'var(--kora-brand)',
              animationDelay: '220ms',
            }}
          >
            28.7% average weight loss in Phase 3 clinical trials — the highest for any GLP-1 medication.
          </p>

          {/* Value statement */}
          <div
            className="hero-fade flex items-center justify-center gap-3 mt-4"
            style={{ animationDelay: '260ms' }}
          >
            <span className="font-sans font-medium text-sm tracking-wide" style={{ color: 'var(--kora-brand)' }}>Quick.</span>
            <span style={{ color: 'var(--kora-border)', fontSize: '18px', lineHeight: 1 }}>{'·'}</span>
            <span className="font-sans font-medium text-sm tracking-wide" style={{ color: 'var(--kora-brand)' }}>Easy.</span>
            <span style={{ color: 'var(--kora-border)', fontSize: '18px', lineHeight: 1 }}>{'·'}</span>
            <span className="font-sans font-medium text-sm tracking-wide" style={{ color: 'var(--kora-brand)' }}>Discreet.</span>
          </div>

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
            <span>{'Free · No obligation · 15 minutes'}</span>
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
