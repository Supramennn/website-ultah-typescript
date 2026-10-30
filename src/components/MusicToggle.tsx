import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../data/config";
import { MusicNote } from "./doodles";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const src = siteConfig.music.src;

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  if (!src) {
    return null;
  }

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      setFailed(false);
    } catch {
      setFailed(true);
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="none" onError={() => setFailed(true)} />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={
          failed ? siteConfig.music.error : playing ? siteConfig.music.pause : siteConfig.music.play
        }
        title={playing ? siteConfig.music.pause : siteConfig.music.play}
        className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink shadow-sticker transition hover:-translate-y-0.5 hover:bg-butter active:translate-y-0.5 active:shadow-[2px_2px_0_0_#17384c]"
      >
        <MusicNote className="h-6 w-6" />
      </button>
      {failed ? (
        <p
          role="status"
          className="fixed bottom-20 right-4 z-40 max-w-[13rem] rounded-lg border-2 border-ink bg-cream px-3 py-2 text-xs leading-5 text-ink shadow-sticker"
        >
          {siteConfig.music.error}
        </p>
      ) : null}
    </>
  );
}
