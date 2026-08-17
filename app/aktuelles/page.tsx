import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Aktuelles",
  description:
    "Fallstudie P1, Vorbereitung P2 und Einzelmentorat M7 bei Silke Altorfer in Turgi.",
};

export default function AktuellesSeite() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="text-base font-semibold tracking-wide text-tuerkis uppercase md:text-lg">
            Aktuelles
          </p>
        </Reveal>
        <Reveal delayMs={80}>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-wasser">
            Fallstudie P1
            <span className="mt-1 block">Vorbereitung P2</span>
          </h1>
        </Reveal>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="space-y-10">
          {/* P1 */}
          <Reveal className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-12">
            <p className="font-display text-2xl text-salbei md:text-3xl">P 1</p>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Bist du an deiner Fallstudie und weisst nicht mehr weiter?
                Brauchst du jemanden der dir den Kopf wäscht, dich wieder
                aufrecht hinstellt und dir den Weg weist?
              </p>
              <p>
                Für mich selbst war das Schreiben dieser Arbeit ein
                fürchterlicher Kraftakt, erfolgreich, aber mehr als
                traumatisch! Vielleicht ergeht es dir ja ähnlich.
              </p>
              <p>
                Erst als ich eine Freundin beim Schreiben der Fallstudie
                unterstützen konnte, hatte ich die notwendige Distanz für
                einen klaren Kopf. Offenbar habe ich ihr so gut helfen können,
                dass Sie mich rege als Helferlein weiterreichte. So bin ich
                schlussendlich etwas unfreiwilig hier reingerutscht und merke,
                wie viel Spass es mir mit euch macht. Ich durfte nun schon
                schon einigen Unterstützung bieten um erfolgreich die Arbeit
                abzugeben. Wenn du auch Hilfe brauchst, melde dich doch bei
                mir.
              </p>
              <p>
                Beachte bitte, dass alle in etwa die gleichen Abgabetermine
                haben und ich froh bin, neben meiner vollen Praxis, nicht
                alles in der letzten Woche vor Schluss reindrücken zu müssen.
              </p>
              <p>
                Es kann somit auch mal sein, das ich ein Mandat nicht annehmen
                kann. Wer zuerst kommt...
              </p>
              <p className="font-semibold">
                Stundenansatz ist bei CHF 140.--
              </p>
              <p>
                In der Regel belaufen sich die Kosten für eine Arbeit zwischen
                CHF 1&#8217;000.-- und 2&#8217;000.--. Die auflaufenden Kosten
                werden laufend mitgeteilt, damit niemand überrascht wird.
              </p>
            </div>
          </Reveal>

          {/* P2 */}
          <Reveal className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-12">
            <p className="font-display text-2xl text-salbei md:text-3xl">P 2</p>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Bist du bereit für deine Verteidigung? Willst du mir deinen
                Fall präsentieren? Gerne nehme ich dich kurz in die Mangel und
                simuliere mit dir die Verteidigung deines Falles. Wir gehen
                alle Differenzialdiagnosen zusammen durch und suchen nach
                allfälligen Wissenslücken, damit du dann wirklich vorbereitet
                und stark an die P2 kannst. Ein Nervenbündel wirst du ohnehin
                sein, aber dann selbstsicher und parat.
              </p>
              <p className="font-semibold">
                In der Regel in meiner Praxis, bequem mit Tee und Knabber.
                CHF 140.-- / Std.
              </p>
            </div>
          </Reveal>

          {/* M7 */}
          <Reveal className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-12">
            <p className="font-display text-2xl text-salbei md:text-3xl">M 7</p>
            <h2 className="mt-2 font-display text-3xl leading-snug font-semibold text-wasser md:text-4xl">
              Einzelmentorat M7
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Im Mentorat bekommst du Unterstützung für deinen beginnenden
                Praxisalltag.
              </p>
              <p>
                Ich befasse mich seit 24 Jahren mit TCM und seit 14 Jahren
                führe ich eine Praxis in Turgi.
              </p>
              <p>
                Meine Stärken sind Themen wie Bewegungsapparat, neurologische
                Erkrankungen/ Kopfschmerzen / Migräne, Kinderwunsch und
                Coaching, aber natürlich behandle ich alles in meiner Praxis.
              </p>
              <p>
                Gerne begleite ich dich als TCM-Therapeutin mit viel Humor und
                praktischer Erfahrung, melde dich einfach bei mir.
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-wasser md:text-2xl">
                  gemäss den Rahmenbedingungen Mentorat M7 Oda AM...
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-relaxed">
                  {[
                    "Fallbesprechung deiner Patientenfälle",
                    "Anamnesetechnik",
                    "Diagnostische Verfahren",
                    "Therapieplanung und Durchführung",
                    "Betreuung von hausfordernden Patient*innen",
                    "Konflikte in der Praxis",
                    "Rollenverständnis",
                    "Praxismanagement",
                    "Selbstreflexion-Aussenwahrnehmung",
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                      />
                      {punkt}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-wasser md:text-2xl">
                  Was sind die Voraussetzungen um mit dem Mentorat starten zu
                  können?
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-relaxed">
                  {[
                    "M1 - M6 abgeschlossen",
                    "Zertifikat Oda AM vorhanden",
                    "AHV-Anmeldung erledigt",
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                      />
                      {punkt}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-wasser md:text-2xl">
                  Was gibt es noch zu wissen? Details, Fakten und Kosten...
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-relaxed">
                  {[
                    "Mentorat dauert 2 bis 5 Jahre",
                    "es teilt sich auf in 30 Stunden Einzelmentorat und 30 Stunden Gruppenmentorat",
                    "mindestens 3 Std. pro Semester",
                    "mindestens 10 Fälle",
                    "mindestens 3 Fälle chronisch über 6 Monate hinweg",
                    "3 Erstanamnesen (Video/live)",
                    "die letzten 8 Stunden Einzelmentorat (7 Std. norm./ 1 Std. Abschlussgespräch) müssen bei dem selben Mentor gemacht werden",
                    "es müssen 800 Stunden Praxis nachgewiesen werden in diesen 5 Jahren",
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                      />
                      {punkt}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-block rounded-[1rem] bg-wasser px-6 py-4 font-display text-2xl font-semibold text-stein-hell">
                  Kosten: CHF 120.-- / Std.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
