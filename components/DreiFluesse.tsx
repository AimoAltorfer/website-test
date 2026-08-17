import Reveal from "./Reveal";

/**
 * Das Wasserschloss der Schweiz: Hier fliessen Aare, Reuss und Limmat
 * zusammen. Drei ruhige Linien als Abschnittstrenner — sie zeichnen sich
 * einmalig, wenn sie ins Bild kommen.
 */
export default function DreiFluesse({
  className = "",
  tone = "dunkel",
}: {
  className?: string;
  tone?: "dunkel" | "hell";
}) {
  const stroke = tone === "hell" ? "#cfe2de" : "#37817f";
  return (
    <Reveal variant="linie" className={className}>
      <svg
        viewBox="0 0 320 28"
        fill="none"
        aria-hidden="true"
        className="h-6 w-56 md:w-72"
      >
        <path
          d="M2 6 C 50 1, 90 11, 140 6 S 250 1, 318 6"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          d="M2 14 C 60 9, 110 19, 165 14 S 260 9, 318 14"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.65"
          pathLength="1"
        />
        <path
          d="M2 22 C 45 17, 100 27, 150 22 S 255 17, 318 22"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.35"
          pathLength="1"
        />
      </svg>
    </Reveal>
  );
}
