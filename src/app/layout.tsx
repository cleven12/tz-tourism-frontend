import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Discover Tanzania | Premier Safari & Travel Experiences',
  description:
    'Explore Tanzania\'s breathtaking landscapes, iconic wildlife safaris, pristine beaches, and rich cultural heritage. Plan your dream adventure with GPS-accurate guides and real-time weather.',
  keywords: ['Tanzania', 'Safari', 'Kilimanjaro', 'Serengeti', 'Zanzibar', 'Travel', 'Tourism', 'Africa'],
  openGraph: {
    title: 'Discover Tanzania | Premier Safari & Travel Experiences',
    description: 'Plan your dream Tanzanian adventure with expert-curated guides.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#166534',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
