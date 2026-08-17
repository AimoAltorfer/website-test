import type { Metadata } from "next";
import Bild from "@/components/Bild";
import DreiFluesse from "@/components/DreiFluesse";
import Reveal from "@/components/Reveal";
import SeitenKopf from "@/components/SeitenKopf";
import { kontakt } from "@/lib/inhalte";

export const metadata: Metadata = {
  title: "Praxisraum mieten",
  description:
    "Praxis- oder Büroraum an der Bahnhofstrasse 14 in Turgi zu vermieten: CHF 490.– pro Raum und Monat inklusive Nebenkosten, Küche, Bad und grossem Warteraum.",
};

const fakten = [
  "per sofort oder nach Vereinbarung",
  "zentral an der Bahnhofstrasse",
  "Parkplätze vor dem Haus",
  "Bahnhof 3 Minuten entfernt",
  "pro Raum CHF 490.– / monatlich (inkl.)",
  "auch halbe Woche möglich nach Absprache",
  "mit gemeinsamer Küche, Bad und Warteraum",
  "Tee, Kombucha und Kaffeemaschine inklusive",
];

export default function RaumSeite() {
  return (
    <>
      <SeitenKopf
        kicker="Raum"
        titel="Zwei Räume sind frei."
        lead="Altbau an der Bahnhofstrasse, 1. Stock, kein Lift — dafür Charakter. Für Therapeutinnen, Coaches, Treuhänder und alle, die einen ruhigen Raum mit Empfang brauchen."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Bild
            src="/images/praxisraum-blau.jpg"
            alt="Heller Praxisraum mit blauer Wand und Behandlungsliege"
            caption="Der blaue Raum. Hell, arbeitsbereit."
            aspect="aspect-[3/4]"
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
            priority
          />
          <Bild
            src="/images/praxisraum-warte.jpg"
            alt="Grosser Warteraum der Praxis"
            caption="Grosser Warteraum. Auch für Anlässe am Wochenende."
            aspect="aspect-[3/4]"
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
          />
          <Bild
            src="/images/praxisraum-buero.jpg"
            alt="Büroraum mit Schreibtisch"
            caption="Büro oder Beratung. Das Telefon ist analog, der Platz nicht."
            aspect="aspect-[3/4]"
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="grid gap-x-8 gap-y-3 text-lg leading-relaxed sm:grid-cols-2 md:text-xl">
                {fakten.map((punkt) => (
                  <li key={punkt} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                    {punkt}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-12 space-y-10">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-wasser md:text-3xl">
                  Büro oder Praxisraum
                </h2>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed md:text-xl">
                  Suchen Sie ein Büro für Kundenempfang und Beratung?
                  Treuhänder, Steuerberater, Therapeuten und Coaches sind
                  herzlich willkommen. Profitieren Sie von einem
                  professionellen Raum für Ihre Beratungen.
                </p>
              </Reveal>
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-wasser md:text-3xl">
                  Praxis befindet sich im 1. Stock
                </h2>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed md:text-xl">
                  Der Eingang befindet sich seitlich, kein Lift. Tumbler und
                  Waschmaschine im Keller. Küche und Bad. Im Preis inbegriffen
                  sind auch die Nebenkosten, Strom, Wasser, Heizung, Tee,
                  Kaffee.
                </p>
              </Reveal>
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-wasser md:text-3xl">
                  Schöne Räume im Altbaustil
                </h2>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed md:text-xl">
                  Dürfen auch individuell eingerichtet und gestrichen werden.
                  Möbel können, wenn gewünscht, nach Absprache teils übernommen
                  werden. Im einen Raum steht zur Zeit eine Liege, die
                  übernommen werden kann.
                </p>
              </Reveal>
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-wasser md:text-3xl">
                  Grosser, einladender Warteraum
                </h2>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed md:text-xl">
                  An den Wochenenden steht die Praxis meist leer — also auch
                  für Gruppenbesprechungen etc. geeignet.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Bild
              src="/images/praxis-haus.jpg"
              alt="Das Haus an der Bahnhofstrasse 14 in Turgi"
              caption="Das Haus. Seitlicher Eingang, 1. Stock."
              frame="bogen"
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-salbei-hell py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <DreiFluesse className="mb-6" />
          <Reveal>
            <h2 className="max-w-3xl font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight font-semibold text-wasser">
              Für Therapeuten: Also Hilfe!!
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Ich führe meine Praxis seit 2012 in diesen vier Wänden mit der
                Naturheilpraktikerin (TEN) Chantal Scossa. Wir haben uns stets
                ergänzt und TEN und TCM verbunden. Aus persönlichen Gründen
                gibt sie nun ihre Praxis auf. Ich würde mich sehr freuen,
                wieder mit einer TEN-Therapeutin zusammenarbeiten zu können —
                aber auch eine TCM-Verstärkung könnte ich dringend brauchen.
              </p>
              <p>
                Die meiste Zeit vom Jahr bin ich sehr ausgebucht und wäre froh
                um Unterstützung. Leider kann ich nicht alle Patientenanfragen
                annehmen, und auch Notfälle haben es oft schwierig, bei mir
                reinzurutschen.
              </p>
              <p>
                Ich bin Mentorin und würde mich auch über Anfänger freuen.
                Daher auch das Angebot, nur halb einzusteigen für eine so
                kleine Miete. Die Bahnhofstrasse Turgi ist ein sehr guter Ort,
                um mit einer Praxis zu starten.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={180}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={kontakt.telefonHref}
                className="rounded-full bg-wasser px-7 py-4 text-lg font-semibold text-stein-hell transition-colors hover:bg-tuerkis"
              >
                {kontakt.telefon}
              </a>
              <a
                href={kontakt.mailHref}
                className="rounded-full border-2 border-wasser px-7 py-4 text-lg font-semibold text-wasser transition-colors hover:border-tuerkis hover:text-tuerkis"
              >
                E-Mail schreiben
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
