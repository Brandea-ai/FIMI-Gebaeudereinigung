import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branchen - Reinigung für jede Branche | FIMI',
  description: 'Branchenspezifische Reinigungslösungen: Büro, Industrie, Gesundheitswesen, Einzelhandel, Gastronomie, Bildung und mehr. FIMI kennt die Anforderungen Ihrer Branche.',
  openGraph: {
    title: 'Branchen - Reinigung für jede Branche | FIMI Gebäudereinigung',
    description: 'Spezialisierte Reinigungslösungen für 12 Branchen in Bayern. Wir kennen die Anforderungen Ihrer Branche.',
  },
}

export default function BranchenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
