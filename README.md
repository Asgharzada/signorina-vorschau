# Signorina.collection — Website-Vorschau

Statische Vorschau des Onlineshops. Reines HTML, CSS und JavaScript —
keine externen Requests, keine Build-Schritte, keine Abhängigkeiten.

## Seiten

| Datei             | Inhalt                                                                 |
|-------------------|------------------------------------------------------------------------|
| `index.html`      | Startseite — Hero, Most Wanted, Shop by Style, Über uns, Instagram, Newsletter |
| `kategorie.html`  | Kategorieliste mit Filter (Größe, Farbe) und Sortierung                 |
| `produkt.html`    | Produktdetailseite mit Galerie, Varianten, Bewertungen, „Passt dazu“    |

Aufruf mit Parametern:

- `kategorie.html?c=kleider` — `neu`, `kleider`, `oberteile`, `sets`, `accessoires`, `sale`
- `produkt.html?id=kleid-amalfi` — IDs siehe `assets/shop.js`

## Aufbau

```
index.html
kategorie.html
produkt.html
assets/
  style.css   Markenfarben, Layout, alle Komponenten
  shop.js     Katalogdaten + Kopfzeile/Fußzeile/Warenkorb
```

Kopfzeile und Fußzeile stehen einmal in `assets/shop.js` und werden auf jeder
Seite eingesetzt — eine Änderung wirkt überall.

### Wichtig bei jeder Änderung an `assets/`

Die Dateien sind in den drei HTML-Seiten mit einer Versionsnummer eingebunden:

```html
<link rel="stylesheet" href="assets/style.css?v=3">
<script src="assets/shop.js?v=3"></script>
```

Nach jeder Änderung an `style.css` oder `shop.js` diese Zahl in **allen drei**
Seiten hochzählen. Sonst liefert der Browser die alte Fassung aus dem Cache aus
und die Kundin sieht die Änderung nicht.

## Markenfarben

Nach Kundenfeedback: Rosé / Hellrosa mit goldenen Details.

| Rolle              | Wert      |
|--------------------|-----------|
| Rosé hell          | `#F9EAEC` |
| Rosé mittel        | `#F2D9DE` |
| Rosé kräftig       | `#A9707E` |
| Gold               | `#C9A24A` |
| Gold dunkel        | `#A8842F` |
| Schrift            | `#2A2320` |

## Was noch fehlt

- **Logo** — aktuell eine gesetzte Wortmarke als Platzhalter
- **Produktfotos** — alle Bildflächen sind markierte Platzhalter
- **Echte Produkte und Preise** — `assets/shop.js` enthält 32 Beispielartikel
- **Bewertungen** — Beispieltexte, als solche auf der Seite gekennzeichnet
- **Rechtstexte** — Impressum, AGB, Widerrufsbelehrung und Datenschutz
  brauchen die Unternehmensdaten der Kundin

Alle Seiten tragen `noindex`, solange Beispieldaten enthalten sind.

## Lokal ansehen

Doppelklick auf `index.html` genügt. Für die Filter- und Produktseiten mit
Parametern besser über einen kleinen Server:

```
python -m http.server 8231
```

Dann `http://localhost:8231` öffnen.
