'use client';

import React, { useState, useEffect, useRef } from 'react';
import './datenschutz.css';

export default function DatenschutzContent() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isNavButtonVisible, setIsNavButtonVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(true);
  const [hasPopped, setHasPopped] = useState({ top: false, bottom: false });
  const [hideButtons, setHideButtons] = useState(false);

  const lastScrollTop = useRef(0);
  const isScrolling = useRef<NodeJS.Timeout | null>(null);
  const mobileNavContentRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const footerRef = useRef<HTMLElement | null>(null);
  const hasPoppedRef = useRef({ top: false, bottom: false });

  // Navigation items - angepasst fuer Gebaeudereinigung
  const navItems = [
    { id: 'datenschutz-hauptteil', label: 'Datenschutzerklaerung', main: true },
    { id: 'ueberblick', label: '§ 1 Auf einen Blick' },
    { id: 'hosting', label: '§ 2 Hosting' },
    { id: 'allgemeine-hinweise', label: '§ 3 Allgemeine Hinweise' },
    { id: 'datenerfassung', label: '§ 4 Datenerfassung' },
    { id: 'cookies', label: '§ 5 Cookies' },
    { id: 'kontaktformular', label: '§ 6 Kontaktaufnahme' },
    { id: 'soziale-medien', label: '§ 7 Soziale Medien' },
    { id: 'analyse-tools', label: '§ 8 Analyse-Tools' },
    { id: 'newsletter', label: '§ 9 Newsletter' },
    { id: 'plugins', label: '§ 10 Plugins & Tools' },
    { id: 'kundendaten', label: '§ 11 Kunden- & Vertragsdaten' },
    { id: 'bewerberdaten', label: '§ 12 Bewerberdaten' },
    { id: 'betroffenenrechte', label: '§ 13 Ihre Rechte' },
    { id: 'aenderungen', label: '§ 14 Aenderungen' }
  ];

  // Footer IntersectionObserver
  useEffect(() => {
    footerRef.current = document.querySelector('footer');
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHideButtons(entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  // Scroll Progress & Button Visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
      setScrollProgress(progress);

      const shouldShowTop = scrollTop > 300;
      const shouldShowBottom = scrollTop < scrollHeight - 100;
      setShowScrollToTop(shouldShowTop);
      setShowScrollToBottom(shouldShowBottom);

      if (shouldShowTop && !hasPoppedRef.current.top) {
        hasPoppedRef.current.top = true;
        setHasPopped(prev => ({ ...prev, top: true }));
        setTimeout(() => setHasPopped(prev => ({ ...prev, top: false })), 600);
      }
      if (shouldShowBottom && !hasPoppedRef.current.bottom) {
        hasPoppedRef.current.bottom = true;
        setHasPopped(prev => ({ ...prev, bottom: true }));
        setTimeout(() => setHasPopped(prev => ({ ...prev, bottom: false })), 600);
      }

      if (window.innerWidth < 1024) {
        if (isScrolling.current) clearTimeout(isScrolling.current);
        const currentScroll = scrollTop;
        if (currentScroll > lastScrollTop.current && currentScroll > 100) {
          setIsNavButtonVisible(false);
        } else if (currentScroll < lastScrollTop.current) {
          setIsNavButtonVisible(true);
        }
        if (currentScroll <= 50) setIsNavButtonVisible(true);
        lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
        isScrolling.current = setTimeout(() => setIsNavButtonVisible(true), 1000);
      }

      if (window.innerWidth >= 1024) {
        const sections = document.querySelectorAll('.section-tracked');
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120;
        sections.forEach((section) => {
          const element = section as HTMLElement;
          if (element.offsetTop <= scrollPosition) {
            currentSectionId = element.id;
          }
        });
        if (currentSectionId) setActiveSection(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (isScrolling.current) clearTimeout(isScrolling.current);
    };
  }, []);

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
    document.body.style.overflow = 'hidden';
    if ('vibrate' in navigator) navigator.vibrate(10);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    document.body.style.overflow = '';
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
    const dragDistance = touchEndY.current - touchStartY.current;
    if (dragDistance > 0 && mobileNavContentRef.current) {
      mobileNavContentRef.current.style.transform = `translateY(${dragDistance}px)`;
    }
  };

  const handleTouchEnd = () => {
    const dragDistance = touchEndY.current - touchStartY.current;
    if (mobileNavContentRef.current) {
      if (dragDistance > 100) closeMobileNav();
      mobileNavContentRef.current.style.transform = '';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if ('vibrate' in navigator) navigator.vibrate(10);
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    if ('vibrate' in navigator) navigator.vibrate(10);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if ('vibrate' in navigator) navigator.vibrate(10);
    if (isMobileNavOpen) {
      closeMobileNav();
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const generateDeleteRequest = () => {
    const text = `Antrag auf Loeschung personenbezogener Daten gemaess Art. 17 DSGVO

An
FIMI Gebaeudereinigung GmbH
Kellerstr. 39
84036 Landshut
Deutschland

[Ihr Name]
[Ihre Adresse]
[Datum]

Betreff: Antrag auf Loeschung personenbezogener Daten gemaess Art. 17 DSGVO

Sehr geehrte Damen und Herren,

hiermit beantrage ich gemaess Art. 17 DSGVO die unverzuegliche Loeschung aller mich betreffenden personenbezogenen Daten, die Sie ueber mich gespeichert haben.

Folgende Daten sind mir bekannt:
- Referenznummer (falls vorhanden): _______________
- E-Mail-Adresse: _______________
- Name: _______________

Ich bitte um schriftliche Bestaetigung der Loeschung innerhalb der gesetzlichen Frist von einem Monat.

Mit freundlichen Gruessen
[Unterschrift]`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Loeschantrag_FIMI_Gebaeudereinigung_GmbH.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateRevokeRequest = () => {
    const text = `Widerruf der Einwilligung gemaess Art. 7 Abs. 3 DSGVO

An
FIMI Gebaeudereinigung GmbH
Kellerstr. 39
84036 Landshut
Deutschland

[Ihr Name]
[Ihre Adresse]
[Datum]

Betreff: Widerruf der Einwilligung zur Datenverarbeitung

Sehr geehrte Damen und Herren,

hiermit widerrufe ich meine erteilte Einwilligung zur Verarbeitung meiner personenbezogenen Daten gemaess Art. 7 Abs. 3 DSGVO mit sofortiger Wirkung.

Der Widerruf betrifft folgende Verarbeitung(en):
[Bitte spezifizieren Sie, z.B.: Newsletter, Marketing, etc.]

Ich fordere Sie auf, die Verarbeitung meiner Daten auf Grundlage der widerrufenen Einwilligung unverzueglich einzustellen und mich schriftlich ueber die ergriffenen Massnahmen zu informieren.

Mit freundlichen Gruessen
[Unterschrift]`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Widerruf_Einwilligung_FIMI_Gebaeudereinigung_GmbH.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className={`scroll-progress ${scrollProgress > 5 ? 'visible' : ''}`}>
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Header */}
      <section className="datenschutz-header">
        <div className="datenschutz-header-content">
          <h1 className="datenschutz-header-title">Datenschutzerklaerung</h1>
          <p className="datenschutz-header-subtitle">der FIMI Gebäudereinigung GmbH i.Gr.</p>
        </div>
      </section>

      <main className="datenschutz-main">
        <div className="important-notice">
          <strong>Datenschutz ist Vertrauenssache</strong>
          <p>Der Schutz Ihrer persoenlichen Daten hat fuer uns hoechste Prioritaet. Diese Datenschutzerklaerung informiert Sie umfassend ueber Art, Umfang und Zweck der Datenverarbeitung.</p>
        </div>

        <div className="datenschutz-container">
          <div className="datenschutz-layout">

            {/* Sticky Sidebar */}
            <aside className="datenschutz-sidebar">
              <nav>
                <h3 className="sidebar-title">Inhaltsverzeichnis</h3>
                <ul className="sidebar-nav">
                  {navItems.map((item) => {
                    const labelParts = item.label.split(' ');
                    const hasSection = labelParts[0].startsWith('§');
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`nav-link ${item.main ? 'nav-main' : 'nav-sub'} ${activeSection === item.id ? 'active' : ''}`}
                          onClick={(e) => handleNavClick(e, item.id)}
                        >
                          {hasSection ? (
                            <>
                              <span style={{ color: '#109387', fontWeight: 600 }}>{labelParts[0]} {labelParts[1]}</span>{' '}
                              {labelParts.slice(2).join(' ')}
                            </>
                          ) : item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="datenschutz-content">

              {/* Einleitung */}
              <section id="datenschutz-hauptteil" className="section-tracked content-block">
                <h2 className="section-title">Datenschutzerklaerung</h2>
                <p className="text-body">
                  Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persoenlich identifiziert werden koennen. Ausfuehrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgefuehrten Datenschutzerklaerung.
                </p>
              </section>

              {/* 1. Auf einen Blick */}
              <section id="ueberblick" className="section-tracked content-block">
                <h2 className="section-title">1. Datenschutz auf einen Blick</h2>

                <h3 className="subsection-title">Datenerfassung auf dieser Website</h3>
                <p className="text-body"><strong>Wer ist verantwortlich fuer die Datenerfassung auf dieser Website?</strong></p>
                <p className="text-body">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten koennen Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklaerung entnehmen.
                </p>

                <p className="text-body"><strong>Wie erfassen wir Ihre Daten?</strong></p>
                <p className="text-body">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="text-body">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <p className="text-body"><strong>Wofuer nutzen wir Ihre Daten?</strong></p>
                <p className="text-body">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewaehrleisten. Andere Daten koennen zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <p className="text-body"><strong>Welche Rechte haben Sie bezueglich Ihrer Daten?</strong></p>
                <p className="text-body">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft ueber Herkunft, Empfaenger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben ausserdem ein Recht, die Berichtigung oder Loeschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, koennen Sie diese Einwilligung jederzeit fuer die Zukunft widerrufen. Ausserdem haben Sie das Recht, unter bestimmten Umstaenden die Einschraenkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
              </section>

              {/* 2. Hosting */}
              <section id="hosting" className="section-tracked content-block">
                <h2 className="section-title">2. Hosting</h2>
                <p className="text-body">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

                <h3 className="subsection-title">Vercel</h3>
                <p className="text-body">
                  Diese Website wird extern bei Vercel Inc. gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die ueber eine Website generiert werden, handeln.
                </p>

                <div className="info-box">
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-table-label">Anbieter:</td>
                        <td className="info-table-value"><strong>Vercel Inc.</strong></td>
                      </tr>
                      <tr>
                        <td className="info-table-label">Anschrift:</td>
                        <td className="info-table-value">340 S Lemon Ave #4133, Walnut, CA 91789, USA</td>
                      </tr>
                      <tr>
                        <td className="info-table-label">Datenschutz:</td>
                        <td className="info-table-value">
                          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-link">https://vercel.com/legal/privacy-policy</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-body">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfuellung gegenueber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </section>

              {/* 3. Allgemeine Hinweise */}
              <section id="allgemeine-hinweise" className="section-tracked content-block">
                <h2 className="section-title">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                <h3 className="subsection-title">Datenschutz</h3>
                <p className="text-body">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persoenlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklaerung.
                </p>
                <p className="text-body">
                  Wir weisen darauf hin, dass die Datenuebertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsluecken aufweisen kann. Ein lueckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht moeglich.
                </p>

                <h3 className="subsection-title">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-body">Die verantwortliche Stelle fuer die Datenverarbeitung auf dieser Website ist:</p>

                <div className="info-box">
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-table-label">Firma:</td>
                        <td className="info-table-value"><strong>FIMI Gebäudereinigung GmbH i.Gr.</strong></td>
                      </tr>
                      <tr>
                        <td className="info-table-label">Vertretung:</td>
                        <td className="info-table-value">Ntonalnt Tzoutzis & Ergest Qiraj (Geschaeftsfuehrer)</td>
                      </tr>
                      <tr>
                        <td className="info-table-label">Anschrift:</td>
                        <td className="info-table-value">
                          Kellerstr. 39<br/>
                          84036 Landshut<br/>
                          Deutschland
                        </td>
                      </tr>
                      <tr>
                        <td className="info-table-label">Telefon:</td>
                        <td className="info-table-value">
                          <a href="tel:+4987143033460" className="text-link">0871 430 334 60</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="info-table-label">E-Mail:</td>
                        <td className="info-table-value">
                          <a href="mailto:info@fimi-service.de" className="text-link">info@fimi-service.de</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="info-table-label">USt-IdNr.:</td>
                        <td className="info-table-value">DE347549925</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-body">
                  Verantwortliche Stelle ist die natuerliche oder juristische Person, die allein oder gemeinsam mit anderen ueber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.Ae.) entscheidet.
                </p>

                <h3 className="subsection-title">Speicherdauer</h3>
                <p className="text-body">
                  Soweit innerhalb dieser Datenschutzerklaerung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck fuer die Datenverarbeitung entfaellt. Wenn Sie ein berechtigtes Loeschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten geloescht, sofern wir keine anderen rechtlich zulaessigen Gruende fuer die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
                </p>

                <h3 className="subsection-title">Rechtsgrundlagen der Datenverarbeitung</h3>
                <div className="info-box">
                  <ul className="standard-list">
                    <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> - Einwilligung der betroffenen Person</li>
                    <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> - Vertragserfuellung oder vorvertragliche Massnahmen</li>
                    <li><strong>Art. 6 Abs. 1 lit. c DSGVO</strong> - Erfuellung rechtlicher Verpflichtungen</li>
                    <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> - Berechtigte Interessen des Verantwortlichen</li>
                  </ul>
                </div>

                <h3 className="subsection-title">Widerruf Ihrer Einwilligung</h3>
                <p className="text-body">
                  Viele Datenverarbeitungsvorgaenge sind nur mit Ihrer ausdruecklichen Einwilligung moeglich. Sie koennen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmaessigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberuehrt.
                </p>

                <h3 className="subsection-title">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                <div className="info-box" style={{ background: 'rgba(16, 147, 135, 0.05)' }}>
                  <p className="text-body" style={{ marginBottom: 0 }}>
                    <strong>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRUENDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN. WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG EINZULEGEN.</strong>
                  </p>
                </div>

                <h3 className="subsection-title">Beschwerderecht bei der Aufsichtsbehoerde</h3>
                <p className="text-body">
                  Im Falle von Verstoessen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehoerde, insbesondere in dem Mitgliedstaat ihres gewoehnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmasslichen Verstosses zu.
                </p>

                <h3 className="subsection-title">SSL- bzw. TLS-Verschluesselung</h3>
                <p className="text-body">
                  Diese Seite nutzt aus Sicherheitsgruenden und zum Schutz der Uebertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschluesselung. Eine verschluesselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              {/* 4. Datenerfassung */}
              <section id="datenerfassung" className="section-tracked content-block">
                <h2 className="section-title">4. Datenerfassung auf dieser Website</h2>

                <h3 className="subsection-title">Server-Log-Dateien</h3>
                <p className="text-body">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns uebermittelt. Dies sind:
                </p>
                <ul className="standard-list">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-body">
                  Eine Zusammenfuehrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
                </p>
              </section>

              {/* 5. Cookies */}
              <section id="cookies" className="section-tracked content-block">
                <h2 className="section-title">5. Cookies und Cookie-Einstellungen</h2>
                <p className="text-body">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgeraet keinen Schaden an. Sie werden entweder voruebergehend fuer die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgeraet gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch geloescht. Permanente Cookies bleiben auf Ihrem Endgeraet gespeichert, bis Sie diese selbst loeschen oder eine automatische Loeschung durch Ihren Webbrowser erfolgt.
                </p>

                <h3 className="subsection-title">Cookie-Banner und Ihre Einwilligung</h3>
                <p className="text-body">
                  Beim ersten Besuch unserer Website wird Ihnen ein Cookie-Banner angezeigt, ueber den Sie Ihre Einwilligung zu verschiedenen Cookie-Kategorien erteilen oder verweigern koennen. Ihre Auswahl wird in Ihrem Browser gespeichert (localStorage) und bei jedem weiteren Besuch beruecksichtigt.
                </p>

                <div className="info-box" style={{ background: 'rgba(16, 147, 135, 0.05)' }}>
                  <strong>Cookie-Einstellungen aendern:</strong> Sie koennen Ihre Cookie-Einstellungen jederzeit ueber den Link &quot;Cookie-Einstellungen&quot; im Footer unserer Website aendern oder widerrufen.
                </div>

                <h3 className="subsection-title">Arten von Cookies auf unserer Website</h3>
                <div className="info-box">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Kategorie</th>
                        <th>Beschreibung</th>
                        <th>Erforderlich</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Kategorie"><strong>Technisch notwendig</strong></td>
                        <td data-label="Beschreibung">Speichern Ihrer Cookie-Einstellungen</td>
                        <td data-label="Erforderlich">Ja</td>
                      </tr>
                      <tr>
                        <td data-label="Kategorie"><strong>Funktional</strong></td>
                        <td data-label="Beschreibung">Speichern Ihrer Praeferenzen und Einstellungen</td>
                        <td data-label="Erforderlich">Nein</td>
                      </tr>
                      <tr>
                        <td data-label="Kategorie"><strong>Externe Dienste</strong></td>
                        <td data-label="Beschreibung">Google Maps zur Standortanzeige im Impressum</td>
                        <td data-label="Erforderlich">Nein</td>
                      </tr>
                      <tr>
                        <td data-label="Kategorie"><strong>Analyse</strong></td>
                        <td data-label="Beschreibung">Google Analytics 4 (anonymisierte Nutzungsstatistiken)</td>
                        <td data-label="Erforderlich">Nein</td>
                      </tr>
                      <tr>
                        <td data-label="Kategorie"><strong>Marketing</strong></td>
                        <td data-label="Beschreibung">Derzeit nicht aktiv</td>
                        <td data-label="Erforderlich">Nein</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="subsection-title">Speicherung der Cookie-Einstellungen</h3>
                <div className="info-box">
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-table-label">Speicherort:</td>
                        <td className="info-table-value">localStorage (Browser)</td>
                      </tr>
                      <tr>
                        <td className="info-table-label">Speicherschluessel:</td>
                        <td className="info-table-value">fimi_cookie_consent</td>
                      </tr>
                      <tr>
                        <td className="info-table-label">Speicherdauer:</td>
                        <td className="info-table-value">Bis zur manuellen Loeschung oder Browserbereinigung</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-body">
                  Sie koennen Ihren Browser so einstellen, dass Sie ueber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies fuer bestimmte Faelle oder generell ausschliessen sowie das automatische Loeschen der Cookies beim Schliessen des Browsers aktivieren.
                </p>

                <div className="info-box">
                  <strong>Rechtsgrundlage:</strong> Cookies, die zur Durchfuehrung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter Funktionen erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Sofern eine Einwilligung abgefragt wurde, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
                </div>
              </section>

              {/* 6. Kontaktaufnahme */}
              <section id="kontaktformular" className="section-tracked content-block">
                <h2 className="section-title">6. Kontaktaufnahme</h2>

                <h3 className="subsection-title">Kontaktformular</h3>
                <p className="text-body">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und fuer den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-body">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfuellung eines Vertrags zusammenhaengt oder zur Durchfuehrung vorvertraglicher Massnahmen erforderlich ist. In allen uebrigen Faellen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>

                <h3 className="subsection-title">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-body">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3 className="subsection-title">Kommunikation via WhatsApp</h3>
                <p className="text-body">
                  Fuer die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen wir unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                </p>
                <p className="text-body">
                  Die Kommunikation erfolgt ueber eine Ende-zu-Ende-Verschluesselung (Peer-to-Peer), die verhindert, dass WhatsApp oder sonstige Dritte Zugriff auf die Kommunikationsinhalte erlangen koennen. WhatsApp erhaelt jedoch Zugriff auf Metadaten, die im Zuge des Kommunikationsvorgangs entstehen (z.B. Absender, Empfaenger und Zeitpunkt).
                </p>
                <div className="info-box">
                  <strong>Rechtsgrundlage:</strong> Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer moeglichst schnellen und effektiven Kommunikation mit Kunden, Interessenten und sonstigen Geschaefts- und Vertragspartnern (Art. 6 Abs. 1 lit. f DSGVO).
                </div>
              </section>

              {/* 7. Soziale Medien */}
              <section id="soziale-medien" className="section-tracked content-block">
                <h2 className="section-title">7. Soziale Medien</h2>

                <h3 className="subsection-title">Facebook</h3>
                <p className="text-body">
                  Auf dieser Website sind Elemente des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittlaender uebertragen.
                </p>
                <p className="text-body">
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgeraet und dem Facebook-Server hergestellt. Facebook erhaelt dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben.
                </p>

                <h3 className="subsection-title">Instagram</h3>
                <p className="text-body">
                  Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                </p>
                <p className="text-body">
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgeraet und dem Instagram-Server hergestellt. Instagram erhaelt dadurch Informationen ueber den Besuch dieser Website durch Sie.
                </p>

                <div className="info-box">
                  <strong>Rechtsgrundlage:</strong> Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Die Datenuebertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestuetzt.
                </div>
              </section>

              {/* 8. Analyse-Tools */}
              <section id="analyse-tools" className="section-tracked content-block">
                <h2 className="section-title">8. Analyse-Tools und Werbung</h2>

                <h3 className="subsection-title">Google Analytics</h3>
                <p className="text-body">
                  Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="text-body">
                  Google Analytics ermoeglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhaelt der Websitebetreiber verschiedene Nutzungsdaten, wie z.B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers.
                </p>
                <p className="text-body">
                  Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermoeglichen (z.B. Cookies oder Device-Fingerprinting). Die von Google erfassten Informationen ueber die Benutzung dieser Website werden in der Regel an einen Server von Google in den USA uebertragen und dort gespeichert.
                </p>
                <div className="info-box">
                  <strong>Rechtsgrundlage:</strong> Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
                </div>

                <h3 className="subsection-title">Google Ads</h3>
                <p className="text-body">
                  Der Websitebetreiber verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="text-body">
                  Google Ads ermoeglicht es uns Werbeanzeigen in der Google-Suchmaschine oder auf Drittwebseiten auszuspielen, wenn der Nutzer bestimmte Suchbegriffe bei Google eingibt (Keyword-Targeting). Ferner koennen zielgerichtete Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten (z.B. Standortdaten und Interessen) ausgespielt werden.
                </p>

                <h3 className="subsection-title">Meta-Pixel (Facebook Pixel)</h3>
                <p className="text-body">
                  Diese Website nutzt zur Konversionsmessung der Besucheraktions-Pixel von Facebook/Meta. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
                </p>
                <p className="text-body">
                  So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch koennen die Wirksamkeit der Facebook-Werbeanzeigen fuer statistische und Marktforschungszwecke ausgewertet werden.
                </p>
              </section>

              {/* 9. Newsletter */}
              <section id="newsletter" className="section-tracked content-block">
                <h2 className="section-title">9. Newsletter</h2>
                <p className="text-body">
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen moechten, benoetigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Ueberpruefung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben.
                </p>
                <p className="text-body">
                  Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschliesslich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters koennen Sie jederzeit widerrufen, etwa ueber den „Austragen"-Link im Newsletter.
                </p>
              </section>

              {/* 10. Plugins und Tools */}
              <section id="plugins" className="section-tracked content-block">
                <h2 className="section-title">10. Plugins und Tools</h2>

                <h3 className="subsection-title">Google Maps</h3>
                <p className="text-body">
                  Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="text-body">
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA uebertragen und dort gespeichert.
                </p>
                <div className="info-box">
                  <strong>Rechtsgrundlage:</strong> Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                </div>

                <h3 className="subsection-title">Google Fonts (lokales Hosting)</h3>
                <p className="text-body">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
                </p>

                <h3 className="subsection-title">Google reCAPTCHA</h3>
                <p className="text-body">
                  Wir nutzen „Google reCAPTCHA" auf dieser Website. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="text-body">
                  Mit reCAPTCHA soll ueberprueft werden, ob die Dateneingabe auf dieser Website (z.B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt.
                </p>
              </section>

              {/* 11. Kunden- und Vertragsdaten */}
              <section id="kundendaten" className="section-tracked content-block">
                <h2 className="section-title">11. Kunden- und Vertragsdaten</h2>
                <p className="text-body">
                  Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und Vertragsdaten zur Begruendung, inhaltlichen Ausgestaltung und Aenderung unserer Vertragsbeziehungen. Personenbezogene Daten ueber die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermoeglichen oder abzurechnen.
                </p>

                <h3 className="subsection-title">Verarbeitete Daten im Rahmen von Reinigungsdienstleistungen</h3>
                <ul className="standard-list">
                  <li>Kontaktdaten (Name, Adresse, Telefon, E-Mail)</li>
                  <li>Vertragsdaten (Leistungsumfang, Reinigungsintervalle, Objektadressen)</li>
                  <li>Zahlungsdaten (Bankverbindung, Rechnungsanschrift)</li>
                  <li>Kommunikationsdaten (Korrespondenz, Reklamationen, Terminabsprachen)</li>
                </ul>

                <div className="info-box">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO. Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschaeftsbeziehung und Ablauf der ggf. bestehenden gesetzlichen Aufbewahrungsfristen geloescht.
                </div>

                <h3 className="subsection-title">Gesetzliche Aufbewahrungsfristen</h3>
                <div className="info-box">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Datenart</th>
                        <th>Aufbewahrungsfrist</th>
                        <th>Rechtsgrundlage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Datenart">Geschaeftsbriefe</td>
                        <td data-label="Frist">6 Jahre</td>
                        <td data-label="Rechtsgrundlage">§ 257 HGB</td>
                      </tr>
                      <tr>
                        <td data-label="Datenart">Buchungsbelege, Rechnungen</td>
                        <td data-label="Frist">10 Jahre</td>
                        <td data-label="Rechtsgrundlage">§ 147 AO</td>
                      </tr>
                      <tr>
                        <td data-label="Datenart">Vertraege</td>
                        <td data-label="Frist">10 Jahre</td>
                        <td data-label="Rechtsgrundlage">§ 147 AO</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 12. Bewerberdaten */}
              <section id="bewerberdaten" className="section-tracked content-block">
                <h2 className="section-title">12. Bewerberdaten</h2>
                <p className="text-body">
                  Wir bieten Ihnen die Moeglichkeit, sich bei uns zu bewerben (z.B. per E-Mail, postalisch oder via Online-Bewerberformular). Im Folgenden informieren wir Sie ueber Umfang, Zweck und Verwendung Ihrer im Rahmen des Bewerbungsprozesses erhobenen personenbezogenen Daten.
                </p>

                <h3 className="subsection-title">Umfang und Zweck der Datenerhebung</h3>
                <p className="text-body">
                  Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen personenbezogenen Daten (z.B. Kontakt- und Kommunikationsdaten, Bewerbungsunterlagen, Notizen im Rahmen von Bewerbungsgespraechen etc.), soweit dies zur Entscheidung ueber die Begruendung eines Beschaeftigungsverhaeltnisses erforderlich ist.
                </p>

                <div className="info-box">
                  <strong>Rechtsgrundlage:</strong> § 26 BDSG nach deutschem Recht (Anbahnung eines Beschaeftigungsverhaeltnisses), Art. 6 Abs. 1 lit. b DSGVO (allgemeine Vertragsanbahnung).
                </div>

                <h3 className="subsection-title">Aufbewahrungsdauer</h3>
                <p className="text-body">
                  Sofern wir Ihnen kein Stellenangebot machen koennen, Sie ein Stellenangebot ablehnen oder Ihre Bewerbung zurueckziehen, behalten wir uns das Recht vor, die von Ihnen uebermittelten Daten auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) bis zu <strong>6 Monate</strong> ab der Beendigung des Bewerbungsverfahrens bei uns aufzubewahren. Anschliessend werden die Daten geloescht und die physischen Bewerbungsunterlagen vernichtet.
                </p>
              </section>

              {/* 13. Betroffenenrechte */}
              <section id="betroffenenrechte" className="section-tracked content-block">
                <h2 className="section-title">13. Rechte der betroffenen Personen</h2>
                <p className="text-body">
                  Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu:
                </p>

                <ul className="standard-list">
                  <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft ueber Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, unverzueglich die Berichtigung unrichtiger Daten zu verlangen.</li>
                  <li><strong>Recht auf Loeschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Loeschung Ihrer Daten zu verlangen.</li>
                  <li><strong>Recht auf Einschraenkung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschraenkung der Verarbeitung zu verlangen.</li>
                  <li><strong>Recht auf Datenuebertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gaengigen und maschinenlesbaren Format zu erhalten.</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung zu widersprechen.</li>
                </ul>

                <h3 className="subsection-title">Musterschreiben zum Download</h3>
                <p className="text-body">
                  Zur Erleichterung der Ausuebung Ihrer Rechte stellen wir Ihnen folgende Musterschreiben zur Verfuegung:
                </p>

                <div className="download-section">
                  <button onClick={generateDeleteRequest} className="download-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Loeschantrag herunterladen
                  </button>
                  <button onClick={generateRevokeRequest} className="download-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Widerruf der Einwilligung
                  </button>
                </div>
              </section>

              {/* 14. Aenderungen */}
              <section id="aenderungen" className="section-tracked content-block">
                <h2 className="section-title">14. Aenderungen und Aktualisierung</h2>
                <p className="text-body">
                  Wir bitten Sie, sich regelmaessig ueber den Inhalt unserer Datenschutzerklaerung zu informieren. Wir passen die Datenschutzerklaerung an, sobald die Aenderungen der von uns durchgefuehrten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Aenderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
                </p>

                <div className="version-info">
                  <p className="text-body"><strong>Stand der Datenschutzerklaerung:</strong> November 2025 | <strong>Version:</strong> 1.0</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation Button */}
      <button
        className={`mobile-nav-trigger ${!isNavButtonVisible ? 'hidden' : ''}`}
        onClick={openMobileNav}
        aria-label="Inhaltsverzeichnis oeffnen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      </button>

      {/* Mobile Navigation Modal */}
      <div
        className={`mobile-nav-modal ${isMobileNavOpen ? 'is-open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeMobileNav(); }}
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
            <button className="mobile-nav-close" onClick={closeMobileNav} aria-label="Schliessen">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
          <nav className="mobile-nav-menu">
            <ul>
              {navItems.map((item) => {
                const labelParts = item.label.split(' ');
                const hasSection = labelParts[0].startsWith('§');
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={item.main ? 'nav-main' : 'nav-sub'}
                      onClick={(e) => handleNavClick(e, item.id)}
                    >
                      {hasSection ? (
                        <>
                          <span style={{ color: '#109387', fontWeight: 600 }}>{labelParts[0]} {labelParts[1]}</span>{' '}
                          {labelParts.slice(2).join(' ')}
                        </>
                      ) : item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Floating Scroll Buttons */}
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
  );
}
