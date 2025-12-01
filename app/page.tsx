import { Metadata } from 'next'
import HeroContainer from './home/HeroContainer'
import TrustContainer from './home/TrustContainer'
import ServicesContainer from './home/ServicesContainer'
import RegionenContainer from './home/RegionenContainer'
import ProcessContainer from './home/ProcessContainer'
import FAQContainer from './home/FAQContainer'
import FloatingNav from '@/components/FloatingNav'
import KundenLogosSlider from '@/components/KundenLogosSlider'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'

// Navigation items for FloatingNav
const floatingNavItems = [
  { id: 'hero', label: 'Start' },
  { id: 'trust', label: 'Warum FIMI' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'regionen', label: 'Standorte' },
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
    url: 'https://fimi-service.de',
    siteName: 'FIMI Gebaeudereinigung',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FIMI Gebaeudereinigung - Professionelle Reinigung in Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gebaeudereinigung Bayern | FIMI',
    description: 'Professionelle Gebaeudereinigung in Landshut und ganz Bayern. 8+ Jahre Erfahrung.',
  },
  alternates: {
    canonical: 'https://fimi-service.de',
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
      <FloatingNav items={floatingNavItems} />
      <HeroContainer />
      <TrustContainer />
      <ServicesContainer />
      <PartnerLogosSlider
        showHeader={true}
        showStats={true}
        bgColor="#ffffff"
      />
      <RegionenContainer />
      <ProcessContainer />
      <KundenLogosSlider
        showHeader={true}
        showStats={false}
        bgColor="#f8f9fa"
      />
      <FAQContainer />
    </main>
  )
}
