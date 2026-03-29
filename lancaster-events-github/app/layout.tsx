import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lancaster, CA Events — March 29 – April 12, 2026',
  description: 'Discover 40+ events near Lancaster, California including festivals, live music, community gatherings, and more in the Antelope Valley.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Lancaster, CA Events — March 29 – April 12, 2026',
    description: 'Discover 40+ events near Lancaster, California including festivals, live music, community gatherings, and more.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
