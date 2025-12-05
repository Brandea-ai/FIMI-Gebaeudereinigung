# FIMI Website Tasks - Verhaltensregeln

**Stand:** 2025-12-05

---

## WICHTIG: Lies das ZUERST

1. Lies diese RULES.md komplett
2. Lies STATUS.md fur den aktuellen Stand
3. Lies den LETZTEN Report in /reports/
4. Erst DANN beginne mit der Arbeit

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
- Wurde dieser Task bereits erledigt?
- Brauche ich User-Input?

### R4: Report-Pflicht
Nach JEDER Arbeit:
1. Report in /reports/RXXXX.md
2. STATUS.md aktualisieren

### R5: Token-Management
- Nur Dateien lesen die noetig sind
- Grep/Glob statt ganze Dateien
- Kurze Reports

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

## Was gemacht
- Punkt 1

## Geanderte Dateien
- pfad/datei.tsx

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

## Workflow

1. LESEN: RULES > STATUS > Report
2. VERIFIZIEREN: Task relevant?
3. AUSFUHREN: Nur einen Task
4. DOKUMENTIEREN: Report + STATUS
5. ABSCHLIESSEN: User informieren

---

## Verboten

- Mehrere Tasks gleichzeitig
- UI/UX andern ohne OK
- Reports uberspringen
- Annahmen bei Unklarheit

---

## User fragen bei

- Visuelle Anderungen
- Content entfernen
- Kontaktdaten andern
- Rechtliche Texte
- Unklare Anforderungen
