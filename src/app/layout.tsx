import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TZ Tourism - Explore Tanzania',
  description: 'GPS-accurate tourism platform for Tanzania with real-time weather and seasonal planning guides',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
