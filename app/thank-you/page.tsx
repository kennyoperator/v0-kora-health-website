import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CircleCheckBig, MessageCircle } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'We Review Your Details',
    description: 'Our care team reviews your health information within 24 hours.',
  },
  {
    number: 2,
    title: 'We Contact You',
    description: 'We reach out via WhatsApp, Viber, or phone to schedule your consultation.',
  },
  {
    number: 3,
    title: 'Physician Consultation',
    description:
      'A licensed doctor evaluates your health profile and discusses your options. Completely free, no obligation.',
  },
]

export default function ThankYouPage() {
  return (
    <main style={{ backgroundColor: 'var(--kora-bg)', minHeight: '100vh' }}>
      <Header variant="thankyou" />

      <div
        className="max-w-lg mx-auto py-20 md:py-28 px-6 text-center"
        style={{ paddingTop: 'calc(5rem + 4rem)' }}
      >
        {/* Success icon */}
        <div className="flex justify-center">
          <div
            className="scale-in flex items-center justify-center rounded-full"
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'var(--kora-brand-subtle)',
            }}
          >
            <CircleCheckBig size={40} strokeWidth={1.75} style={{ color: 'var(--kora-brand)' }} />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="font-sans font-bold mt-6"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            lineHeight: 1.2,
            color: 'var(--kora-text-primary)',
          }}
        >
          We&apos;ve Received Your Information
        </h1>

        {/* Subtext */}
        <p
          className="mt-3 leading-relaxed"
          style={{ color: 'var(--kora-text-body)' }}
        >
          Thank you for your interest in the Kora Weight Management Program. Here&apos;s what happens next.
        </p>

        {/* 3-step timeline */}
        <div className="mt-10 text-left relative">
          {/* Vertical connector */}
          <div
            className="absolute left-[15px] top-8 bottom-8 w-0.5"
            style={{ backgroundColor: 'var(--kora-border)' }}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-8">
            {steps.map(step => (
              <div key={step.number} className="flex items-start gap-5">
                {/* Circle */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full text-sm font-medium text-white relative z-10"
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: 'var(--kora-brand)',
                  }}
                  aria-label={`Step ${step.number}`}
                >
                  {step.number}
                </div>
                <div className="pt-1">
                  <p
                    className="text-[15px] font-medium"
                    style={{ color: 'var(--kora-text-primary)' }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-sm mt-1 leading-relaxed"
                    style={{ color: 'var(--kora-text-body)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-3 justify-center">
          <a
            href="https://calendly.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              backgroundColor: 'var(--kora-brand)',
              color: '#fff',
              padding: '14px 28px',
              fontSize: '15px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
              textDecoration: 'none',
            }}
          >
            Book Consultation Now
          </a>
          <a
            href="https://wa.me/63XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--kora-brand)',
              border: '1.5px solid var(--kora-brand)',
              padding: '14px 28px',
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            <MessageCircle size={16} strokeWidth={1.75} />
            Message Us on WhatsApp
          </a>
        </div>

        {/* Reassurance */}
        <p
          className="text-sm mt-6"
          style={{ color: 'var(--kora-text-muted)' }}
        >
          Your consultation is free. You only pay if treatment is prescribed and you choose to proceed.
        </p>
      </div>

      <Footer />
    </main>
  )
}
