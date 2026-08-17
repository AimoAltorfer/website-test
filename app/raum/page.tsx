import type { Metadata } from "next";
import Image from "next/image";
import Atmosphaere from "@/components/Atmosphaere";
import Bild from "@/components/Bild";
import DreiFluesse from "@/components/DreiFluesse";
import Reveal from "@/components/Reveal";
import SeitenKopf from "@/components/SeitenKopf";

export const metadata: Metadata = {
  title: "Praxisraum",
  description:
    "Praxis- oder Büroraum gesucht? In der Gemeinschaftspraxis Wasserschloss Turgi werden zwei Therapie- und Büroräume frei. CHF 490.-- pro Raum und Monat inklusive.",
};

const fakten = [
  "per sofort oder nach Vereinbarung",
  "zentral an der Bahnhofstrasse",
  "Parkplätze vor dem Haus",
  "Bahnhof 3 min entfernt",
  "pro Raum CHF 490.-- / monatlich (inkl.)",
  "auch halbe Woche möglich nach Absprache",
  "mit gemeinsamer Küche, Bad und Warteraum",
  "Tee, Kombucha und Kaffeemaschine inklusive",
];

export default function RaumSeite() {
  return (
    <>
      <SeitenKopf
        kicker="Raum"
        titel="Praxis- oder Büroraum gesucht?"
        lead="In der Gemeinschaftspraxis Wasserschloss Turgi werden zwei Therapie- und Büroräume frei."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        {/* Die drei Räume als aufgefächerte, überlappende Karten */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-0 md:py-8">
          {[
            {
              src: "/images/praxisraum-blau.jpg",
              alt: "Heller Praxisraum mit blauer Wand und Behandlungsliege",
              caption: "Praxisraum.",
              dreh: "md:rotate-[-4deg] md:translate-y-4",
              ebene: "md:z-10",
              rand: "",
            },
            {
              src: "/images/praxisraum-warte.jpg",
              alt: "Grosser Warteraum der Praxis",
              caption: "Warteraum.",
              dreh: "md:rotate-[2deg] md:-translate-y-2",
              ebene: "md:z-20",
              rand: "md:-ml-10",
            },
            {
              src: "/images/praxisraum-buero.jpg",
              alt: "Büroraum mit Schreibtisch",
              caption: "Büro.",
              dreh: "md:rotate-[-1.5deg] md:translate-y-6",
              ebene: "md:z-10",
              rand: "md:-ml-10",
            },
          ].map((raum, i) => (
            <Reveal
              key={raum.src}
              delayMs={i * 140}
              className={`relative md:w-1/3 ${raum.ebene} ${raum.rand}`}
            >
              <figure
                className={`transition-transform duration-500 ease-out hover:z-30 md:hover:-translate-y-3 md:hover:rotate-0 ${raum.dreh}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] shadow-[0_28px_56px_-24px_rgba(11,35,39,0.5)]">
                  <Image
                    src={raum.src}
                    alt={raum.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 font-display text-base italic text-salbei-tief md:text-lg">
                  {raum.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="grid gap-x-8 gap-y-3 text-lg leading-relaxed sm:grid-cols-2 md:text-xl">
                {fakten.map((punkt) => (
                  <li key={punkt} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                    />
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
                <ul className="mt-3 max-w-2xl space-y-2 text-lg leading-relaxed md:text-xl">
                  {[
                    "der Eingang befindet sich seitlich",
                    "kein Lift",
                    "Tumbler und Waschmaschine im Keller",
                    "Küche und Bad",
                    "im Preis inbegriffen sind auch die Nebenkosten, Strom, Wasser, Heizung, Tee, Kaffee",
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                      />
                      {punkt}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-wasser md:text-3xl">
                  Schöne Räume in Altbaustil
                </h2>
                <ul className="mt-3 max-w-2xl space-y-2 text-lg leading-relaxed md:text-xl">
                  {[
                    "dürfen auch individuell eingerichtet und gestrichen werden, Möbel können wenn gewünscht nach Absprache teils übernommen werden",
                    "im einen Raum steht zur Zeit eine Liege, die übernommen werden kann",
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                      />
                      {punkt}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-wasser md:text-3xl">
                  Grosser einladender Warteraum
                </h2>
                <ul className="mt-3 max-w-2xl space-y-2 text-lg leading-relaxed md:text-xl">
                  <li className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                    />
                    an den Wochenenden steht die Praxis meist leer, also auch
                    für Gruppenbesprechungen etc. geeignet
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Bild
              src="/images/praxis-haus.jpg"
              alt="Das Haus an der Bahnhofstrasse 14 in Turgi"
              caption="Das Haus an der Bahnhofstrasse 14."
              frame="bogen"
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-salbei-hell py-16 md:py-20">
        <Atmosphaere
          src="/images/home-water-bg.jpg"
          drift={2}
          className="inset-y-[-12%] right-[-12%] w-[50%] opacity-[0.12] [mask-image:linear-gradient(to_left,black_30%,transparent_85%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <DreiFluesse className="mb-6" />
          <Reveal>
            <h2 className="max-w-3xl font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight font-semibold text-wasser">
              für Therapeuten
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Ich führe meine Praxis seit 2012 in diesen vier Wänden mit der
                Naturheilpraktikerin (TEN) Chantal Scossa. Wir haben uns stets
                ergänzt und TEN und TCM verbunden. Aus persönlichen Gründen
                gibt Sie nun ihre Praxis auf. Ich würde mich sehr freuen wieder
                mit einer TEN-Therapeutin zusammen arbeiten zu können. Aber
                auch eine TCM-Verstärkung könnte ich dringend brauchen. Die
                meiste Zeit vom Jahr bin ich sehr ausgebucht und wäre froh um
                Unterstützung. Leider kann ich nicht alle Patientenanfragen
                annehmen und auch Notfälle haben es oft schwierig bei mir
                reinzurutschen. Also Hilfe!!
              </p>
              <p>
                Ich bin Mentorin und würde mich auch über Anfänger freuen.
                Daher auch das Angebot nur halb einzusteigen für eine so
                kleine Miete. Hier in der Bahnhofstrasse Turgi ist ein sehr
                guter Ort um mit einer Praxis zu starten.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
