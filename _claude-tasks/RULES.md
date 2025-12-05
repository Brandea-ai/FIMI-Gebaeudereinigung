# FIMI Website Tasks - Verhaltensregeln

**Stand:** 2025-12-05

---

## DER HEILIGE GRAL

**FIMI_Website_TODOs.md** ist die EINZIGE Quelle der Wahrheit!
- Alle 65 Tasks kommen aus dieser Datei
- Alle Beschreibungen, DoDs und Details stehen dort
- STATUS.md ist nur der Tracker - TODOs.md ist die Referenz
- Bei Unklarheiten: IMMER in TODOs.md nachschlagen

---

## WICHTIG: Lies das ZUERST (OBERSTE PRIORITAT)

### Schritt 1: Task-System verstehen
1. Lies diese RULES.md komplett
2. Lies **FIMI_Website_TODOs.md** (der heilige Gral!)
3. Lies STATUS.md fur den aktuellen Stand
4. Lies ALLE Reports in /reports/ (neueste zuletzt)

### Schritt 2: Projekt vollstandig verstehen
5. Lies FIMI-STANDARDS.md
6. Lies MASTERPLAN-WEBSITE-REDESIGN.md
7. Verschaffe dir Uberblick uber Projektstruktur
8. Verstehe welche Seiten/Komponenten existieren

### Schritt 3: Erst DANN arbeiten
9. Bestatige dem User deinen Wissensstand
10. Beginne mit dem nachsten Task

---

## Goldene Regeln

### R1: KEINE visuellen UI/UX Anderungen ohne User-Zustimmung
- Layout, Farben, Abstande, Fonts bleiben wie sie sind
- Bei Unsicherheit: FRAGEN, nicht andern

### R2: Ein Task pro Session
- Fokussiere dich auf EINEN Task
- Mache diesen Task KOMPLETT fertig
- Schreibe den Report
- Dann erst nachsten Task

### R3: Verifiziere BEVOR du arbeitest
- Ist dieser Task noch relevant?
- Wurde dieser Task bereits erledigt? (Reports prufen!)
- Brauche ich User-Input?

### R4: Report-Pflicht (OBERSTE PRIORITAT)
Nach JEDER Arbeit:
1. Report in /reports/RXXXX.md erstellen
2. STATUS.md aktualisieren
3. NIEMALS Reports uberspringen!

### R5: Vollstandiges Projektwissen
- Jede neue Session MUSS das Projekt vollstandig verstehen
- Reports sind die wichtigste Wissensquelle
- Lies ALLE Reports um zu wissen was bereits gemacht wurde
- Verstehe die Zusammenhange zwischen Komponenten

### R6: Keine Annahmen
- Unklar? FRAGEN
- Unsicher? STOPPEN

---

## Report-Format

Dateiname: RXXXX.md (R0001, R0002, ...)

```
# Report RXXXX - [Titel]
Datum: YYYY-MM-DD
Task-ID: P0-XX
Status: Erledigt | Blockiert

## Projekt-Kontext
- Welche Bereiche betroffen

## Was gemacht
- Punkt 1
- Punkt 2

## Geanderte Dateien
- pfad/datei.tsx - Was geandert

## Wichtig fur nachste Session
- Was muss der nachste Claude wissen
- Abhangigkeiten zu anderen Tasks

## Nachste Schritte
- Was kommt als nachstes
```

---

## Status-Codes

| Code | Bedeutung |
|------|-----------|
| [ ] | Offen |
| [~] | In Arbeit |
| [x] | Erledigt |
| [!] | Blockiert |
| [-] | Nicht relevant |

---

## Workflow pro Session

```
1. EINLESEN (Pflicht!)
   ├── RULES.md
   ├── STATUS.md
   ├── ALLE Reports lesen
   ├── FIMI-STANDARDS.md
   └── MASTERPLAN-WEBSITE-REDESIGN.md

2. PROJEKT VERSTEHEN
   ├── Projektstruktur erfassen
   ├── Wichtige Dateien kennen
   └── User bestatigen lassen

3. VERIFIZIEREN
   ├── Task noch relevant?
   ├── Schon erledigt?
   └── Abhangigkeiten?

4. AUSFUHREN
   └── Nur diesen einen Task

5. DOKUMENTIEREN
   ├── Report schreiben (ausfuhrlich!)
   └── STATUS.md aktualisieren

6. ABSCHLIESSEN
   └── User informieren
```

---

## Verboten

- Mehrere Tasks gleichzeitig
- UI/UX andern ohne OK
- Reports uberspringen oder kurzen
- Annahmen bei Unklarheit
- Ohne Projektuberblick arbeiten
- Anderungen ohne Report

---

## User fragen bei

- Visuelle Anderungen
- Content entfernen
- Kontaktdaten andern
- Rechtliche Texte
- Unklare Anforderungen
