import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karriere - Jobs in der Gebäudereinigung Bayern | FIMI',
  description: 'Stellenangebote bei FIMI Gebäudereinigung: Reinigungskräfte, Objektleiter, Teamleiter gesucht. Faire Bezahlung, feste Teams, 8 Standorte in Bayern. Jetzt bewerben!',
  openGraph: {
    title: 'Karriere bei FIMI - Jobs in der Gebäudereinigung',
    description: 'Werden Sie Teil unseres Teams! Faire Bezahlung, feste Teams, Weiterbildung. Standorte in ganz Bayern.',
  },
}

export default function KarriereLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
