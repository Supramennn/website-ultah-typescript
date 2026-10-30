import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { siteConfig } from "../data/config";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTypewriter } from "../hooks/useTypewriter";
import { SectionHeading } from "./SectionHeading";
import { FlowerDoodle, HeartDoodle } from "./doodles";

const EASE = [0.22, 1, 0.36, 1] as const;

function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] animate-pulse bg-ink align-baseline"
    />
  );
}

export function Letter() {
  const reduceMotion = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.25 });
  const content = siteConfig.letter.paragraphs.join("\n\n");
  const { displayed, done, skip } = useTypewriter(content, {
    enabled: inView,
    reducedMotion: reduceMotion,
    speed: 16,
    chunk: 2,
  });

  const typedParagraphs = displayed.split("\n\n");

  return (
    <section
      id="surat"
      aria-labelledby="letter-title"
      className="relative px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading
          id="letter-title"
          kicker={siteConfig.letter.kicker}
          title={siteConfig.letter.title}
          handNote={siteConfig.letter.handNote}
          align="center"
        />

        <div ref={cardRef} className="relative mx-auto mt-10 max-w-3xl sm:mt-12">
          <span
            aria-hidden="true"
            className="tape absolute -top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2 -rotate-3 rounded-[2px]"
          />
          <HeartDoodle className="absolute -left-3 -top-4 z-10 h-9 w-9 -rotate-12 text-blush sm:-left-5 sm:h-11 sm:w-11" />

          <div
            aria-hidden="true"
            className="letter-paper relative -rotate-[0.35deg] rounded-[18px] border-2 border-ink px-5 py-7 shadow-sticker-lg sm:px-9 sm:py-10 lg:px-14 lg:py-12"
          >
            <p className="font-hand text-3xl leading-none text-ink">{siteConfig.letter.salutation}</p>

            <div className="mt-6 text-[0.98rem] leading-8 text-ink sm:text-[1.06rem]">
              {typedParagraphs.map((paragraph, index) => {
                const isLast = index === typedParagraphs.length - 1;
                return (
                  <p key={index} className="mb-5 min-h-8 last:mb-0">
                    {paragraph}
                    {isLast && !done ? <Cursor /> : null}
                  </p>
                );
              })}
            </div>

            {done ? (
              <m.div
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <p className="mt-8 text-right font-hand text-3xl leading-none text-ink">
                  {siteConfig.letter.signature}
                </p>
                <p className="mt-6 max-w-md text-xs leading-6 text-ink-soft sm:text-sm">
                  {siteConfig.letter.postscript}
                </p>
              </m.div>
            ) : null}

            <FlowerDoodle className="absolute -bottom-5 -right-3 h-12 w-12 rotate-12 sm:-right-5 sm:h-14 sm:w-14" />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          {inView && !done ? (
            <button
              type="button"
              onClick={skip}
              className="inline-flex min-h-11 items-center justify-center rounded-sticker border-2 border-ink bg-cream px-4 py-2 text-sm font-semibold text-ink shadow-[3px_3px_0_0_#17384c] transition hover:-translate-y-0.5 hover:bg-paper-deep"
            >
              {siteConfig.letter.skip}
            </button>
          ) : null}
        </div>

        <div className="sr-only">
          <p>{siteConfig.letter.salutation}</p>
          {siteConfig.letter.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>{siteConfig.letter.signature}</p>
          <p>{siteConfig.letter.postscript}</p>
        </div>

        <p className="sr-only" aria-live="polite">
          {inView ? (done ? siteConfig.letter.doneLabel : siteConfig.letter.typingLabel) : ""}
        </p>
      </div>
    </section>
  );
}
