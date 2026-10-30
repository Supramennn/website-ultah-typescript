import { useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { siteConfig } from "../data/config";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { CakeIllustration } from "./CakeIllustration";
import { SectionHeading } from "./SectionHeading";
import { HeartDoodle, StarDoodle } from "./doodles";

const EASE = [0.22, 1, 0.36, 1] as const;

type CakeFinaleProps = {
  onCelebrate: (x: number, y: number, count: number) => void;
};

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
      <path
        d="M12 21c4.2 0 7-2.7 7-6.4 0-3-1.7-5.3-4-7.6.2 2.5-1 4-2 4.6.4-4.2-1.8-7-4.5-9.6.1 4.6-3.5 7.7-3.5 12.6C5 18.3 7.8 21 12 21Z"
        fill="#ffc857"
        stroke="#17384c"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 21c1.8 0 3-1.2 3-2.8 0-1.4-.8-2.4-1.8-3.4 0 1.2-.5 1.9-1 2.2.2-2-.9-3.3-2.2-4.5.1 2.1-1.6 3.4-1.6 5.7 0 1.6 1.4 2.8 3.6 2.8Z"
        fill="#fffbf2"
      />
    </svg>
  );
}

export function CakeFinale({ onCelebrate }: CakeFinaleProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [lit, setLit] = useState(true);
  const [hasBlown, setHasBlown] = useState(false);
  const cakeRef = useRef<HTMLDivElement | null>(null);

  const handleBlow = () => {
    setLit(false);
    setHasBlown(true);

    const rect = cakeRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height * 0.28) / window.innerHeight;
      onCelebrate(x, y, 140);
    } else {
      onCelebrate(0.5, 0.5, 140);
    }
  };

  const handleRelight = () => {
    setLit(true);
    setHasBlown(false);
  };

  return (
    <section
      id="lilin"
      aria-labelledby="finale-title"
      className="section-dark relative overflow-hidden bg-night px-5 py-20 text-cream sm:px-8 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <StarDoodle className="absolute left-[7%] top-[12%] h-7 w-7 opacity-80" />
        <StarDoodle className="absolute right-[9%] top-[20%] h-5 w-5 text-sky opacity-70" />
        <HeartDoodle className="absolute bottom-[14%] left-[11%] h-7 w-7 rotate-[-12deg] text-blush/70" />
        <span className="absolute -right-16 top-[38%] h-44 w-44 rounded-full border-2 border-dashed border-sky/25" />
        <span className="absolute -left-12 bottom-[8%] h-32 w-32 rounded-full border-2 border-dashed border-butter/20" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <SectionHeading
          id="finale-title"
          kicker={siteConfig.finale.kicker}
          title={siteConfig.finale.title}
          handNote={siteConfig.finale.handNote}
          align="center"
          tone="dark"
        />

        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div ref={cakeRef} className="relative mx-auto w-full max-w-[19rem] sm:max-w-[23rem]">
            <CakeIllustration
              lit={lit}
              label={lit ? siteConfig.finale.cakeLitLabel : siteConfig.finale.cakeOutLabel}
              age={siteConfig.finale.cakeLabel}
            />
            {hasBlown ? (
              <m.p
                initial={reduceMotion ? false : { opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                className="absolute -right-2 bottom-10 rounded-xl border-2 border-ink bg-butter px-3 py-2 font-hand text-2xl leading-none text-ink shadow-[3px_3px_0_0_#fffbf2] sm:right-0"
              >
                {siteConfig.finale.doneHand}
              </m.p>
            ) : null}
          </div>

          <div aria-live="polite" className="min-h-56">
            <AnimatePresence mode="wait" initial={false}>
              {hasBlown ? (
                <m.div
                  key="done"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <h3 className="font-display text-3xl leading-tight text-cream sm:text-4xl">
                    {siteConfig.finale.doneTitle}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-7 text-cream/90">
                    {siteConfig.finale.doneBody}
                  </p>

                  <div className="mt-6 max-w-md rounded-xl border-2 border-dashed border-cream/35 bg-cream/10 p-4">
                    <p className="text-xs font-medium text-sky">
                      {siteConfig.finale.statusLabel}
                    </p>
                    <p className="mt-1 font-hand text-2xl leading-none text-butter">
                      {siteConfig.finale.statusValue}
                    </p>
                    <p className="mt-1 text-sm text-cream/80">{siteConfig.finale.statusNote}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleRelight}
                      className="inline-flex min-h-12 items-center justify-center rounded-sticker border-2 border-ink bg-cream px-5 py-3 text-base font-semibold text-ink shadow-[4px_4px_0_0_#ffc857] transition hover:-translate-y-0.5 hover:bg-paper-deep active:translate-y-0.5 active:shadow-[2px_2px_0_0_#ffc857]"
                    >
                      {siteConfig.finale.relightButton}
                    </button>
                    <a
                      href="#atas"
                      className="inline-flex min-h-12 items-center justify-center rounded-sticker border-2 border-cream/60 px-5 py-3 text-base font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
                    >
                      {siteConfig.finale.topButton}
                    </a>
                  </div>
                </m.div>
              ) : (
                <m.div
                  key="ready"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <p className="max-w-md text-base leading-8 text-cream/90 sm:text-lg">
                    {siteConfig.finale.body}
                  </p>
                  <button
                    type="button"
                    onClick={handleBlow}
                    className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-sticker border-2 border-ink bg-butter px-6 py-3 text-base font-semibold text-ink shadow-[4px_4px_0_0_#fffbf2] transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#fffbf2] active:translate-y-0.5 active:shadow-[2px_2px_0_0_#fffbf2]"
                  >
                    <FlameIcon />
                    {siteConfig.finale.button}
                  </button>
                  <p className="mt-3 font-hand text-xl leading-none text-sky">
                    {siteConfig.finale.buttonNote}
                  </p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
