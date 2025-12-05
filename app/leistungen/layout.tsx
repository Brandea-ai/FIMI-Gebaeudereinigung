import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leistungen | 18 Professionelle Reinigungsservices | FIMI Gebäudereinigung',
  description: 'Entdecken Sie unsere 18 professionellen Reinigungsservices: Büroreinigung, Industriereinigung, Facility Management & mehr. ✓ Geprüfte Qualität ✓ Kostenfreie Besichtigung ✓ Bayern',
  keywords: 'Gebäudereinigung Leistungen, Büroreinigung, Industriereinigung, Facility Management, Unterhaltsreinigung, Glasreinigung, Winterdienst, Bayern, Landshut',
  openGraph: {
    title: 'Leistungen | FIMI Gebäudereinigung',
    description: '18 professionelle Reinigungsservices für Ihr Unternehmen. Von Büroreinigung bis Industriereinigung - alles aus einer Hand.',
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
