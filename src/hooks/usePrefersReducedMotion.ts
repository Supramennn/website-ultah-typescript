import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function getMediaQueryList() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.matchMedia(QUERY);
}

function subscribe(onChange: () => void) {
  const media = getMediaQueryList();

  if (!media) {
    return () => {};
  }

  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getSnapshot() {
  return getMediaQueryList()?.matches ?? false;
}

function getServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
