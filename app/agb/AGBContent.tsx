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
    { id: 'agb-p4', label: '§ 4 Leistungsausführung' },
    { id: 'agb-p5', label: '§ 5 Mitwirkungspflichten' },
    { id: 'agb-p6', label: '§ 6 Vergütung & Zahlung' },
    { id: 'agb-p7', label: '§ 7 Termine & Fristen' },
    { id: 'agb-p8', label: '§ 8 Gewährleistung' },
    { id: 'agb-p9', label: '§ 9 Haftung' },
    { id: 'agb-p10', label: '§ 10 Kündigung' },
    { id: 'agb-p11', label: '§ 11 Datenschutz' },
    { id: 'agb-p12', label: '§ 12 Schlussbestimmungen' },
    { id: 'rechtliche-hinweise', label: 'Rechtliche Hinweise', main: true },
    { id: 'haftung-inhalte', label: 'Haftung für Inhalte' },
    { id: 'haftung-links', label: 'Haftung für Links' },
    { id: 'urheberrecht', label: 'Urheberrecht' },
    { id: 'streitbeilegung', label: 'Streitbeilegung' },
    { id: 'unternehmenshinweise', label: 'Unternehmenshinweise', main: true },
    { id: 'handelsregister', label: 'Handelsregister' },
    { id: 'qualitaetsstandards', label: 'Qualitätsziele' }
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
          <h1 className="agb-header-title">Allgemeine Geschäftsbedingungen & Rechtliche Hinweise</h1>
          <p className="agb-header-subtitle">der FIMI Gebäudereinigung GmbH</p>
        </div>
      </section>

      <main className="agb-main">
        <div className="important-notice">
          <strong>Gültigkeitserklärung</strong>
          <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen der FIMI Gebäudereinigung GmbH und ihren Kunden. Mit der Beauftragung unserer Reinigungsleistungen erkennen Sie diese Bedingungen an.</p>
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
                <h2 className="section-title">Teil A: Allgemeine Geschäftsbedingungen</h2>

                <article id="agb-p1" className="section-tracked">
                  <h3 className="subsection-title">1. Geltungsbereich</h3>
                  <p className="text-body">
                    (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend &quot;AGB&quot;) der FIMI Gebäudereinigung GmbH (nachfolgend &quot;FIMI&quot;, &quot;wir&quot; oder &quot;uns&quot;) gelten für sämtliche Angebote, Lieferungen und Leistungen im Bereich der Gebäudereinigung und des Facility Managements.
                  </p>

                  <div className="info-box">
                    <p className="text-body"><strong>Unsere Leistungsbereiche:</strong></p>
                    <ul className="standard-list">
                      <li><strong>Unterhaltsreinigung:</strong> Regelmäßige Reinigung von Büros, Praxen, Geschäftsräumen</li>
                      <li><strong>Industriereinigung:</strong> Reinigung von Produktionshallen, Lagern, Werkstätten</li>
                      <li><strong>Büroreinigung:</strong> Professionelle Reinigung von Büro- und Verwaltungsgebäuden</li>
                      <li><strong>Sonderreinigungen:</strong> Baureinigung, Grundreinigung, Fensterreinigung</li>
                      <li><strong>Facility Management:</strong> Hausmeisterservice, Winterdienst, Grünpflege</li>
                    </ul>
                  </div>

                  <p className="text-body">
                    (2) Unsere Leistungen richten sich sowohl an Unternehmer im Sinne des § 14 BGB als auch an öffentliche Auftraggeber und Privatpersonen.
                  </p>

                  <p className="text-body">
                    (3) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn wir ihrer Geltung ausdrücklich schriftlich zugestimmt haben.
                  </p>
                </article>

                <article id="agb-p2" className="section-tracked">
                  <h3 className="subsection-title">2. Vertragsschluss</h3>
                  <p className="text-body">
                    (1) Unsere Angebote sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind. Angebote haben eine Gültigkeit von 30 Tagen.
                  </p>

                  <p className="text-body">
                    (2) Die Bestellung der Leistung durch den Kunden gilt als verbindliches Vertragsangebot. Der Vertrag kommt zustande durch:
                  </p>
                  <ul className="standard-list">
                    <li>Schriftliche Auftragsbestätigung unsererseits</li>
                    <li>Beginn der Leistungserbringung</li>
                    <li>Unterzeichnung eines Reinigungsvertrages</li>
                  </ul>

                  <p className="text-body">
                    (3) Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung, um Geltung zu erlangen.
                  </p>
                </article>

                <article id="agb-p3" className="section-tracked">
                  <h3 className="subsection-title">3. Leistungsumfang</h3>
                  <p className="text-body">
                    (1) Der Umfang der zu erbringenden Reinigungsleistungen ergibt sich aus dem jeweiligen Angebot, der Auftragsbestätigung bzw. dem Reinigungsvertrag.
                  </p>

                  <p className="text-body">
                    (2) Regelmäßige Unterhaltsreinigung umfasst typischerweise:
                  </p>
                  <ul className="standard-list">
                    <li>Staubwischen aller erreichbaren Oberflächen</li>
                    <li>Bodenreinigung (Saugen, Wischen)</li>
                    <li>Entleerung und Reinigung der Papierkörbe</li>
                    <li>Reinigung der Sanitäranlagen</li>
                    <li>Reinigung der Küchen- und Pausenbereiche</li>
                  </ul>

                  <p className="text-body">
                    (3) Sonderleistungen wie Fensterreinigung, Grundreinigung oder Teppichreinigung sind gesondert zu vereinbaren und werden separat berechnet.
                  </p>
                </article>

                <article id="agb-p4" className="section-tracked">
                  <h3 className="subsection-title">4. Ausführung der Leistungen</h3>
                  <p className="text-body">
                    (1) Wir erbringen unsere Reinigungsleistungen nach den anerkannten Regeln der Technik und mit der Sorgfalt eines ordentlichen Kaufmanns.
                  </p>

                  <p className="text-body">
                    (2) Die Reinigung erfolgt zu den vertraglich vereinbarten Zeiten. Bei Unterhaltsreinigung in der Regel außerhalb der Geschäftszeiten, sofern nicht anders vereinbart.
                  </p>

                  <p className="text-body">
                    (3) Wir setzen ausschließlich geschultes und zuverlässiges Personal ein. Alle Mitarbeiter sind versichert und zur Verschwiegenheit verpflichtet.
                  </p>

                  <p className="text-body">
                    (4) Wir verwenden umweltfreundliche Reinigungsmittel und arbeiten nach ökologischen Standards, soweit technisch möglich und wirtschaftlich vertretbar.
                  </p>
                </article>

                <article id="agb-p5" className="section-tracked">
                  <h3 className="subsection-title">5. Mitwirkungspflichten des Auftraggebers</h3>
                  <p className="text-body">
                    (1) Der Auftraggeber unterstützt uns bei der Erbringung unserer Leistungen, indem er insbesondere:
                  </p>
                  <ul className="standard-list">
                    <li>Rechtzeitigen Zugang zu den zu reinigenden Räumlichkeiten gewährleistet</li>
                    <li>Notwendige Schlüssel oder Zugangscodes bereitstellt</li>
                    <li>Wasser- und Stromanschlüsse zur Verfügung stellt</li>
                    <li>Auf besondere Gefahrenquellen oder empfindliche Oberflächen hinweist</li>
                    <li>Einen Ansprechpartner für Rückfragen benennt</li>
                  </ul>

                  <p className="text-body">
                    (2) Kommt der Auftraggeber seinen Mitwirkungspflichten nicht nach, sind wir berechtigt, die Leistung zu unterbrechen. Dadurch entstehende Mehrkosten trägt der Auftraggeber.
                  </p>
                </article>

                <article id="agb-p6" className="section-tracked">
                  <h3 className="subsection-title">6. Vergütung und Zahlungsbedingungen</h3>
                  <p className="text-body">
                    (1) Die Vergütung richtet sich nach dem vereinbarten Angebot. Folgende Vergütungsmodelle sind möglich:
                  </p>

                  <div className="info-box">
                    <p className="text-body"><strong>Vergütungsmodelle:</strong></p>
                    <ul className="standard-list">
                      <li><strong>Pauschalpreis:</strong> Monatliche Pauschale für regelmäßige Unterhaltsreinigung</li>
                      <li><strong>Quadratmeterpreis:</strong> Abrechnung nach gereinigter Fläche</li>
                      <li><strong>Stundenpreis:</strong> Abrechnung nach tatsächlichem Zeitaufwand</li>
                      <li><strong>Festpreis:</strong> Einmaliger Festpreis für definierte Sonderleistungen</li>
                    </ul>
                  </div>

                  <p className="text-body">
                    (2) Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
                  </p>

                  <p className="text-body">
                    (3) Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz zu berechnen.
                  </p>

                  <p className="text-body">
                    (4) Bei laufenden Verträgen erfolgt die Rechnungsstellung monatlich im Voraus oder nach Vereinbarung.
                  </p>
                </article>

                <article id="agb-p7" className="section-tracked">
                  <h3 className="subsection-title">7. Termine und Fristen</h3>
                  <p className="text-body">
                    (1) Vereinbarte Reinigungstermine sind für beide Parteien verbindlich.
                  </p>

                  <p className="text-body">
                    (2) Muss ein Termin verschoben werden, ist dies mindestens 24 Stunden vorher mitzuteilen. Bei kurzfristigeren Absagen behalten wir uns vor, anteilige Kosten in Rechnung zu stellen.
                  </p>

                  <p className="text-body">
                    (3) Leistungsverzögerungen aufgrund höherer Gewalt (z.B. extreme Witterung, Pandemie) berechtigen uns, die Leistung um die Dauer des behindernden Ereignisses zu verschieben.
                  </p>
                </article>

                <article id="agb-p8" className="section-tracked">
                  <h3 className="subsection-title">8. Gewährleistung und Mängelrüge</h3>
                  <p className="text-body">
                    (1) Der Auftraggeber ist verpflichtet, die erbrachte Reinigungsleistung unverzüglich zu prüfen und erkennbare Mängel innerhalb von 3 Werktagen schriftlich anzuzeigen.
                  </p>

                  <p className="text-body">
                    (2) Bei berechtigten Mängelrügen haben wir das Recht zur Nachbesserung. Die Nachbesserung erfolgt kostenfrei innerhalb angemessener Frist.
                  </p>

                  <p className="text-body">
                    (3) Die Gewährleistungsfrist beträgt 12 Monate ab Leistungserbringung, bei regelmäßiger Unterhaltsreinigung ab dem jeweiligen Reinigungstermin.
                  </p>
                </article>

                <article id="agb-p9" className="section-tracked">
                  <h3 className="subsection-title">9. Haftung</h3>
                  <p className="text-body">
                    (1) Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.
                  </p>

                  <p className="text-body">
                    (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
                  </p>

                  <p className="text-body">
                    (3) Wir verfügen über eine Betriebshaftpflichtversicherung mit angemessener Deckungssumme. Auf Wunsch stellen wir gerne einen Versicherungsnachweis zur Verfügung.
                  </p>

                  <p className="text-body">
                    (4) Für Wertgegenstände, Bargeld und ähnliches übernehmen wir keine Haftung, sofern diese nicht in verschlossenen Behältnissen aufbewahrt werden.
                  </p>
                </article>

                <article id="agb-p10" className="section-tracked">
                  <h3 className="subsection-title">10. Vertragslaufzeit und Kündigung</h3>
                  <p className="text-body">
                    (1) Die Vertragslaufzeit ergibt sich aus dem jeweiligen Reinigungsvertrag. Bei unbefristeten Verträgen beträgt die Kündigungsfrist 4 Wochen zum Monatsende.
                  </p>

                  <p className="text-body">
                    (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor bei:
                  </p>
                  <ul className="standard-list">
                    <li>Zahlungsverzug von mehr als 30 Tagen</li>
                    <li>Wiederholter Verletzung wesentlicher Vertragspflichten</li>
                    <li>Insolvenzantrag einer Partei</li>
                  </ul>

                  <p className="text-body">
                    (3) Kündigungen bedürfen der Schriftform.
                  </p>
                </article>

                <article id="agb-p11" className="section-tracked">
                  <h3 className="subsection-title">11. Datenschutz</h3>
                  <p className="text-body">
                    (1) Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzbestimmungen, insbesondere der DSGVO.
                  </p>

                  <p className="text-body">
                    (2) Die Verarbeitung erfolgt ausschließlich zum Zweck der Vertragserfüllung und Kundenbetreuung.
                  </p>

                  <p className="text-body">
                    (3) Nähere Informationen finden Sie in unserer Datenschutzerklärung unter{' '}
                    <a href="/datenschutz" className="text-link">fimi-reinigung.ch/datenschutz</a>.
                  </p>
                </article>

                <article id="agb-p12" className="section-tracked">
                  <h3 className="subsection-title">12. Schlussbestimmungen</h3>
                  <p className="text-body">
                    (1) Für diese AGB und die Vertragsbeziehung gilt das Recht der Bundesrepublik Deutschland.
                  </p>

                  <p className="text-body">
                    (2) Ausschließlicher Gerichtsstand für alle Streitigkeiten ist Landshut, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                  </p>

                  <p className="text-body">
                    (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.
                  </p>

                  <p className="text-body">
                    (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                  </p>
                </article>
              </section>

              <section id="rechtliche-hinweise" className="section-tracked content-block">
                <h2 className="section-title">Teil B: Rechtliche Hinweise für die Webseitennutzung</h2>

                <article id="haftung-inhalte" className="section-tracked">
                  <h3 className="subsection-title">Haftung für Inhalte</h3>
                  <p className="text-body">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                  </p>

                  <p className="text-body">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                  </p>
                </article>

                <article id="haftung-links" className="section-tracked">
                  <h3 className="subsection-title">Haftung für Links</h3>
                  <p className="text-body">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>

                  <p className="text-body">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </article>

                <article id="urheberrecht" className="section-tracked">
                  <h3 className="subsection-title">Urheberrecht</h3>
                  <p className="text-body">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
                  </p>

                  <p className="text-body">
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                  </p>
                </article>

                <article id="streitbeilegung" className="section-tracked">
                  <h3 className="subsection-title">Streitschlichtung</h3>
                  <p className="text-body">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-link">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>

                  <p className="text-body">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </article>
              </section>

              <section id="unternehmenshinweise" className="section-tracked content-block">
                <h2 className="section-title">Teil C: Unternehmenshinweise</h2>

                <article id="handelsregister" className="section-tracked">
                  <h3 className="subsection-title">Handelsregistereintragung</h3>
                  <p className="text-body">
                    Die FIMI Gebäudereinigung GmbH befindet sich derzeit im Gründungsprozess. Die Eintragung in das Handelsregister beim Amtsgericht Landshut ist für <strong>Januar 2026</strong> vorgesehen.
                  </p>

                  <div className="info-box">
                    <p className="text-body"><strong>Aktueller Status:</strong></p>
                    <ul className="standard-list">
                      <li><strong>Rechtsform:</strong> GmbH in Gründung (i.Gr.)</li>
                      <li><strong>Zuständiges Amtsgericht:</strong> Landshut</li>
                      <li><strong>Geplante Eintragung:</strong> Januar 2026</li>
                      <li><strong>HRB-Nummer:</strong> Wird nach erfolgreicher Eintragung hier veröffentlicht</li>
                    </ul>
                  </div>

                  <p className="text-body">
                    Bis zur Eintragung handeln wir als Einzelunternehmen unter dem Namen FIMI Gebäudereinigung. Mit der Eintragung im Handelsregister wird diese Seite entsprechend aktualisiert.
                  </p>
                </article>

                <article id="qualitaetsstandards" className="section-tracked">
                  <h3 className="subsection-title">Qualitätsstandards & Zertifizierungen</h3>
                  <p className="text-body">
                    FIMI Gebäudereinigung arbeitet nach höchsten Qualitätsstandards. Wir streben kontinuierlich nach Verbesserung unserer Prozesse und Dienstleistungen.
                  </p>

                  <div className="info-box">
                    <p className="text-body"><strong>Geplante Zertifizierungen:</strong></p>
                    <ul className="standard-list">
                      <li><strong>ISO 9001:2015</strong> Qualitätsmanagementsystem - Ziel: 2026</li>
                      <li><strong>ISO 14001:2015</strong> Umweltmanagementsystem - Ziel: 2026</li>
                    </ul>
                  </div>

                  <p className="text-body">
                    Unsere Mitarbeiter werden regelmäßig geschult und arbeiten nach standardisierten Reinigungsverfahren. Wir dokumentieren alle Leistungen transparent und stehen für Qualitätsprüfungen jederzeit zur Verfügung.
                  </p>

                  <p className="text-body">
                    <strong>Unsere Qualitätsgrundsätze:</strong>
                  </p>
                  <ul className="standard-list">
                    <li>Verwendung umweltfreundlicher Reinigungsmittel</li>
                    <li>Regelmäßige Qualitätskontrollen</li>
                    <li>Kontinuierliche Mitarbeiterschulungen</li>
                    <li>Transparente Dokumentation aller Leistungen</li>
                    <li>Schnelle Reaktion auf Kundenfeedback</li>
                  </ul>
                </article>
              </section>

              <div className="version-info">
                <p className="text-body"><strong>Stand der AGB & Rechtlichen Hinweise:</strong> November 2025 | <strong>Version:</strong> 1.1</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <button
        className={`mobile-nav-trigger ${!isNavButtonVisible ? 'hidden' : ''}`}
        onClick={openMobileNav}
        aria-label="Inhaltsverzeichnis öffnen"
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
              aria-label="Inhaltsverzeichnis schließen"
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
