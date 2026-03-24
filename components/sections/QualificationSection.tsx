'use client'

import { useState, useRef } from 'react'
import { Lock, Loader2 } from 'lucide-react'
import PillSelect from '@/components/ui/PillSelect'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface FormData {
  primaryGoal: string
  triedGlp1: string
  conditions: string[]
  pregnant: string
  height: string
  weight: string
  name: string
  email: string
  phone: string
  contactMethod: string
}

interface FormErrors {
  primaryGoal?: string
  triedGlp1?: string
  pregnant?: string
  name?: string
  email?: string
  phone?: string
  contactMethod?: string
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'var(--kora-bg)',
  border: '1px solid var(--kora-border)',
  borderRadius: '0.5rem',
  padding: '12px 16px',
  fontSize: '14px',
  color: 'var(--kora-text-primary)',
  outline: 'none',
  transition: 'border-color 200ms, box-shadow 200ms',
}

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  border: '1px solid var(--kora-error)',
}

function FormInput({
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  id,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  error?: string
  placeholder?: string
  id: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5" style={{ color: 'var(--kora-text-body)' }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...(error ? inputErrorStyle : inputStyle),
          ...(focused && !error ? { borderColor: 'var(--kora-brand)', boxShadow: '0 0 0 3px var(--kora-brand-subtle)' } : {}),
        }}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs mt-1" style={{ color: 'var(--kora-error)' }} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const groupLabelStyle: React.CSSProperties = {
  fontSize: '0.6875rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  fontWeight: 500,
  color: 'var(--kora-text-muted)',
  marginBottom: '16px',
  display: 'block',
}

const dividerStyle: React.CSSProperties = {
  borderTop: '1px solid var(--kora-border-light)',
  margin: '24px 0',
}

export default function QualificationSection() {
  const formRef = useRef<HTMLDivElement>(null)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const [form, setForm] = useState<FormData>({
    primaryGoal: '',
    triedGlp1: '',
    conditions: [],
    pregnant: '',
    height: '',
    weight: '',
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
  })

  const set = (field: keyof FormData) => (value: string | string[]) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.primaryGoal) e.primaryGoal = 'Required'
    if (!form.triedGlp1) e.triedGlp1 = 'Required'
    if (!form.pregnant) e.pregnant = 'Required'
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Required'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      // Scroll to first error
      setTimeout(() => {
        const firstError = formRef.current?.querySelector('[aria-invalid="true"]') as HTMLElement
        firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
      return
    }

    setSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))
    window.location.href = '/thank-you'
  }

  return (
    <section
      id="qualify"
      className="py-20 md:py-28"
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
            See If You Qualify
          </h2>
          <p className="text-center mt-2" style={{ color: 'var(--kora-text-body)' }}>
            A few quick questions. Takes about 2 minutes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div
            ref={formRef}
            className="mt-8 max-w-xl mx-auto rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: 'var(--kora-surface)',
              border: '1px solid var(--kora-border-light)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}
          >
            <form onSubmit={handleSubmit} noValidate>
              {/* Group 1 */}
              <span style={groupLabelStyle}>Your Goals</span>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--kora-text-body)' }}>
                  What is your primary goal?
                </label>
                <PillSelect
                  options={[
                    { value: 'weight-loss', label: 'Weight Loss' },
                    { value: 'blood-sugar', label: 'Blood Sugar' },
                    { value: 'both', label: 'Both' },
                  ]}
                  value={form.primaryGoal}
                  onChange={set('primaryGoal')}
                  error={!!errors.primaryGoal}
                />
                {errors.primaryGoal && (
                  <p className="text-xs mt-1" style={{ color: 'var(--kora-error)' }} role="alert">
                    {errors.primaryGoal}
                  </p>
                )}
              </div>

              <div className="mb-0">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--kora-text-body)' }}>
                  Have you tried GLP-1 medication before?
                </label>
                <PillSelect
                  options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                  ]}
                  value={form.triedGlp1}
                  onChange={set('triedGlp1')}
                  error={!!errors.triedGlp1}
                />
                {errors.triedGlp1 && (
                  <p className="text-xs mt-1" style={{ color: 'var(--kora-error)' }} role="alert">
                    {errors.triedGlp1}
                  </p>
                )}
              </div>

              <div style={dividerStyle} />

              {/* Group 2 */}
              <span style={groupLabelStyle}>Health Screening</span>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--kora-text-body)' }}>
                  Do any of the following apply?
                </label>
                <PillSelect
                  options={[
                    { value: 'diabetes', label: 'Type 2 Diabetes' },
                    { value: 'thyroid', label: 'Thyroid Condition' },
                    { value: 'pancreatitis', label: 'Pancreatitis' },
                    { value: 'heart', label: 'Heart Disease' },
                    { value: 'none', label: 'None' },
                  ]}
                  value={form.conditions}
                  onChange={set('conditions')}
                  multiple
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--kora-text-body)' }}>
                  Currently pregnant or breastfeeding?
                </label>
                <PillSelect
                  options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                  ]}
                  value={form.pregnant}
                  onChange={set('pregnant')}
                  error={!!errors.pregnant}
                />
                {errors.pregnant && (
                  <p className="text-xs mt-1" style={{ color: 'var(--kora-error)' }} role="alert">
                    {errors.pregnant}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-0">
                <FormInput
                  id="height"
                  label="Height (cm)"
                  type="number"
                  value={form.height}
                  onChange={v => setForm(p => ({ ...p, height: v }))}
                  placeholder="e.g. 165"
                />
                <FormInput
                  id="weight"
                  label="Weight (kg)"
                  type="number"
                  value={form.weight}
                  onChange={v => setForm(p => ({ ...p, weight: v }))}
                  placeholder="e.g. 80"
                />
              </div>

              <div style={dividerStyle} />

              {/* Group 3 */}
              <span style={groupLabelStyle}>Contact Details</span>

              <div className="flex flex-col gap-4 mb-5">
                <FormInput
                  id="name"
                  label="Full name"
                  value={form.name}
                  onChange={set('name')}
                  error={errors.name}
                  placeholder="Your full name"
                />
                <FormInput
                  id="email"
                  label="Email address"
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  error={errors.email}
                  placeholder="you@example.com"
                />
                <FormInput
                  id="phone"
                  label="Phone or messaging number"
                  type="tel"
                  value={form.phone}
                  onChange={set('phone')}
                  error={errors.phone}
                  placeholder="+63 XXX XXX XXXX"
                />
              </div>

              <div className="mb-0">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--kora-text-body)' }}>
                  Preferred contact method
                </label>
                <PillSelect
                  options={[
                    { value: 'whatsapp', label: 'WhatsApp' },
                    { value: 'viber', label: 'Viber' },
                    { value: 'phone', label: 'Phone' },
                    { value: 'email', label: 'Email' },
                  ]}
                  value={form.contactMethod}
                  onChange={set('contactMethod')}
                />
              </div>

              {/* Privacy line */}
              <div className="flex items-start gap-2 mt-5">
                <Lock size={14} strokeWidth={1.75} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--kora-text-muted)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--kora-text-muted)' }}>
                  Your information is encrypted and shared only with your assigned physician. We never sell your data.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-6 flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: submitting ? 'var(--kora-brand-hover)' : 'var(--kora-brand)',
                  color: '#fff',
                  padding: '16px 24px',
                  fontSize: '16px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.9 : 1,
                }}
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting…
                  </>
                ) : (
                  'Book Your Free Consultation →'
                )}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
