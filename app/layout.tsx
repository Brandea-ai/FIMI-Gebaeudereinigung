import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FIMI Gebäudereinigung Landshut - Professionelle Reinigungsdienstleistungen | ISO-zertifiziert',
  description: 'Professionelle Gebäudereinigung, Industriereinigung und Facility Management in Landshut. ISO 9001 & 14001 zertifiziert. Über 15 Jahre Erfahrung. 24/7 Service.',
  keywords: 'Gebäudereinigung Landshut, Büroreinigung, Industriereinigung, Facility Management, ISO 9001, ISO 14001, Unterhaltsreinigung, Baureinigung',
  authors: [{ name: 'FIMI Gebäudereinigung' }],
  openGraph: {
    title: 'FIMI Gebäudereinigung Landshut - Professionelle Reinigung',
    description: 'ISO-zertifizierte Gebäudereinigung und Facility Management in Landshut',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
