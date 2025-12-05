'use client'

import FloatingNav from '@/components/FloatingNav'

const navItems = [
  { id: 'hero', label: 'Start' },
  { id: 'probleme', label: 'Lösungen' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'prozess', label: 'Ablauf' },
  { id: 'regionen', label: 'Regionen' },
  { id: 'faq', label: 'FAQ' },
  { id: 'kontakt', label: 'Kontakt' },
]

export default function LeistungFloatingNav() {
  return <FloatingNav items={navItems} />
}
