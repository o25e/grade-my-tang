import { useCallback } from "react";

const DEFAULT_VOLUME = 0.5;

function playSound(src: string, volume: number) {
  const audio = new Audio(src);
  audio.volume = volume;
  // Each call creates a new Audio instance → concurrent playback supported.
  // .catch suppresses DOMException before first user interaction (browser autoplay policy).
  audio.play().catch(() => {});
}

export function useSound(volume = DEFAULT_VOLUME) {
  const playHover      = useCallback(() => playSound("/sounds/hover.mp3",      volume), [volume]);
  const playClick      = useCallback(() => playSound("/sounds/click.mp3",      volume), [volume]);
  const playTransition = useCallback(() => playSound("/sounds/transition.mp3", volume), [volume]);
  const playWarning    = useCallback(() => playSound("/sounds/warning.mp3",    volume), [volume]);

  return { playHover, playClick, playTransition, playWarning };
}
