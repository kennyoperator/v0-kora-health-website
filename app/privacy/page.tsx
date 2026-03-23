import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Kora Health',
  description: 'Learn how Kora Health collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: 'var(--kora-bg)', minHeight: '100vh' }}>
      <Header variant="thankyou" />

      <article
        className="max-w-2xl mx-auto px-6 py-20"
        style={{ paddingTop: 'calc(5rem + 4rem)' }}
      >
        <h1
          className="font-sans font-bold"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            lineHeight: 1.15,
            color: 'var(--kora-text-primary)',
          }}
        >
          Privacy Policy
        </h1>

        <div
          className="mt-8 text-sm leading-relaxed space-y-6"
          style={{ color: 'var(--kora-text-body)' }}
        >
          <p style={{ color: 'var(--kora-text-muted)', fontSize: '0.8125rem' }}>Last updated: [Date]</p>

          <p>
            Kora Health (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This policy explains how we collect, use, and protect your personal information.
          </p>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Information We Collect
            </h2>
            <p>
              We collect the information you provide through our consultation form, including your name, email, phone number, health goals, and basic medical screening answers. We also collect standard website analytics data.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              How We Use Your Information
            </h2>
            <p>
              Your health information is shared only with your assigned Kora Health physician for the purpose of medical evaluation. We use your contact details to schedule consultations and provide ongoing care. We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Data Security
            </h2>
            <p>
              We use industry-standard encryption to protect your data in transit and at rest. Access to patient information is restricted to authorized medical personnel.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your personal data by contacting us at{' '}
              <a
                href="mailto:hello@korahealth.ph"
                style={{ color: 'var(--kora-brand)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                hello@korahealth.ph
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Contact
            </h2>
            <p>
              For privacy-related concerns, email{' '}
              <a
                href="mailto:hello@korahealth.ph"
                style={{ color: 'var(--kora-brand)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                hello@korahealth.ph
              </a>
              .
            </p>
          </section>

          <p
            className="text-xs italic pt-4"
            style={{
              borderTop: '1px solid var(--kora-border-light)',
              color: 'var(--kora-text-muted)',
            }}
          >
            This is placeholder text. Replace with a complete privacy policy reviewed by legal counsel before launch.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
