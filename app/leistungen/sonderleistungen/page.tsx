import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'
import FAQContainer from '@/components/containers/FAQContainer'

export const metadata: Metadata = {
  title: 'Professionelle Büroreinigung in Landshut',
  description: 'Professionelle Büroreinigung in Landshut ✓ Zertifizierte Fachkräfte ✓ Flexible Zeiten ✓ Umweltfreundlich ✓ Faire Preise. Jetzt Angebot anfordern!',
  keywords: ['Büroreinigung', 'Büroreinigung Landshut', 'Büro reinigen', 'Gewerbereinigung', 'Office Cleaning'],
}

export default function BueroreinigungPage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <FAQContainer />
    </>
  )
}
