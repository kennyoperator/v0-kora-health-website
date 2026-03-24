import { Stethoscope, FlaskConical, Snowflake, CalendarCheck, ShieldCheck } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const badges = [
  { icon: Stethoscope, label: 'Licensed Physicians' },
  { icon: FlaskConical, label: 'FDA-Regulated Pharmacy' },
  { icon: ShieldCheck, label: 'Third-Party Tested' },
  { icon: Snowflake, label: 'Cold-Chain Delivery' },
  { icon: CalendarCheck, label: 'Ongoing Follow-Up' },
  { icon: ShieldCheck, label: 'Secure & Confidential' },
]

export default function TrustBar() {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: 'var(--kora-surface-alt)',
        borderTop: '1px solid var(--kora-border-light)',
        borderBottom: '1px solid var(--kora-border-light)',
      }}
      aria-label="Trust indicators"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div
          className="flex items-center gap-6 md:gap-8 md:justify-center overflow-x-auto hide-scrollbar"
          style={{ scrollSnapType: 'x mandatory', paddingLeft: '2px', paddingRight: '2px' }}
        >
          {badges.map(({ icon: Icon, label }, index) => (
            <ScrollReveal key={label} delay={index * 80} as="div">
              <div
                className="flex flex-col items-center gap-2 flex-shrink-0"
                style={{ minWidth: '100px', scrollSnapAlign: 'center' }}
              >
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'var(--kora-brand-subtle)',
                  }}
                  aria-hidden="true"
                >
                  <Icon size={18} strokeWidth={1.75} style={{ color: 'var(--kora-brand)' }} />
                </div>
                <span
                  className="text-[13px] font-medium text-center leading-tight"
                  style={{ color: 'var(--kora-text-body)' }}
                >
                  {label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
