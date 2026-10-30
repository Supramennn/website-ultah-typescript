import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { m } from "framer-motion";
import { siteConfig } from "../data/config";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { ArrowDownDoodle, BirdPair, FlowerDoodle, HeartDoodle, Squiggle, StarDoodle } from "./doodles";

const EASE = [0.22, 1, 0.36, 1] as const;

type Particle = {
  left: number;
  top: number;
  size: number;
  kind: "star" | "heart" | "flower";
  delay: number;
  duration: number;
  dx: number;
  dy: number;
  rotate: string;
};

const PARTICLES: Particle[] = [
  { left: 5, top: 18, size: 28, kind: "star", delay: 0, duration: 9, dx: 10, dy: -16, rotate: "10deg" },
  { left: 14, top: 66, size: 20, kind: "heart", delay: 1.2, duration: 11, dx: -8, dy: -20, rotate: "-8deg" },
  { left: 28, top: 10, size: 16, kind: "heart", delay: 0.5, duration: 8, dx: 6, dy: -12, rotate: "14deg" },
  { left: 46, top: 82, size: 22, kind: "flower", delay: 2.1, duration: 10, dx: 12, dy: -14, rotate: "-10deg" },
  { left: 58, top: 14, size: 18, kind: "star", delay: 1.6, duration: 12, dx: -6, dy: -18, rotate: "12deg" },
  { left: 72, top: 70, size: 26, kind: "heart", delay: 0.8, duration: 9.5, dx: 8, dy: -22, rotate: "-6deg" },
  { left: 86, top: 26, size: 30, kind: "flower", delay: 2.4, duration: 11, dx: -10, dy: -16, rotate: "8deg" },
  { left: 92, top: 78, size: 16, kind: "star", delay: 1, duration: 8.5, dx: 5, dy: -12, rotate: "-14deg" },
  { left: 38, top: 46, size: 14, kind: "star", delay: 3, duration: 13, dx: -4, dy: -8, rotate: "20deg" },
];

type ParticleStyle = CSSProperties & {
  "--dx": string;
  "--dy": string;
  "--rot": string;
};

function FloatingParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((particle, index) => {
        const style: ParticleStyle = {
          left: `${particle.left}%`,
          top: `${particle.top}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          animation: `drift ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          "--dx": `${particle.dx}px`,
          "--dy": `${particle.dy}px`,
          "--rot": particle.rotate,
        };

        return (
          <span key={index} style={style} className="absolute block opacity-70">
            {particle.kind === "star" ? <StarDoodle className="h-full w-full text-butter/80" /> : null}
            {particle.kind === "heart" ? <HeartDoodle className="h-full w-full text-blush/60" /> : null}
            {particle.kind === "flower" ? <FlowerDoodle className="h-full w-full opacity-60" /> : null}
          </span>
        );
      })}
    </div>
  );
}

export function Hero() {
  const reduceMotion = usePrefersReducedMotion();
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      headingRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="atas"
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:pb-24 lg:pt-20"
    >
      <FloatingParticles />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <m.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 border-b-2 border-dashed border-sky pb-1 font-hand text-2xl leading-none text-ink-soft"
          >
            <StarDoodle className="h-4 w-4 text-butter" />
            {siteConfig.hero.kicker}
          </m.p>

          <m.h1
            ref={headingRef}
            id="hero-title"
            tabIndex={-1}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: EASE }}
            className="mt-4 font-display text-[clamp(2.7rem,7.5vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.025em] text-ink focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-8"
          >
            {siteConfig.hero.titleBefore}
            <br />
            <span className="relative inline-block">
              {siteConfig.hero.name}
              <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-butter" />
            </span>
          </m.h1>

          <m.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
            className="mt-5 flex items-center gap-2 font-hand text-2xl leading-none text-ink-soft sm:text-[1.75rem]"
          >
            <HeartDoodle className="h-6 w-6 shrink-0 text-blush" />
            {siteConfig.hero.handLine}
          </m.p>

          <m.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-5 max-w-lg text-base leading-7 text-ink-soft sm:text-lg sm:leading-8"
          >
            {siteConfig.hero.body}
          </m.p>

          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease: EASE }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#surat"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sticker border-2 border-ink bg-ink px-5 py-3 text-base font-semibold text-cream shadow-sticker transition hover:-translate-y-0.5 hover:shadow-sticker-lg active:translate-y-0.5 active:shadow-[2px_2px_0_0_#17384c]"
            >
              <HeartDoodle className="h-5 w-5 text-butter" />
              {siteConfig.hero.primaryCta}
            </a>
            <a
              href="#lilin"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sticker border-2 border-ink bg-cream px-5 py-3 text-base font-semibold text-ink shadow-sticker transition hover:-translate-y-0.5 hover:bg-paper-deep hover:shadow-sticker-lg active:translate-y-0.5 active:shadow-[2px_2px_0_0_#17384c]"
            >
              {siteConfig.hero.secondaryCta}
            </a>
          </m.div>

          <m.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 flex items-center gap-2 text-ink-soft"
          >
            <ArrowDownDoodle className="h-8 w-5 animate-[gentle-bob_2.6s_ease-in-out_infinite] text-ink-soft" />
            <span className="font-hand text-xl leading-none">{siteConfig.hero.scrollCue}</span>
          </m.div>
        </div>

        <m.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: EASE }}
          className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem] lg:max-w-[26rem]"
        >
          <span aria-hidden="true" className="tape absolute -top-3 left-10 z-10 h-7 w-24 -rotate-6 rounded-[2px]" />
          <span aria-hidden="true" className="tape absolute -right-2 top-1/3 z-10 h-6 w-16 rotate-12 rounded-[2px]" />

          <figure
            role="img"
            aria-label={siteConfig.hero.illustrationAlt}
            className="rotate-2 rounded-card border-2 border-ink bg-cream p-3 pb-2 shadow-sticker-lg sm:p-4 sm:pb-3"
          >
            <div className="overflow-hidden rounded-xl border border-ink/20 bg-paper-deep">
              <BirdPair className="block h-auto w-full" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-2 px-1">
              <span className="font-hand text-xl leading-none text-ink sm:text-2xl">
                {siteConfig.hero.illustrationCaption}
              </span>
              <HeartDoodle className="h-6 w-6 shrink-0 text-blush" />
            </figcaption>
          </figure>

          <div className="absolute -bottom-6 -left-2 z-20 -rotate-6 rounded-xl border-2 border-ink bg-cream px-3 py-2 shadow-[3px_3px_0_0_#17384c] sm:-left-6">
            <p className="font-hand text-xl leading-none text-ink">{siteConfig.hero.floatingNote}</p>
          </div>

          <StarDoodle className="absolute -right-4 -top-7 h-8 w-8 text-butter" />
        </m.div>
      </div>
    </section>
  );
}
