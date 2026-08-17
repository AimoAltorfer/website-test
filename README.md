# Praxisgemeinschaft Wasserschloss

Marketing-Website der Praxisgemeinschaft Wasserschloss — Zentrum für
Naturmedizin, TCM / TEN / Coaching — von Silke Altorfer in Turgi (Schweiz).

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Keine Datenbank, kein Backend, kein Tracking — Kontakt über `tel:` und `mailto:`

## Entwicklung

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Produktions-Build
```

## Gestaltung

- **Logo:** das echte Praxislogo (salbeigrünes Oval + dunkler Pinselstrich),
  im Header und Footer.
- **Palette «Wasserschloss»:** tiefes Wasser-Petrol, Türkis, Stein und das
  Salbeigrün aus dem Logo. Definiert in `app/globals.css` (`@theme`).
- **Typografie:** Fraunces (Display) + Karla (Fliesstext), bewusst gross.
- **Bewegungssprache «steigendes Wasser»:** Bilder tauchen einmalig mit einem
  Wipe von unten auf, Texte steigen sanft, die drei Flüsse (Aare, Reuss,
  Limmat) zeichnen sich als Trennlinien. Alles hinter
  `prefers-reduced-motion: no-preference` gekapselt — keine Loops, kein
  Ken-Burns, kein Parallax.
- **Bildbehandlung:** Fotos stehen als Objekte im Layout — im Rundbogen (Echo
  der Logo-Ovale) oder auf versetzter Salbei-Platte. Keine
  Vollbild-Hintergründe, kein Text auf abgedunkelten Fotos.

## Seiten

`/` Home · `/praxis` · `/methoden` · `/indikationen` · `/ueber-mich` ·
`/aktuelles` (Studenten: P1, P2, Mentorat M7) · `/raum` · `/kontakt`
(inkl. Impressum & Datenschutz)
