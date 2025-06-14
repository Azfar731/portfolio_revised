import { useEffect } from "react";
import "./CircularText.css";
import arrow from "../assets/icons8-arrow-32.png";

export default function CircularText({ text_param }: { text_param: string }) {
  useEffect(() => {
    const text = document.querySelector(".circularText");
    if (text === null) {
      throw new Error(
        "CircularText component didn't find required DOM element"
      );
    }
    if (text) {
      text.innerHTML = text_param + text_param;
      text.innerHTML = (text.textContent ?? "").replace(
        /./g,
        `<span>$&</span>`
      );

      const spanElements = Array.from(text.children);

      for (let i = 1; i < spanElements.length; i++) {
        spanElements[i].style.transform =
          "rotate(" + i * (360 / spanElements.length) + "deg)";
      }
    }
  }, []);

  return (
    <div className="circularTextContainer">
      <img src={arrow} alt="arrow symbol" />
      <h5 className="circularText"></h5>
    </div>
  );
}
