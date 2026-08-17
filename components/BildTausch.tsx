"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

type TauschBild = {
  src: string;
  alt: string;
};

/**
 * Zwei Fotos tauschen langsam die Plätze: das hintere gleitet nach vorn,
 * das vordere tritt zurück. Zwei Ebenen, die miteinander leben — ohne
 * prefers-reduced-motion stehen beide still an ihrem Platz.
 */
export default function BildTausch({
  eins,
  zwei,
  caption,
  className = "",
  sizes = "(min-width: 1024px) 45vw, 90vw",
  priority = false,
}: {
  eins: TauschBild;
  zwei: TauschBild;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [getauscht, setGetauscht] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setGetauscht((v) => !v), 7000);
    return () => window.clearInterval(id);
  }, []);

  const karte =
    "absolute h-[82%] w-[82%] overflow-hidden rounded-[1.25rem] shadow-[0_24px_48px_-20px_rgba(11,35,39,0.45)] transition-transform duration-[1600ms] ease-in-out";

  return (
    <figure className={className}>
      <Reveal variant="rise">
        <div className="relative aspect-[5/4] w-full">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-[82%] w-[82%] rounded-[1.25rem] bg-salbei/40"
          />
          <div
            className={`${karte} top-0 left-0 ${
              getauscht
                ? "z-10 translate-x-[16%] translate-y-[18%] rotate-[2.5deg] scale-[0.9]"
                : "z-20 rotate-[-2deg] scale-100"
            }`}
          >
            <Image
              src={eins.src}
              alt={eins.alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover"
            />
          </div>
          <div
            className={`${karte} right-0 bottom-0 ${
              getauscht
                ? "z-20 rotate-[-1.5deg] scale-100"
                : "z-10 translate-x-[-16%] translate-y-[-18%] rotate-[2.5deg] scale-[0.9]"
            }`}
          >
            <Image
              src={zwei.src}
              alt={zwei.alt}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
      {caption && (
        <figcaption className="mt-4 font-display text-base italic text-salbei-tief md:text-lg">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
