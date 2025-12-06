'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, ArrowLeft } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=3540&auto=format&fit=crop" alt="Maschinenreinigung" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/80 to-[#012956]/60" />
      </div>
      <div className="relative z-10 w-full">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold mb-8 transition-colors"><ArrowLeft size={18} />Alle Leistungen</Link>
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-[#109387]/20 backdrop-blur-sm border border-[#109387]/30 rounded-[6px] px-4 py-2 mb-6"><span className="text-sm font-bold text-[#109387] uppercase tracking-wide">Industriereinigung</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">Maschinenreinigung</h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#109387] mb-8">Fachgerechte Reinigung von Produktionsmaschinen</p>
            <p className="text-lg lg:text-xl text-white/80 font-semibold leading-relaxed mb-10 max-w-3xl">Beschreibung folgt.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg">Kostenfreie Besichtigung<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></a>
              <a href="tel:+4987143033460" className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"><Phone size={20} />0871 430 334 60</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
