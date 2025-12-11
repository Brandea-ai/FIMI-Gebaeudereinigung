import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jobs Gebäudereinigung Bayern - ab 14,50€/h | FIMI',
  description: 'Tariflohn ab 14,50€/h, feste Reviere, Aufstieg zum Meister: Jobs als Reinigungskraft, Vorarbeiter oder Objektleitung in Landshut & München. Jetzt bewerben.',
  openGraph: {
    title: 'Jobs Gebäudereinigung Bayern - ab 14,50€/h | FIMI',
    description: 'Tariflohn ab 14,50€/h, feste Reviere, Aufstieg zum Meister: Jobs in Landshut & München. Jetzt bewerben.',
  },
}

export default function KarriereLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
