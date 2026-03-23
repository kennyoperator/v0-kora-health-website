'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const faqs = [
  {
    q: 'Is Kora Health a real, registered medical provider?',
    a: 'Yes. Kora Health is a registered Philippine business operating as a telehealth platform. All treatments are prescribed by Philippine-licensed physicians and compounded in FDA-regulated pharmacies. Our business registration details are displayed on this website.',
  },
  {
    q: 'How much does the program cost?',
    a: 'Costs depend on your prescribed dose and treatment plan. Your consultation includes completely transparent pricing with no hidden fees. We do not charge for consultations, and there are no lock-ins or subscription requirements.',
  },
  {
    q: 'How is this different from buying from social media sellers?',
    a: 'Most online sellers operate without medical oversight, sell unverified products, and provide no follow-up care. Kora Health requires a physician consultation before any prescription is issued, sources exclusively from regulated pharmacies, and provides ongoing medical monitoring throughout your program.',
  },
  {
    q: 'What is tirzepatide?',
    a: 'Tirzepatide is a GLP-1/GIP receptor agonist — a class of medication that reduces appetite, improves blood sugar control, and supports significant weight loss. It is approved by both the US FDA and the Philippine FDA. It is administered as a once-weekly self-injection.',
  },
  {
    q: 'Is this treatment safe?',
    a: 'Tirzepatide has been studied in large clinical trials involving thousands of participants. Like all medications, it has potential side effects — most commonly nausea, which typically improves as your body adjusts. Your Kora physician will evaluate your health history, monitor your progress, and adjust treatment as needed.',
  },
  {
    q: 'How is medication delivered?',
    a: 'All medications are shipped in temperature-controlled packaging from an FDA-regulated pharmacy to your doorstep using cold-chain logistics.',
  },
  {
    q: 'Do I need to inject myself?',
    a: 'Yes, tirzepatide is a once-weekly self-injection. We provide detailed video guidance and your care team can walk you through it live. Most patients find it straightforward after the first time.',
  },
  {
    q: 'What happens after I submit my information?',
    a: 'Our care team reviews your details within 24 hours, then contacts you via your preferred channel to schedule your physician consultation. The consultation takes about 15 minutes, is completely free, and carries no obligation.',
  },
  {
    q: 'Why should I trust a new brand?',
    a: "We understand the skepticism — and it's justified. That's exactly why we show our founders' real names and faces, our physician credentials and license numbers, our pharmacy sourcing, and our business registration. We're building Kora Health as a long-term medical platform, not a pop-up operation.",
  },
]

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-16 md:py-28"
      style={{ backgroundColor: 'var(--kora-bg)' }}
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
            Common Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="max-w-2xl mx-auto mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  style={{ borderBottom: '1px solid var(--kora-border-light)' }}
                >
                  <AccordionTrigger
                    className="text-[15px] font-medium py-4 text-left transition-colors duration-200 hover:no-underline"
                    style={{ color: 'var(--kora-text-primary)' }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[15px] leading-relaxed pb-5"
                    style={{ color: 'var(--kora-text-body)' }}
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
