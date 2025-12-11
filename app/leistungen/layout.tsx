import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '18 Reinigungsleistungen aus einer Hand - Bayern | FIMI',
  description: 'Unterhaltsreinigung bis Winterdienst: 18 Services für Ihr Unternehmen. Maßgeschneiderte Konzepte, ein Ansprechpartner. Jetzt Leistungen entdecken.',
  keywords: 'Gebäudereinigung Leistungen, Büroreinigung, Industriereinigung, Facility Management, Unterhaltsreinigung, Glasreinigung, Winterdienst, Bayern, Landshut',
  openGraph: {
    title: '18 Reinigungsleistungen aus einer Hand - Bayern | FIMI',
    description: 'Unterhaltsreinigung bis Winterdienst: 18 Services für Ihr Unternehmen. Maßgeschneiderte Konzepte, ein Ansprechpartner.',
    type: 'website',
  },
}

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
