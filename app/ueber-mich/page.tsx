import type { Metadata } from "next";
import Bild from "@/components/Bild";
import Reveal from "@/components/Reveal";
import SeitenKopf from "@/components/SeitenKopf";
import { methoden } from "@/lib/inhalte";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Silke Altorfer, TCM-Therapeutin, eidg. dipl. Naturheilpraktikerin mit Fachrichtung Traditionelle Chinesische Medizin, Mentorin. EMR-zertifiziert, CHF 140.-- / Std.",
};

const ausbildung = [
  { was: "Traditionelle Chinesische Medizin", wo: "Paramed in Baar" },
  {
    was: "Praktikum",
    wo: "bei der Biomedica Zürich und in Nepal / Kathmandu",
  },
  {
    was: "Schulmedizinische Teil der Ausbildung",
    wo: "Paramed in Baar und Biomedica Zürich",
  },
  { was: "Tuina", wo: "Biomedica Zürich" },
  { was: "medizinisches Qi Gong", wo: "Biomedica Zürich" },
  { was: "eidgenössisches Diplom HFP", wo: "seit Juli 2022" },
  { was: "Ausbildung zur Mentorin", wo: "OdA AM" },
];

export default function UeberMichSeite() {
  return (
    <>
      <SeitenKopf
        kicker="Über mich"
        titel="Silke Altorfer"
        lead={
          <>
            TCM-Therapeutin
            <br />
            eidg. dipl. Naturheilpraktikerin
            <br />
            mit Fachrichtung Traditionelle Chinesische Medizin
            <br />
            Mentorin
          </>
        }
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Bild
              src="/images/silke-selfie.jpg"
              alt="Silke Altorfer in der Praxis"
              caption="Silke Altorfer."
              frame="bogen"
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-wasser">
                mein Angebot
              </h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {methoden.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-salbei px-5 py-2 text-lg text-tinte"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={100}>
              <h2 className="mt-12 font-display text-3xl font-semibold text-wasser">
                meine Ausbildung
              </h2>
              <dl className="mt-6 divide-y divide-stein-linie">
                {ausbildung.map((eintrag) => (
                  <div key={eintrag.was} className="py-4">
                    <dt className="text-lg font-semibold md:text-xl">
                      {eintrag.was}
                    </dt>
                    <dd className="text-lg text-salbei-tief md:text-xl">
                      {eintrag.wo}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] bg-salbei-hell p-8 md:p-10">
              <h2 className="font-display text-3xl font-semibold text-wasser">
                Krankenkassen-Anerkennung
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed md:text-xl">
                <p>
                  Ich bin EMR-zertifiziert und meine Behandlungen werden
                  grundsätzlich von den Krankenkassen übernommen, wenn Sie den
                  Zusatz &quot;Alternativmedizin&quot; dabei haben.
                </p>
                <p>
                  Ob dies bei Ihrer Krankenkasse konkret der Fall ist, müsse
                  Sie bitte vorgängig mit dieser abklären. Meist gibt Ihnen
                  auch die Krankenkassen-App unter Deckungs-Check auch die
                  nötigen Informationen. Ich bekomme leider keine Auskunft bei
                  Ihrer Krankenkasse.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <p className="text-lg leading-relaxed md:text-xl">
              Bei vielen TCM-Therapeuten erhalten Sie als Patient eine
              Akupunktur, während der Therapeut sich bereits um andere
              Patienten kümmert. Bei mir ist dies nicht der Fall, ich behandle
              während einer Stunde ausschliesslich Sie.
            </p>
            <p className="mt-8 inline-block rounded-[1.5rem] bg-wasser px-8 py-6 font-display text-3xl font-semibold text-stein-hell md:text-4xl">
              CHF 140.-- / Std.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <p className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-semibold text-wasser">
            Hier werden Sie gestochen!
          </p>
        </Reveal>
      </section>
    </>
  );
}
