import type { Metadata } from "next";
import Bild from "@/components/Bild";
import DreiFluesse from "@/components/DreiFluesse";
import Reveal from "@/components/Reveal";
import SeitenKopf from "@/components/SeitenKopf";
import { methoden } from "@/lib/inhalte";

export const metadata: Metadata = {
  title: "Methoden",
  description:
    "Akupunktur, Elektroakupunktur, Akupressur, Massage / Tuina, Moxibustion, Schröpfen, Gua Sha, med. Qi Gong, Ernährung nach den 5 Elementen und Taping.",
};

export default function MethodenSeite() {
  return (
    <>
      <SeitenKopf kicker="Methoden" titel="Methoden" />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ol className="divide-y divide-stein-linie">
              {methoden.map((name, i) => (
                <li key={name} className="py-6 first:pt-0 md:py-7">
                  <Reveal>
                    <div className="grid gap-3 md:grid-cols-12 md:gap-6">
                      <span
                        aria-hidden="true"
                        className="font-display text-2xl text-salbei md:col-span-2 md:text-3xl"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-2xl leading-snug font-semibold text-wasser md:col-span-10 md:text-3xl">
                        {name}
                      </h2>
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
              caption="Akupunktur."
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
            <Bild
              src="/images/buddha.jpg"
              alt="Kleine Buddha-Figur in der Praxis"
              caption="Buddha-Figur in der Praxis."
              frame="bogen"
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </aside>
        </div>

        {/* Methoden, etwas anders — Originaltext */}
        <div className="mt-16 max-w-3xl">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight font-semibold text-wasser">
              Methoden, etwas anders
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Die therapeutischen Methoden der TCM umfassen in der Schweiz
                vorallem Akupunktur und Kräuter.
              </p>
              <p>
                Da wir aber in Europa eine wunderbare Vielfalt an eigenen
                Kräutern haben, wird dieser Teil der Arzneimittel von meiner
                Praxikollegin und eidg. dipl. Naturheilpraktikerin Chantal
                Scossa abgedeckt. Wir arbeiten Hand in Hand, TCM und TEN.
              </p>
              <p>
                Ernährungsberatung, Massage/Tuina, Schröpfen und
                Qi-Gong-Übungen fliessen automatisch in meine Behandlungen mit
                ein und Sie bekommen oft zu Ihrem Leidwesen Hausaufgaben und
                Übungen mit nach Hause.
              </p>
              <p className="text-base text-salbei-tief md:text-lg">
                Praxis von Chantal Scossa ist zur Zeit geschlossen
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-wasser py-16 text-stein md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <DreiFluesse tone="hell" className="mb-6" />
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight font-semibold text-stein-hell">
              integrative Krebstherapie
            </h2>
            <p className="mt-3 text-xl leading-relaxed text-tuerkis-hell md:text-2xl">
              unterstützend, alternativ, ergänzend
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
