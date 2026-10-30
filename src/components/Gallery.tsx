import { useCallback, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { siteConfig } from "../data/config";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import type { GalleryPhoto } from "../data/config";
import { Lightbox } from "./Lightbox";
import { PhotoArt } from "./doodles";
import { SectionHeading } from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

const ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-1", "-rotate-2"];

function PhotoCard({
  photo,
  index,
  onOpen,
}: {
  photo: GalleryPhoto;
  index: number;
  onOpen: () => void;
}) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !photo.src || failed;
  const rotation = ROTATIONS[index % ROTATIONS.length] ?? "rotate-0";
  const slotNumber = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={[
        photo.caption,
        showPlaceholder ? `${siteConfig.gallery.placeholderTag} ${slotNumber}` : null,
        siteConfig.gallery.openLabel,
      ]
        .filter(Boolean)
        .join(", ")}
      className={`group relative block w-full rounded-[14px] text-left transition focus-visible:outline-offset-4 ${rotation} hover:rotate-0`}
    >
      {index % 2 === 0 ? (
        <span
          aria-hidden="true"
          className="tape absolute -top-2 left-1/2 z-10 h-5 w-16 -translate-x-1/2 -rotate-3 rounded-[2px]"
        />
      ) : null}

      <span className="block rounded-[12px] border-2 border-ink bg-cream p-2 pb-3 shadow-sticker transition duration-300 group-hover:-translate-y-1 group-hover:shadow-sticker-lg group-active:translate-y-0 sm:p-2.5 sm:pb-4">
        <span className="relative block aspect-[4/5] overflow-hidden rounded-[6px] border border-ink/15 bg-paper-deep">
          {showPlaceholder ? (
            <PhotoArt variant={photo.art} className="h-full w-full object-cover" />
          ) : (
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          )}

          {showPlaceholder ? (
            <span className="absolute bottom-2 right-2 rounded-sm border border-ink/25 bg-cream/90 px-1.5 py-0.5 text-[10px] font-medium leading-none text-ink-soft">
              {siteConfig.gallery.placeholderTag} {slotNumber}
            </span>
          ) : null}
        </span>

        <span className="mt-2 block px-0.5 font-hand text-lg leading-tight text-ink sm:mt-3 sm:text-xl">
          {photo.caption}
        </span>
      </span>
    </button>
  );
}

export function Gallery() {
  const reduceMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const photos = siteConfig.gallery.photos;
  const total = photos.length;
  const hasPlaceholders = photos.some((photo) => !photo.src);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current - 1 + total) % total));
  }, [total]);
  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % total));
  }, [total]);

  const activePhoto = activeIndex === null ? null : photos[activeIndex] ?? null;

  return (
    <section
      id="galeri"
      aria-labelledby="gallery-title"
      className="relative border-y-2 border-dashed border-sky/50 bg-cream px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          id="gallery-title"
          kicker={siteConfig.gallery.kicker}
          title={siteConfig.gallery.title}
          handNote={siteConfig.gallery.handNote}
        />

        {import.meta.env.DEV && hasPlaceholders ? (
          <p className="mt-6 max-w-xl rounded-xl border-2 border-dashed border-sky bg-paper px-4 py-3 text-xs leading-5 text-ink-soft">
            {siteConfig.gallery.placeholderNotice}
          </p>
        ) : null}

        {photos.length === 0 ? (
          <p className="mt-10 max-w-xl rounded-xl border-2 border-dashed border-sky bg-paper px-5 py-6 text-sm leading-6 text-ink-soft">
            {siteConfig.gallery.empty}
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-7 lg:mt-12">
            {photos.map((photo, index) => (
              <m.div
                key={`${photo.id}-${photo.src ?? "placeholder"}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.045, 0.22), ease: EASE }}
                className={index % 3 === 1 ? "md:mt-8" : ""}
              >
                <PhotoCard photo={photo} index={index} onOpen={() => setActiveIndex(index)} />
              </m.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activePhoto && activeIndex !== null ? (
          <Lightbox
            photo={activePhoto}
            index={activeIndex}
            total={total}
            onClose={close}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
