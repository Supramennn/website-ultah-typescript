import { useCallback, useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { siteConfig } from "../data/config";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import type { GalleryPhoto } from "../data/config";
import { useScrollLock } from "../hooks/useScrollLock";
import { PhotoArt } from "./doodles";

const EASE = [0.22, 1, 0.36, 1] as const;

type LightboxProps = {
  photo: GalleryPhoto;
  index: number;
  total: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
      <path
        d={direction === "left" ? "M15 5 8 12l7 7" : "M9 5l7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Lightbox({
  photo,
  index,
  total,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const reduceMotion = usePrefersReducedMotion();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const [failedId, setFailedId] = useState<string | null>(null);
  const showPlaceholder = !photo.src || failedId === photo.id;

  useScrollLock(true);

  useEffect(() => {
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      previous?.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;
      if (!dialog) {
        return;
      }

      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [onClose, onNext, onPrevious]);

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <m.div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-night/95 p-3 sm:p-6"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.2 } }}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <m.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-caption"
        className="relative w-full max-w-3xl rounded-card border-2 border-cream/25 bg-cream p-3 text-ink shadow-2xl sm:p-4"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        <div className="flex items-center justify-between gap-3 px-1 pb-2">
          <p className="font-hand text-xl leading-none text-ink-soft">
            {index + 1} {siteConfig.gallery.lightbox.counterSeparator} {total}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={siteConfig.gallery.lightbox.close}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition hover:bg-butter"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
              <path
                d="M6 6l12 12M18 6 6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex max-h-[62dvh] items-center justify-center overflow-hidden rounded-xl border border-ink/15 bg-night p-2">
          {showPlaceholder ? (
            <PhotoArt variant={photo.art} className="h-auto max-h-[58dvh] w-auto max-w-full" />
          ) : (
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              onError={() => setFailedId(photo.id)}
              className="max-h-[58dvh] w-auto max-w-full object-contain"
              decoding="async"
            />
          )}
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onPrevious}
            aria-label={siteConfig.gallery.lightbox.previous}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border-2 border-ink bg-paper px-2 text-ink transition hover:bg-paper-deep"
          >
            <Chevron direction="left" />
          </button>

          <p
            id="lightbox-caption"
            className="min-w-0 flex-1 text-center font-hand text-xl leading-tight text-ink sm:text-2xl"
          >
            {photo.caption}
          </p>

          <button
            type="button"
            onClick={onNext}
            aria-label={siteConfig.gallery.lightbox.next}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border-2 border-ink bg-paper px-2 text-ink transition hover:bg-paper-deep"
          >
            <Chevron direction="right" />
          </button>
        </div>
      </m.div>
    </m.div>
  );
}
