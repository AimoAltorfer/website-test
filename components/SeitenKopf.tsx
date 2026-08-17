import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SeitenKopf({
  kicker,
  titel,
  lead,
}: {
  kicker: string;
  titel: string;
  lead?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
      <Reveal>
        <p className="text-base font-semibold tracking-wide text-tuerkis uppercase md:text-lg">
          {kicker}
        </p>
      </Reveal>
      <Reveal delayMs={80}>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-wasser">
          {titel}
        </h1>
      </Reveal>
      {lead && (
        <Reveal delayMs={160}>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed md:text-2xl">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
