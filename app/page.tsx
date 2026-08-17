import Image from "next/image";
import Link from "next/link";
import Atmosphaere from "@/components/Atmosphaere";
import Bild from "@/components/Bild";
import BildBuehne from "@/components/BildBuehne";
import DreiFluesse from "@/components/DreiFluesse";
import Reveal from "@/components/Reveal";
import { methoden } from "@/lib/inhalte";

const heroBuehne = [
  {
    src: "/images/behandlungszimmer.jpg",
    alt: "Behandlungszimmer der Praxis: Liege, Sessel und salbeigrüne Wand",
    caption: "Das Behandlungszimmer.",
  },
  {
    src: "/images/moxa-buch.jpg",
    alt: "Moxa-Zigarre und ein altes chinesisches Buch",
    caption: "Moxa und ein altes Buch.",
  },
  {
    src: "/images/mala.jpg",
    alt: "Türkisfarbene Mala-Perlen auf einer Klangschale aus Messing",
    caption: "Mala-Perlen.",
  },
  {
    src: "/images/akupunktur-hand.jpg",
    alt: "Hand setzt eine feine Akupunkturnadel",
    caption: "Akupunktur.",
  },
] as const;

const zwischenrufe = [
  { satz: "Tee?", bild: "/images/behandlungszimmer.jpg" },
  { satz: "Achtung, ich steche!", bild: "/images/akupunktur-hand.jpg" },
  { satz: "einmal grosser Service!", bild: "/images/team.jpg" },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero als Bildbühne: grosse Typografie links, rechts blenden die
          Fotos der Praxis langsam ineinander. Dahinter treibt das Wasser. */}
      <section className="relative overflow-hidden">
        <Atmosphaere
          src="/images/home-water-bg.jpg"
          className="inset-y-[-10%] right-[-15%] w-[70%] opacity-[0.16] [mask-image:linear-gradient(to_left,black_35%,transparent_85%)]"
        />
        <div
          aria-hidden="true"
          className="anim-atmen pointer-events-none absolute top-16 right-[8%] hidden h-[34rem] w-[26rem] rounded-[999px] border-2 border-salbei/50 lg:block"
        />
        <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
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
              <BildBuehne
                bilder={heroBuehne}
                frame="bogen"
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drei Flüsse als stiller Trenner */}
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <DreiFluesse />
      </div>

      {/* Was ist Chinesische Medizin? — rechts zwei überlappende Bildebenen */}
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
          <div className="lg:col-span-5">
            <Bild
              src="/images/moxa-buch.jpg"
              alt="Moxa-Zigarre und ein altes chinesisches Buch"
              caption="Moxa und ein altes Buch."
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="lg:rotate-[-1.5deg]"
            />
            <Bild
              src="/images/mala.jpg"
              alt="Türkisfarbene Mala-Perlen auf einer Klangschale aus Messing"
              caption="Mala-Perlen."
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="mt-10 lg:-mt-14 lg:ml-14 lg:rotate-[2deg]"
            />
          </div>
        </div>
      </section>

      {/* Methoden, etwas anders + Methodenliste — mit Nadel-Atmosphäre */}
      <section className="relative overflow-hidden bg-wasser py-16 text-stein md:py-24">
        <Atmosphaere
          src="/images/akupunktur-hand.jpg"
          drift={2}
          className="inset-y-[-8%] right-[-10%] w-[55%] opacity-[0.14] [mask-image:linear-gradient(to_left,black_30%,transparent_80%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
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

      {/* Originale Zwischenrufe — Text sitzt auf dem Bild */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {zwischenrufe.map((ruf, i) => (
            <Reveal key={ruf.satz} delayMs={i * 120}>
              <div className="group relative flex min-h-[18rem] items-end overflow-hidden rounded-[2rem] transition-transform duration-500 hover:-translate-y-1.5 md:min-h-[22rem]">
                <Image
                  src={ruf.bild}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-wasser-tief/90 via-wasser/45 to-wasser/10"
                />
                <p className="relative z-10 p-8 font-display text-3xl leading-snug font-semibold text-stein-hell md:p-9 md:text-4xl">
                  {ruf.satz}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* integrative Krebstherapie */}
      <section className="relative overflow-hidden bg-salbei-hell py-16 md:py-20">
        <Atmosphaere
          src="/images/home-water-bg.jpg"
          drift={2}
          className="inset-y-[-12%] right-[-12%] w-[50%] opacity-[0.12] [mask-image:linear-gradient(to_left,black_30%,transparent_85%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
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
