import { m, useReducedMotion } from "framer-motion";
import { siteConfig } from "../data/config";
import { SectionHeading } from "./SectionHeading";
import { HeartDoodle } from "./doodles";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Timeline() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="cerita"
      aria-labelledby="timeline-title"
      className="relative px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          id="timeline-title"
          kicker={siteConfig.timeline.kicker}
          title={siteConfig.timeline.title}
          handNote={siteConfig.timeline.handNote}
        />

        <ol className="relative mt-12 space-y-7 md:mt-16 md:space-y-10">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[15px] top-2 border-l-2 border-dashed border-sky/70 md:left-1/2"
          />

          {siteConfig.timeline.moments.map((moment, index) => (
            <li
              key={moment.kicker}
              className="relative pl-12 md:grid md:grid-cols-2 md:gap-x-20 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-[7px] top-8 z-10 h-4 w-4 rounded-full border-2 border-ink bg-butter md:left-[calc(50%-8px)]"
              />

              <m.article
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: EASE }}
                className={[
                  "rounded-card border-2 border-ink bg-cream p-5 shadow-sticker transition duration-300 hover:-translate-y-0.5 hover:shadow-sticker-lg sm:p-6",
                  index % 2 === 0 ? "md:col-start-1 md:row-start-1" : "md:col-start-2 md:row-start-1",
                ].join(" ")}
              >
                <p className="font-hand text-2xl leading-none text-ink-soft">{moment.kicker}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-ink sm:text-[1.65rem]">
                  {moment.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink-soft sm:text-[0.95rem]">
                  {moment.body}
                </p>
              </m.article>

              <span
                aria-hidden="true"
                className={[
                  "absolute top-6 hidden font-display text-5xl font-semibold text-sky/45 md:block",
                  index % 2 === 0 ? "right-6 text-right" : "left-6",
                ].join(" ")}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center font-hand text-2xl leading-tight text-ink-soft sm:mt-12">
          <HeartDoodle className="h-6 w-6 shrink-0 text-blush" />
          {siteConfig.timeline.closingNote}
        </p>
      </div>
    </section>
  );
}
