import Link from "next/link";
import Bild from "@/components/Bild";
import DreiFluesse from "@/components/DreiFluesse";
import Reveal from "@/components/Reveal";
import { methoden } from "@/lib/inhalte";

export default function Home() {
  return (
    <>
      {/* Hero: Original-Wortlaut der alten Website, neue Komposition.
          Kein Vollbild-Foto, kein abgedunkelter Hintergrund. */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base font-semibold tracking-wide text-tuerkis md:text-lg">
                WIR BEHANDELN SIE VEREINT,
                <br />
                TRADITIONELLE CHINESISCHE MEDIZIN und TRADITIONELLE
                EUROPÄISCHE NATURMEDIZIN
                <br />
                HAND in HAND
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h1 className="mt-6 font-display text-[clamp(2.1rem,5.5vw,4.25rem)] leading-[1.06] font-semibold tracking-tight text-wasser">
                PRAXIS&shy;GEMEINSCHAFT WASSERSCHLOSS
                <span className="mt-3 block text-[clamp(1.4rem,3.5vw,2.5rem)] leading-snug">
                  ZENTRUM FÜR NATURMEDIZIN
                </span>
                <span className="mt-1 block text-[clamp(1.4rem,3.5vw,2.5rem)] leading-snug">
                  TCM / TEN / Coaching
                </span>
              </h1>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="mt-8 text-base text-salbei-tief md:text-lg">
                Bahnhofstrasse 14 (1. Stock), 5300 Turgi · Termine nach
                Vereinbarung
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Bild
              src="/images/behandlungszimmer.jpg"
              alt="Behandlungszimmer der Praxis: Liege, Sessel und salbeigrüne Wand"
              caption="Das Behandlungszimmer."
              frame="bogen"
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Drei Flüsse als stiller Trenner */}
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <DreiFluesse />
      </div>

      {/* Was ist Chinesische Medizin? */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-wasser">
                WAS IST CHINESISCHE MEDIZIN?
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed md:text-xl">
                <p>
                  Traditionelle Chinesische Medizin bezeichnet die Medizin, die
                  sich in China seit mehr als 2000 Jahren entwickelt hat. Unter
                  anderem wurden 12 Meridiane und 8 ausserordentliche Gefässe
                  entdeckt, die durch den Körper ziehen. Manche davon verlaufen
                  oberflächlich, mache dagegen sehr tief und fast alle haben
                  seltsame innere Verläufe und Nebenäste. Diese Meridiane
                  nähren unsere Organe und entsprechen einem grossen Kreislauf.
                </p>
                <p>
                  Herrscht an einem Ort Fülle, Leere oder staut es aus anderen
                  Gründen, kann sich das im Verlauf des Meridians zeigen,
                  ebenso auf Organebene. Im Körper zeigt es sich dann als
                  Schmerz, Krankheit oder sonstige Irritation.
                </p>
                <p>
                  Anhand von Zungen-, Puls- und Gesichtsdiagnose haben die
                  Chinesen in dieser langen Entwicklungsgeschichte gelernt
                  diese Art Code, der im westlichen Sinne absolut keinen Sinn
                  macht, zu entschlüsseln. Gerne erkläre ich Ihnen Ihr
                  persönlicher Puls und verrate Ihnen, was Ihre Zunge akut
                  mitteilt. Was man aber trotz diesem wunderbaren alten Systems
                  nie vergessen darf ist, dass wir nicht nur aus Organen und
                  Meridianen bestehen. Deshalb gibt es bei mir immer einen Tee
                  und ein offenes Ohr.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col gap-10 lg:col-span-5">
            <Bild
              src="/images/moxa-buch.jpg"
              alt="Moxa-Zigarre und ein altes chinesisches Buch"
              caption="Moxa und ein altes Buch."
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <Bild
              src="/images/mala.jpg"
              alt="Türkisfarbene Mala-Perlen auf einer Klangschale aus Messing"
              caption="Mala-Perlen."
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Methoden, etwas anders + Methodenliste */}
      <section className="bg-wasser py-16 text-stein md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-stein-hell">
                  Methoden, etwas anders
                </h2>
              </Reveal>
              <Reveal delayMs={100}>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-tuerkis-hell md:text-xl">
                  <p>
                    Die therapeutischen Methoden der TCM umfassen in der
                    Schweiz vorallem Akupunktur und Kräuter.
                  </p>
                  <p>
                    Da wir aber in Europa eine wunderbare Vielfalt an eigenen
                    Kräutern haben, wird dieser Teil der Arzneimittel von
                    meiner Praxikollegin und eidg. dipl. Naturheilpraktikerin
                    Chantal Scossa abgedeckt. Wir arbeiten Hand in Hand, TCM
                    und TEN.
                  </p>
                  <p>
                    Ernährungsberatung, Massage/Tuina, Schröpfen und
                    Qi-Gong-Übungen fliessen automatisch in meine Behandlungen
                    mit ein und Sie bekommen oft zu Ihrem Leidwesen
                    Hausaufgaben und Übungen mit nach Hause.
                  </p>
                  <p className="text-base text-stein/80 md:text-lg">
                    Praxis von Chantal Scossa ist zur Zeit geschlossen
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delayMs={140}>
                <ul className="flex flex-wrap gap-3">
                  {methoden.map((name) => (
                    <li key={name}>
                      <Link
                        href="/methoden"
                        className="inline-block rounded-full border border-tuerkis px-5 py-2.5 text-lg text-tuerkis-hell transition-colors hover:bg-tuerkis hover:text-stein-hell"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Originale Zwischenrufe */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {["Tee?", "Achtung, ich steche!", "einmal grosser Service!"].map(
            (satz, i) => (
              <Reveal
                key={satz}
                delayMs={i * 100}
                className="rounded-[2rem] bg-salbei-hell px-8 py-10"
              >
                <p className="font-display text-2xl leading-snug font-semibold text-wasser md:text-3xl">
                  {satz}
                </p>
              </Reveal>
            ),
          )}
        </div>
      </section>

      {/* integrative Krebstherapie */}
      <section className="bg-salbei-hell py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <DreiFluesse className="mb-6" />
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-wasser">
              integrative Krebstherapie
            </h2>
            <p className="mt-3 text-xl leading-relaxed md:text-2xl">
              unterstützend, alternativ, ergänzend
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
