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
  title: 'Gebaeudereinigung Bayern | FIMI - Professionelle Reinigung fuer Unternehmen',
  description: 'Professionelle Gebaeudereinigung in Landshut, Muenchen, Regensburg und ganz Bayern. Bueroreinigung, Industriereinigung, Facility Management. 8+ Jahre Erfahrung. 24/7 Service.',
  keywords: 'Gebaeudereinigung, Bueroreinigung, Industriereinigung, Facility Management, Landshut, Muenchen, Regensburg, Bayern, Unterhaltsreinigung, gewerbliche Reinigung',
  openGraph: {
    title: 'Gebaeudereinigung Bayern | FIMI - Ihr Partner fuer professionelle Reinigung',
    description: 'Professionelle Gebaeudereinigung in Landshut und ganz Bayern. 8+ Jahre Erfahrung. 120+ zufriedene Unternehmen. 24/7 Notfallservice.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-gebaeudereinigung.de',
    siteName: 'FIMI Gebaeudereinigung',
    images: [
      {
        url: '/FIMI-LOGO/FIMI-LOGO-WEIße_Schrift_mit-Hintergrund.png',
        width: 1200,
        height: 630,
        alt: 'FIMI Gebäudereinigung - Professionelle Reinigung in Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gebaeudereinigung Bayern | FIMI',
    description: 'Professionelle Gebaeudereinigung in Landshut und ganz Bayern. 8+ Jahre Erfahrung.',
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
