import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-wasser-tief text-stein">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo.png"
              alt="Logo Praxisgemeinschaft Wasserschloss"
              width={52}
              height={57}
            />
            <p className="mt-4 font-display text-xl text-stein-hell">
              Praxisgemeinschaft Wasserschloss
            </p>
            <p className="mt-1 text-base text-tuerkis-hell">
              Zentrum für Naturmedizin · TCM / TEN / Coaching
            </p>
          </div>

          <div className="text-base leading-relaxed">
            <p className="font-semibold text-stein-hell">Silke Altorfer</p>
            <p className="text-tuerkis-hell">
              eidg. dipl. Naturheilpraktikerin, Fachrichtung TCM, Mentorin
            </p>
            <p className="mt-3">
              Bahnhofstrasse 14 (1. Stock)
              <br />
              5300 Turgi
            </p>
            <p className="mt-3">
              <a href="tel:+41792008049" className="underline underline-offset-4 hover:text-tuerkis-hell">
                079 200 80 49
              </a>
              <br />
              <a
                href="mailto:akupunktur-wasserschloss@gmx.ch"
                className="underline underline-offset-4 hover:text-tuerkis-hell"
              >
                akupunktur-wasserschloss@gmx.ch
              </a>
            </p>
          </div>

          <div className="text-base">
            <p className="font-semibold text-stein-hell">Termine nach Vereinbarung</p>
            <p className="mt-2 text-tuerkis-hell">
              Im Verhinderungsfall bitte mindestens 24 h vorher mitteilen,
              ansonsten muss der verpasste Termin verrechnet werden.
            </p>
            <p className="mt-4">
              <Link href="/kontakt" className="underline underline-offset-4 hover:text-tuerkis-hell">
                Kontakt, Impressum &amp; Datenschutz
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-wasser pt-6 text-sm text-tuerkis-hell/80">
          © {new Date().getFullYear()} Praxisgemeinschaft Wasserschloss, Turgi
        </p>
      </div>
    </footer>
  );
}
