'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Kunden/Referenzen mit URLs, Beschreibungen und Logos
const kunden = [
  {
    name: 'Stadt Landshut',
    kategorie: 'Öffentlicher Sektor',
    url: 'https://www.landshut.de/',
    seitentext: 'Die Stadt Landshut ist die Regierungshauptstadt Niederbayerns und informiert auf ihrem Stadtportal über Verwaltung, Service, Wirtschaft und Veranstaltungen.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Stadt_Landshut_Fiimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Stadt_Landshut_Fiimi.webp',
  },
  {
    name: 'TÜV SÜD',
    kategorie: 'Prüfdienstleister',
    url: 'https://www.tuvsud.com/de-de',
    seitentext: 'TÜV SÜD ist ein internationaler Prüfdienstleister für Qualität, Sicherheit und Nachhaltigkeit mit vielfältigen Prüf-, Inspektions- und Zertifizierungsleistungen.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Tüv-Süd_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Tüv-Süd_Fimi.webp',
  },
  {
    name: 'Allianz',
    kategorie: 'Versicherung',
    url: 'https://www.allianz.de/',
    seitentext: 'Allianz ist einer der größten Versicherungs- und Finanzdienstleister und bietet in Deutschland Lösungen rund um Versicherung, Vorsorge und Vermögensaufbau.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Allianz-Versicherung_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Allianz-Versicherung_Fimi.webp',
  },
  {
    name: 'Texas Instruments',
    kategorie: 'Halbleiter',
    url: 'https://www.ti.com/de-de/homepage.html',
    seitentext: 'Texas Instruments ist ein globales Halbleiterunternehmen und entwickelt, produziert und verkauft analoge und eingebettete Prozessor- und IC-Lösungen.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Texas-Intruments_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Texas-Intruments_Fimi.webp',
  },
  {
    name: 'Volksbanken Raiffeisenbanken',
    kategorie: 'Finanzwesen',
    url: 'https://www.vr.de/privatkunden.html',
    seitentext: 'Die Volksbanken Raiffeisenbanken sind ein genossenschaftlicher Bankenverbund und bieten Privat- und Firmenkunden bundesweit Finanzlösungen vor Ort.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_volksbank-Raiffeisenbank_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_volksbank-Raiffeisenbank_Fimi.webp',
  },
  {
    name: 'Flottweg SE',
    kategorie: 'Maschinenbau',
    url: 'https://www.flottweg.com/de/',
    seitentext: 'Flottweg SE mit Sitz in Vilsbiburg entwickelt und produziert Maschinen und Anlagen für die mechanische Fest-Flüssig-Trennung in vielen Industrien.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Flottweg_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Flottweg_Fimi.webp',
  },
  {
    name: 'ALDI SÜD',
    kategorie: 'Einzelhandel',
    url: 'https://www.aldi-sued.de/de/homepage.html',
    seitentext: 'ALDI SÜD ist ein international tätiger Lebensmitteldiscounter mit Filialnetz in Süd- und Westdeutschland und Fokus auf Eigenmarken.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Aldi_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Aldi_Fimi.webp',
  },
  {
    name: 'EDEKA',
    kategorie: 'Lebensmittelhandel',
    url: 'https://www.edeka.de/',
    seitentext: 'EDEKA ist einer der führenden Lebensmittelhändler in Deutschland mit einem Verbund selbstständiger Kaufleute und regionalen Supermärkten.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Edeka_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Edeka_Fimi.webp',
  },
  {
    name: 'Einhell Germany AG',
    kategorie: 'Werkzeuge',
    url: 'https://www.einhell.de/',
    seitentext: 'Einhell ist ein Hersteller moderner Elektrowerkzeuge und Gartengeräte und bekannt für das Akku-System Power X-Change für Haus und Garten.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Einhell_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Einhell_Fimi.webp',
  },
  {
    name: 'EuroCar Landshut',
    kategorie: 'Autohaus',
    url: 'https://www.eurocar-landshut.de/',
    seitentext: 'EuroCar Landshut ist ein Mehrmarken-Autohaus in Landshut mit Neu- und Gebrauchtwagen sowie Werkstattservice.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Europcar-Landshut_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Europcar-Landshut_Fimi.webp',
  },
  {
    name: 'Staudinger GmbH',
    kategorie: 'Automatisierung',
    url: 'https://www.staudinger-est.de/',
    seitentext: 'Staudinger GmbH Automatisierungstechnik ist ein niederbayerisches Familienunternehmen für Automatisierungstechnik und Anlagenbau mit Sitz in Loiching.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Staudinger-Loiching_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Staudinger-Loiching_Fimi.webp',
  },
  {
    name: 'Strama-MPS',
    kategorie: 'Sondermaschinenbau',
    url: 'https://www.strama-mps.de/',
    seitentext: 'Strama-MPS Maschinenbau entwickelt Sondermaschinen, Anlagen und Komplettlösungen für Fertigung, Montage und Prüfung komplexer technischer Bauteile.',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Strama-mps_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Strama-mps_Fimi.webp',
  },
]

// Kunden Card Komponente - mit Hover-Effekt
function KundeCard({ item }: { item: typeof kunden[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-44 sm:w-56 lg:w-64 h-36 sm:h-44 lg:h-48 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-white rounded-[6px] shadow-sm transition-shadow duration-500 group-hover:shadow-md">
        {/* Default Content - Logo */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="h-16 w-28 sm:h-20 sm:w-36 lg:h-24 lg:w-40 relative mb-2 sm:mb-3">
            <picture>
              <source srcSet={item.logoAvif} type="image/avif" />
              <source srcSet={item.logoWebp} type="image/webp" />
              <Image
                src={item.logoWebp}
                alt={`${item.name} Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 160px"
                loading="lazy"
              />
            </picture>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-gray-500 text-center">
            {item.kategorie}
          </p>
        </div>

        {/* Hover Content */}
        <div className={`absolute inset-0 flex flex-col justify-between p-3 sm:p-5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <p className="text-[10px] sm:text-xs text-[#109387] font-semibold uppercase tracking-wide mb-1 sm:mb-2">
              {item.name}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
              {item.seitentext}
            </p>
          </div>
          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#109387] font-medium">
            <span>Website</span>
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  )
}

interface KundenLogosSliderProps {
  showHeader?: boolean
  showStats?: boolean
  bgColor?: string
  className?: string
}

export default function KundenLogosSlider({
  showHeader = true,
  showStats = true,
  bgColor = '#ffffff',
  className = ''
}: KundenLogosSliderProps) {

  return (
    <section className={`py-16 lg:py-24 overflow-hidden ${className}`} style={{ backgroundColor: bgColor }}>
      {showHeader && (
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mb-10 lg:mb-14">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
              Für diese Unternehmen waren wir
              <span className="text-[#109387]"> im Einsatz</span>
            </h2>
            <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
              Von lokalen Betrieben bis zu internationalen Konzernen – unsere Arbeit spricht für sich.
            </p>
          </div>
        </div>
      )}

      {/* CSS-basierter Infinite Slider - GPU-beschleunigt */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
        />

        {/* Slider Container */}
        <div className="slider-container py-4">
          <div className="slider-track flex gap-4 sm:gap-6">
            {/* Duplizieren für seamless loop */}
            {[...kunden, ...kunden].map((item, index) => (
              <KundeCard
                key={`${item.name}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>

      {showStats && (
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mt-8 lg:mt-12">
          <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387]">120+</p>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm">Zufriedene Kunden</p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-gray-300" />
            <div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387]">8+</p>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm">Jahre Erfahrung</p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-gray-300" />
            <div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387]">98%</p>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm">Weiterempfehlung</p>
            </div>
          </div>
        </div>
      )}

      {/* Link zu allen Referenzen */}
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mt-10 lg:mt-14">
        <div className="flex justify-center">
          <Link
            href="/referenzen"
            className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base lg:text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            Alle Referenzen ansehen
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* CSS Animation - GPU-beschleunigt mit will-change und transform */}
      <style jsx>{`
        .slider-container {
          overflow: hidden;
          width: 100%;
        }
        .slider-track {
          display: flex;
          width: max-content;
          animation: scroll 50s linear infinite;
          will-change: transform;
        }
        .slider-track:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .slider-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
