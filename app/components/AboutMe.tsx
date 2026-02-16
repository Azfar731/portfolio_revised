import { useEffect, useRef, useState } from "react";

import "./AboutMe.css";

export default function AboutMe({ aboutMeList }: { aboutMeList: string[] }) {
  const [hoverState, setHoverState] = useState(true);
  const styles = useRef({
    default: {
      height: 0,
      borderLeft: "2px solid #151515",
    },
    hover: {
      height: 0,
      borderLeft: "2px solid #1b878a",
      boxShadow: "0 0 20px 2px #1b878a",
    },
  });

  const listItems = aboutMeList.map((item, index) => {
    return (
      <div key={index} className="list-item">
        <div className="number">{index + 1}</div>
        <div className="text">{item}</div>
      </div>
    );
  });

  useEffect(() => {
    let component = document.querySelector<HTMLElement>(".listContainer");
    if (component) {
      let cheight = component.offsetHeight;
      styles.current = {
        default: {
          height: cheight,
          // borderLeft: "2px solid #151515",
        },
        hover: {
          height: cheight,
          borderLeft: "2px solid #1b878a",
          boxShadow: "0 0 20px 2px #1b878a",
        },
      };
      setHoverState(false); //doing this for vertical line next to the list
    }
  }, []);

  return (
    <div id="AboutMe" className="group">
      <div
        id="vl" className="border-l-2 border-stone-900 group-hover:border-oceanBlue group-hover:shadow-[0_0_20px_2px_#1b878a]"
        style={hoverState ? styles.current.hover : styles.current.default}
      ></div>
      <div className="listContainer">{listItems}</div>
    </div>
  );
}
