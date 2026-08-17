import type { Metadata } from "next";
import Bild from "@/components/Bild";
import Reveal from "@/components/Reveal";
import SeitenKopf from "@/components/SeitenKopf";
import { indikationen } from "@/lib/inhalte";

export const metadata: Metadata = {
  title: "Indikationen",
  description:
    "Symptome? Wir boxen Sie da durch. Wobei TCM unterstützen kann — von Kopfschmerzen über Bewegungsapparat bis Nervensystem. Die Liste ist eigentlich reine Unterhaltung.",
};

export default function IndikationenSeite() {
  return (
    <>
      <SeitenKopf
        kicker="Indikationen"
        titel="Symptome? Wir boxen Sie da durch."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed md:text-xl">
                <p>
                  TCM ist eine Medizin, die durch ihre Diagnoseverfahren von
                  Zunge, Puls und Gesicht schon vor dem Auftreten von Krankheit
                  eingreift. Einzelne Symptome bestätigen unsere Diagnose und
                  weisen den Weg, zu welcher Therapie man greifen muss.
                </p>
                <p>
                  Es gibt in dem Sinn keine Symptome oder Krankheiten, die sich
                  nicht mit TCM unterstützen, bessern oder gar heilen lassen.
                </p>
                <p className="font-display text-xl italic text-pinsel md:text-2xl">
                  Die angeführte Liste ist eigentlich reine Unterhaltung.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Bild
              src="/images/boxen.jpg"
              alt="Silke Altorfer und Chantal Scossa Vionnet mit Boxhandschuhen vor der Praxis"
              caption="Wir meinen das mit dem Durchboxen durchaus wörtlich."
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </div>

        <div className="mt-16 columns-1 gap-8 sm:columns-2 lg:columns-3">
          {indikationen.map((gruppe, i) => (
            <Reveal
              key={gruppe.gruppe}
              delayMs={Math.min(i * 60, 240)}
              className="mb-8 break-inside-avoid rounded-[1.5rem] border border-stein-linie bg-stein-hell p-7"
            >
              <h2 className="font-display text-2xl leading-snug font-semibold text-wasser">
                {gruppe.gruppe}
              </h2>
              <ul className="mt-4 space-y-2 text-lg leading-relaxed">
                {gruppe.punkte.map((punkt) => (
                  <li key={punkt} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                    {punkt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
