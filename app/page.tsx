import Link from "next/link";
import Bild from "@/components/Bild";
import DreiFluesse from "@/components/DreiFluesse";
import Reveal from "@/components/Reveal";
import { kontakt, methoden } from "@/lib/inhalte";

export default function Home() {
  return (
    <>
      {/* Hero: grosse Typografie auf Stein, Bild als Objekt daneben.
          Kein Vollbild-Foto, kein abgedunkelter Hintergrund. */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base font-semibold tracking-wide text-tuerkis uppercase md:text-lg">
                Praxisgemeinschaft Wasserschloss · Zentrum für Naturmedizin ·
                TCM / TEN / Coaching
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h1 className="mt-5 font-display text-[clamp(2.9rem,8vw,5.5rem)] leading-[1.02] font-semibold tracking-tight text-wasser">
                Wir behandeln
                <br />
                Sie vereint.
              </h1>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="mt-7 max-w-xl text-xl leading-relaxed text-tinte md:text-2xl">
                Traditionelle Chinesische Medizin und Traditionelle Europäische
                Naturmedizin, Hand in Hand — in Turgi, am Wasserschloss der
                Schweiz.
              </p>
            </Reveal>
            <Reveal delayMs={240}>
              <p className="mt-4 max-w-xl font-display text-xl italic text-pinsel md:text-2xl">
                Zuerst ein Tee und ein offenes Ohr. Dann: Achtung, ich steche!
              </p>
            </Reveal>
            <Reveal delayMs={320}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={kontakt.telefonHref}
                  className="rounded-full bg-wasser px-7 py-4 text-lg font-semibold text-stein-hell transition-colors hover:bg-tuerkis"
                >
                  Termin vereinbaren
                </a>
                <Link
                  href="/methoden"
                  className="rounded-full border-2 border-wasser px-7 py-4 text-lg font-semibold text-wasser transition-colors hover:border-tuerkis hover:text-tuerkis"
                >
                  Zu den Methoden
                </Link>
              </div>
              <p className="mt-6 text-base text-salbei-tief md:text-lg">
                Bahnhofstrasse 14, 1. Stock · 5300 Turgi · Termine nach
                Vereinbarung
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Bild
              src="/images/behandlungszimmer.jpg"
              alt="Behandlungszimmer der Praxis: Liege, Sessel und salbeigrüne Wand"
              caption="Das Behandlungszimmer. Ruhig, hell, keine Kulisse."
              frame="bogen"
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Drei Flüsse als Trenner */}
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-5 md:px-8">
        <DreiFluesse />
        <p className="text-base text-salbei-tief md:text-lg">
          Aare, Reuss und Limmat fliessen hier zusammen. Daher der Name.
        </p>
      </div>

      {/* Manifest: gerne etwas schräg */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-[2rem] bg-salbei-hell px-6 py-12 md:px-14 md:py-16">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-wasser">
              Gerne etwas schräg
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Die Idee unserer Praxisgemeinschaft ist, nicht statisch zu
                sein. Wir versuchen, um die Ecke zu denken, quer zu verknüpfen
                und Lösungsansätze von anderen Seiten aufzuzeigen.
                Herkömmliches hat es genug, Muster sind eingefahren,
                Ernsthaftigkeit erdrückt uns im Alltag.
              </p>
              <p>
                Wir zerren Sie da raus, ob Sie wollen oder nicht. Wir reden
                Ihnen rein, mischen Sie auf und schütteln etwas an Ihrer Welt —
                und hoffen, Sie samt Ihrer Krankheit auf neue Wege zu bringen.
                Manchmal braucht es erst Verwirrung, um wieder klar zu sehen.
              </p>
              <p>
                Wir sind für Sie da, egal wo Sie sich gerade verfangen haben.
                Bei uns gibts auch einfach mal einen Tee&nbsp;:)
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Was ist Chinesische Medizin? */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base font-semibold tracking-wide text-tuerkis uppercase md:text-lg">
                Einstieg
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-wasser">
                Was ist Chinesische Medizin?
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed md:text-xl">
                <p>
                  Traditionelle Chinesische Medizin bezeichnet die Medizin, die
                  sich in China seit mehr als 2000 Jahren entwickelt hat. Unter
                  anderem wurden 12 Meridiane und 8 ausserordentliche Gefässe
                  entdeckt, die durch den Körper ziehen. Manche davon verlaufen
                  oberflächlich, manche dagegen sehr tief, und fast alle haben
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
                  Chinesen in dieser langen Entwicklungsgeschichte gelernt,
                  diese Art Code, der im westlichen Sinne absolut keinen Sinn
                  macht, zu entschlüsseln. Gerne erkläre ich Ihnen Ihren
                  persönlichen Puls und verrate Ihnen, was Ihre Zunge akut
                  mitteilt.
                </p>
                <p>
                  Was man trotz diesem wunderbaren alten System nie vergessen
                  darf: Wir bestehen nicht nur aus Organen und Meridianen.
                  Deshalb gibt es bei mir immer einen Tee und ein offenes Ohr.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col gap-10 lg:col-span-5">
            <Bild
              src="/images/moxa-buch.jpg"
              alt="Moxa-Zigarre und ein altes chinesisches Buch"
              caption="Moxa und ein altes Buch. Der Code ist seltsam — genau darum."
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <Bild
              src="/images/mala.jpg"
              alt="Türkisfarbene Mala-Perlen auf einer Klangschale aus Messing"
              caption="Mitbringsel aus Kathmandu. Dort war das Praktikum."
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Werkzeuge */}
      <section className="bg-wasser py-16 text-stein md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-base font-semibold tracking-wide text-tuerkis-hell uppercase md:text-lg">
              Die Werkzeuge
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-stein-hell">
              Zehn Methoden, ein Handwerk
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {methoden.map((m) => (
                <li key={m.name}>
                  <Link
                    href="/methoden"
                    className="inline-block rounded-full border border-tuerkis px-5 py-2.5 text-lg text-tuerkis-hell transition-colors hover:bg-tuerkis hover:text-stein-hell"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={180}>
            <p className="mt-8 max-w-2xl text-lg text-tuerkis-hell md:text-xl">
              Was wann zum Einsatz kommt, entscheidet die Diagnose — nicht der
              Katalog.{" "}
              <Link
                href="/methoden"
                className="text-stein-hell underline underline-offset-4 hover:text-tuerkis-hell"
              >
                Alle Methoden im Detail
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hand in Hand */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Bild
              src="/images/team.jpg"
              alt="Silke Altorfer und Chantal Scossa Vionnet lachend mit einem Anatomie-Skelett"
              caption="Silke, das Skelett, Chantal. Der stille Dritte hält still."
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base font-semibold tracking-wide text-tuerkis uppercase md:text-lg">
                Hand in Hand
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-wasser">
                Methoden, etwas anders
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed md:text-xl">
                <p>
                  Die therapeutischen Methoden der TCM umfassen in der Schweiz
                  vor allem Akupunktur und Kräuter. Da wir aber in Europa eine
                  wunderbare Vielfalt an eigenen Kräutern haben, wird dieser
                  Teil der Arzneimittel von meiner Praxiskollegin und eidg.
                  dipl. Naturheilpraktikerin Chantal Scossa abgedeckt. Wir
                  arbeiten Hand in Hand, TCM und TEN.
                </p>
                <p>
                  Ernährungsberatung, Massage/Tuina, Schröpfen und
                  Qi-Gong-Übungen fliessen automatisch in meine Behandlungen
                  mit ein — und Sie bekommen oft zu Ihrem Leidwesen
                  Hausaufgaben und Übungen mit nach Hause.
                </p>
                <p className="text-base text-salbei-tief md:text-lg">
                  Die Praxis von Chantal Scossa ist zur Zeit geschlossen.{" "}
                  <Link
                    href="/praxis"
                    className="underline underline-offset-4 hover:text-tuerkis"
                  >
                    Mehr zur Praxisgemeinschaft
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Krebstherapie + Kasse */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-10">
            <h2 className="font-display text-2xl leading-snug font-semibold text-wasser md:text-3xl">
              Integrative Krebstherapie — unterstützend, alternativ, ergänzend
            </h2>
            <p className="mt-4 text-lg leading-relaxed md:text-xl">
              Kein Ersatz für die onkologische Behandlung. Eine mögliche
              Begleitung daneben — und nur so.
            </p>
          </Reveal>
          <Reveal
            delayMs={100}
            className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-10"
          >
            <h2 className="font-display text-2xl leading-snug font-semibold text-wasser md:text-3xl">
              Eine Stunde. Nur für Sie.
            </h2>
            <p className="mt-4 text-lg leading-relaxed md:text-xl">
              CHF 140.– pro Stunde. Ich behandle während dieser Stunde
              ausschliesslich Sie — kein Zimmerwechsel, kein Nebenher. Ich bin
              EMR-zertifiziert; mit Zusatzversicherung «Alternativmedizin»
              übernehmen die Krankenkassen die Behandlung in der Regel.{" "}
              <Link
                href="/ueber-mich"
                className="underline underline-offset-4 hover:text-tuerkis"
              >
                Details unter «Über mich»
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-salbei-hell py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <DreiFluesse className="mb-6" />
          <Reveal>
            <h2 className="max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-wasser">
              Der Tee steht bereit. Der Rest ist ein Anruf.
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
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
