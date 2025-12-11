import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branchenlösungen Gebäudereinigung Bayern | FIMI',
  description: 'Spezialisierte Reinigung für Industrie, Gesundheit, Handel & Büro. Wir kennen die Vorschriften Ihrer Branche. Branchenlösung anfragen.',
  openGraph: {
    title: 'Branchenlösungen Gebäudereinigung Bayern | FIMI',
    description: 'Spezialisierte Reinigung für 12 Branchen in Bayern. Wir kennen die Vorschriften Ihrer Branche.',
  },
}

export default function BranchenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
