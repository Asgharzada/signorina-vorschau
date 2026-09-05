# Signorina.collection — Website-Vorschau

Vollständiger Shop als statische Website. Reines HTML, CSS und JavaScript —
kein Server, kein Build-Schritt, keine Abhängigkeiten.

**Zum Ausfüllen: [BRIEFING.md](BRIEFING.md)** — alle offenen Punkte in einem Dokument.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite — Hero, Most Wanted, Kategorien, Über uns, Neuheiten, Instagram, Newsletter |
| `kategorie.html` | Kategorieliste mit Filter (Größe, Farbe) und fünf Sortierungen |
| `produkt.html` | Produktseite — Galerie, Farbe, Größe, Menge, Akkordeon, Bewertungen, Passt dazu |
| `warenkorb.html` | Warenkorb mit Mengenänderung und Versandkosten-Fortschritt |
| `kasse.html` | Kasse in drei Schritten — Adresse, Versand & Zahlung, Prüfen |
| `danke.html` | Bestellbestätigung mit Bestellnummer und Fortschritt |
| `bestellstatus.html` | Statusabfrage ohne Anmeldung, über Bestellnummer + E-Mail |
| `merkliste.html` | Gemerkte Artikel |
| `service.html` | Versand, Rückgabe, Größen, Zahlung, FAQ, Kontakt, Rechtliches |
| `404.html` | Fehlerseite mit Produktvorschlägen |

Aufruf mit Parametern:

- `kategorie.html?c=kleider` — `neu`, `kleider`, `oberteile`, `sets`, `accessoires`, `sale`
- `produkt.html?id=kleid-amalfi` — IDs siehe `assets/shop.js`
- `service.html?p=versand` — `versand`, `ruecksendung`, `groessen`, `zahlung`, `faq`,
  `kontakt`, `impressum`, `agb`, `widerruf`, `datenschutz`

## Aufbau

```
assets/
  art.js      erzeugt die Abbildungen als Inline-SVG
  shop.js     Katalog, Warenkorb, Merkliste, Bestellungen, Suche, Kopf-/Fußzeile
  style.css   Markenfarben und alle Komponenten
emails/
  bestellbestaetigung.html
  versandbestaetigung.html
  newsletter-willkommen.html
sitemap.xml · robots.txt
```

Kopfzeile, Fußzeile, Suche und Cookie-Hinweis stehen **einmal** in `assets/shop.js`
und werden auf jeder Seite eingesetzt — eine Änderung wirkt überall.

Alle Beträge werden an genau einer Stelle gerechnet (`Shop.totals`), damit
Warenkorb, Kasse und Bestätigung nie unterschiedliche Summen zeigen.

### Wichtig bei jeder Änderung an `assets/`

Die Dateien sind in allen HTML-Seiten mit einer Versionsnummer eingebunden:

```html
<link rel="stylesheet" href="assets/style.css?v=8">
<script src="assets/art.js?v=8"></script>
<script src="assets/shop.js?v=8"></script>
```

Nach jeder Änderung an `art.js`, `shop.js` oder `style.css` diese Zahl in **allen**
Seiten hochzählen. Sonst liefert der Browser die alte Fassung aus dem Cache aus
und die Änderung ist nicht zu sehen.

## Abbildungen

Solange keine Produktfotos vorliegen, zeichnet `art.js` zu jedem Artikel eine
stilisierte Studioaufnahme: Schnitt nach Artikelart, Farbverlauf aus der echten
Warenfarbe, Faltenlinien, Schlagschatten und ein leicht wechselnder Hintergrund.
Gleiche Artikel-ID ergibt immer dasselbe Bild.

Das sind **Illustrationen, keine Fotos** — als solche erkennbar und ohne
Änderung am Layout durch echte Bilder ersetzbar.

## Markenfarben

Nach Kundenfeedback: Rosé / Hellrosa mit goldenen Details.

| Rolle | Wert |
|---|---|
| Rosé hell | `#F9EAEC` |
| Rosé mittel | `#F2D9DE` |
| Rosé kräftig | `#A9707E` |
| Gold | `#C9A24A` |
| Gold dunkel | `#A8842F` |
| Schrift | `#2A2320` |

## Was der Shop kann — und was nicht

**Funktioniert vollständig:** Stöbern, filtern, sortieren, suchen, merken,
Warenkorb, dreistufige Kasse mit Prüfung aller Eingaben, Bestellnummer,
Bestellübersicht, Statusabfrage, Cookie-Hinweis.

**Funktioniert bewusst nicht** — dafür wäre ein Server nötig:

- Es fließt kein Geld. Die Zahlungsarten sind Auswahl, keine Abbuchung.
- Es wird keine E-Mail verschickt. Die drei Vorlagen unter `emails/` sind
  fertig gestaltet und warten auf einen Versanddienst.
- Bestellungen liegen im Browser (`localStorage`), nicht in einer Datenbank.
  Ein anderes Gerät sieht sie nicht.

## Rechtlicher Stand

`Impressum`, `AGB`, `Widerrufsbelehrung` und `Datenschutzerklärung` sind als
Seiten angelegt und verlinkt, aber inhaltlich leer — diese Texte stellt
Signorina.collection selbst. Die **Button-Lösung** ist umgesetzt: der
Bestellknopf heißt „Zahlungspflichtig bestellen“.

Alle Seiten tragen `noindex`, und `robots.txt` sperrt den ganzen Shop,
solange Beispieldaten enthalten sind.

## Lokal ansehen

```
python -m http.server 8231
```

Dann `http://localhost:8231` öffnen. Ein Doppelklick auf `index.html` reicht
für die Startseite, aber die Seiten mit Parametern brauchen den kleinen Server.
