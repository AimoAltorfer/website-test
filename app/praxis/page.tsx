import type { Metadata } from "next";
import Bild from "@/components/Bild";
import DreiFluesse from "@/components/DreiFluesse";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Praxisgemeinschaft",
  description:
    "Gemeinschaftspraxis Wasserschloss, Zentrum für Naturmedizin, TCM / TEN / Coaching in Turgi — Traditionelle Chinesische Medizin und Traditionelle Europäische Naturmedizin, Hand in Hand.",
};

const scossaAngebot = [
  "Banerji, komplementäre Krebstherapie",
  "ILP (integrierte lösungsorientierte Psychologie)",
  "Naturheilkunde für Kinder",
  "Spagyrik",
  "Schüsslersalz, Homöopathie",
  "Fussreflex",
  "Massage",
  "Irisdiagnose",
];

export default function PraxisSeite() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="text-base font-semibold tracking-wide text-tuerkis md:text-lg">
            Wer sind wir? Wenn ja, wieviele?
          </p>
        </Reveal>
        <Reveal delayMs={80}>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.1rem,5.5vw,4.25rem)] leading-[1.06] font-semibold tracking-tight text-wasser">
            Gemeinschafts&shy;praxis Wasserschloss
            <span className="mt-3 block text-[clamp(1.4rem,3.5vw,2.5rem)] leading-snug">
              Zentrum für Naturmedizin
            </span>
            <span className="mt-1 block text-[clamp(1.4rem,3.5vw,2.5rem)] leading-snug">
              TCM / TEN / Coaching
            </span>
          </h1>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
            Komplementärmedizin bei Krebserkrankung / banerji ·{" "}
            <a
              href="https://www.praxisturgi.ch"
              className="underline underline-offset-4 hover:text-tuerkis"
            >
              www.praxisturgi.ch
            </a>
          </p>
        </Reveal>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Bild
          src="/images/team.jpg"
          alt="Silke Altorfer und Chantal Scossa Vionnet mit einem Anatomie-Skelett"
          caption="Silke Altorfer und Chantal Scossa Vionnet."
          aspect="aspect-[16/9]"
          sizes="(min-width: 1024px) 80vw, 100vw"
          priority
          className="lg:max-w-4xl"
        />

        {/* Gerne etwas schräg */}
        <div className="mt-16 rounded-[2rem] bg-salbei-hell px-6 py-12 md:px-14 md:py-16">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-wasser">
              Gerne etwas schräg
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed md:text-xl">
              Die Idee unserer Praxisgemeinschaft ist, nicht statisch zu sein,
              wir versuchen um die Ecke zu denken, quer zu verknüpfen und
              Lösungsansätze von anderen Seiten aufzuzeigen. Herkömmliches hat
              es genug, Muster sind eingefahren, Ernsthaftigkeit erdrückt uns
              im Alltag. Wir zerren Sie da raus, ob Sie wollen oder nicht. Wir
              reden Ihnen rein, mischen Sie auf und schütteln etwas an Ihrer
              Welt und hoffen, Sie samt Ihrer Krankheit auf neue Wege zu
              bringen. Manchmal braucht es erst Verwirrung um wieder klar zu
              sehen. Wir sind für Sie da, egal wo Sie sich gerade verfangen
              haben. Bei uns gibts auch einfach mal einen Tee&nbsp;:)
            </p>
          </Reveal>
        </div>

        {/* TCM und TEN */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight font-semibold text-wasser">
              TCM und TEN
            </h2>
            <p className="mt-3 max-w-2xl text-xl leading-relaxed md:text-2xl">
              Traditionelle Chinesische Medizin und Traditionelle Europäische
              Naturmedizin
              <br />
              Hand in Hand
            </p>
          </Reveal>

          <Reveal
            delayMs={100}
            className="mt-10 max-w-2xl rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-10"
          >
            <h3 className="font-display text-3xl font-semibold text-wasser">
              Chantal Scossa Vionnet
            </h3>
            <p className="mt-2 text-lg leading-relaxed md:text-xl">
              eidg. dipl. Naturheilpraktikerin TEN
              <br />
              (Traditionelle Europäische Naturheilkunde)
            </p>
            <p className="mt-3 inline-block rounded-full bg-salbei-hell px-4 py-1.5 text-base font-semibold text-salbei-tief">
              Praxis von Chantal Scossa ist zur Zeit geschlossen
            </p>
            <ul className="mt-5 space-y-1.5 text-lg leading-relaxed">
              {scossaAngebot.map((punkt) => (
                <li key={punkt} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-salbei"
                  />
                  {punkt}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-lg md:text-xl">
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
                Bei uns finden Anfänger, Teilzeit- aber auch
                Vollzeit-Therapeuten immer wieder Platz in unseren
                Praxisräumlichkeiten. Unsere Praxis ist gross genug und in der
                Regel lassen sich immer freie Zeiten finden.
              </p>
              <p>Wir sind unkompliziert und mögen die rege Durchmischung aller Therapiearten.</p>
              <p>
                Sei willkommen und arbeite mit uns in unseren beiden
                Praxisräumen oder nutze den grossen Warteraum für deine
                Anlässe. Auch ein Büro und eine Küche stehen zur Verfügung.
                Melde dich, wir freuen uns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
