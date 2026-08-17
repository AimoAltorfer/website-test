import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <p className="text-base font-semibold tracking-wide text-tuerkis uppercase md:text-lg">
        404
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight font-semibold text-wasser">
        Seite nicht gefunden
      </h1>
      <p className="mt-6 max-w-xl text-xl leading-relaxed md:text-2xl">
        Diese Seite existiert nicht.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-wasser px-7 py-4 text-lg font-semibold text-stein-hell transition-colors hover:bg-tuerkis"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
