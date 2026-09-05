/* =========================================================
   Signorina.collection — Abbildungen
   Erzeugt aus Warenfarbe und Artikel-ID eine stilisierte
   Studioaufnahme als Inline-SVG. Kein Foto, keine Fälschung —
   eine Illustration, die den Schnitt und die Farbe zeigt,
   bis echte Produktfotos vorliegen.
   ========================================================= */
(function (global) {
  'use strict';

  /* ---------------------------------------------------------
     Farbrechnen
     --------------------------------------------------------- */
  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16)
    ];
  }

  function rgbToHex(rgb) {
    return '#' + rgb.map(function (v) {
      var s = Math.round(Math.max(0, Math.min(255, v))).toString(16);
      return s.length < 2 ? '0' + s : s;
    }).join('');
  }

  function mix(hex, target, amount) {
    var a = hexToRgb(hex), b = hexToRgb(target);
    return rgbToHex([0, 1, 2].map(function (i) {
      return a[i] + (b[i] - a[i]) * amount;
    }));
  }

  // Relative Helligkeit nach WCAG
  function lum(hex) {
    var c = hexToRgb(hex).map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }

  function contrast(a, b) {
    var l1 = lum(a), l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }

  /* ---------------------------------------------------------
     Stabiler Zufall je Artikel — gleiche ID, gleiches Bild
     --------------------------------------------------------- */
  function seedOf(str) {
    var s = 2166136261;
    for (var i = 0; i < str.length; i++) {
      s ^= str.charCodeAt(i);
      s = (s * 16777619) >>> 0;
    }
    return s >>> 0;
  }

  function rng(seed) {
    var s = seed >>> 0 || 1;
    return function () {
      s ^= s << 13; s >>>= 0;
      s ^= s >> 17;
      s ^= s << 5;  s >>>= 0;
      return s / 4294967296;
    };
  }

  /* ---------------------------------------------------------
     Schnitte — Blickfeld 300 × 400
     --------------------------------------------------------- */
  var SHAPES = {
    kleid: {
      body: 'M112 78 L150 62 L188 78 L200 132 L182 178 L228 352 Q150 376 72 352 L118 178 L100 132 Z',
      neck: 'M132 70 Q150 92 168 70 Q150 78 132 70 Z',
      folds: ['M150 190 L150 358', 'M126 196 L104 350', 'M174 196 L196 350'],
      shine: 'M132 182 L118 352 Q140 360 148 358 L150 186 Z'
    },
    bluse: {
      body: 'M110 80 L150 64 L190 80 L242 110 L220 156 L198 134 L204 288 Q150 306 96 288 L102 134 L80 156 L58 110 Z',
      neck: 'M133 72 Q150 96 167 72 Q150 82 133 72 Z',
      folds: ['M150 108 L150 296', 'M122 140 L116 288', 'M178 140 L184 288'],
      shine: 'M124 128 L114 286 Q134 294 142 292 L146 130 Z'
    },
    jacke: {
      body: 'M108 80 L150 66 L192 80 L244 114 L222 160 L202 138 L208 300 Q150 318 92 300 L98 138 L78 160 L56 114 Z',
      neck: '',
      folds: ['M150 66 L126 156 L138 300', 'M150 66 L174 156 L162 300', 'M150 170 L150 300'],
      shine: 'M120 132 L110 298 Q130 306 138 304 L142 134 Z',
      extra: '<circle cx="150" cy="196" r="5" class="gold-dot"/><circle cx="150" cy="222" r="5" class="gold-dot"/>'
    },
    set: {
      body: 'M112 80 L150 66 L188 80 L208 112 L196 136 L192 196 Q150 208 108 196 L104 136 L92 112 Z',
      body2: 'M106 218 L194 218 L204 358 L160 358 L150 268 L140 358 L96 358 Z',
      neck: 'M134 74 Q150 94 166 74 Q150 82 134 74 Z',
      folds: ['M150 118 L150 200', 'M150 226 L150 264'],
      shine: 'M124 128 L120 198 Q136 204 142 202 L144 126 Z'
    },
    tasche: {
      body: 'M76 158 L224 158 L238 348 L62 348 Z',
      neck: '',
      folds: ['M76 200 L224 200'],
      shine: 'M92 164 L84 344 L112 344 L116 164 Z',
      extra: '<path d="M112 158 V122 a38 34 0 0 1 76 0 V158" fill="none" class="gold-line"/>' +
             '<rect x="138" y="192" width="24" height="16" rx="3" class="gold-fill"/>'
    },
    schmuck: {
      body: 'M150 128 C96 128 82 196 112 244 C132 276 168 276 188 244 C218 196 204 128 150 128 Z',
      neck: '',
      folds: [],
      shine: '',
      hollow: true,
      extra: '<circle cx="150" cy="268" r="15" class="gold-fill"/>' +
             '<circle cx="145" cy="263" r="4" fill="rgba(255,255,255,.6)"/>'
    },
    tuch: {
      body: 'M68 146 Q150 112 232 146 L216 306 Q150 340 84 306 Z',
      neck: '',
      folds: ['M96 152 Q150 128 204 152', 'M92 210 Q150 190 208 210', 'M88 262 Q150 244 212 262'],
      shine: 'M84 150 Q108 136 122 134 L112 316 Q96 310 86 302 Z'
    }
  };

  /* Welcher Schnitt gehört zu welchem Artikel? */
  function shapeFor(product) {
    var n = product.name;
    if (/Kleid/i.test(n))                       return 'kleid';
    if (/Set/i.test(n))                         return 'set';
    if (/Blazer|Strickjacke|Pullover/i.test(n)) return 'jacke';
    if (/Bluse|Top|Shirt/i.test(n))             return 'bluse';
    if (/Tasche/i.test(n))                      return 'tasche';
    if (/Kette|Ohrringe/i.test(n))              return 'schmuck';
    if (/Schal|Tuch|Haarband|Gürtel/i.test(n))  return 'tuch';
    return 'kleid';
  }

  /* Studiohintergründe — leichte Abwechslung, damit ein Raster
     nicht aus 32 identischen Rechtecken besteht */
  var BACKDROPS = [
    { top: '#FBF3F4', bottom: '#F2E2E5' },  // rosé
    { top: '#FAF6F0', bottom: '#EFE4D6' },  // sand
    { top: '#F7F6F5', bottom: '#E8E6E4' },  // grau
    { top: '#FBF2EF', bottom: '#F0DFD8' }   // warm
  ];

  /* ---------------------------------------------------------
     Hauptfunktion
     --------------------------------------------------------- */
  var counter = 0;

  function garment(opts) {
    var base   = opts.color || '#E9C3CB';
    var shape  = SHAPES[opts.shape] || SHAPES.kleid;
    var seed   = seedOf(opts.seed || 'x');
    var rand   = rng(seed);
    var uid    = 'a' + (counter++) + (seed % 9973);
    var back   = BACKDROPS[seed % BACKDROPS.length];

    // Sehr helle Ware braucht eine sichtbare Kante, sonst
    // verschwindet sie im hellen Hintergrund
    var veryLight = lum(base) > 0.78;
    var light = mix(base, '#FFFFFF', veryLight ? 0.14 : 0.30);
    var mid   = base;
    var shade = mix(base, '#4A3B33', veryLight ? 0.20 : 0.34);
    var edge  = mix(base, '#4A3B33', veryLight ? 0.34 : 0.46);

    // Leichte Drehung, damit die Reihe nicht wie gestempelt wirkt
    var rot = (rand() * 2.6 - 1.3).toFixed(2);

    var folds = shape.folds.map(function (d) {
      return '<path d="' + d + '" fill="none" stroke="' + shade +
             '" stroke-opacity=".26" stroke-width="1.6" stroke-linecap="round"/>';
    }).join('');

    var shine = shape.shine
      ? '<path d="' + shape.shine + '" fill="#FFFFFF" opacity=".16"/>'
      : '';

    var neck = shape.neck
      ? '<path d="' + shape.neck + '" fill="' + edge + '" opacity=".55"/>'
      : '';

    var second = shape.body2
      ? '<path d="' + shape.body2 + '" fill="url(#g' + uid + ')" stroke="' + edge +
        '" stroke-opacity=".38" stroke-width="1.2"/>'
      : '';

    var extra = (shape.extra || '')
      .replace(/class="gold-dot"/g, 'fill="#C9A24A" opacity=".85"')
      .replace(/class="gold-line"/g, 'stroke="#C9A24A" stroke-width="5" stroke-opacity=".8"')
      .replace(/class="gold-fill"/g, 'fill="#C9A24A" opacity=".9"');

    var bodyFill = shape.hollow
      ? 'none" stroke="#C9A24A" stroke-width="6" stroke-opacity=".9'
      : 'url(#g' + uid + ')';

    var bodyStroke = shape.hollow
      ? ''
      : ' stroke="' + edge + '" stroke-opacity=".38" stroke-width="1.2"';

    return '' +
    '<svg class="art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" role="img" ' +
         'aria-label="' + (opts.alt || 'Illustration des Artikels') + '">' +
      '<defs>' +
        '<linearGradient id="b' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="' + back.top + '"/>' +
          '<stop offset="1" stop-color="' + back.bottom + '"/>' +
        '</linearGradient>' +
        '<linearGradient id="g' + uid + '" x1="0.12" y1="0" x2="0.9" y2="1">' +
          '<stop offset="0" stop-color="' + light + '"/>' +
          '<stop offset="0.52" stop-color="' + mid + '"/>' +
          '<stop offset="1" stop-color="' + shade + '"/>' +
        '</linearGradient>' +
        '<radialGradient id="s' + uid + '" cx="0.5" cy="0.5" r="0.5">' +
          '<stop offset="0" stop-color="#4A3B33" stop-opacity=".22"/>' +
          '<stop offset="1" stop-color="#4A3B33" stop-opacity="0"/>' +
        '</radialGradient>' +
        '<radialGradient id="v' + uid + '" cx="0.5" cy="0.42" r="0.72">' +
          '<stop offset="0.6" stop-color="#000000" stop-opacity="0"/>' +
          '<stop offset="1" stop-color="#4A3B33" stop-opacity=".10"/>' +
        '</radialGradient>' +
      '</defs>' +

      '<rect width="300" height="400" fill="url(#b' + uid + ')"/>' +
      '<ellipse cx="150" cy="366" rx="96" ry="20" fill="url(#s' + uid + ')"/>' +

      '<g transform="rotate(' + rot + ' 150 210)">' +
        '<path d="' + shape.body + '" fill="' + bodyFill + '"' + bodyStroke + '/>' +
        second + neck + folds + shine + extra +
      '</g>' +

      '<rect width="300" height="400" fill="url(#v' + uid + ')"/>' +
    '</svg>';
  }

  /* Bequemer Aufruf mit einem Produkt aus dem Katalog */
  function forProduct(product, colorName, colorHex, altSuffix) {
    return garment({
      shape: shapeFor(product),
      color: colorHex,
      seed: product.id + (altSuffix || ''),
      alt: product.name + ' in ' + colorName
    });
  }

  global.Art = {
    mix: mix,
    lum: lum,
    contrast: contrast,
    seedOf: seedOf,
    rng: rng,
    shapeFor: shapeFor,
    garment: garment,
    forProduct: forProduct,
    SHAPES: SHAPES
  };

})(window);
