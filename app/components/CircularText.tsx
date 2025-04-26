import { useEffect } from "react";
import "./CircularText.css";
import arrow from "~/assets/icons8-arrow-32.png";

export default function CircularText(props) {
  useEffect(() => {
    const text = document.querySelector(".circularText");
    if (text) {
      text.innerHTML = props.text + props.text;
      text.innerHTML = text.textContent.replace(/./g, `<span>$&</span>`);

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
