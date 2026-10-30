import { useCallback, useState } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { CakeFinale } from "./components/CakeFinale";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Letter } from "./components/Letter";
import { MusicToggle } from "./components/MusicToggle";
import { Opening } from "./components/Opening";
import { Timeline } from "./components/Timeline";
import { useConfetti } from "./hooks/useConfetti";
import { useScrollLock } from "./hooks/useScrollLock";

export default function App() {
  const [opened, setOpened] = useState(false);
  const { canvasRef, fire } = useConfetti();

  useScrollLock(!opened);

  const handleOpen = useCallback(() => {
    setOpened(true);
    window.scrollTo({ top: 0, behavior: "auto" });
    window.setTimeout(() => fire(0.5, 0.42, 140), 380);
  }, [fire]);

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        {opened ? (
          <main id="konten" tabIndex={-1}>
            <a
              href="#konten"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-sticker focus:border-2 focus:border-ink focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
            >
              Lewati ke isi
            </a>
            <Hero />
            <Timeline />
            <Gallery />
            <Letter />
            <CakeFinale onCelebrate={fire} />
            <Footer />
            <MusicToggle />
          </main>
        ) : null}

        <Opening visible={!opened} onOpen={handleOpen} />

        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[70] h-full w-full"
        />
      </LazyMotion>
    </MotionConfig>
  );
}
