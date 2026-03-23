import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Kora Health',
  description: 'Read the terms of service for Kora Health telehealth platform.',
}

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <div
          className="mt-8 text-sm leading-relaxed space-y-6"
          style={{ color: 'var(--kora-text-body)' }}
        >
          <p style={{ color: 'var(--kora-text-muted)', fontSize: '0.8125rem' }}>Last updated: [Date]</p>

          <p>
            Welcome to Kora Health. By using this website and our services, you agree to the following terms.
          </p>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Services
            </h2>
            <p>
              Kora Health is a telehealth platform that connects patients with Philippine-licensed physicians for metabolic health consultations and treatment. We are not an emergency service. If you are experiencing a medical emergency, call your local emergency number immediately.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Medical Disclaimer
            </h2>
            <p>
              The information on this website is for educational purposes only and does not constitute medical advice. All treatments are prescribed by a licensed physician after individual medical evaluation. Results vary by individual. Kora Health does not guarantee specific health outcomes.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Eligibility
            </h2>
            <p>
              You must be 18 years or older and located in the Philippines to use Kora Health services. You agree to provide accurate and truthful information during your consultation.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Intellectual Property
            </h2>
            <p>
              All content on this website is the property of Kora Health and may not be reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Limitation of Liability
            </h2>
            <p>
              Kora Health is not liable for any adverse effects resulting from prescribed treatments. All medical decisions are made by licensed physicians in accordance with clinical guidelines.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-medium text-base mb-2" style={{ color: 'var(--kora-text-primary)' }}>
              Contact
            </h2>
            <p>
              For questions about these terms, email{' '}
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
            This is placeholder text. Replace with complete terms reviewed by legal counsel before launch.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
