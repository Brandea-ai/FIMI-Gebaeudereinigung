import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projekte - Erfolgreich umgesetzte Reinigungsaufträge | FIMI',
  description: 'Einblicke in unsere Arbeit: 50+ erfolgreich umgesetzte Reinigungsprojekte in Bayern. Büroreinigung, Industriereinigung, Facility Management - sehen Sie unsere Referenzen.',
  openGraph: {
    title: 'Projekte & Referenzen | FIMI Gebäudereinigung',
    description: '50+ erfolgreich umgesetzte Reinigungsprojekte in Bayern. Qualität, die überzeugt.',
  },
}

export default function ReferenzenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
