import {
  MessageSquare,
  ClipboardCheck,
  FileCheck2,
  FlaskConical,
  Truck,
  PlayCircle,
  CalendarClock,
  RefreshCcw,
  Syringe,
  Droplets,
  Snowflake,
  BookOpen,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const cards = [
  { icon: MessageSquare, label: 'Free Physician Consultation' },
  { icon: ClipboardCheck, label: 'Personalized Assessment' },
  { icon: FileCheck2, label: 'Prescribed Treatment Plan' },
  { icon: FlaskConical, label: 'FDA-Regulated Compounding' },
  { icon: Truck, label: 'Cold-Chain Home Delivery' },
  { icon: PlayCircle, label: 'Injection Onboarding' },
  { icon: CalendarClock, label: 'Weekly Check-Ins' },
  { icon: RefreshCcw, label: 'Monthly Follow-Up & Dose Adjustment' },
]

const kitItems = [
  { icon: FlaskConical, label: 'Prescribed Medication' },
  { icon: Syringe, label: 'Injection Supplies' },
  { icon: Droplets, label: 'Alcohol Pads' },
  { icon: Snowflake, label: 'Cold-Chain Packaging' },
  { icon: BookOpen, label: 'Injection Guide' },
]

export default function ProgramOverview() {
  return (
    <section
      id="program"
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
            The Kora Weight Management Program
          </h2>
          <p
            className="text-center max-w-xl mx-auto mt-4 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Physician-supervised medical care — not a transaction.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <ScrollReveal key={card.label} delay={i * 60}>
                <div
                  className="flex flex-col items-center text-center rounded-xl p-5"
                  style={{
                    backgroundColor: 'var(--kora-surface)',
                    border: '1px solid var(--kora-border-light)',
                  }}
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
                  <p
                    className="text-sm font-medium mt-3 leading-tight"
                    style={{ color: 'var(--kora-text-primary)' }}
                  >
                    {card.label}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Treatment Kit sub-section */}
        <ScrollReveal delay={120}>
          <div
            className="max-w-2xl mx-auto mt-10 rounded-2xl p-8"
            style={{
              backgroundColor: 'var(--kora-surface)',
              border: '1px solid var(--kora-border-light)',
            }}
          >
            <h3
              className="text-[17px] font-medium text-center mb-6"
              style={{ color: 'var(--kora-text-primary)' }}
            >
              Your Kora Treatment Kit
            </h3>

            {/* Items: flex row on desktop, 2-col grid on mobile */}
            <div className="grid grid-cols-2 gap-y-5 md:flex md:flex-row md:justify-between md:gap-0">
              {kitItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex flex-col items-center text-center gap-2">
                    <Icon size={20} strokeWidth={1.75} style={{ color: 'var(--kora-brand)' }} aria-hidden="true" />
                    <span className="text-sm" style={{ color: 'var(--kora-text-body)' }}>
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <p
              className="text-xs text-center mt-6"
              style={{ color: 'var(--kora-text-muted)' }}
            >
              All medications compounded in an FDA-regulated Philippine pharmacy and delivered in temperature-controlled packaging.
            </p>
            <p
              className="text-[11px] font-normal text-center mt-2"
              style={{ color: 'var(--kora-text-muted)' }}
            >
              Product photo placeholder — replace with real packaging image
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
