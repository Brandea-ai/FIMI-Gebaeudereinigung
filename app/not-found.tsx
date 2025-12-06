'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Phone, Mail, ArrowRight, Building2, Briefcase, Sparkles } from 'lucide-react'

// Animated floating bubble component
function Bubble({ delay, size, left, duration }: { delay: number; size: number; left: number; duration: number }) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-[#109387]/30 to-[#109387]/10 backdrop-blur-sm border border-[#109387]/20 animate-float"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: -size,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

// Animated sparkle component
function SparkleIcon({ delay, left, top }: { delay: number; left: number; top: number }) {
  return (
    <div
      className="absolute animate-sparkle"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
      }}
    >
      <Sparkles size={16} className="text-[#109387]" />
    </div>
  )
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationButtons = [
    {
      id: 'home',
      name: 'Zur Startseite',
      href: '/',
      description: 'Zurück zur Hauptseite',
      icon: Home,
      color: 'bg-[#109387] hover:bg-[#0d7d72]',
      primary: true,
    },
    {
      id: 'branchen',
      name: 'Alle Branchen',
      href: '/branchen',
      description: '12 Branchenlösungen',
      icon: Building2,
      color: 'bg-[#012956] hover:bg-[#01203d]',
    },
    {
      id: 'leistungen',
      name: 'Alle Leistungen',
      href: '/leistungen',
      description: '18 Reinigungsservices',
      icon: Briefcase,
      color: 'bg-[#012956] hover:bg-[#01203d]',
    },
    {
      id: 'kontakt',
      name: 'Kontakt',
      href: '/kontakt',
      description: 'Wir helfen Ihnen',
      icon: Mail,
      color: 'bg-[#012956] hover:bg-[#01203d]',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] via-white to-[#f0f7f6] flex items-center justify-center px-6 py-12 overflow-hidden relative">
      {/* Background Animation Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Bubbles */}
        {mounted && (
          <>
            <Bubble delay={0} size={60} left={10} duration={8} />
            <Bubble delay={2} size={40} left={25} duration={10} />
            <Bubble delay={1} size={80} left={40} duration={12} />
            <Bubble delay={3} size={50} left={60} duration={9} />
            <Bubble delay={0.5} size={70} left={75} duration={11} />
            <Bubble delay={2.5} size={45} left={85} duration={8} />
            <Bubble delay={1.5} size={55} left={5} duration={10} />
            <Bubble delay={4} size={35} left={95} duration={9} />
          </>
        )}

        {/* Animated Sparkles */}
        {mounted && (
          <>
            <SparkleIcon delay={0} left={15} top={20} />
            <SparkleIcon delay={1} left={80} top={15} />
            <SparkleIcon delay={2} left={25} top={70} />
            <SparkleIcon delay={1.5} left={70} top={60} />
            <SparkleIcon delay={0.5} left={90} top={40} />
            <SparkleIcon delay={2.5} left={5} top={50} />
          </>
        )}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#109387]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#012956]/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto text-center px-4">
        {/* 404 Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-[#012956]/10 text-[#012956] px-5 py-2.5 rounded-full text-sm font-bold mb-6 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Sparkles size={18} className="text-[#109387]" />
          Fehler 404 - Seite nicht gefunden
        </div>

        {/* Animated Illustration - Full Width Stretched */}
        <div
          className={`relative w-full mb-8 transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative animate-float-slow">
            <Image
              src="/images/404 cover Bild.png"
              alt="Freundliche Reinigungsutensilien - Seite nicht gefunden"
              width={1920}
              height={600}
              className="w-full h-auto drop-shadow-2xl object-cover"
              style={{ width: '100%', height: 'auto' }}
              priority
            />

            {/* Glow Effect Under Image */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full h-12 bg-[#109387]/20 blur-3xl rounded-full" />
          </div>
        </div>

        {/* Headline */}
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#012956] mb-4 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Ups! Hier ist alles <span className="text-[#109387]">blitzeblank</span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-gray-600 mb-10 max-w-xl mx-auto font-semibold leading-relaxed transition-all duration-700 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Diese Seite wurde so gründlich gereinigt, dass sie verschwunden ist!
          Aber keine Sorge - wir helfen Ihnen, den richtigen Weg zu finden.
        </p>

        {/* Navigation Buttons Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {navigationButtons.map((button) => {
            const IconComponent = button.icon
            const isHovered = hoveredButton === button.id

            return (
              <Link
                key={button.id}
                href={button.href}
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`group relative overflow-hidden ${button.color} text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] ${
                  button.primary ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Shine Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 ${
                    isHovered ? 'translate-x-full' : ''
                  }`}
                />

                <div className="relative flex items-center justify-center gap-3">
                  <IconComponent
                    size={22}
                    className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
                  />
                  <div className="text-left">
                    <span className="block text-base">{button.name}</span>
                    <span className="block text-xs opacity-80 font-semibold">{button.description}</span>
                  </div>
                  <ArrowRight
                    size={20}
                    className={`ml-auto transition-all duration-300 ${
                      isHovered ? 'translate-x-1 opacity-100' : 'opacity-70'
                    }`}
                  />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Direct Contact */}
        <div
          className={`transition-all duration-700 delay-600 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-gray-500 font-semibold mb-3">Oder rufen Sie uns direkt an:</p>
          <a
            href="tel:+4987143033460"
            className="inline-flex items-center gap-3 text-[#109387] hover:text-[#0d7d72] font-bold text-xl sm:text-2xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-[#109387]/10 rounded-full flex items-center justify-center group-hover:bg-[#109387]/20 transition-colors">
              <Phone size={22} className="group-hover:animate-wiggle" />
            </div>
            <span className="group-hover:underline underline-offset-4">0871 430 334 60</span>
          </a>
        </div>

        {/* Decorative Footer Element */}
        <div
          className={`mt-12 flex items-center justify-center gap-2 text-gray-400 transition-all duration-700 delay-700 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-8 h-px bg-gray-300" />
          <Sparkles size={14} />
          <span className="text-sm font-semibold">FIMI Gebäudereinigung</span>
          <Sparkles size={14} />
          <div className="w-8 h-px bg-gray-300" />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  )
}
