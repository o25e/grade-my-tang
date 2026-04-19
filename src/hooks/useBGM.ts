import { useEffect, useRef } from "react";

export function useBGM(enabled: boolean, src: string, volume = 0.3) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wasEnabledRef = useRef(enabled);

  useEffect(() => {
    // enabled가 false → true로 변할 때 (게임 재시작)
    if (enabled && !wasEnabledRef.current && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    if (enabled) {
      if (!audioRef.current) {
        audioRef.current = new Audio(src);
        audioRef.current.loop = true;
        audioRef.current.volume = volume;
        audioRef.current.play().catch(() => {});
      } else if (audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    } else {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    }

    wasEnabledRef.current = enabled;
  }, [enabled, src, volume]);
}

