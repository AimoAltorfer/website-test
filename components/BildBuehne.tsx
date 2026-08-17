"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

export type BuehnenBild = {
  src: string;
  alt: string;
  caption?: string;
};

type BildBuehneProps = {
  bilder: readonly BuehnenBild[];
  /** bogen = Rundbogen (Echo der Logo-Ovale) · platte = Rechteck */
  frame?: "bogen" | "platte";
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  intervalMs?: number;
  className?: string;
  captionTone?: "dunkel" | "hell";
};

/**
 * Bildbühne: mehrere Fotos teilen sich einen Rahmen und blenden langsam
 * ineinander über — Bilder als Theater, nicht als Briefmarke. Die Bildfolge
 * läuft nur ohne prefers-reduced-motion; sonst steht das erste Bild still.
 */
export default function BildBuehne({
  bilder,
  frame = "bogen",
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  intervalMs = 5200,
  className = "",
  captionTone = "dunkel",
}: BildBuehneProps) {
  const [aktiv, setAktiv] = useState(0);

  useEffect(() => {
    if (bilder.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setAktiv((a) => (a + 1) % bilder.length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [bilder.length, intervalMs]);

  const radius =
    frame === "bogen"
      ? "rounded-t-[999px] rounded-b-[1.25rem]"
      : "rounded-[1.25rem]";

  const hatCaptions = bilder.some((b) => b.caption);

  return (
    <figure className={className}>
      <Reveal variant="wasser">
        <div className={`relative overflow-hidden ${radius} ${aspect}`}>
          {bilder.map((b, i) => (
            <Image
              key={b.src}
              src={b.src}
              alt={b.alt}
              fill
              sizes={sizes}
              priority={priority && i === 0}
              className={`object-cover transition-opacity duration-[1600ms] ease-in-out ${
                i === aktiv ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </Reveal>
      {hatCaptions && (
        <figcaption className="mt-4 grid">
          {bilder.map((b, i) => (
            <span
              key={b.src}
              aria-hidden={i !== aktiv}
              className={`col-start-1 row-start-1 font-display text-base italic transition-opacity duration-700 md:text-lg ${
                i === aktiv ? "opacity-100" : "opacity-0"
              } ${captionTone === "hell" ? "text-tuerkis-hell" : "text-salbei-tief"}`}
            >
              {b.caption}
            </span>
          ))}
        </figcaption>
      )}
    </figure>
  );
}
