import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fimi-service.de'),
  title: {
    default: 'FIMI Gebäudereinigung | Professionelle Reinigungsdienste in Landshut',
    template: '%s | FIMI Gebäudereinigung'
  },
  description: 'FIMI Gebäudereinigung - Ihr Partner für professionelle Gebäudereinigung, Büroreinigung, Industriereinigung und Facility Management in Landshut. Höchste Qualität seit Jahren.',
  keywords: ['Gebäudereinigung', 'Büroreinigung', 'Industriereinigung', 'Facility Management', 'Landshut', 'Reinigungsservice', 'Unterhaltsreinigung', 'Baureinigung'],
  authors: [{ name: 'FIMI Gebäudereinigung' }],
  creator: 'FIMI Gebäudereinigung',
  publisher: 'FIMI Gebäudereinigung',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de',
    title: 'FIMI Gebäudereinigung | Professionelle Reinigungsdienste',
    description: 'Professionelle Gebäudereinigung für Gewerbe, Industrie und Privat in Landshut und Umgebung.',
    siteName: 'FIMI Gebäudereinigung',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIMI Gebäudereinigung',
    description: 'Professionelle Reinigungsdienste in Landshut',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/FIMI-LOGO/Fimi-Favicon_Transparent.png" />
        <link rel="apple-touch-icon" href="/FIMI-LOGO/Fimi-Favicon_Transparent.png" />
      </head>
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
