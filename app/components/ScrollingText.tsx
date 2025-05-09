import "./ScrollingText.css";
import { useEffect } from "react";

export default function ScrollingText({ text }: { text: string }) {
  //used for replicating text content inside the container, however it didn't work as expected
  // useEffect(() => {
  //   let component = document.querySelector(".scrollingText2");
  //   if (component) {
  //     const elem = component.cloneNode(true);
  //     const container = document.querySelector(".scrollingTextContainer2");
  //     if (!container) {
  //       throw new Error("scrollingTextContainer2 not found");
  //     }
  //     container.append(elem);
  //   }
  // }, []);

  return (
    <div className="scrollingTextContainer">
      <div className="scrollingText">{text}</div>
      <div className="scrollingText">{text}</div>
    </div>
  );
}
