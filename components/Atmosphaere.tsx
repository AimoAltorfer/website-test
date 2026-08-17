import Image from "next/image";

/**
 * Atmosphärische Bildebene: ein Foto lebt gross und leise im Hintergrund
 * eines Abschnitts — weich maskiert, langsam treibend. Der Abschnitt
 * braucht `relative` und `overflow-hidden`; der Inhalt liegt darüber.
 */
export default function Atmosphaere({
  src,
  className = "",
  drift = 1,
}: {
  src: string;
  className?: string;
  drift?: 1 | 2;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <div
        className={`relative h-full w-full ${drift === 1 ? "anim-treiben" : "anim-treiben-2"}`}
      >
        <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
      </div>
    </div>
  );
}
