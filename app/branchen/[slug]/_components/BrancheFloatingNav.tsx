'use client'

import FloatingNav from '@/components/FloatingNav'

const navItems = [
  { id: 'hero', label: 'Start' },
  { id: 'galerie', label: 'Galerie' },
  { id: 'herausforderungen', label: 'Lösungen' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'seo-content', label: 'Details' },
  { id: 'standorte', label: 'Standorte' },
  { id: 'prozess', label: 'Ablauf' },
  { id: 'faq', label: 'FAQ' },
]

export function BrancheFloatingNav() {
  return <FloatingNav items={navItems} />
}
