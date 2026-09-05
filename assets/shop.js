/* =========================================================
   Signorina.collection — Katalogdaten + gemeinsame Bausteine
   Entwurf v3 — Beispieldaten, bis echte Produkte vorliegen
   ========================================================= */
(function (global) {
  'use strict';

  /* ---------------------------------------------------------
     Farben der Kollektion (Hex-Werte fuer die Farbpunkte)
     --------------------------------------------------------- */
  var COLORS = {
    'Rosé':    '#E9C3CB',
    'Creme':   '#F1E7DC',
    'Weiß':    '#FFFFFF',
    'Schwarz': '#2A2320',
    'Camel':   '#C9A98A',
    'Salbei':  '#C3CDBF',
    'Marine':  '#2E3A4D',
    'Gold':    '#C9A24A'
  };

  /* ---------------------------------------------------------
     Kategorien — 'neu' und 'sale' sind Filter, keine Ordner
     --------------------------------------------------------- */
  var CATEGORIES = {
    neu: {
      title: 'Neu eingetroffen',
      desc: 'Die frischesten Stücke der Kollektion — in kleinen Mengen ausgewählt und meist schnell vergriffen.'
    },
    kleider: {
      title: 'Kleider',
      desc: 'Fließende Schnitte in weichen Roséténen, Creme und Schwarz — für den Alltag, das Büro und den Abend.'
    },
    oberteile: {
      title: 'Oberteile',
      desc: 'Blusen, Blazer und feine Strickteile, die sich mit allem kombinieren lassen, was schon im Schrank hängt.'
    },
    sets: {
      title: 'Sets & Zweiteiler',
      desc: 'Aufeinander abgestimmte Zweiteiler — ein Griff, ein fertiger Look.'
    },
    accessoires: {
      title: 'Accessoires',
      desc: 'Goldene Details, weiche Schals und Taschen, die ein schlichtes Outfit vollenden.'
    },
    sale: {
      title: 'Sale',
      desc: 'Reduzierte Lieblingsstücke aus der letzten Saison — solange der Vorrat reicht.'
    }
  };

  var ICON_BY_CAT = {
    kleider: 'ic-dress',
    oberteile: 'ic-blouse',
    sets: 'ic-hanger',
    accessoires: 'ic-bag'
  };

  var CLOTHING_SIZES = ['XS', 'S', 'M', 'L', 'XL'];
  var ONE_SIZE = ['Einheitsgröße'];

  /* ---------------------------------------------------------
     Katalog — 32 Beispielprodukte
     --------------------------------------------------------- */
  var PRODUCTS = [
    /* ---- Kleider ---- */
    {
      id: 'kleid-amalfi', name: 'Kleid „Amalfi“', cat: 'kleider',
      price: 89.95, old: null, badge: 'neu',
      colors: ['Rosé', 'Creme', 'Schwarz'], sizes: CLOTHING_SIZES, soldOut: ['XS'],
      material: '100 % Musselin-Baumwolle',
      desc: 'Ein luftiges Musselinkleid mit weitem Schnitt und schmal gebundener Taille. Der Stoff bleibt auch an warmen Tagen leicht und wirft weiche Falten statt harter Kanten.',
      details: ['Doppellagiger Musselin, blickdicht', 'Verstellbarer Bindegürtel', 'Midi-Länge, endet unter der Wade', 'Modell trägt Größe S bei 1,72 m'],
      rating: 4.8, reviews: 34
    },
    {
      id: 'kleid-positano', name: 'Kleid „Positano“', cat: 'kleider',
      price: 79.95, old: null, badge: null,
      colors: ['Rosé', 'Salbei'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '68 % Viskose, 32 % Leinen',
      desc: 'Wickeloptik mit V-Ausschnitt und kurzen Ärmeln. Die Leinenbeimischung gibt dem Kleid Struktur, ohne dass es steif wirkt.',
      details: ['Wickeloptik mit fixierter Naht', 'V-Ausschnitt', 'Seitentaschen', 'Knielang'],
      rating: 4.6, reviews: 21
    },
    {
      id: 'kleid-verona', name: 'Kleid „Verona“', cat: 'kleider',
      price: 99.95, old: null, badge: null,
      colors: ['Schwarz', 'Marine'], sizes: CLOTHING_SIZES, soldOut: ['XL'],
      material: '95 % Viskose, 5 % Elasthan',
      desc: 'Das schmale Etuikleid für Termine, an denen alles sitzen muss. Leichter Stretch sorgt dafür, dass es sich mitbewegt.',
      details: ['Figurnaher Schnitt', 'Verdeckter Reißverschluss hinten', 'Gehschlitz', 'Knielang'],
      rating: 4.9, reviews: 47
    },
    {
      id: 'kleid-serena', name: 'Kleid „Serena“', cat: 'kleider',
      price: 69.95, old: 89.95, badge: 'sale',
      colors: ['Creme', 'Rosé'], sizes: CLOTHING_SIZES, soldOut: ['S', 'M'],
      material: '100 % Viskose',
      desc: 'Fließendes Sommerkleid mit schmalen Trägern und gesmoktem Rücken — passt sich vielen Größen an.',
      details: ['Gesmokter Rückenteil', 'Schmale, verstellbare Träger', 'Maxi-Länge', 'Aus der Vorsaison — reduziert'],
      rating: 4.4, reviews: 18
    },
    {
      id: 'kleid-lucia', name: 'Kleid „Lucia“', cat: 'kleider',
      price: 84.95, old: null, badge: 'neu',
      colors: ['Rosé', 'Weiß'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '100 % Musselin-Baumwolle',
      desc: 'Hemdblusenkleid aus Musselin mit goldfarbenen Knöpfen — offen als leichte Jacke tragbar, geschlossen als Kleid.',
      details: ['Goldfarbene Knopfleiste', 'Zwei Brusttaschen', 'Abnehmbarer Stoffgürtel', 'Midi-Länge'],
      rating: 4.7, reviews: 12
    },
    {
      id: 'kleid-elena', name: 'Kleid „Elena“', cat: 'kleider',
      price: 74.95, old: null, badge: null,
      colors: ['Rosé', 'Schwarz'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '92 % Viskose, 8 % Elasthan',
      desc: 'Weiches Jerseykleid mit angeschnittenen Ärmeln und leicht gerafftem Seitenteil — das Kleid für Tage, an denen es schnell gehen muss.',
      details: ['Seitliche Raffung', 'Angeschnittene Ärmel', 'Knitterarm, gut für Reisen', 'Knielang'],
      rating: 4.5, reviews: 26
    },
    {
      id: 'kleid-marisa', name: 'Kleid „Marisa“', cat: 'kleider',
      price: 94.95, old: null, badge: 'neu',
      colors: ['Creme', 'Camel'], sizes: CLOTHING_SIZES, soldOut: ['XS'],
      material: '100 % Polyester in Satinoptik',
      desc: 'Satinkleid mit schmalen Trägern und fließendem Fall — für Hochzeiten, Feiern und lange Abende.',
      details: ['Satinoptik mit sanftem Glanz', 'Verstellbare Träger', 'Rückenausschnitt in V-Form', 'Maxi-Länge'],
      rating: 4.8, reviews: 8
    },
    {
      id: 'kleid-gioia', name: 'Kleid „Gioia“', cat: 'kleider',
      price: 59.95, old: 79.95, badge: 'sale',
      colors: ['Rosé', 'Weiß'], sizes: CLOTHING_SIZES, soldOut: ['L'],
      material: '100 % Baumwolle',
      desc: 'Luftiges Sommerkleid mit Puffärmeln und Rundhalsausschnitt — schlicht genug, um es mit allem zu kombinieren.',
      details: ['Kurze Puffärmel', 'Elastischer Rückenbund', 'Zwei Seitentaschen', 'Aus der Vorsaison — reduziert'],
      rating: 4.3, reviews: 23
    },
    {
      id: 'kleid-nora', name: 'Kleid „Nora“', cat: 'kleider',
      price: 69.95, old: null, badge: null,
      colors: ['Salbei', 'Schwarz'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '75 % Viskose, 25 % Polyester',
      desc: 'Feingestricktes Kleid, das sich weich anlegt, ohne aufzutragen — im Herbst mit Stiefeln, im Sommer barfuß.',
      details: ['Feinstrick, nicht kratzend', 'Rundhalsausschnitt', 'Rippbündchen am Saum', 'Midi-Länge'],
      rating: 4.6, reviews: 19
    },

    /* ---- Oberteile ---- */
    {
      id: 'blazer-milano', name: 'Blazer „Milano“', cat: 'oberteile',
      price: 99.95, old: null, badge: 'neu',
      colors: ['Creme', 'Schwarz', 'Camel'], sizes: CLOTHING_SIZES, soldOut: ['XS'],
      material: '63 % Polyester, 33 % Viskose, 4 % Elasthan',
      desc: 'Ein weich fallender Blazer ohne steife Schulterpolster. Über dem T-Shirt genauso stimmig wie über dem Kleid.',
      details: ['Ungefüttert, leicht', 'Ein goldfarbener Knopf', 'Zwei aufgesetzte Taschen', 'Etwas längerer Schnitt'],
      rating: 4.9, reviews: 56
    },
    {
      id: 'bluse-perla', name: 'Bluse „Perla“', cat: 'oberteile',
      price: 49.95, old: 69.95, badge: 'sale',
      colors: ['Weiß', 'Rosé'], sizes: CLOTHING_SIZES, soldOut: ['XL'],
      material: '100 % Viskose',
      desc: 'Die klassische Bluse mit Rüschenkante am Ausschnitt — schlicht genug fürs Büro, fein genug für den Abend.',
      details: ['Rüschendetail am Ausschnitt', 'Perlmuttfarbene Knöpfe', 'Leicht transparent', 'Aus der Vorsaison — reduziert'],
      rating: 4.5, reviews: 29
    },
    {
      id: 'strickjacke-chiara', name: 'Strickjacke „Chiara“', cat: 'oberteile',
      price: 59.95, old: null, badge: null,
      colors: ['Rosé', 'Creme', 'Camel'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '70 % Viskose, 30 % Polyamid',
      desc: 'Weiche Feinstrickjacke in Oversize-Passform. Das Stück, das im Sommer in der Tasche liegt und abends gebraucht wird.',
      details: ['Oversize-Passform', 'Goldfarbene Knöpfe', 'Rippbündchen an Ärmeln und Saum', 'Hüftlang'],
      rating: 4.8, reviews: 41
    },
    {
      id: 'top-aurora', name: 'Top „Aurora“', cat: 'oberteile',
      price: 29.95, old: null, badge: null,
      colors: ['Weiß', 'Schwarz', 'Rosé'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '95 % Baumwolle, 5 % Elasthan',
      desc: 'Das Basic-Top mit schmalem Träger und feiner Rippstruktur — die Grundlage unter Blazer und Strickjacke.',
      details: ['Feine Rippstruktur', 'Schmale Träger', 'Körpernahe Passform', 'Bei 30 °C waschbar'],
      rating: 4.6, reviews: 63
    },
    {
      id: 'bluse-sorrento', name: 'Bluse „Sorrento“', cat: 'oberteile',
      price: 54.95, old: null, badge: 'neu',
      colors: ['Salbei', 'Creme'], sizes: CLOTHING_SIZES, soldOut: ['XS', 'XL'],
      material: '100 % Musselin-Baumwolle',
      desc: 'Lockere Musselinbluse mit weiten Ärmeln und Bindebändchen am Ausschnitt.',
      details: ['Weite Ballonärmel', 'Bindebändchen am Ausschnitt', 'Gerader Saum', 'Blickdicht'],
      rating: 4.7, reviews: 9
    },
    {
      id: 'pullover-siena', name: 'Pullover „Siena“', cat: 'oberteile',
      price: 64.95, old: null, badge: null,
      colors: ['Creme', 'Rosé', 'Camel'], sizes: CLOTHING_SIZES, soldOut: ['S'],
      material: '55 % Viskose, 30 % Polyamid, 15 % Wolle',
      desc: 'Weicher Feinstrickpullover mit rundem Ausschnitt und leicht überschnittener Schulter.',
      details: ['Leicht überschnittene Schulter', 'Rundhalsausschnitt', 'Feinstrick mit Wollanteil', 'Hüftlang'],
      rating: 4.7, reviews: 38
    },
    {
      id: 'bluse-fiora', name: 'Bluse „Fiora“', cat: 'oberteile',
      price: 44.95, old: 59.95, badge: 'sale',
      colors: ['Rosé', 'Weiß'], sizes: CLOTHING_SIZES, soldOut: ['XS', 'S'],
      material: '100 % Viskose',
      desc: 'Blusenshirt mit V-Ausschnitt und weiten Ärmeln, die am Bündchen zusammenlaufen.',
      details: ['V-Ausschnitt', 'Weite Ärmel mit Bündchen', 'Gerader Schnitt', 'Aus der Vorsaison — reduziert'],
      rating: 4.4, reviews: 17
    },
    {
      id: 'blazer-torino', name: 'Blazer „Torino“', cat: 'oberteile',
      price: 89.95, old: null, badge: 'neu',
      colors: ['Salbei', 'Schwarz'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '70 % Polyester, 26 % Viskose, 4 % Elasthan',
      desc: 'Kurz geschnittener Blazer mit goldfarbenen Knöpfen — die strengere Schwester des „Milano“.',
      details: ['Taillierter, kurzer Schnitt', 'Zwei goldfarbene Knöpfe', 'Leicht gefüttert', 'Reverskragen'],
      rating: 4.8, reviews: 11
    },
    {
      id: 'shirt-luna', name: 'Shirt „Luna“', cat: 'oberteile',
      price: 24.95, old: null, badge: null,
      colors: ['Weiß', 'Rosé', 'Schwarz'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '100 % Baumwolle',
      desc: 'Das einfache Baumwollshirt mit rundem Ausschnitt — dreimal im Schrank und nie das falsche Teil.',
      details: ['Mittelschwere Baumwolle, nicht durchscheinend', 'Rundhalsausschnitt', 'Gerader Schnitt', 'Bei 40 °C waschbar'],
      rating: 4.5, reviews: 71
    },

    /* ---- Sets ---- */
    {
      id: 'set-riviera', name: 'Set „Riviera“', cat: 'sets',
      price: 79.95, old: null, badge: null,
      colors: ['Rosé', 'Creme'], sizes: CLOTHING_SIZES, soldOut: ['XS'],
      material: '100 % Musselin-Baumwolle',
      desc: 'Bluse und weite Hose aus demselben Musselin. Zusammen ein fertiger Look, einzeln zwei Lieblingsteile.',
      details: ['Zweiteilig: Bluse + Hose', 'Elastischer Bund mit Kordel', 'Beide Teile einzeln kombinierbar', 'Blickdicht doppellagig'],
      rating: 4.8, reviews: 37
    },
    {
      id: 'set-capri', name: 'Set „Capri“', cat: 'sets',
      price: 89.95, old: null, badge: 'neu',
      colors: ['Creme', 'Salbei'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '80 % Viskose, 20 % Leinen',
      desc: 'Kurzer Blazer mit passendem Rock — der Zweiteiler für Anlässe, bei denen ein Kleid zu viel wäre.',
      details: ['Zweiteilig: Blazer + Rock', 'Goldfarbene Knöpfe', 'Rock mit Gehschlitz', 'Leinenanteil, kühlend'],
      rating: 4.9, reviews: 14
    },
    {
      id: 'set-bellezza', name: 'Set „Bellezza“', cat: 'sets',
      price: 94.95, old: 119.95, badge: 'sale',
      colors: ['Schwarz', 'Camel'], sizes: CLOTHING_SIZES, soldOut: ['S'],
      material: '72 % Viskose, 25 % Polyester, 3 % Elasthan',
      desc: 'Feinstrick-Set aus Pullover und Midirock in einem Ton — warm, weich und sofort angezogen.',
      details: ['Zweiteilig: Pullover + Midirock', 'Elastischer Rockbund', 'Feinstrick, nicht kratzend', 'Aus der Vorsaison — reduziert'],
      rating: 4.6, reviews: 25
    },
    {
      id: 'set-amalia', name: 'Set „Amalia“', cat: 'sets',
      price: 84.95, old: null, badge: 'neu',
      colors: ['Rosé', 'Creme'], sizes: CLOTHING_SIZES, soldOut: ['XL'],
      material: '100 % Musselin-Baumwolle',
      desc: 'Kurzes Oberteil mit Bindeband und weiter Culotte im selben Ton — luftig und trotzdem angezogen.',
      details: ['Zweiteilig: Top + Culotte', 'Bindeband an der Taille', 'Elastischer Bund', 'Beide Teile einzeln tragbar'],
      rating: 4.7, reviews: 7
    },
    {
      id: 'set-verano', name: 'Set „Verano“', cat: 'sets',
      price: 69.95, old: 89.95, badge: 'sale',
      colors: ['Weiß', 'Salbei'], sizes: CLOTHING_SIZES, soldOut: ['S', 'M'],
      material: '65 % Leinen, 35 % Viskose',
      desc: 'Leinenset aus kurzärmeliger Bluse und Shorts — das Reiseset für heiße Tage.',
      details: ['Zweiteilig: Bluse + Shorts', 'Hoher Leinenanteil, kühlend', 'Shorts mit Kordelzug', 'Aus der Vorsaison — reduziert'],
      rating: 4.3, reviews: 20
    },
    {
      id: 'set-dolce', name: 'Set „Dolce“', cat: 'sets',
      price: 99.95, old: null, badge: null,
      colors: ['Schwarz', 'Camel'], sizes: CLOTHING_SIZES, soldOut: [],
      material: '68 % Viskose, 29 % Polyester, 3 % Elasthan',
      desc: 'Blazer und weite Hose in einem Ton — der Anzug für Frauen, die keinen Anzug tragen wollen.',
      details: ['Zweiteilig: Blazer + Marlenehose', 'Hose mit Bundfalten', 'Blazer ungefüttert', 'Beide Teile einzeln kombinierbar'],
      rating: 4.9, reviews: 33
    },

    /* ---- Accessoires ---- */
    {
      id: 'tasche-como', name: 'Tasche „Como“', cat: 'accessoires',
      price: 54.95, old: 74.95, badge: 'sale',
      colors: ['Camel', 'Schwarz'], sizes: ONE_SIZE, soldOut: [],
      material: 'Veganes Leder (Polyurethan)',
      desc: 'Kleine Schultertasche mit goldfarbener Kette. Passt für Handy, Schlüssel und Karten — mehr soll sie nicht.',
      details: ['Abnehmbare Goldkette', 'Innenfach mit Reißverschluss', 'Maße ca. 22 × 14 × 6 cm', 'Tierfrei'],
      rating: 4.5, reviews: 31
    },
    {
      id: 'schal-bellagio', name: 'Schal „Bellagio“', cat: 'accessoires',
      price: 34.95, old: null, badge: null,
      colors: ['Rosé', 'Creme', 'Salbei'], sizes: ONE_SIZE, soldOut: [],
      material: '100 % Viskose',
      desc: 'Großer, weicher Schal, der als Tuch, Schal oder leichte Decke funktioniert.',
      details: ['Maße ca. 180 × 70 cm', 'Gefranste Kanten', 'Sehr weicher Griff', 'Handwäsche empfohlen'],
      rating: 4.7, reviews: 16
    },
    {
      id: 'kette-perla-doro', name: 'Kette „Perla d’Oro“', cat: 'accessoires',
      price: 39.95, old: null, badge: 'neu',
      colors: ['Gold'], sizes: ONE_SIZE, soldOut: [],
      material: 'Edelstahl, 18 Karat vergoldet',
      desc: 'Feine vergoldete Kette mit einer einzelnen Süßwasserperle — der goldene Akzent zu allem in Rosé.',
      details: ['Länge 42 cm + 5 cm Verlängerung', 'Echte Süßwasserperle', 'Nickelfrei, anlaufgeschützt', 'Im Schmuckbeutel geliefert'],
      rating: 4.9, reviews: 22
    },
    {
      id: 'haarband-rosa', name: 'Haarband „Rosa“', cat: 'accessoires',
      price: 14.95, old: null, badge: null,
      colors: ['Rosé', 'Creme'], sizes: ONE_SIZE, soldOut: [],
      material: '100 % Satin-Polyester',
      desc: 'Breites Satin-Haarband mit weichem Innenband, das nicht drückt.',
      details: ['Breite ca. 5 cm', 'Gepolstertes Innenband', 'Rutschfest', 'Handwäsche'],
      rating: 4.4, reviews: 11
    },
    {
      id: 'tasche-bella', name: 'Tasche „Bella“', cat: 'accessoires',
      price: 64.95, old: null, badge: 'neu',
      colors: ['Creme', 'Rosé'], sizes: ONE_SIZE, soldOut: [],
      material: 'Veganes Leder (Polyurethan)',
      desc: 'Größere Schultertasche mit weichem Griff — passt für Laptop, Mappe und alles, was der Tag noch bringt.',
      details: ['Abnehmbarer Schulterriemen', 'Zwei Innenfächer', 'Maße ca. 34 × 26 × 11 cm', 'Tierfrei'],
      rating: 4.8, reviews: 6
    },
    {
      id: 'guertel-oro', name: 'Gürtel „Oro“', cat: 'accessoires',
      price: 29.95, old: null, badge: null,
      colors: ['Camel', 'Schwarz'], sizes: ONE_SIZE, soldOut: [],
      material: 'Veganes Leder mit vergoldeter Schnalle',
      desc: 'Schmaler Gürtel mit goldfarbener Schnalle — betont die Taille an Kleidern und weiten Blazern.',
      details: ['Breite ca. 2,5 cm', 'Vergoldete Schnalle', 'Länge 100 cm, fünf Löcher', 'Tierfrei'],
      rating: 4.6, reviews: 14
    },
    {
      id: 'ohrringe-stella', name: 'Ohrringe „Stella“', cat: 'accessoires',
      price: 24.95, old: null, badge: null,
      colors: ['Gold'], sizes: ONE_SIZE, soldOut: [],
      material: 'Edelstahl, 18 Karat vergoldet',
      desc: 'Feine Creolen mit kleinem Perlenanhänger — passen zur Kette „Perla d’Oro“ und zu allem in Rosé.',
      details: ['Durchmesser ca. 2 cm', 'Süßwasserperle als Anhänger', 'Nickelfrei, anlaufgeschützt', 'Sehr leicht, drückt nicht'],
      rating: 4.7, reviews: 18
    },
    {
      id: 'tuch-serafina', name: 'Tuch „Serafina“', cat: 'accessoires',
      price: 27.95, old: 34.95, badge: 'sale',
      colors: ['Rosé', 'Salbei'], sizes: ONE_SIZE, soldOut: [],
      material: '100 % Polyester in Seidenoptik',
      desc: 'Kleines Halstuch in Seidenoptik — um den Hals, ums Handgelenk oder am Taschenhenkel.',
      details: ['Maße ca. 55 × 55 cm', 'Gerollter Saum', 'Seidiger Griff', 'Aus der Vorsaison — reduziert'],
      rating: 4.5, reviews: 12
    }
  ];

  /* ---------------------------------------------------------
     Beispielbewertungen — werden zum Livegang ersetzt
     --------------------------------------------------------- */
  var REVIEW_POOL = [
    { name: 'Sabrina K.', stars: 5, text: 'Der Stoff fühlt sich viel hochwertiger an, als der Preis vermuten lässt. Sitzt genau wie auf dem Bild.' },
    { name: 'Melanie R.', stars: 5, text: 'Schnelle Lieferung, hübsch verpackt. Die Farbe ist genau dieses zarte Rosé, das ich gesucht habe.' },
    { name: 'Jasmin B.', stars: 4, text: 'Sehr schön verarbeitet. Ich hätte eine Nummer größer nehmen sollen — fällt eher knapp aus.' },
    { name: 'Anna-Lena W.', stars: 5, text: 'Trage ich seit drei Wochen fast täglich. Nach dem Waschen immer noch in Form.' },
    { name: 'Kathrin M.', stars: 5, text: 'Die goldenen Details machen den Unterschied. Wurde schon zweimal darauf angesprochen.' },
    { name: 'Denise F.', stars: 4, text: 'Gute Qualität zum fairen Preis. Der Versand kam einen Tag früher als angekündigt.' },
    { name: 'Verena S.', stars: 5, text: 'Endlich ein Schnitt, der auch mit größerer Oberweite funktioniert. Bleibt im Schrank.' },
    { name: 'Nadine H.', stars: 5, text: 'Sehr angenehm auf der Haut, kratzt nicht. Genau das Richtige für den Übergang.' },
    { name: 'Christina P.', stars: 4, text: 'Sieht edel aus und lässt sich zu vielem kombinieren. Rücksendung war zum Glück nicht nötig.' }
  ];

  /* =========================================================
     Hilfsfunktionen
     ========================================================= */

  /* ---------------------------------------------------------
     Farbrechnen für die Bildflächen
     Solange keine Fotos da sind, bekommt jede Fläche den Ton
     des Produkts. Das gibt dem Raster Abwechslung und zeigt
     der Kundin die echte Warenfarbe.
     --------------------------------------------------------- */
  var mixWith = function (a, b, t) { return Art.mix(a, b, t); };
  var relLum  = function (h) { return Art.lum(h); };

  /* Sehr helle Toene wuerden als Flaeche im weissen Hintergrund verschwinden.
     Weiss und Creme bekommen daher eigene, tragfaehige Toene. */
  var TILE_OVERRIDE = {
    'Weiß':  '#E3D8DB',
    'Creme': '#E2CFB4'
  };

  function tint(colorName) {
    var base = TILE_OVERRIDE[colorName] || COLORS[colorName] || '#E9C3CB';
    if (relLum(base) > 0.80) base = mixWith(base, '#E9C3CB', 0.55);

    var top  = mixWith(base, '#FFFFFF', 0.42);
    var mid  = mixWith(base, '#FFFFFF', 0.12);
    var low  = mixWith(base, '#6E5A46', 0.22);
    var dark = relLum(mid) < 0.42;

    return {
      background: 'linear-gradient(150deg,' + top + ' 0%,' + mid + ' 52%,' + low + ' 100%)',
      ink: dark ? 'rgba(255,255,255,.66)' : 'rgba(168,132,47,.66)',
      dark: dark
    };
  }

  /* Welche der geführten Farben zeigt die Kachel?
     Nicht immer die erste — sonst wäre halbe Kollektion rosé und das
     Raster wieder eintönig. Die Wahl ist stabil je Produkt, damit die
     Kachel im Raster und die Produktseite dieselbe Farbe zeigen. */
  function tileColor(product) {
    var seed = 0;
    for (var i = 0; i < product.id.length; i++) seed += product.id.charCodeAt(i);
    return product.colors[seed % product.colors.length];
  }

  /* Bildfläche: Illustration in der Warenfarbe */
  function phMarkup(colorName, label, iconIgnored, product, viewSuffix) {
    var t = tint(colorName);
    if (product && global.Art) {
      return '<div class="ph ph-art' + (t.dark ? ' ph-dark' : '') + '">' +
             Art.forProduct(product, colorName, COLORS[colorName] || '#E9C3CB', viewSuffix) +
             '</div>';
    }
    // Rückfall für Flächen ohne Produktbezug
    return '<div class="ph' + (t.dark ? ' ph-dark' : '') + '" data-ph="' + (label || '') + '"' +
           ' style="background:' + t.background + '"></div>';
  }

  function money(value) {
    return value.toLocaleString('de-DE', {
      style: 'currency', currency: 'EUR',
      minimumFractionDigits: 2, maximumFractionDigits: 2
    });
  }

  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(global.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }

  function iconOf(product) {
    return ICON_BY_CAT[product.cat] || 'ic-dress';
  }

  function byCategory(key) {
    if (key === 'neu')  return PRODUCTS.filter(function (p) { return p.badge === 'neu'; });
    if (key === 'sale') return PRODUCTS.filter(function (p) { return p.badge === 'sale'; });
    if (!key || key === 'alle') return PRODUCTS.slice();
    return PRODUCTS.filter(function (p) { return p.cat === key; });
  }

  function get(id) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
  }

  function reviewsFor(product) {
    // Stabile, aber unterschiedliche Auswahl je Produkt
    var seed = 0;
    for (var i = 0; i < product.id.length; i++) seed += product.id.charCodeAt(i);
    return [0, 1, 2].map(function (n) {
      return REVIEW_POOL[(seed + n * 3) % REVIEW_POOL.length];
    });
  }

  function stars(rating) {
    var out = '<span class="stars" aria-hidden="true">';
    for (var i = 1; i <= 5; i++) {
      out += '<svg viewBox="0 0 24 24" class="' + (i <= Math.round(rating) ? '' : 'off') + '">' +
             '<path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>';
    }
    return out + '</span>';
  }

  function swatchDots(colorNames) {
    return '<span class="swatches">' + colorNames.map(function (c) {
      return '<i style="background:' + (COLORS[c] || '#ccc') + '" title="' + c + '"></i>';
    }).join('') + '</span>';
  }

  function priceHtml(p) {
    if (p.old) {
      return '<del>' + money(p.old) + '</del><span class="now">' + money(p.price) + '</span>';
    }
    return money(p.price);
  }

  /* Produktkarte fuer Startseite und Kategorieseite */
  function card(p) {
    var badge = '';
    if (p.badge === 'neu')  badge = '<span class="badge">Neu</span>';
    if (p.badge === 'sale') badge = '<span class="badge rose">Sale</span>';

    return '' +
      '<a class="card" href="produkt.html?id=' + p.id + '">' +
        '<div class="card-media">' + badge +
          phMarkup(tileColor(p), '', null, p) +
          '<button class="wish-btn" type="button" data-wish="' + p.id + '"' +
            ' aria-label="Zur Merkliste hinzufügen">' +
            '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-9.5A4 4 0 0 1 12 8a4 4 0 0 1 7 2.5C19 15.5 12 20 12 20Z"/></svg>' +
          '</button>' +
        '</div>' +
        '<h3>' + p.name + '</h3>' +
        '<p class="price">' + priceHtml(p) + '</p>' +
        swatchDots(p.colors) +
      '</a>';
  }

  /* =========================================================
     Warenkorb — nur Zaehler, reicht fuer die Vorschau
     ========================================================= */
  var CART_KEY  = 'signorina_cart';
  var WISH_KEY  = 'signorina_wish';
  var ORDER_KEY = 'signorina_orders';
  var LAST_KEY  = 'signorina_last_order';

  var FREE_SHIPPING_FROM = 49;
  var SHIPPING_FLAT      = 4.95;

  function read(key, fallback) {
    try {
      var raw = global.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }

  function write(key, value) {
    try { global.localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  /* ---------------- Warenkorb ---------------- */
  function lineKey(id, color, size) { return id + '|' + color + '|' + size; }

  function cartItems() {
    return read(CART_KEY, []).filter(function (l) { return get(l.id); });
  }

  function cartCount() {
    return cartItems().reduce(function (n, l) { return n + l.qty; }, 0);
  }

  function addToCart(product, color, size, qty) {
    var items = cartItems();
    var key = lineKey(product.id, color, size);
    var found = null;
    for (var i = 0; i < items.length; i++) {
      if (lineKey(items[i].id, items[i].color, items[i].size) === key) { found = items[i]; break; }
    }
    if (found) found.qty = Math.min(10, found.qty + (qty || 1));
    else items.push({ id: product.id, color: color, size: size, qty: qty || 1 });
    write(CART_KEY, items);
    refreshBadges();
  }

  function setQty(key, qty) {
    var items = cartItems().map(function (l) {
      if (lineKey(l.id, l.color, l.size) === key) l.qty = Math.max(1, Math.min(10, qty));
      return l;
    });
    write(CART_KEY, items);
    refreshBadges();
  }

  function removeLine(key) {
    write(CART_KEY, cartItems().filter(function (l) {
      return lineKey(l.id, l.color, l.size) !== key;
    }));
    refreshBadges();
  }

  function clearCart() { write(CART_KEY, []); refreshBadges(); }

  /* Rechnung — eine Stelle, damit Warenkorb, Kasse und
     Bestätigung nie unterschiedliche Summen zeigen */
  function totals(items, extraShipping) {
    items = items || cartItems();
    extraShipping = Number(extraShipping || 0);
    var lines = items.map(function (l) {
      var p = get(l.id);
      return { line: l, product: p, sum: p.price * l.qty };
    });
    var subtotal = lines.reduce(function (n, x) { return n + x.sum; }, 0);
    var base     = (subtotal === 0 || subtotal >= FREE_SHIPPING_FROM) ? 0 : SHIPPING_FLAT;
    var shipping = subtotal === 0 ? 0 : base + extraShipping;
    var total    = subtotal + shipping;
    // Deutschland: Bruttopreise, 19 % sind im Preis enthalten
    var vat      = total - (total / 1.19);
    return {
      lines: lines, subtotal: subtotal, shipping: shipping,
      total: total, vat: vat,
      missingForFree: Math.max(0, FREE_SHIPPING_FROM - subtotal)
    };
  }

  /* ---------------- Merkliste ---------------- */
  function wishIds() {
    return read(WISH_KEY, []).filter(function (id) { return get(id); });
  }
  function inWish(id) { return wishIds().indexOf(id) !== -1; }
  function toggleWish(id) {
    var ids = wishIds(), i = ids.indexOf(id);
    if (i === -1) ids.push(id); else ids.splice(i, 1);
    write(WISH_KEY, ids);
    refreshBadges();
    return i === -1;
  }

  /* ---------------- Bestellungen ---------------- */
  function orderNumber(seedNum) {
    var abc = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    var n = seedNum >>> 0, out = '';
    for (var i = 0; i < 8; i++) { out += abc[n % abc.length]; n = Math.floor(n / abc.length) + 7919 * (i + 1); }
    return 'SIG-' + out;
  }

  function placeOrder(customer) {
    var t = totals(null, customer.versandExtra);
    if (!t.lines.length) return null;
    var seed = Art.seedOf(JSON.stringify(t.lines.map(function (x) {
      return x.line.id + x.line.size + x.line.qty;
    })) + customer.email + customer.stamp);

    var order = {
      number: orderNumber(seed),
      stamp: customer.stamp,
      email: customer.email,
      customer: customer,
      lines: t.lines.map(function (x) {
        return {
          id: x.line.id, name: x.product.name, color: x.line.color,
          size: x.line.size, qty: x.line.qty, price: x.product.price, sum: x.sum
        };
      }),
      subtotal: t.subtotal, shipping: t.shipping, total: t.total, vat: t.vat,
      state: 'BEZAHLT'
    };

    var all = read(ORDER_KEY, {});
    all[order.number] = order;
    write(ORDER_KEY, all);
    write(LAST_KEY, order.number);
    clearCart();
    return order;
  }

  function findOrder(number, email) {
    var all = read(ORDER_KEY, {});
    var o = all[String(number || '').trim().toUpperCase()];
    if (!o) return null;
    if (String(email || '').trim().toLowerCase() !== String(o.email).toLowerCase()) return null;
    return o;
  }

  function lastOrder() {
    var all = read(ORDER_KEY, {});
    return all[read(LAST_KEY, '')] || null;
  }

  /* ---------------- Suche ---------------- */
  function search(query) {
    var q = String(query || '').trim().toLowerCase();
    if (q.length < 2) return [];
    var words = q.split(/\s+/);
    return PRODUCTS.map(function (p) {
      var hay = (p.name + ' ' + p.material + ' ' + p.desc + ' ' +
                 p.colors.join(' ') + ' ' + CATEGORIES[p.cat].title).toLowerCase();
      var score = 0;
      words.forEach(function (w) {
        if (p.name.toLowerCase().indexOf(w) !== -1) score += 3;
        else if (hay.indexOf(w) !== -1) score += 1;
      });
      return { p: p, score: score, all: words.every(function (w) { return hay.indexOf(w) !== -1; }) };
    }).filter(function (x) { return x.all && x.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .map(function (x) { return x.p; });
  }

  /* ---------------- Anzeige ---------------- */
  function refreshBadges() {
    var c = cartCount(), w = wishIds().length;
    Array.prototype.forEach.call(document.querySelectorAll('.cart-count'), function (el) {
      el.textContent = c; el.hidden = c === 0;
    });
    Array.prototype.forEach.call(document.querySelectorAll('.wish-count'), function (el) {
      el.textContent = w; el.hidden = w === 0;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-wish]'), function (el) {
      el.classList.toggle('on', inWish(el.dataset.wish));
    });
  }

  function toast(message) {
    var el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove('show'); }, 2800);
  }

  /* =========================================================
     Gemeinsame Bausteine: Icons, Kopfzeile, Fusszeile
     ========================================================= */
  var SPRITE = '' +
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' +
      '<symbol id="ic-dress" viewBox="0 0 100 140">' +
        '<path d="M36 8 L50 18 L64 8 L78 36 L66 42 L71 128 L29 128 L34 42 L22 36 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>' +
      '</symbol>' +
      '<symbol id="ic-blouse" viewBox="0 0 100 140">' +
        '<path d="M34 10 L50 20 L66 10 L86 30 L74 44 L70 120 L30 120 L26 44 L14 30 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>' +
        '<path d="M50 20 L50 66" fill="none" stroke="currentColor" stroke-width="3"/>' +
      '</symbol>' +
      '<symbol id="ic-bag" viewBox="0 0 100 140">' +
        '<path d="M22 46 H78 L84 122 H16 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>' +
        '<path d="M36 46 V32 a14 14 0 0 1 28 0 V46" fill="none" stroke="currentColor" stroke-width="3"/>' +
      '</symbol>' +
      '<symbol id="ic-hanger" viewBox="0 0 100 140">' +
        '<path d="M50 34 a10 10 0 1 1 10 10 v6 L92 76 H8 L40 50" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>' +
        '<path d="M8 76 h84 v22 H8 Z" fill="none" stroke="currentColor" stroke-width="3"/>' +
      '</symbol>' +
    '</svg>';

  var NAV_ITEMS = [
    { key: 'neu',         label: 'Neu' },
    { key: 'kleider',     label: 'Kleider' },
    { key: 'oberteile',   label: 'Oberteile' },
    { key: 'sets',        label: 'Sets' },
    { key: 'accessoires', label: 'Accessoires' },
    { key: 'sale',        label: 'Sale', cls: 'sale' }
  ];

  function headerHtml(active) {
    var nav = NAV_ITEMS.map(function (item) {
      var cls = (item.cls ? item.cls + ' ' : '') + (item.key === active ? 'active' : '');
      return '<a href="kategorie.html?c=' + item.key + '" class="' + cls.trim() + '">' + item.label + '</a>';
    }).join('');

    return '' +
      '<div class="topbar">Kostenloser Versand ab 49&nbsp;€' +
        '<span class="sep opt">·</span><span class="opt">Lieferung in 1–3 Tagen</span>' +
        '<span class="sep opt">·</span><span class="opt">30 Tage Rückgaberecht</span>' +
      '</div>' +
      '<header class="site-header"><div class="wrap header-grid">' +
        '<button class="burger" id="burger" aria-label="Menü öffnen" aria-expanded="false" aria-controls="mainnav">' +
          '<span></span><span></span><span></span></button>' +
        '<nav class="nav" id="mainnav" aria-label="Hauptmenü">' + nav + '</nav>' +
        '<a href="index.html" class="brand" aria-label="Signorina.collection — Startseite">' +
          '<span class="mark">Signorina</span><span class="sub">collection</span></a>' +
        '<div class="header-actions">' +
          '<button class="icon-btn" id="search-open" aria-label="Suchen"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg></button>' +
          '<a class="icon-btn" href="bestellstatus.html" aria-label="Bestellstatus"><svg viewBox="0 0 24 24"><path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6M9 17h3"/></svg></a>' +
          '<a class="icon-btn" href="merkliste.html" aria-label="Merkliste"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-9.5A4 4 0 0 1 12 8a4 4 0 0 1 7 2.5C19 15.5 12 20 12 20Z"/></svg>' +
            '<span class="wish-count" hidden>0</span></a>' +
          '<a class="icon-btn" href="warenkorb.html" aria-label="Warenkorb"><svg viewBox="0 0 24 24"><path d="M6 7h12l1.4 13H4.6L6 7Z"/><path d="M9 7V5.5a3 3 0 0 1 6 0V7"/></svg>' +
            '<span class="cart-count" hidden>0</span></a>' +
        '</div>' +
      '</div></header>';
  }

  function footerHtml() {
    return '' +
      '<footer class="site-footer"><div class="wrap">' +
        '<div class="foot-grid">' +
          '<div class="foot-brand"><span class="mark">Signorina</span>' +
            '<p>Feminine Damenmode in zeitlosem Design — ausgewählt in kleinen Mengen, gemacht für jeden Tag.</p>' +
            '<div class="pay"><span>PayPal</span><span>Klarna</span><span>Visa</span><span>Mastercard</span><span>SEPA</span></div>' +
          '</div>' +
          '<div class="foot-col"><h4>Shop</h4><ul>' +
            '<li><a href="kategorie.html?c=neu">Neu</a></li>' +
            '<li><a href="kategorie.html?c=kleider">Kleider</a></li>' +
            '<li><a href="kategorie.html?c=oberteile">Oberteile</a></li>' +
            '<li><a href="kategorie.html?c=sets">Sets &amp; Zweiteiler</a></li>' +
            '<li><a href="kategorie.html?c=accessoires">Accessoires</a></li>' +
            '<li><a href="kategorie.html?c=sale">Sale</a></li>' +
          '</ul></div>' +
          '<div class="foot-col"><h4>Service</h4><ul>' +
            '<li><a href="service.html?p=versand">Versand &amp; Lieferung</a></li>' +
            '<li><a href="service.html?p=ruecksendung">Rückgabe &amp; Umtausch</a></li>' +
            '<li><a href="service.html?p=groessen">Größentabelle</a></li>' +
            '<li><a href="service.html?p=zahlung">Zahlungsarten</a></li>' +
            '<li><a href="service.html?p=kontakt">Kontakt</a></li>' +
            '<li><a href="bestellstatus.html">Bestellstatus</a></li>' +
          '</ul></div>' +
          '<div class="foot-col"><h4>Rechtliches</h4><ul>' +
            '<li><a href="service.html?p=impressum">Impressum</a></li>' +
            '<li><a href="service.html?p=agb">AGB</a></li>' +
            '<li><a href="service.html?p=widerruf">Widerrufsbelehrung</a></li>' +
            '<li><a href="service.html?p=datenschutz">Datenschutzerklärung</a></li>' +
            '<li><a href="#" data-cookie-open>Cookie-Einstellungen</a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="foot-bottom">' +
          '<span>© 2026 Signorina.collection</span>' +
          '<span>Alle Preise inkl. MwSt. zzgl. Versandkosten</span>' +
        '</div>' +
      '</div></footer>';
  }

  /* Baut Icons, Kopf- und Fusszeile auf jeder Seite auf */
  function mountChrome(options) {
    options = options || {};

    document.body.insertAdjacentHTML('afterbegin', SPRITE);

    var headSlot = document.getElementById('site-header');
    if (headSlot) headSlot.outerHTML = headerHtml(options.active);

    var footSlot = document.getElementById('site-footer');
    if (footSlot) footSlot.outerHTML = footerHtml();

    var badge = document.createElement('div');
    badge.className = 'draft-badge';
    badge.textContent = 'Entwurf v3 — Vorschau';
    document.body.appendChild(badge);

    // Mobiles Menue
    var burger = document.getElementById('burger');
    var nav = document.getElementById('mainnav');
    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      });
    }

    mountSearch();
    mountCookieBanner();

    // Merkliste per Klick auf das Herz in der Produktkarte
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-wish]');
      if (!btn) return;
      e.preventDefault();
      var added = toggleWish(btn.dataset.wish);
      var prod = get(btn.dataset.wish);
      toast(added
        ? prod.name + ' zur Merkliste hinzugefügt'
        : prod.name + ' von der Merkliste entfernt');
    });

    // Cookie-Einstellungen erneut öffnen
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cookie-open]')) {
        e.preventDefault();
        try { global.localStorage.removeItem('signorina_cookies'); } catch (err) {}
        mountCookieBanner();
      }
    });

    refreshBadges();
  }

  /* ---------------------------------------------------------
     Suche als Overlay — von jeder Seite aus erreichbar
     --------------------------------------------------------- */
  function mountSearch() {
    var box = document.createElement('div');
    box.className = 'search-overlay';
    box.hidden = true;
    box.innerHTML =
      '<div class="search-panel" role="dialog" aria-modal="true" aria-label="Suche">' +
        '<form class="search-form" role="search">' +
          '<svg viewBox="0 0 24 24" class="search-ico"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
          '<input type="search" id="search-input" placeholder="Wonach suchst du?" aria-label="Suchbegriff" autocomplete="off">' +
          '<button type="button" class="search-close" aria-label="Suche schließen">&times;</button>' +
        '</form>' +
        '<div class="search-results" id="search-results">' +
          '<p class="search-hint">Zum Beispiel: Kleid, Musselin, Rosé, Blazer</p>' +
        '</div>' +
      '</div>';
    document.body.appendChild(box);

    var input = box.querySelector('#search-input');
    var out   = box.querySelector('#search-results');

    function open() {
      box.hidden = false;
      document.body.style.overflow = 'hidden';
      setTimeout(function () { input.focus(); }, 30);
    }
    function close() {
      box.hidden = true;
      document.body.style.overflow = '';
    }

    var openBtn = document.getElementById('search-open');
    if (openBtn) openBtn.addEventListener('click', open);
    box.querySelector('.search-close').addEventListener('click', close);
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !box.hidden) close();
    });
    box.querySelector('.search-form').addEventListener('submit', function (e) { e.preventDefault(); });

    input.addEventListener('input', function () {
      var q = input.value;
      if (q.trim().length < 2) {
        out.innerHTML = '<p class="search-hint">Zum Beispiel: Kleid, Musselin, Rosé, Blazer</p>';
        return;
      }
      var hits = search(q);
      out.innerHTML = hits.length
        ? '<p class="search-count">' + hits.length + ' Treffer</p>' +
          '<div class="grid-products">' + hits.slice(0, 8).map(card).join('') + '</div>'
        : '<p class="search-hint">Nichts gefunden für &bdquo;' + q.replace(/</g, '&lt;') + '&ldquo;.<br>' +
          'Versuch es mit einem kürzeren Wort.</p>';
      refreshBadges();
    });
  }

  /* ---------------------------------------------------------
     Cookie-Hinweis — Ablehnen ist genauso leicht wie Annehmen
     --------------------------------------------------------- */
  function mountCookieBanner() {
    if (read('signorina_cookies', null)) return;
    var old = document.querySelector('.cookie-bar');
    if (old) old.remove();

    var bar = document.createElement('div');
    bar.className = 'cookie-bar';
    bar.innerHTML =
      '<div class="cookie-inner">' +
        '<p><strong>Cookies</strong> — wir nutzen nur, was der Shop zum Funktionieren braucht. ' +
        'Statistik und Marketing nur mit deiner Zustimmung. ' +
        '<a href="service.html?p=datenschutz">Datenschutzerklärung</a></p>' +
        '<div class="cookie-actions">' +
          '<button class="btn btn-ghost-light btn-sm" data-cookie="essenziell">Nur notwendige</button>' +
          '<button class="btn btn-gold btn-sm" data-cookie="alle">Alle akzeptieren</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add('show'); });

    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cookie]');
      if (!b) return;
      write('signorina_cookies', { choice: b.dataset.cookie });
      bar.classList.remove('show');
      setTimeout(function () { bar.remove(); }, 300);
      toast(b.dataset.cookie === 'alle'
        ? 'Danke — alle Cookies erlaubt.'
        : 'Gespeichert — nur notwendige Cookies.');
    });
  }


  /* =========================================================
     Oeffentliche Schnittstelle
     ========================================================= */
  global.Shop = {
    COLORS: COLORS,
    CATEGORIES: CATEGORIES,
    PRODUCTS: PRODUCTS,
    money: money,
    param: param,
    iconOf: iconOf,
    tint: tint,
    tileColor: tileColor,
    phMarkup: phMarkup,
    byCategory: byCategory,
    get: get,
    reviewsFor: reviewsFor,
    stars: stars,
    swatchDots: swatchDots,
    priceHtml: priceHtml,
    card: card,
    addToCart: addToCart,
    cartItems: cartItems,
    cartCount: cartCount,
    lineKey: lineKey,
    setQty: setQty,
    removeLine: removeLine,
    clearCart: clearCart,
    totals: totals,
    wishIds: wishIds,
    inWish: inWish,
    toggleWish: toggleWish,
    placeOrder: placeOrder,
    findOrder: findOrder,
    lastOrder: lastOrder,
    search: search,
    refreshBadges: refreshBadges,
    FREE_SHIPPING_FROM: FREE_SHIPPING_FROM,
    SHIPPING_FLAT: SHIPPING_FLAT,
    toast: toast,
    mountChrome: mountChrome
  };

})(window);
