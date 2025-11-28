'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './impressum.css'

export default function ImpressumContent() {
  const [isOnline, setIsOnline] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('anbieter')

  // Check if support is online (Mo-Fr 8-18)
  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      setIsOnline(day >= 1 && day <= 5 && hour >= 8 && hour < 18)
    }

    checkOnlineStatus()
    const interval = setInterval(checkOnlineStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  // Scroll spy for sidebar navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['anbieter', 'register', 'kontakt', 'standort', 'streit']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom > 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Copy to clipboard
  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemId)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const navItems = [
    { id: 'anbieter', label: 'Anbieter' },
    { id: 'register', label: 'Register' },
    { id: 'kontakt', label: 'Kontakt' },
    { id: 'standort', label: 'Standort' },
    { id: 'streit', label: 'Streitbeilegung' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="impressum-hero">
        <div className="impressum-hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop"
            alt="Professionelle Gebaeudereinigung"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="impressum-hero-overlay" />
        </div>
        <div className="impressum-hero-content">
          <p className="impressum-hero-label">Rechtliches</p>
          <h1 className="impressum-hero-title">Impressum</h1>
          <p className="impressum-hero-subtitle">
            Rechtliche Informationen zur FIMI Gebaeudereinigung GmbH
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="impressum-main">
        <div className="impressum-container">
          <div className="impressum-layout">

            {/* Sticky Sidebar */}
            <aside className="impressum-sidebar">
              <div className="sidebar-inner">

                {/* Navigation */}
                <nav className="sidebar-nav">
                  <p className="sidebar-nav-title">Navigation</p>
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Support Badge */}
                <div className="support-badge">
                  <div className="support-header">
                    <span className="support-label">Support</span>
                    <span className={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
                      <span className="status-dot" />
                      {isOnline ? 'Online' : 'Offline'}
                    </span>
                  </div>
                  <a href="mailto:info@fimi-service.de" className="support-email">
                    info@fimi-service.de
                  </a>
                  <p className="support-hours">Mo-Fr: 08:00-18:00</p>
                  <p className="support-emergency">Notfall: 2h Reaktionszeit</p>
                </div>

                {/* Quick Links */}
                <div className="quick-links">
                  <h3 className="quick-links-title">Schnellzugriffe</h3>
                  <div className="quick-links-list">
                    <Link href="/datenschutz" className="quick-link">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      Datenschutz
                    </Link>
                    <Link href="/kontakt" className="quick-link">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                      Kontakt
                    </Link>
                    <Link href="/agb" className="quick-link">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                      AGB
                    </Link>
                  </div>
                </div>

              </div>
            </aside>

            {/* Main Content */}
            <div className="impressum-content">

              {/* Anbieterinformation */}
              <section id="anbieter" className="content-block">
                <h2 className="block-title">Anbieterinformation</h2>

                <div className="info-row">
                  <div className="info-label">Firma</div>
                  <div className="info-value">FIMI Gebaeudereinigung GmbH</div>
                </div>

                <div className="info-row">
                  <div className="info-label">Webseite</div>
                  <div className="info-value">
                    <a href="https://fimi-service.de" className="info-link-inline">www.fimi-service.de</a>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-label">Adresse</div>
                  <div className="info-value">
                    <div className="info-value-with-copy">
                      <div>
                        Kellerstr. 39<br/>
                        84036 Landshut<br/>
                        Deutschland
                      </div>
                      <button
                        onClick={() => copyToClipboard('Kellerstr. 39, 84036 Landshut, Deutschland', 'adresse')}
                        className={`copy-btn ${copiedItem === 'adresse' ? 'copied' : ''}`}
                        title="Adresse kopieren"
                      >
                        {copiedItem === 'adresse' ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-label">Geschaeftsfuehrung</div>
                  <div className="info-value">
                    Ntonalnt Tzoutzis & Ergest Qiraj
                    <span className="info-note">
                      Vertretungsberechtigte Gesellschafter und inhaltlich verantwortlich gemaess Par. 18 Abs. 2 MStV
                    </span>
                  </div>
                </div>
              </section>

              {/* Registerdaten */}
              <section id="register" className="content-block">
                <h2 className="block-title">Registerdaten</h2>

                <div className="info-row">
                  <div className="info-label">Registergericht</div>
                  <div className="info-value">Amtsgericht Landshut</div>
                </div>

                <div className="info-row">
                  <div className="info-label">Handelsregister</div>
                  <div className="info-value">
                    In Bearbeitung
                    <span className="info-note info-note-placeholder">
                      GmbH-Eintragung voraussichtlich Januar 2026
                    </span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-label">Umsatzsteuer-ID</div>
                  <div className="info-value">
                    <div className="info-value-with-copy">
                      <div>DE347549925</div>
                      <button
                        onClick={() => copyToClipboard('DE347549925', 'ust')}
                        className={`copy-btn ${copiedItem === 'ust' ? 'copied' : ''}`}
                        title="UST-ID kopieren"
                      >
                        {copiedItem === 'ust' ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontakt */}
              <section id="kontakt" className="content-block">
                <h2 className="block-title">Kontakt</h2>

                <div className="info-row">
                  <div className="info-label">Telefon</div>
                  <div className="info-value">
                    <div className="info-value-with-copy">
                      <div>
                        <a href="tel:+4987143033460" className="info-link-inline">0871 430 334 60</a>
                      </div>
                      <button
                        onClick={() => copyToClipboard('+49 871 430 334 60', 'phone')}
                        className={`copy-btn ${copiedItem === 'phone' ? 'copied' : ''}`}
                        title="Telefonnummer kopieren"
                      >
                        {copiedItem === 'phone' ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-label">E-Mail</div>
                  <div className="info-value">
                    <div className="info-value-with-copy">
                      <div>
                        <a href="mailto:info@fimi-service.de" className="info-link-inline">info@fimi-service.de</a>
                      </div>
                      <button
                        onClick={() => copyToClipboard('info@fimi-service.de', 'email')}
                        className={`copy-btn ${copiedItem === 'email' ? 'copied' : ''}`}
                        title="E-Mail kopieren"
                      >
                        {copiedItem === 'email' ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-label">Antwortzeit</div>
                  <div className="info-value">Innerhalb von 24 Stunden</div>
                </div>
              </section>

              {/* Standort */}
              <section id="standort" className="content-block">
                <h2 className="block-title">Standort</h2>

                <p className="block-description">
                  Unser Firmensitz befindet sich in Landshut, Niederbayern. Persoenliche Termine sind nach vorheriger Vereinbarung jederzeit moeglich.
                </p>

                {/* Einsatzgebiete Badge */}
                <div className="einsatzgebiete-badge">
                  <div className="einsatzgebiete-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="einsatzgebiete-content">
                    <h3>8 Einsatzgebiete in Bayern</h3>
                    <p>Landshut - Muenchen - Regensburg - Ingolstadt - Freising - Erding - Straubing - Passau</p>
                  </div>
                </div>

                {/* Map */}
                <div className="map-wrapper">
                  <div className="map-overlay">
                    <div className="map-overlay-logo">
                      <Image
                        src="/FIMI-LOGO/Fimi-Favicon.png"
                        alt="FIMI"
                        width={44}
                        height={44}
                      />
                      <h3 className="map-overlay-title">FIMI Gebaeudereinigung</h3>
                    </div>
                    <p className="map-overlay-address">
                      Kellerstr. 39<br/>
                      84036 Landshut, Bayern
                    </p>
                    <div className="map-overlay-actions">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Kellerstr.+39,+84036+Landshut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-btn map-btn-primary"
                      >
                        Route planen
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                      <a href="tel:+4987143033460" className="map-btn map-btn-secondary">
                        Anrufen
                      </a>
                    </div>
                  </div>
                  <div className="map-container">
                    <iframe
                      src="https://maps.google.com/maps?q=Kellerstra%C3%9Fe+39,+84036+Landshut,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="FIMI Gebaeudereinigung Standort"
                    />
                  </div>
                </div>
              </section>

              {/* Streitbeilegung */}
              <section id="streit" className="content-block streit-section">
                <h2 className="block-title">Streitbeilegung</h2>

                <div className="streit-box">
                  <div className="streit-item">
                    <h3>EU-Streitschlichtung</h3>
                    <p>
                      Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                      <a
                        href="https://ec.europa.eu/consumers/odr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="streit-link"
                      >
                        ec.europa.eu/consumers/odr
                      </a>
                    </p>
                  </div>
                  <div className="streit-item">
                    <h3>Verbraucherstreitbeilegung</h3>
                    <p>
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>
      </main>
    </>
  )
}
