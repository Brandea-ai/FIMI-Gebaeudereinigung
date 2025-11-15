import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FIMI Gebäudereinigung - Professionelle Reinigungsdienstleistungen Landshut',
  description: 'Professionelle Gebäudereinigung, Industriereinigung und Facility Management in Landshut und Umgebung. ISO-zertifiziert, 15+ Jahre Erfahrung.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
