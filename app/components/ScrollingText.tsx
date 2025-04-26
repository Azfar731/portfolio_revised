import "./ScrollingText.css";
import { useEffect } from "react";

export default function ScrollingText({ text }: { text: string }) {
  useEffect(() => {
    let component = document.querySelector(".scrollingText");
    if (component) {
      const elem = component.cloneNode(true);
      const container = document.querySelector(".scrollingTextContainer");
      if (!container) {
        throw new Error("scrollingTextContainer not found");
      }
      container.append(elem);
    }
  }, []);

  return (
    <div className="scrollingTextContainer">
      <div className="scrollingText">{text}</div>
    </div>
  );
}
