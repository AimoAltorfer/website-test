import type { Metadata } from "next";
import Image from "next/image";
import Bild from "@/components/Bild";
import Reveal from "@/components/Reveal";
import { indikationen } from "@/lib/inhalte";

export const metadata: Metadata = {
  title: "Indikationen",
  description:
    "Symptome? Wir boxen Sie da durch. Indikationen für die Behandlung mit TCM — von Kopfschmerzen über Bewegungsapparat bis Nervensystem.",
};

export default function IndikationenSeite() {
  return (
    <>
      {/* Kopf: das Boxfoto steht als grosse Bildebene rechts im Anschnitt,
          die Schlagzeile schiebt sich davor. */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[52%] lg:block"
        >
          <div className="anim-treiben-2 relative h-full w-full [mask-image:linear-gradient(to_left,black_55%,transparent)]">
            <Image
              src="/images/boxen.jpg"
              alt=""
              fill
              sizes="52vw"
              priority
              className="object-cover object-[65%_30%]"
            />
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-14 pb-10 md:px-8 md:pt-20 lg:pb-24">
          <Reveal>
            <p className="text-base font-semibold tracking-wide text-tuerkis uppercase md:text-lg">
              Indikationen
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-wasser lg:mt-10">
              Symptome? Wir boxen Sie da durch
            </h1>
          </Reveal>
          <Reveal delayMs={160}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl lg:mt-10 lg:mb-10">
              TCM ist eine Medizin, die durch ihre Diagnoseverfahren von
              Zunge, Puls und Gesicht vor dem Auftreten von Krankheit schon
              eingreift. Einzelne Symptome bestätigen unsere Diagnose und
              weisen den Weg, zu welcher Therapie man greifen muss. Es gibt
              in dem Sinn keine Symptome oder Krankheiten, die sich nicht
              mit TCM unterstützen, bessern oder gar heilen lassen. Die
              angeführte Liste ist eigentlich reine Unterhaltung.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-14 md:px-8 md:pb-20">
        <div className="mt-4 lg:hidden">
          <Bild
            src="/images/boxen.jpg"
            alt="Silke Altorfer und Chantal Scossa Vionnet mit Boxhandschuhen vor der Praxis"
            caption="Silke Altorfer und Chantal Scossa Vionnet mit Boxhandschuhen."
            aspect="aspect-[4/3]"
            sizes="100vw"
          />
        </div>

        <div className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3">
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
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                    />
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
