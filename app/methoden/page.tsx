import type { Metadata } from "next";
import Bild from "@/components/Bild";
import DreiFluesse from "@/components/DreiFluesse";
import Reveal from "@/components/Reveal";
import SeitenKopf from "@/components/SeitenKopf";
import { methoden } from "@/lib/inhalte";

export const metadata: Metadata = {
  title: "Methoden",
  description:
    "Akupunktur, Elektroakupunktur, Akupressur, Tuina, Moxibustion, Schröpfen, Gua Sha, med. Qi Gong, Ernährung nach den 5 Elementen und Taping — die Werkzeuge der TCM in Turgi.",
};

export default function MethodenSeite() {
  return (
    <>
      <SeitenKopf
        kicker="Methoden"
        titel="Hier werden Sie gestochen!"
        lead="Fein, erklärt und ohne Theater. Zehn Werkzeuge — was wann zum Einsatz kommt, entscheidet die Diagnose von Zunge, Puls und Gesicht."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ol className="divide-y divide-stein-linie">
              {methoden.map((m, i) => (
                <li key={m.name} className="py-8 first:pt-0 md:py-10">
                  <Reveal>
                    <div className="grid gap-3 md:grid-cols-12 md:gap-6">
                      <span
                        aria-hidden="true"
                        className="font-display text-2xl text-salbei md:col-span-2 md:text-3xl"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="md:col-span-10">
                        <h2 className="font-display text-2xl leading-snug font-semibold text-wasser md:text-3xl">
                          {m.name}
                        </h2>
                        <p className="mt-3 max-w-2xl text-lg leading-relaxed md:text-xl">
                          {m.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <aside className="flex flex-col gap-10 lg:col-span-4">
            <Bild
              src="/images/akupunktur-hand.jpg"
              alt="Hand setzt eine feine Akupunkturnadel"
              caption="Die Nadel ist feiner, als der Respekt davor."
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
            <Bild
              src="/images/buddha.jpg"
              alt="Kleine Buddha-Figur in der Praxis"
              caption="Sitzt schon länger hier als die meisten Möbel."
              frame="bogen"
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </aside>
        </div>
      </section>

      <section className="bg-wasser py-16 text-stein md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <DreiFluesse tone="hell" className="mb-6" />
          <Reveal>
            <p className="text-base font-semibold tracking-wide text-tuerkis-hell uppercase md:text-lg">
              Integrative Krebstherapie
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight font-semibold text-stein-hell">
              Unterstützend, alternativ, ergänzend
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-tuerkis-hell md:text-xl">
              Das ist keine onkologische Behandlung und kein Versprechen. Wo es
              passt, kann TCM begleiten — beim Befinden, bei Nebenwirkungen,
              beim Durchhalten. Die komplementäre Krebstherapie nach Banerji
              gehört zum Angebot von Chantal Scossa; ihre Praxis ist zur Zeit
              geschlossen.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
