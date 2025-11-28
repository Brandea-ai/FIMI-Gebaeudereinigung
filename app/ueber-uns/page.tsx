'use client'

import Image from 'next/image'
import { ArrowRight, Quote, Shield, Users, Target, Heart, Award, TrendingUp, Building2, Sparkles } from 'lucide-react'

// Team Daten
const team = {
  geschaeftsfuehrung: [
    {
      name: 'Max Mustermann',
      rolle: 'Geschäftsführer',
      bereich: 'Strategie & Vertrieb',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
      zitat: 'Wir wollen nicht der größte Reinigungsdienstleister sein – sondern der zuverlässigste. Jeder Kunde verdient einen Partner, der seine Versprechen hält.',
    },
    {
      name: 'Thomas Müller',
      rolle: 'Geschäftsführer',
      bereich: 'Betrieb & Qualität',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
      zitat: 'Qualität entsteht nicht durch Zufall. Sie entsteht durch geschulte Mitarbeiter, klare Prozesse und den unbedingten Willen, jeden Tag besser zu werden.',
    },
  ],
  vertrieb: [
    {
      name: 'Sarah Schmidt',
      rolle: 'Vertriebsleitung',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Michael Weber',
      rolle: 'Key Account Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    },
  ],
  buero: [
    {
      name: 'Lisa Hoffmann',
      rolle: 'Disposition',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Anna Bauer',
      rolle: 'Buchhaltung',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Julia Klein',
      rolle: 'Kundenservice',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=600&auto=format&fit=crop',
    },
  ],
  objektleiter: [
    {
      name: 'Peter Schneider',
      rolle: 'Objektleiter Industrie',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Andreas Wolf',
      rolle: 'Objektleiter Gewerbe',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Markus Fischer',
      rolle: 'Objektleiter Facility',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    },
  ],
  qualitaet: [
    {
      name: 'Christina Braun',
      rolle: 'Qualitätsmanagement',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=600&auto=format&fit=crop',
    },
  ],
}

// Timeline Meilensteine
const meilensteine = [
  {
    jahr: '2016',
    titel: 'Der Anfang',
    beschreibung: 'Gründung als kleine GbR mit Fokus auf Glas- und Fassadenreinigung. Zwei Gründer, ein Transporter, große Träume.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop',
    icon: Sparkles,
  },
  {
    jahr: '2018',
    titel: 'Erste Großkunden',
    beschreibung: 'Erste Industriekunden vertrauen uns ihre Hallen an. Das Team wächst auf 15 Mitarbeiter.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
    icon: TrendingUp,
  },
  {
    jahr: '2020',
    titel: 'ISO Zertifizierung',
    beschreibung: 'Erfolgreiche Zertifizierung nach ISO 9001 und ISO 14001. Qualität und Umwelt auf höchstem Niveau.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
    icon: Award,
  },
  {
    jahr: '2022',
    titel: 'Facility Management',
    beschreibung: 'Erweiterung um Facility Management Services. Alles aus einer Hand für unsere Kunden.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    icon: Building2,
  },
  {
    jahr: '2024',
    titel: 'Heute',
    beschreibung: 'Über 85 zufriedene Kunden, 12 Branchen, 18 Serviceleistungen. Und wir wachsen weiter.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop',
    icon: Users,
  },
]

// Werte/Philosophie
const werte = [
  {
    icon: Shield,
    titel: 'Zuverlässigkeit',
    beschreibung: 'Was wir versprechen, halten wir. Pünktlich, gründlich, ohne Ausreden. Sie können sich auf uns verlassen – jeden Tag.',
  },
  {
    icon: Users,
    titel: 'Menschlichkeit',
    beschreibung: 'Hinter jedem sauberen Gebäude stehen Menschen. Wir behandeln unsere Mitarbeiter und Kunden mit Respekt und Wertschätzung.',
  },
  {
    icon: Target,
    titel: 'Lösungsorientierung',
    beschreibung: 'Keine Lösung zu haben ist keine Option. Wir finden Wege, auch wenn andere aufgeben. Das ist unser Anspruch.',
  },
  {
    icon: Heart,
    titel: 'Leidenschaft',
    beschreibung: 'Wir lieben was wir tun. Sauberkeit ist kein Job – es ist unsere Mission. Diese Einstellung spüren Sie in jedem Raum.',
  },
]

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#012956] py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop"
            alt="FIMI Team"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012956] via-[#012956]/90 to-[#012956]/70" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl">
            <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-4">
              Über FIMI
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
              Keine Lösung zu haben
              <span className="block text-[#109387]">ist keine Option.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-semibold leading-relaxed mb-10 max-w-2xl">
              Wenn andere sagen „Das geht nicht", fangen wir erst an zu denken.
              Seit 2016 finden wir Lösungen für jede Reinigungsherausforderung.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mb-10">
              {[
                { value: '8+', label: 'Jahre Erfahrung' },
                { value: '85+', label: 'Zufriedene Kunden' },
                { value: '50+', label: 'Mitarbeiter' },
                { value: '12', label: 'Branchen' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[#109387] font-bold text-4xl lg:text-5xl">{stat.value}</div>
                  <div className="text-white/60 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
            >
              Lernen Sie uns kennen
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Geschäftsführer Zitate */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Die Köpfe hinter FIMI
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1]">
              Unsere Geschäftsführung
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {team.geschaeftsfuehrung.map((person, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-[6px] overflow-hidden">
                <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr]">
                  {/* Bild */}
                  <div className="relative h-72 lg:h-full min-h-[300px]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <Quote size={40} className="text-[#109387]/30 mb-4" />
                    <p className="text-lg lg:text-xl text-gray-700 font-semibold leading-relaxed mb-6 italic">
                      „{person.zitat}"
                    </p>
                    <div>
                      <h3 className="text-xl font-bold text-[#012956]">{person.name}</h3>
                      <p className="text-[#109387] font-semibold">{person.rolle}</p>
                      <p className="text-gray-500 font-semibold text-sm">{person.bereich}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3">
              Unsere Geschichte
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-4">
              Von der GbR zum Marktführer
            </h2>
            <p className="text-lg text-white/70 font-semibold max-w-2xl mx-auto">
              8 Jahre Wachstum, Innovation und vor allem: zufriedene Kunden.
            </p>
          </div>

          {/* Timeline Items - Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible">
            <div className="flex lg:grid lg:grid-cols-5 gap-6 min-w-max lg:min-w-0">
              {meilensteine.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="w-72 lg:w-auto flex-shrink-0 lg:flex-shrink">
                    {/* Image */}
                    <div className="relative h-40 rounded-[6px] overflow-hidden mb-4">
                      <Image
                        src={item.image}
                        alt={item.titel}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="text-[#109387] font-bold text-2xl">{item.jahr}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white/5 rounded-[6px] p-5 border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#109387] rounded-[6px] flex items-center justify-center">
                          <Icon size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{item.titel}</h3>
                      </div>
                      <p className="text-white/70 font-semibold text-sm leading-relaxed">{item.beschreibung}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie / Werte */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unsere Philosophie
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-4">
              Wofür wir stehen
            </h2>
            <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
              Diese Werte sind keine leeren Worte. Sie bestimmen jeden Tag, wie wir arbeiten,
              wie wir mit Menschen umgehen und welche Entscheidungen wir treffen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {werte.map((wert, i) => {
              const Icon = wert.icon
              return (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-[6px] hover:bg-[#012956] transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mb-6 group-hover:bg-[#109387]/20 transition-colors">
                    <Icon size={32} className="text-[#109387] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#012956] mb-3 group-hover:text-white transition-colors">
                    {wert.titel}
                  </h3>
                  <p className="text-gray-700 font-semibold leading-relaxed group-hover:text-white/80 transition-colors">
                    {wert.beschreibung}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Das FIMI Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-4">
              Die Menschen hinter der Sauberkeit
            </h2>
            <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
              Neben unseren Geschäftsführern sorgen diese Köpfe dafür, dass alles reibungslos läuft.
              Plus über 50 Reinigungskräfte, die täglich ihr Bestes geben.
            </p>
          </div>

          {/* Vertrieb */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-[#012956] mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#109387]" />
              Vertrieb
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {team.vertrieb.map((person, i) => (
                <div key={i} className="text-center group">
                  <div className="relative w-full aspect-square rounded-[6px] overflow-hidden mb-4">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-bold text-[#012956]">{person.name}</h4>
                  <p className="text-gray-500 font-semibold text-sm">{person.rolle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Büro */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-[#012956] mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#109387]" />
              Büro & Administration
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {team.buero.map((person, i) => (
                <div key={i} className="text-center group">
                  <div className="relative w-full aspect-square rounded-[6px] overflow-hidden mb-4">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-bold text-[#012956]">{person.name}</h4>
                  <p className="text-gray-500 font-semibold text-sm">{person.rolle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Objektleiter */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-[#012956] mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#109387]" />
              Objektleitung
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {team.objektleiter.map((person, i) => (
                <div key={i} className="text-center group">
                  <div className="relative w-full aspect-square rounded-[6px] overflow-hidden mb-4">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-bold text-[#012956]">{person.name}</h4>
                  <p className="text-gray-500 font-semibold text-sm">{person.rolle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Qualitätsmanagement */}
          <div>
            <h3 className="text-lg font-bold text-[#012956] mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#109387]" />
              Qualitätsmanagement
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {team.qualitaet.map((person, i) => (
                <div key={i} className="text-center group">
                  <div className="relative w-full aspect-square rounded-[6px] overflow-hidden mb-4">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-bold text-[#012956]">{person.name}</h4>
                  <p className="text-gray-500 font-semibold text-sm">{person.rolle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reinigungskräfte Hinweis */}
          <div className="mt-12 bg-[#012956] rounded-[6px] p-8 lg:p-12 text-center">
            <div className="text-[#109387] font-bold text-5xl lg:text-6xl mb-2">50+</div>
            <div className="text-white font-bold text-xl mb-2">Reinigungskräfte</div>
            <p className="text-white/70 font-semibold max-w-lg mx-auto">
              Geschultes Stammpersonal, das jeden Tag dafür sorgt, dass Ihre Räume glänzen.
              Feste Teams, die Ihr Objekt kennen.
            </p>
          </div>
        </div>
      </section>

      {/* Zertifikate */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Zertifizierte Qualität
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
                ISO 9001 & ISO 14001
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-8">
                Unsere Zertifizierungen sind kein Marketing-Gag. Sie bedeuten: Dokumentierte Prozesse,
                regelmäßige Audits, kontinuierliche Verbesserung. Für Sie bedeutet das: Verlässliche Qualität,
                die überprüfbar ist.
              </p>
              <div className="space-y-4">
                {[
                  'Jährliche externe Audits',
                  'Dokumentierte Qualitätsprozesse',
                  'Umweltmanagementsystem',
                  'Kontinuierliche Verbesserung',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#109387] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[6px] text-center shadow-sm">
                <div className="w-20 h-20 bg-[#012956] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={40} className="text-[#109387]" />
                </div>
                <h3 className="text-2xl font-bold text-[#012956] mb-2">ISO 9001</h3>
                <p className="text-gray-500 font-semibold">Qualitätsmanagement</p>
              </div>
              <div className="bg-white p-8 rounded-[6px] text-center shadow-sm">
                <div className="w-20 h-20 bg-[#012956] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={40} className="text-[#109387]" />
                </div>
                <h3 className="text-2xl font-bold text-[#012956] mb-2">ISO 14001</h3>
                <p className="text-gray-500 font-semibold">Umweltmanagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3">
              Jetzt kennenlernen
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
              Lassen Sie uns persönlich sprechen
            </h2>
            <p className="text-lg text-white/80 font-semibold leading-relaxed mb-10">
              Sie kennen jetzt unsere Geschichte und unser Team.
              Jetzt möchten wir Sie und Ihre Anforderungen kennenlernen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                0871 430 334 60
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
