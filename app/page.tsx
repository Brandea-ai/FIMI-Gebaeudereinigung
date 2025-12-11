import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroContainer from './home/HeroContainer'

// Lazy load all non-critical components to improve initial load performance
const FloatingNav = dynamic(() => import('@/components/FloatingNav'), { ssr: false })
const TrustContainer = dynamic(() => import('./home/TrustContainer'))
const ServicesContainer = dynamic(() => import('./home/ServicesContainer'))
const RegionenContainer = dynamic(() => import('./home/RegionenContainer'))
const ProcessContainer = dynamic(() => import('./home/ProcessContainer'))
const FAQContainer = dynamic(() => import('./home/FAQContainer'))
const PartnerLogosSlider = dynamic(() => import('@/components/PartnerLogosSlider'))

const navItems = [
  { id: 'hero', label: 'Start' },
  { id: 'trust', label: 'Warum FIMI' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'regionen', label: 'Regionen' },
  { id: 'prozess', label: 'Ablauf' },
  { id: 'faq', label: 'FAQ' },
]

export const metadata: Metadata = {
  title: 'Gebäudereinigung Bayern - Landshut & München | FIMI',
  description: '120+ Kunden vertrauen FIMI: Büro-, Industrie- & Glasreinigung in Bayern. 90 Mitarbeiter, 8 Standorte, feste Teams. Kostenloses Angebot in 24h.',
  keywords: 'Gebäudereinigung, Büroreinigung, Industriereinigung, Facility Management, Landshut, München, Regensburg, Bayern, Unterhaltsreinigung, gewerbliche Reinigung',
  openGraph: {
    title: 'Gebäudereinigung Bayern - Landshut & München | FIMI',
    description: '120+ Kunden vertrauen FIMI: Büro-, Industrie- & Glasreinigung in Bayern. 90 Mitarbeiter, 8 Standorte, feste Teams. Kostenloses Angebot in 24h.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-gebaeudereinigung.de',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: '/FIMI-LOGO/fimi-logo-weiss-mit-hintergrund.png',
        width: 1200,
        height: 630,
        alt: 'FIMI Gebäudereinigung - Professionelle Reinigung in Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gebäudereinigung Bayern - Landshut & München | FIMI',
    description: '120+ Kunden vertrauen FIMI: Büro-, Industrie- & Glasreinigung. 90 Mitarbeiter, 8 Standorte.',
  },
  alternates: {
    canonical: 'https://fimi-gebaeudereinigung.de',
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
}

export default function HomePage() {
  return (
    <main>
      <FloatingNav items={navItems} />
      <HeroContainer />
      <TrustContainer />
      <ServicesContainer />
      <PartnerLogosSlider
        showHeader={true}
        showStats={false}
        bgColor="#ffffff"
      />
      <RegionenContainer />
      <ProcessContainer />
      <FAQContainer />
    </main>
  )
}
