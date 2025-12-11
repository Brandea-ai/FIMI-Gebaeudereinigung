import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '120+ Referenzen Gebäudereinigung Bayern | FIMI',
  description: 'Echte Projekte aus Industrie, Büro & Facility Management in Landshut, München & Regensburg. Sehen Sie unsere Arbeit in Bildern.',
  openGraph: {
    title: '120+ Referenzen Gebäudereinigung Bayern | FIMI',
    description: 'Echte Projekte aus Industrie, Büro & Facility Management in Bayern. Qualität, die überzeugt.',
  },
}

export default function ReferenzenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
