import { useLayoutEffect, useRef, useState } from "react";
import "./ScrollingText.css";

export default function ScrollingText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cloneCount, setCloneCount] = useState(2); // initial guess

  /* ─── keep the “auto-calculate clone count” logic ────────────────────────── */
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    function updateClones() {
      const first = container!.querySelector(
        ".scrollingText"
      ) as HTMLElement | null;
      if (!first) return;

      const textWidth = first.offsetWidth;
      const containerWidth = container!.offsetWidth;
      const needed = Math.ceil(containerWidth / textWidth) + 1; // fill + 1 extra
      setCloneCount(needed);
    }

    updateClones(); // run once on mount
    window.addEventListener("resize", updateClones);
    return () => window.removeEventListener("resize", updateClones);
  }, [text]);

  /* build one list of clones, then duplicate it once for a seamless loop */
  const clones = Array.from({ length: cloneCount }).map((_, i) => (
    <div className="scrollingText" key={i}>
      {text}
    </div>
  ));

  return (
    <div className="scrollingTextContainer" ref={containerRef}>
      {/* key forces a remount when cloneCount changes → animation restarts cleanly */}
      <div className="scrollTrack" key={cloneCount}>
        {clones}
        {clones}
      </div>
    </div>
  );
}
