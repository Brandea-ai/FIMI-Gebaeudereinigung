import { Metadata } from 'next'
import KontaktContent from './KontaktContent'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie FIMI Gebäudereinigung - Ihr Partner für professionelle Reinigung in Bayern. Kostenfreie Besichtigung anfragen.',
}

export default function KontaktPage() {
  return <KontaktContent />
}
