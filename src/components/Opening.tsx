import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { siteConfig } from "../data/config";
import { useCountdown } from "../hooks/useCountdown";
import { FlowerDoodle, HeartDoodle, StarDoodle } from "./doodles";

type OpeningProps = {
  visible: boolean;
  onOpen: () => void;
};

const EASE = [0.22, 1, 0.36, 1] as const;

function CountdownPanel() {
  const countdown = useCountdown(siteConfig.recipient.birthdayISO);
  const pad = (value: number) => String(value).padStart(2, "0");

  if (countdown.phase !== "before") {
    return (
      <div className="mt-6 rounded-2xl border-2 border-dashed border-ink/35 bg-cream/80 px-4 py-3">
        <p className="text-sm leading-6 text-ink-soft">
          {countdown.phase === "today"
            ? siteConfig.opening.countdownDone
            : siteConfig.opening.countdownAfter}
        </p>
      </div>
    );
  }

  const items = [
    { label: "hari", value: countdown.days },
    { label: "jam", value: countdown.hours },
    { label: "menit", value: countdown.minutes },
    { label: "detik", value: countdown.seconds },
  ];

  return (
    <div className="mt-6">
      <p className="text-sm font-medium text-ink-soft">{siteConfig.opening.countdownLabel}</p>
      <div className="mt-2 flex items-stretch justify-center gap-2" aria-live="off">
        {items.map((item) => (
          <div
            key={item.label}
            className="min-w-14 flex-1 rounded-xl border-2 border-ink/80 bg-cream px-1 py-1.5 shadow-[2px_2px_0_0_rgba(23,56,76,0.18)]"
          >
            <span className="block font-display text-xl leading-none tabular-nums text-ink sm:text-2xl">
              {pad(item.value)}
            </span>
            <span className="mt-1 block text-[10px] leading-none text-ink-soft">{item.label}</span>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-ink-soft">
        {siteConfig.opening.countdownNote}
      </p>
      <p className="sr-only">
        Hitung mundur ke {siteConfig.recipient.birthdayLabel}: {countdown.days} hari lagi.
      </p>
    </div>
  );
}

function Envelope({ opening, reduceMotion }: { opening: boolean; reduceMotion: boolean }) {
  return (
    <div className="relative mx-auto mt-7 w-full max-w-[21rem] sm:max-w-[23rem]">
      <div
        aria-hidden="true"
        className="absolute -left-5 -top-4 z-20 rotate-[-14deg] text-blush"
      >
        <HeartDoodle className="h-9 w-9" />
      </div>

      <div className="relative aspect-[1.58] rounded-2xl border-2 border-ink bg-cream shadow-sticker-lg">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 top-[30%] rounded-b-2xl bg-paper-deep/70"
          style={{ clipPath: "polygon(0 100%, 50% 26%, 100% 100%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl bg-cream/60"
          style={{ clipPath: "polygon(0 100%, 50% 18%, 100% 100%)" }}
        />

        <m.div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-10 h-[62%] origin-top border-2 border-ink bg-cream"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          animate={{
            rotateX: opening ? 180 : 0,
            opacity: opening ? 0 : 1,
          }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
        />

        <div
          aria-hidden="true"
          className="absolute right-3 top-3 z-20 flex h-[4.4rem] w-[3.3rem] rotate-6 flex-col items-center justify-between border-2 border-dashed border-ink/55 bg-paper p-1.5 text-center"
        >
          <span className="text-[8px] font-bold leading-tight text-ink-soft">
            {siteConfig.opening.stampTop}
          </span>
          <StarDoodle className="h-5 w-5 text-butter" />
          <span className="text-[7px] font-bold leading-tight text-ink-soft">
            {siteConfig.opening.stampBottom}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-4 z-20 px-5 text-left sm:px-6">
          <p className="font-hand text-[1.65rem] leading-none text-ink">
            {siteConfig.opening.envelopeTo}
          </p>
          <p className="mt-1 text-[11px] font-medium leading-tight text-ink-soft">
            {siteConfig.opening.fullName}
          </p>
        </div>

        <m.div
          aria-hidden="true"
          className="absolute left-1/2 top-[54%] z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-butter shadow-[2px_2px_0_0_#17384c]"
          animate={{
            scale: opening ? 0 : 1,
            rotate: opening ? -18 : 0,
          }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE }}
        >
          <HeartDoodle className="h-6 w-6 text-blush" />
        </m.div>
      </div>
    </div>
  );
}

export function Opening({ visible, onOpen }: OpeningProps) {
  const reduceMotion = Boolean(useReducedMotion());
  const [opening, setOpening] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      buttonRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [visible]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleOpen = () => {
    if (opening) {
      return;
    }

    setOpening(true);
    timeoutRef.current = window.setTimeout(onOpen, reduceMotion ? 0 : 620);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <m.div
          className="fixed inset-0 z-50 flex min-h-dvh items-center justify-center overflow-y-auto bg-paper px-4 py-8 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.45, ease: EASE } }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="opening-title"
          aria-describedby="opening-subtitle"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <StarDoodle className="absolute left-[8%] top-[12%] h-8 w-8 text-butter/80" />
            <HeartDoodle className="absolute right-[10%] top-[18%] h-7 w-7 text-blush/70" />
            <FlowerDoodle className="absolute bottom-[12%] left-[12%] h-10 w-10 opacity-70" />
            <StarDoodle className="absolute bottom-[16%] right-[9%] h-5 w-5 text-sky" />
            <span className="absolute -left-16 top-[42%] h-40 w-40 rounded-full border-2 border-dashed border-sky/40" />
            <span className="absolute -right-12 bottom-[34%] h-32 w-32 rounded-full border-2 border-dashed border-sky/30" />
          </div>

          <m.div
            className="relative z-10 w-full max-w-md text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: EASE, delay: reduceMotion ? 0 : 0.1 }}
          >
            <p className="font-hand text-2xl leading-none text-ink-soft">{siteConfig.opening.eyebrow}</p>
            <h1
              id="opening-title"
              className="mt-2 font-display text-5xl leading-none tracking-[-0.02em] text-ink sm:text-6xl"
            >
              {siteConfig.opening.title}
            </h1>
            <p className="mt-2 text-sm font-medium text-ink-soft">{siteConfig.opening.fullName}</p>

            <Envelope opening={opening} reduceMotion={reduceMotion} />

            <p
              id="opening-subtitle"
              className="mx-auto mt-6 max-w-sm text-sm leading-6 text-ink-soft sm:text-base"
            >
              {siteConfig.opening.subtitle}
            </p>

            <CountdownPanel />

            <button
              ref={buttonRef}
              type="button"
              onClick={handleOpen}
              disabled={opening}
              className="mt-6 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-sticker border-2 border-ink bg-ink px-6 py-3 text-base font-semibold text-cream shadow-sticker transition hover:-translate-y-0.5 hover:shadow-sticker-lg active:translate-y-0.5 active:shadow-[2px_2px_0_0_#17384c] disabled:cursor-wait disabled:opacity-80"
            >
              <HeartDoodle className="h-5 w-5 text-butter" />
              {siteConfig.opening.button}
            </button>

            <p className="mt-3 font-hand text-xl leading-none text-ink-soft">{siteConfig.opening.note}</p>
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
