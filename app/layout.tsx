import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Kora Health — Physician-Led Weight Management in the Philippines',
  description:
    'Kora Health is the Philippines\' physician-led metabolic health platform. Free consultation, personalized prescription, and ongoing medical support — all online.',
  keywords: 'tirzepatide Philippines, GLP-1 weight loss Philippines, physician-led weight management, telehealth Philippines, metabolic health',
  openGraph: {
    title: 'Kora Health — Physician-Led Weight Management',
    description: 'Free consultation. Personalized prescription. Cold-chain delivery. Real medical care for weight management.',
    type: 'website',
    locale: 'en_PH',
  },
  themeColor: '#FAF9F7',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-PH" data-scroll-behavior="smooth" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
