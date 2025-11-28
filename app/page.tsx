import { Metadata } from 'next'
import HeroContainer from './home/HeroContainer'
import TrustContainer from './home/TrustContainer'
import ServicesContainer from './home/ServicesContainer'
import RegionenContainer from './home/RegionenContainer'
import ProcessContainer from './home/ProcessContainer'
import FAQContainer from './home/FAQContainer'

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
      <HeroContainer />
      <TrustContainer />
      <ServicesContainer />
      <RegionenContainer />
      <ProcessContainer />
      <FAQContainer />
    </main>
  )
}
