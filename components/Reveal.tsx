"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** rise = Text steigt sanft auf · wasser = Bild-Wipe von unten · linie = SVG zeichnet sich */
  variant?: "rise" | "wasser" | "linie";
  delayMs?: number;
  className?: string;
};

/**
 * Einmalige Enthüllung beim Eintritt ins Sichtfeld.
 * Die eigentliche Animation lebt in globals.css und ist dort vollständig
 * hinter prefers-reduced-motion: no-preference gekapselt — wer reduzierte
 * Bewegung wünscht, sieht alles sofort und unbewegt.
 */
export default function Reveal({
  children,
  variant = "rise",
  delayMs = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.setAttribute("data-inview", "true");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style =
    delayMs > 0
      ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties)
      : undefined;

  return (
    <div ref={ref} data-reveal={variant} className={className} style={style}>
      {children}
    </div>
  );
}
