import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Alfa Cell Point | Mobile Sales & Repair Since 2012 | Mira Road',
  description:
    'Alfa Cell Point - Your trusted mobile phone sales & repair shop in Mira Road, Thane since 2012. Expert Apple product repair, mobile sales, and computer accessories. Call 9004009052.',
  keywords: [
    'mobile repair Mira Road',
    'iPhone repair Mira Road',
    'Apple repair Thane',
    'mobile shop Mira Road',
    'phone repair near me',
    'Alfa Cell Point',
    'mobile sales Mira Road',
    'computer accessories Mira Road',
  ],
  openGraph: {
    title: 'Alfa Cell Point | Mobile Sales & Repair Since 2012',
    description:
      'Expert mobile phone repair & sales in Mira Road, Thane. Apple repair specialists with 12+ years of experience.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
