import Image from "next/image";
import Reveal from "./Reveal";

type BildProps = {
  src: string;
  alt: string;
  caption?: string;
  /** bogen = Rundbogen oben (Echo der Logo-Ovale) · platte = Rechteck auf versetzter Salbei-Platte */
  frame?: "bogen" | "platte";
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  captionTone?: "dunkel" | "hell";
};

/**
 * Die eine Bildbehandlung des Hauses: kein Vollbild-Hintergrund, kein Zoom,
 * kein Abdunkeln für Text. Bilder stehen als Objekte im Layout — im Rundbogen
 * (das Oval des Logos) oder auf einer versetzten Salbei-Platte — und tauchen
 * einmalig wie ein steigender Wasserspiegel auf.
 */
export default function Bild({
  src,
  alt,
  caption,
  frame = "platte",
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
  captionTone = "dunkel",
}: BildProps) {
  const radius =
    frame === "bogen" ? "rounded-t-[999px] rounded-b-[1.25rem]" : "rounded-[1.25rem]";

  return (
    <figure className={className}>
      <div className={frame === "platte" ? "relative" : undefined}>
        {frame === "platte" && (
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.25rem] bg-salbei/50 md:-bottom-4 md:-left-4"
          />
        )}
        <Reveal variant="wasser" className="relative">
          <div className={`relative overflow-hidden ${radius} ${aspect}`}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
      {caption && (
        <figcaption
          className={`mt-4 font-display text-base italic md:text-lg ${
            captionTone === "hell" ? "text-tuerkis-hell" : "text-salbei-tief"
          }`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
