import { useCallback, useEffect, useRef, useState } from "react";

type TypewriterOptions = {
  enabled: boolean;
  reducedMotion: boolean;
  speed?: number;
  chunk?: number;
};

type TypewriterResult = {
  displayed: string;
  done: boolean;
  skip: () => void;
};

export function useTypewriter(text: string, options: TypewriterOptions): TypewriterResult {
  const { enabled, reducedMotion, speed = 18, chunk = 2 } = options;
  const [count, setCount] = useState(0);
  const timerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (reducedMotion) {
      setCount(text.length);
      return;
    }

    let index = 0;
    setCount(0);
    clearTimer();

    timerRef.current = window.setInterval(() => {
      index = Math.min(text.length, index + chunk);
      setCount(index);

      if (index >= text.length) {
        clearTimer();
      }
    }, speed);

    return clearTimer;
  }, [clearTimer, chunk, enabled, reducedMotion, speed, text]);

  const skip = useCallback(() => {
    clearTimer();
    setCount(text.length);
  }, [clearTimer, text.length]);

  return {
    displayed: text.slice(0, count),
    done: count >= text.length,
    skip,
  };
}
