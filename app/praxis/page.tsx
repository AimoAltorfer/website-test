import type { Metadata } from "next";
import Link from "next/link";
import Bild from "@/components/Bild";
import DreiFluesse from "@/components/DreiFluesse";
import Reveal from "@/components/Reveal";
import SeitenKopf from "@/components/SeitenKopf";

export const metadata: Metadata = {
  title: "Praxis",
  description:
    "Die Praxisgemeinschaft Wasserschloss in Turgi: Silke Altorfer (TCM) und Chantal Scossa Vionnet (TEN) — Traditionelle Chinesische Medizin und Traditionelle Europäische Naturmedizin, Hand in Hand.",
};

const scossaAngebot = [
  "Banerji / komplementäre Krebstherapie",
  "ILP (integrierte lösungsorientierte Psychologie)",
  "Naturheilkunde für Kinder",
  "Spagyrik",
  "Schüsslersalz",
  "Homöopathie",
  "Fussreflex",
  "Massage",
  "Irisdiagnose",
];

export default function PraxisSeite() {
  return (
    <>
      <SeitenKopf
        kicker="Praxisgemeinschaft"
        titel="TCM und TEN, Hand in Hand."
        lead="Wer sind wir? Wenn ja, wie viele? Zwei Therapeutinnen, zwei Traditionen, ein stiller Dritter aus Kunststoff."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Bild
          src="/images/team.jpg"
          alt="Silke Altorfer und Chantal Scossa Vionnet lachend mit einem Anatomie-Skelett"
          caption="Silke, das Skelett, Chantal. TCM und TEN — plus ein stiller Dritter."
          aspect="aspect-[16/9]"
          sizes="(min-width: 1024px) 80vw, 100vw"
          priority
          className="lg:max-w-4xl"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-10">
            <p className="text-base font-semibold tracking-wide text-tuerkis uppercase md:text-lg">
              Traditionelle Chinesische Medizin
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-wasser">
              Silke Altorfer
            </h2>
            <p className="mt-2 text-lg leading-relaxed md:text-xl">
              eidg. dipl. Naturheilpraktikerin, Fachrichtung Traditionelle
              Chinesische Medizin, Mentorin
            </p>
            <p className="mt-5 text-lg md:text-xl">
              <a
                href="tel:+41792008049"
                className="font-semibold underline underline-offset-4 hover:text-tuerkis"
              >
                079 200 80 49
              </a>
              <br />
              <a
                href="mailto:akupunktur-wasserschloss@gmx.ch"
                className="underline underline-offset-4 hover:text-tuerkis"
              >
                akupunktur-wasserschloss@gmx.ch
              </a>
            </p>
            <p className="mt-5 text-base text-salbei-tief md:text-lg">
              <Link href="/ueber-mich" className="underline underline-offset-4 hover:text-tuerkis">
                Mehr über mich, Ausbildung und Tarif
              </Link>
            </p>
          </Reveal>

          <Reveal
            delayMs={100}
            className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-10"
          >
            <p className="text-base font-semibold tracking-wide text-tuerkis uppercase md:text-lg">
              Traditionelle Europäische Naturmedizin
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-wasser">
              Chantal Scossa Vionnet
            </h2>
            <p className="mt-2 text-lg leading-relaxed md:text-xl">
              eidg. dipl. Naturheilpraktikerin TEN
            </p>
            <p className="mt-3 inline-block rounded-full bg-salbei-hell px-4 py-1.5 text-base font-semibold text-salbei-tief">
              Praxis zur Zeit geschlossen
            </p>
            <ul className="mt-5 space-y-1.5 text-lg leading-relaxed">
              {scossaAngebot.map((punkt) => (
                <li key={punkt} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-salbei" />
                  {punkt}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-lg md:text-xl">
              <a
                href="tel:+41763937805"
                className="font-semibold underline underline-offset-4 hover:text-tuerkis"
              >
                076 393 78 05
              </a>
              {" · "}
              <a
                href="mailto:chantal.scossa@bluewin.ch"
                className="underline underline-offset-4 hover:text-tuerkis"
              >
                chantal.scossa@bluewin.ch
              </a>
              {" · "}
              <a
                href="https://www.praxisturgi.ch"
                className="underline underline-offset-4 hover:text-tuerkis"
              >
                www.praxisturgi.ch
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-salbei-hell py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <DreiFluesse className="mb-6" />
          <Reveal>
            <h2 className="max-w-3xl font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight font-semibold text-wasser">
              Suchst du als Therapeutin eine Praxis?
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Bei uns finden Anfänger, Teilzeit-, aber auch
                Vollzeit-Therapeuten immer wieder Platz in unseren
                Praxisräumlichkeiten. Unsere Praxis ist gross genug, und in der
                Regel lassen sich immer freie Zeiten finden.
              </p>
              <p>
                Wir sind unkompliziert und mögen die rege Durchmischung aller
                Therapiearten. Sei willkommen und arbeite mit uns in unseren
                beiden Praxisräumen oder nutze den grossen Warteraum für deine
                Anlässe. Auch ein Büro und eine Küche stehen zur Verfügung.
                Melde dich, wir freuen uns.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={180}>
            <Link
              href="/raum"
              className="mt-8 inline-block rounded-full bg-wasser px-7 py-4 text-lg font-semibold text-stein-hell transition-colors hover:bg-tuerkis"
            >
              Zu den freien Räumen
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
