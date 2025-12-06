import { Metadata } from 'next'
import KontaktContent from './KontaktContent'

export const metadata: Metadata = {
  title: 'Kontakt - Kostenfreie Beratung anfragen | FIMI',
  description: 'Kontaktieren Sie FIMI Gebäudereinigung - Ihr Partner für professionelle Reinigung in Bayern. Kostenfreie Besichtigung anfragen.',
}

export default function KontaktPage() {
  return <KontaktContent />
}
