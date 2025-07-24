import "./ScrollingText.css";
import { useEffect, useRef, useState } from "react";

export default function ScrollingText({ text }: { text: string }) {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const [cloneCount, setCloneCount] = useState(2);

  // useEffect(() => {
  //   function updateClones() {
  //     const container = containerRef.current;
  //     if (!container) return;

  //     // Measure the width of one text instance
  //     const firstText = container.querySelector(
  //       ".scrollingText"
  //     ) as HTMLElement;
  //     if (!firstText) return;
  //     const textWidth = firstText.offsetWidth;
  //     const containerWidth = container.offsetWidth;

  //     // Calculate how many copies are needed to fill + one extra
  //     const count = Math.ceil(containerWidth / textWidth) + 1;
  //     setCloneCount(count);
  //   }

  //   updateClones();
  //   window.addEventListener("resize", updateClones);
  //   return () => window.removeEventListener("resize", updateClones);
  // }, [text]);

  return (
    <div className="scrollingTextContainer" >
      {Array.from({ length: 4 }).map((_, i) => (
        <div className="scrollingText" key={i}>
          {text}
        </div>
      ))}
    </div>
  );
}
