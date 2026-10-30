import type { ReactNode } from "react";
import { StarDoodle } from "./doodles";

type SectionHeadingProps = {
  id: string;
  kicker: string;
  title: string;
  handNote?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function SectionHeading({
  id,
  kicker,
  title,
  handNote,
  align = "left",
  tone = "light",
  children,
}: SectionHeadingProps) {
  const centered = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={[
          "flex items-center gap-2 font-hand text-2xl leading-none",
          centered ? "justify-center" : "",
          isDark ? "text-sky" : "text-ink-soft",
        ].join(" ")}
      >
        <StarDoodle className="h-4 w-4 shrink-0 text-butter" />
        {kicker}
      </p>
      <h2
        id={id}
        className={[
          "mt-3 font-display text-4xl leading-[1.05] tracking-[-0.015em] sm:text-5xl",
          isDark ? "text-cream" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      {handNote ? (
        <p
          className={[
            "mt-3 font-hand text-2xl leading-tight sm:text-[1.7rem]",
            isDark ? "text-butter" : "text-ink-soft",
          ].join(" ")}
        >
          {handNote}
        </p>
      ) : null}
      {children}
    </div>
  );
}
