import type { Metadata } from "next";
import Atmosphaere from "@/components/Atmosphaere";
import Bild from "@/components/Bild";
import Reveal from "@/components/Reveal";
import SeitenKopf from "@/components/SeitenKopf";
import { kontakt } from "@/lib/inhalte";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Akupunkturpraxis Wasserschloss, Silke Altorfer, Bahnhofstrasse 14 (1. Stock), 5300 Turgi. 079 200 80 49, akupunktur-wasserschloss@gmx.ch. Termine nach Vereinbarung.",
};

export default function KontaktSeite() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Atmosphaere
          src="/images/home-water-bg.jpg"
          className="inset-y-[-12%] right-[-15%] w-[55%] opacity-[0.14] [mask-image:linear-gradient(to_left,black_30%,transparent_85%)]"
        />
        <div className="relative">
          <SeitenKopf
            kicker="Kontakt"
            titel="Silke Altorfer"
            lead="eidg. dipl. Naturheilpraktikerin Fachrichtung Traditionelle Chinesische Medizin Mentorin"
          />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="rounded-[2rem] border border-stein-linie bg-stein-hell p-8 md:p-12">
              <h2 className="font-display text-3xl font-semibold text-wasser">
                Akupunkturpraxis Wasserschloss
              </h2>
              <address className="mt-6 text-lg leading-relaxed not-italic md:text-xl">
                Akupunkturpraxis Wasserschloss
                <br />
                Silke Altorfer
                <br />
                Bahnhofstrasse 14 (1. Stock)
                <br />
                5300 Turgi
              </address>
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
                  {kontakt.mail}
                </a>
              </div>
              <p className="mt-8 text-lg leading-relaxed md:text-xl">
                Termine nach Vereinbarung. Im Verhinderungsfall bitte
                mindestens 24 h vorher mitteilen, ansonsten muss der verpasste
                Termin verrechnet werden.
              </p>
              <p className="mt-6 text-base text-salbei-tief md:text-lg">
                Karte:{" "}
                <a
                  href="https://www.openstreetmap.org/search?query=Bahnhofstrasse%2014%2C%205300%20Turgi"
                  className="underline underline-offset-4 hover:text-tuerkis"
                >
                  OpenStreetMap
                </a>
                {" · "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bahnhofstrasse+14,+5300+Turgi"
                  className="underline underline-offset-4 hover:text-tuerkis"
                >
                  Google Maps
                </a>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Bild
              src="/images/praxis-haus.jpg"
              alt="Das Haus an der Bahnhofstrasse 14 in Turgi"
              caption="Bahnhofstrasse 14, 5300 Turgi."
              frame="bogen"
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-wasser md:text-3xl">
              Impressum
            </h2>
            <p className="mt-4 text-lg leading-relaxed md:text-xl">
              Silke Altorfer
              <br />
              Bahnhofstrasse 14
              <br />
              5300 Turgi
              <br />
              <a
                href={kontakt.mailHref}
                className="underline underline-offset-4 hover:text-tuerkis"
              >
                {kontakt.mail}
              </a>
              <br />
              <a
                href={kontakt.telefonHref}
                className="underline underline-offset-4 hover:text-tuerkis"
              >
                {kontakt.telefon}
              </a>
            </p>
          </Reveal>

          <Reveal delayMs={100}>
            <h2 className="font-display text-2xl font-semibold text-wasser md:text-3xl">
              Datenschutzerklärung
            </h2>
            <p className="mt-4 text-lg leading-relaxed md:text-xl">
              Verantwortlicher im Sinne der Datenschutzgesetze DSG
              <br />
              Silke Altorfer
              <br />
              Bahnhofstrasse 14
              <br />
              5300 Turgi
              <br />
              <a
                href={kontakt.mailHref}
                className="underline underline-offset-4 hover:text-tuerkis"
              >
                {kontakt.mail}
              </a>
              <br />
              <a
                href={kontakt.telefonHref}
                className="underline underline-offset-4 hover:text-tuerkis"
              >
                {kontakt.telefon}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
