import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SeitenKopf from "@/components/SeitenKopf";

export const metadata: Metadata = {
  title: "Aktuelles / Studenten",
  description:
    "Für TCM-Studierende: Begleitung bei der Fallstudie P1, Vorbereitung auf die Verteidigung P2 und Einzelmentorat M7 nach OdA AM bei Silke Altorfer in Turgi.",
};

export default function AktuellesSeite() {
  return (
    <>
      <SeitenKopf
        kicker="Aktuelles / Studenten"
        titel="Kopf waschen, aufrecht hinstellen, Weg weisen."
        lead="Für alle, die mitten in der Ausbildung stecken: Fallstudie, Verteidigung, Mentorat. Mit Tee, Knabber und viel Humor."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="space-y-10">
          {/* P1 */}
          <Reveal className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-12">
            <p className="font-display text-2xl text-salbei md:text-3xl">P 1</p>
            <h2 className="mt-2 font-display text-3xl leading-snug font-semibold text-wasser md:text-4xl">
              Fallstudie P1
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Bist du an deiner Fallstudie und weisst nicht mehr weiter?
                Brauchst du jemanden, der dir den Kopf wäscht, dich wieder
                aufrecht hinstellt und dir den Weg weist?
              </p>
              <p>
                Für mich selbst war das Schreiben dieser Arbeit ein
                fürchterlicher Kraftakt — erfolgreich, aber mehr als
                traumatisch! Vielleicht ergeht es dir ja ähnlich.
              </p>
              <p>
                Erst als ich eine Freundin beim Schreiben der Fallstudie
                unterstützen konnte, hatte ich die notwendige Distanz für einen
                klaren Kopf. Offenbar habe ich ihr so gut helfen können, dass
                sie mich rege als Helferlein weiterreichte. So bin ich
                schlussendlich etwas unfreiwillig hier reingerutscht und merke,
                wie viel Spass es mir mit euch macht. Ich durfte nun schon
                einigen Unterstützung bieten, um die Arbeit erfolgreich
                abzugeben. Wenn du auch Hilfe brauchst, melde dich doch bei
                mir.
              </p>
              <p>
                Beachte bitte, dass alle in etwa die gleichen Abgabetermine
                haben und ich froh bin, neben meiner vollen Praxis nicht alles
                in der letzten Woche vor Schluss reindrücken zu müssen. Es kann
                somit auch mal sein, dass ich ein Mandat nicht annehmen kann.
                Wer zuerst kommt&nbsp;…
              </p>
              <p className="font-semibold">
                Stundenansatz CHF 140.– / Std. In der Regel belaufen sich die
                Kosten für eine Arbeit zwischen CHF 1&#8217;000.– und
                2&#8217;000.–. Die auflaufenden Kosten werden laufend
                mitgeteilt, damit niemand überrascht wird.
              </p>
            </div>
          </Reveal>

          {/* P2 */}
          <Reveal className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-12">
            <p className="font-display text-2xl text-salbei md:text-3xl">P 2</p>
            <h2 className="mt-2 font-display text-3xl leading-snug font-semibold text-wasser md:text-4xl">
              Vorbereitung P2
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Bist du bereit für deine Verteidigung? Willst du mir deinen
                Fall präsentieren? Gerne nehme ich dich kurz in die Mangel und
                simuliere mit dir die Verteidigung deines Falles. Wir gehen
                alle Differenzialdiagnosen zusammen durch und suchen nach
                allfälligen Wissenslücken, damit du dann wirklich vorbereitet
                und stark an die P2 kannst. Ein Nervenbündel wirst du ohnehin
                sein — aber dann selbstsicher und parat.
              </p>
              <p className="font-semibold">
                In der Regel in meiner Praxis, bequem mit Tee und Knabber.
                CHF 140.– / Std.
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
                Praxisalltag. Ich befasse mich seit 24 Jahren mit TCM und führe
                seit 14 Jahren eine Praxis in Turgi. Meine Stärken sind Themen
                wie Bewegungsapparat, neurologische Erkrankungen /
                Kopfschmerzen / Migräne, Kinderwunsch und Coaching.
              </p>
              <p>
                Gerne begleite ich dich als TCM-Therapeutin mit viel Humor und
                praktischer Erfahrung — melde dich einfach bei mir.
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-wasser md:text-2xl">
                  Gemäss den Rahmenbedingungen Mentorat M7 OdA AM
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-relaxed">
                  {[
                    "Fallbesprechung deiner Patientenfälle",
                    "Anamnesetechnik",
                    "Diagnostische Verfahren",
                    "Therapieplanung und Durchführung",
                    "Betreuung von herausfordernden Patient*innen",
                    "Konflikte in der Praxis",
                    "Rollenverständnis",
                    "Praxismanagement",
                    "Selbstreflexion / Aussenwahrnehmung",
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                      {punkt}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-wasser md:text-2xl">
                  Voraussetzungen
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-relaxed">
                  {[
                    "M1–M6 abgeschlossen",
                    "Zertifikat OdA AM vorhanden",
                    "AHV-Anmeldung erledigt",
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                      {punkt}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-wasser md:text-2xl">
                  Details, Fakten und Kosten
                </h3>
                <ul className="mt-4 space-y-2 text-lg leading-relaxed">
                  {[
                    "Mentorat dauert 2 bis 5 Jahre",
                    "es teilt sich auf in 30 Stunden Einzelmentorat und 30 Stunden Gruppenmentorat",
                    "mindestens 3 Std. pro Semester",
                    "mindestens 10 Fälle",
                    "mindestens 3 Fälle chronisch über 6 Monate hinweg",
                    "3 Erstanamnesen (Video / live)",
                    "die letzten 8 Stunden Einzelmentorat (7 Std. normal / 1 Std. Abschlussgespräch) müssen bei demselben Mentor gemacht werden",
                    "es müssen 800 Stunden Praxis nachgewiesen werden in diesen 5 Jahren",
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                      {punkt}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-block rounded-[1rem] bg-wasser px-6 py-4 font-display text-2xl font-semibold text-stein-hell">
                  CHF 120.– / Std.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
