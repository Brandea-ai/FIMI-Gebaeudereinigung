'use client'

import React, { useState, useEffect, useRef } from 'react'
import './agb.css'

export default function AGBContent() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isNavButtonVisible, setIsNavButtonVisible] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [showScrollToBottom, setShowScrollToBottom] = useState(true)
  const [hasPopped, setHasPopped] = useState({ top: false, bottom: false })
  const [hideButtons, setHideButtons] = useState(false)

  const lastScrollTop = useRef(0)
  const isScrolling = useRef<NodeJS.Timeout | null>(null)
  const mobileNavContentRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)
  const touchEndY = useRef(0)
  const footerRef = useRef<HTMLElement | null>(null)
  const hasPoppedRef = useRef({ top: false, bottom: false })

  const navItems = [
    { id: 'agb-hauptteil', label: 'AGB & Rechtliche Hinweise', main: true },
    { id: 'agb-p1', label: '§ 1 Geltungsbereich' },
    { id: 'agb-p2', label: '§ 2 Vertragsschluss' },
    { id: 'agb-p3', label: '§ 3 Leistungsumfang' },
    { id: 'agb-p4', label: '§ 4 Leistungsausfuehrung' },
    { id: 'agb-p5', label: '§ 5 Mitwirkungspflichten' },
    { id: 'agb-p6', label: '§ 6 Verguetung & Zahlung' },
    { id: 'agb-p7', label: '§ 7 Termine & Fristen' },
    { id: 'agb-p8', label: '§ 8 Gewaehrleistung' },
    { id: 'agb-p9', label: '§ 9 Haftung' },
    { id: 'agb-p10', label: '§ 10 Kuendigung' },
    { id: 'agb-p11', label: '§ 11 Datenschutz' },
    { id: 'agb-p12', label: '§ 12 Schlussbestimmungen' },
    { id: 'rechtliche-hinweise', label: 'Rechtliche Hinweise', main: true },
    { id: 'haftung-inhalte', label: 'Haftung fuer Inhalte' },
    { id: 'haftung-links', label: 'Haftung fuer Links' },
    { id: 'urheberrecht', label: 'Urheberrecht' },
    { id: 'streitbeilegung', label: 'Streitbeilegung' }
  ]

  useEffect(() => {
    footerRef.current = document.querySelector('footer')
    if (!footerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHideButtons(entry.isIntersecting)
        })
      },
      { threshold: 0, rootMargin: '0px 0px -100px 0px' }
    )

    observer.observe(footerRef.current)
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = Math.min((scrollTop / scrollHeight) * 100, 100)
      setScrollProgress(progress)

      const shouldShowTop = scrollTop > 300
      const shouldShowBottom = scrollTop < scrollHeight - 100

      setShowScrollToTop(shouldShowTop)
      setShowScrollToBottom(shouldShowBottom)

      if (shouldShowTop && !hasPoppedRef.current.top) {
        hasPoppedRef.current.top = true
        setHasPopped(prev => ({ ...prev, top: true }))
        setTimeout(() => setHasPopped(prev => ({ ...prev, top: false })), 600)
      }
      if (shouldShowBottom && !hasPoppedRef.current.bottom) {
        hasPoppedRef.current.bottom = true
        setHasPopped(prev => ({ ...prev, bottom: true }))
        setTimeout(() => setHasPopped(prev => ({ ...prev, bottom: false })), 600)
      }

      if (window.innerWidth < 1024) {
        if (isScrolling.current) {
          clearTimeout(isScrolling.current)
        }

        const currentScroll = scrollTop

        if (currentScroll > lastScrollTop.current && currentScroll > 100) {
          setIsNavButtonVisible(false)
        } else if (currentScroll < lastScrollTop.current) {
          setIsNavButtonVisible(true)
        }

        if (currentScroll <= 50) {
          setIsNavButtonVisible(true)
        }

        lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll

        isScrolling.current = setTimeout(() => {
          setIsNavButtonVisible(true)
        }, 1000)
      }

      if (window.innerWidth >= 1024) {
        const sections = document.querySelectorAll('.section-tracked')
        let currentSectionId = ''
        const scrollPosition = window.scrollY + 120

        sections.forEach((section) => {
          const element = section as HTMLElement
          if (element.offsetTop <= scrollPosition) {
            currentSectionId = element.id
          }
        })

        if (currentSectionId) {
          setActiveSection(currentSectionId)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (isScrolling.current) {
        clearTimeout(isScrolling.current)
      }
    }
  }, [])

  const openMobileNav = () => {
    setIsMobileNavOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
    document.body.style.overflow = ''
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY
    const dragDistance = touchEndY.current - touchStartY.current

    if (dragDistance > 0 && mobileNavContentRef.current) {
      mobileNavContentRef.current.style.transform = `translateY(${dragDistance}px)`
    }
  }

  const handleTouchEnd = () => {
    const dragDistance = touchEndY.current - touchStartY.current

    if (mobileNavContentRef.current) {
      if (dragDistance > 100) {
        closeMobileNav()
      }
      mobileNavContentRef.current.style.transform = ''
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    if (isMobileNavOpen) {
      closeMobileNav()
      setTimeout(() => {
        const target = document.getElementById(targetId)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    } else {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <div className="scroll-progress" style={{ opacity: scrollProgress > 0 ? 1 : 0 }}>
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <section className="agb-header">
        <div className="agb-container">
          <h1 className="agb-header-title">Allgemeine Geschaeftsbedingungen & Rechtliche Hinweise</h1>
          <p className="agb-header-subtitle">der FIMI Gebaeudereinigung GmbH</p>
        </div>
      </section>

      <main className="agb-main">
        <div className="important-notice">
          <strong>Gueltigkeitserklaerung</strong>
          <p>Diese Allgemeinen Geschaeftsbedingungen gelten fuer alle Geschaeftsbeziehungen zwischen der FIMI Gebaeudereinigung GmbH und ihren Kunden. Mit der Beauftragung unserer Reinigungsleistungen erkennen Sie diese Bedingungen an.</p>
        </div>

        <div className="agb-container">
          <div className="agb-layout">
            <aside className="agb-sidebar">
              <nav>
                <h3 className="sidebar-title">Inhaltsverzeichnis</h3>
                <ul className="sidebar-nav">
                  {navItems.map((item) => {
                    const labelParts = item.label.split(' ')
                    const hasSection = labelParts[0].startsWith('§')

                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`nav-link ${item.main ? 'nav-main' : 'nav-sub'} ${activeSection === item.id ? 'active' : ''}`}
                          onClick={(e) => handleNavClick(e, item.id)}
                        >
                          {hasSection ? (
                            <>
                              <span style={{ color: activeSection === item.id ? 'inherit' : '#109387', fontWeight: 700 }}>{labelParts[0]} {labelParts[1]}</span>{' '}
                              {labelParts.slice(2).join(' ')}
                            </>
                          ) : (
                            item.label
                          )}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </aside>

            <div className="agb-content">
              <section id="agb-hauptteil" className="section-tracked content-block">
                <h2 className="section-title">Teil A: Allgemeine Geschaeftsbedingungen</h2>

                <article id="agb-p1" className="section-tracked">
                  <h3 className="subsection-title">1. Geltungsbereich</h3>
                  <p className="text-body">
                    (1) Diese Allgemeinen Geschaeftsbedingungen (nachfolgend &quot;AGB&quot;) der FIMI Gebaeudereinigung GmbH (nachfolgend &quot;FIMI&quot;, &quot;wir&quot; oder &quot;uns&quot;) gelten fuer saemtliche Angebote, Lieferungen und Leistungen im Bereich der Gebaeudereinigung und des Facility Managements.
                  </p>

                  <div className="info-box">
                    <p className="text-body"><strong>Unsere Leistungsbereiche:</strong></p>
                    <ul className="standard-list">
                      <li><strong>Unterhaltsreinigung:</strong> Regelmaessige Reinigung von Bueros, Praxen, Geschaeftsraeumen</li>
                      <li><strong>Industriereinigung:</strong> Reinigung von Produktionshallen, Lagern, Werkstaetten</li>
                      <li><strong>Bueroreinigung:</strong> Professionelle Reinigung von Buero- und Verwaltungsgebaeuden</li>
                      <li><strong>Sonderreinigungen:</strong> Baureinigung, Grundreinigung, Fensterreinigung</li>
                      <li><strong>Facility Management:</strong> Hausmeisterservice, Winterdienst, Gruenpflege</li>
                    </ul>
                  </div>

                  <p className="text-body">
                    (2) Unsere Leistungen richten sich sowohl an Unternehmer im Sinne des § 14 BGB als auch an oeffentliche Auftraggeber und Privatpersonen.
                  </p>

                  <p className="text-body">
                    (3) Abweichende, entgegenstehende oder ergaenzende Allgemeine Geschaeftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn wir ihrer Geltung ausdruecklich schriftlich zugestimmt haben.
                  </p>
                </article>

                <article id="agb-p2" className="section-tracked">
                  <h3 className="subsection-title">2. Vertragsschluss</h3>
                  <p className="text-body">
                    (1) Unsere Angebote sind freibleibend und unverbindlich, sofern sie nicht ausdruecklich als verbindlich gekennzeichnet sind. Angebote haben eine Gueltigkeit von 30 Tagen.
                  </p>

                  <p className="text-body">
                    (2) Die Bestellung der Leistung durch den Kunden gilt als verbindliches Vertragsangebot. Der Vertrag kommt zustande durch:
                  </p>
                  <ul className="standard-list">
                    <li>Schriftliche Auftragsbestaetigung unsererseits</li>
                    <li>Beginn der Leistungserbringung</li>
                    <li>Unterzeichnung eines Reinigungsvertrages</li>
                  </ul>

                  <p className="text-body">
                    (3) Muendliche Nebenabreden beduerfender schriftlichen Bestaetigung, um Geltung zu erlangen.
                  </p>
                </article>

                <article id="agb-p3" className="section-tracked">
                  <h3 className="subsection-title">3. Leistungsumfang</h3>
                  <p className="text-body">
                    (1) Der Umfang der zu erbringenden Reinigungsleistungen ergibt sich aus dem jeweiligen Angebot, der Auftragsbestaetigung bzw. dem Reinigungsvertrag.
                  </p>

                  <p className="text-body">
                    (2) Regelmaessige Unterhaltsreinigung umfasst typischerweise:
                  </p>
                  <ul className="standard-list">
                    <li>Staubwischen aller erreichbaren Oberflaechen</li>
                    <li>Bodenreinigung (Saugen, Wischen)</li>
                    <li>Entleerung und Reinigung der Papierkoerbe</li>
                    <li>Reinigung der Sanitaeranlagen</li>
                    <li>Reinigung der Kuechen- und Pausenbereiche</li>
                  </ul>

                  <p className="text-body">
                    (3) Sonderleistungen wie Fensterreinigung, Grundreinigung oder Teppichreinigung sind gesondert zu vereinbaren und werden separat berechnet.
                  </p>
                </article>

                <article id="agb-p4" className="section-tracked">
                  <h3 className="subsection-title">4. Ausfuehrung der Leistungen</h3>
                  <p className="text-body">
                    (1) Wir erbringen unsere Reinigungsleistungen nach den anerkannten Regeln der Technik und mit der Sorgfalt eines ordentlichen Kaufmanns.
                  </p>

                  <p className="text-body">
                    (2) Die Reinigung erfolgt zu den vertraglich vereinbarten Zeiten. Bei Unterhaltsreinigung in der Regel ausserhalb der Geschaeftszeiten, sofern nicht anders vereinbart.
                  </p>

                  <p className="text-body">
                    (3) Wir setzen ausschliesslich geschultes und zuverlaessiges Personal ein. Alle Mitarbeiter sind versichert und zur Verschwiegenheit verpflichtet.
                  </p>

                  <p className="text-body">
                    (4) Wir verwenden umweltfreundliche Reinigungsmittel und arbeiten nach oekologischen Standards, soweit technisch moeglich und wirtschaftlich vertretbar.
                  </p>
                </article>

                <article id="agb-p5" className="section-tracked">
                  <h3 className="subsection-title">5. Mitwirkungspflichten des Auftraggebers</h3>
                  <p className="text-body">
                    (1) Der Auftraggeber unterstuetzt uns bei der Erbringung unserer Leistungen, indem er insbesondere:
                  </p>
                  <ul className="standard-list">
                    <li>Rechtzeitigen Zugang zu den zu reinigenden Raeumlichkeiten gewaehrleistet</li>
                    <li>Notwendige Schluessel oder Zugangscodes bereitstellt</li>
                    <li>Wasser- und Stromanschluesse zur Verfuegung stellt</li>
                    <li>Auf besondere Gefahrenquellen oder empfindliche Oberflaechen hinweist</li>
                    <li>Einen Ansprechpartner fuer Rueckfragen benennt</li>
                  </ul>

                  <p className="text-body">
                    (2) Kommt der Auftraggeber seinen Mitwirkungspflichten nicht nach, sind wir berechtigt, die Leistung zu unterbrechen. Dadurch entstehende Mehrkosten traegt der Auftraggeber.
                  </p>
                </article>

                <article id="agb-p6" className="section-tracked">
                  <h3 className="subsection-title">6. Verguetung und Zahlungsbedingungen</h3>
                  <p className="text-body">
                    (1) Die Verguetung richtet sich nach dem vereinbarten Angebot. Folgende Verguetungsmodelle sind moeglich:
                  </p>

                  <div className="info-box">
                    <p className="text-body"><strong>Verguetungsmodelle:</strong></p>
                    <ul className="standard-list">
                      <li><strong>Pauschalpreis:</strong> Monatliche Pauschale fuer regelmaessige Unterhaltsreinigung</li>
                      <li><strong>Quadratmeterpreis:</strong> Abrechnung nach gereinigter Flaeche</li>
                      <li><strong>Stundenpreis:</strong> Abrechnung nach tatsaechlichem Zeitaufwand</li>
                      <li><strong>Festpreis:</strong> Einmaliger Festpreis fuer definierte Sonderleistungen</li>
                    </ul>
                  </div>

                  <p className="text-body">
                    (2) Alle Preise verstehen sich zuzueglich der gesetzlichen Umsatzsteuer.
                  </p>

                  <p className="text-body">
                    (3) Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug zur Zahlung faellig. Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen in Hoehe von 9 Prozentpunkten ueber dem Basiszinssatz zu berechnen.
                  </p>

                  <p className="text-body">
                    (4) Bei laufenden Vertraegen erfolgt die Rechnungsstellung monatlich im Voraus oder nach Vereinbarung.
                  </p>
                </article>

                <article id="agb-p7" className="section-tracked">
                  <h3 className="subsection-title">7. Termine und Fristen</h3>
                  <p className="text-body">
                    (1) Vereinbarte Reinigungstermine sind fuer beide Parteien verbindlich.
                  </p>

                  <p className="text-body">
                    (2) Muss ein Termin verschoben werden, ist dies mindestens 24 Stunden vorher mitzuteilen. Bei kurzfristigeren Absagen behalten wir uns vor, anteilige Kosten in Rechnung zu stellen.
                  </p>

                  <p className="text-body">
                    (3) Leistungsverzoegerungen aufgrund hoeherer Gewalt (z.B. extreme Witterung, Pandemie) berechtigen uns, die Leistung um die Dauer des behindernden Ereignisses zu verschieben.
                  </p>
                </article>

                <article id="agb-p8" className="section-tracked">
                  <h3 className="subsection-title">8. Gewaehrleistung und Maengelruege</h3>
                  <p className="text-body">
                    (1) Der Auftraggeber ist verpflichtet, die erbrachte Reinigungsleistung unverzueglich zu pruefen und erkennbare Maengel innerhalb von 3 Werktagen schriftlich anzuzeigen.
                  </p>

                  <p className="text-body">
                    (2) Bei berechtigten Maengelruegen haben wir das Recht zur Nachbesserung. Die Nachbesserung erfolgt kostenfrei innerhalb angemessener Frist.
                  </p>

                  <p className="text-body">
                    (3) Die Gewaehrleistungsfrist betraegt 12 Monate ab Leistungserbringung, bei regelmaessiger Unterhaltsreinigung ab dem jeweiligen Reinigungstermin.
                  </p>
                </article>

                <article id="agb-p9" className="section-tracked">
                  <h3 className="subsection-title">9. Haftung</h3>
                  <p className="text-body">
                    (1) Wir haften unbeschraenkt fuer Schaeden aus der Verletzung des Lebens, des Koerpers oder der Gesundheit sowie fuer vorsaetzlich oder grob fahrlaessig verursachte Schaeden.
                  </p>

                  <p className="text-body">
                    (2) Bei leicht fahrlaessiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
                  </p>

                  <p className="text-body">
                    (3) Wir verfuegen ueber eine Betriebshaftpflichtversicherung mit angemessener Deckungssumme. Auf Wunsch stellen wir gerne einen Versicherungsnachweis zur Verfuegung.
                  </p>

                  <p className="text-body">
                    (4) Fuer Wertgegenstaende, Bargeld und aehnliches uebernehmen wir keine Haftung, sofern diese nicht in verschlossenen Behaeltnissen aufbewahrt werden.
                  </p>
                </article>

                <article id="agb-p10" className="section-tracked">
                  <h3 className="subsection-title">10. Vertragslaufzeit und Kuendigung</h3>
                  <p className="text-body">
                    (1) Die Vertragslaufzeit ergibt sich aus dem jeweiligen Reinigungsvertrag. Bei unbefristeten Vertraegen betraegt die Kuendigungsfrist 4 Wochen zum Monatsende.
                  </p>

                  <p className="text-body">
                    (2) Das Recht zur ausserordentlichen Kuendigung aus wichtigem Grund bleibt unberuehrt. Ein wichtiger Grund liegt insbesondere vor bei:
                  </p>
                  <ul className="standard-list">
                    <li>Zahlungsverzug von mehr als 30 Tagen</li>
                    <li>Wiederholter Verletzung wesentlicher Vertragspflichten</li>
                    <li>Insolvenzantrag einer Partei</li>
                  </ul>

                  <p className="text-body">
                    (3) Kuendigungen beduerfender Schriftform.
                  </p>
                </article>

                <article id="agb-p11" className="section-tracked">
                  <h3 className="subsection-title">11. Datenschutz</h3>
                  <p className="text-body">
                    (1) Wir verarbeiten personenbezogene Daten ausschliesslich im Rahmen der geltenden Datenschutzbestimmungen, insbesondere der DSGVO.
                  </p>

                  <p className="text-body">
                    (2) Die Verarbeitung erfolgt ausschliesslich zum Zweck der Vertragserfuellung und Kundenbetreuung.
                  </p>

                  <p className="text-body">
                    (3) Naehere Informationen finden Sie in unserer Datenschutzerklaerung unter{' '}
                    <a href="/datenschutz" className="text-link">fimi-service.de/datenschutz</a>.
                  </p>
                </article>

                <article id="agb-p12" className="section-tracked">
                  <h3 className="subsection-title">12. Schlussbestimmungen</h3>
                  <p className="text-body">
                    (1) Fuer diese AGB und die Vertragsbeziehung gilt das Recht der Bundesrepublik Deutschland.
                  </p>

                  <p className="text-body">
                    (2) Ausschliesslicher Gerichtsstand fuer alle Streitigkeiten ist Landshut, sofern der Auftraggeber Kaufmann, juristische Person des oeffentlichen Rechts oder oeffentlich-rechtliches Sondervermoegen ist.
                  </p>

                  <p className="text-body">
                    (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Gueltigkeit der uebrigen Bestimmungen unberuehrt.
                  </p>

                  <p className="text-body">
                    (4) Aenderungen und Ergaenzungen dieser AGB beduerfender Schriftform.
                  </p>
                </article>
              </section>

              <section id="rechtliche-hinweise" className="section-tracked content-block">
                <h2 className="section-title">Teil B: Rechtliche Hinweise fuer die Webseitennutzung</h2>

                <article id="haftung-inhalte" className="section-tracked">
                  <h3 className="subsection-title">Haftung fuer Inhalte</h3>
                  <p className="text-body">
                    Als Diensteanbieter sind wir gemaess § 7 Abs.1 TMG fuer eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, uebermittelte oder gespeicherte fremde Informationen zu ueberwachen.
                  </p>

                  <p className="text-body">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberuehrt. Eine diesbezuegliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung moeglich.
                  </p>
                </article>

                <article id="haftung-links" className="section-tracked">
                  <h3 className="subsection-title">Haftung fuer Links</h3>
                  <p className="text-body">
                    Unser Angebot enthaelt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Fuer die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>

                  <p className="text-body">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </article>

                <article id="urheberrecht" className="section-tracked">
                  <h3 className="subsection-title">Urheberrecht</h3>
                  <p className="text-body">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der Verwertung beduerfender schriftlichen Zustimmung des jeweiligen Autors.
                  </p>

                  <p className="text-body">
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                  </p>
                </article>

                <article id="streitbeilegung" className="section-tracked">
                  <h3 className="subsection-title">Streitschlichtung</h3>
                  <p className="text-body">
                    Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-link">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>

                  <p className="text-body">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </article>
              </section>

              <div className="version-info">
                <p className="text-body"><strong>Stand der AGB & Rechtlichen Hinweise:</strong> November 2025 | <strong>Version:</strong> 1.0</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <button
        className={`mobile-nav-trigger ${!isNavButtonVisible ? 'hidden' : ''}`}
        onClick={openMobileNav}
        aria-label="Inhaltsverzeichnis oeffnen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      </button>

      <div
        className={`mobile-nav-modal ${isMobileNavOpen ? 'is-open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMobileNav()
        }}
      >
        <div
          className="mobile-nav-content"
          ref={mobileNavContentRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="mobile-nav-header">
            <h3>Inhaltsverzeichnis</h3>
            <button
              className="mobile-nav-close"
              onClick={closeMobileNav}
              aria-label="Inhaltsverzeichnis schliessen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
          <nav className="mobile-nav-menu">
            <ul>
              {navItems.map((item) => {
                const labelParts = item.label.split(' ')
                const hasSection = labelParts[0].startsWith('§')

                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={item.main ? 'nav-main' : 'nav-sub'}
                      onClick={(e) => handleNavClick(e, item.id)}
                    >
                      {hasSection ? (
                        <>
                          <span style={{ color: '#109387', fontWeight: 700 }}>{labelParts[0]} {labelParts[1]}</span>{' '}
                          {labelParts.slice(2).join(' ')}
                        </>
                      ) : (
                        item.label
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>

      <button
        className={`scroll-to-top ${showScrollToTop && !hideButtons ? 'visible' : ''} ${hasPopped.top ? 'pop' : ''}`}
        onClick={scrollToTop}
        aria-label="Nach oben scrollen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      <button
        className={`scroll-to-bottom ${showScrollToBottom && !hideButtons ? 'visible' : ''} ${hasPopped.bottom ? 'pop' : ''}`}
        onClick={scrollToBottom}
        aria-label="Nach unten scrollen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </>
  )
}
