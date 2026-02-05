import "./Technologies.css";
import globe from "../assets/globe.png";
import globe2 from "../assets/globe2.png";
import Technology from "./Technology";
import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { getIcon } from "~/utils/iconFactory";
import { start } from "repl";

const technologiesData = [
  {
    text: "React Router",
    icon: "si:SiReactrouter",
  },
  {
    text: "React",
    icon: "fa6:FaReact",
  },
  {
    text: "Typescript",
    icon: "si:SiTypescript",
  },
  {
    text: "Next.js",
    icon: "si:SiNextdotjs",
  },
  {
    text: "Express",
    icon: "si:SiExpress",
  },
];

export default function Technologies() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center end", "end end"],
  });

  const [screenWidth, setScreenWidth] = useState<number>(0);
  let end_point;
  let start_point;

  const starting_positions = {
    a: [
      { x: "10rem", y: "12rem" },
      { x: "3rem", y: "-10rem" },
      { x: "5rem", y: "15rem" },
      { x: "-7rem", y: "-14rem" },
      { x: "-3.5rem", y: "-15rem" },
    ],
    b: [
      { x: "5rem", y: "8rem" },
      { x: "-6rem", y: "0rem" },
      { x: "10rem", y: "8rem" },
      { x: "-15rem", y: "-8rem" },
      { x: "-5rem", y: "-8rem" },
    ],
  };

  const ending_positions = {
    a: [
      { x: "10rem", y: "12rem" },
      { x: "3rem", y: "-10rem" },
      { x: "5rem", y: "15rem" },
      { x: "-7rem", y: "-14rem" },
      { x: "-3.5rem", y: "-15rem" },
    ],
    b: [
      { x: "8rem", y: "12rem" },
      { x: "-10rem", y: "2rem" },
      { x: "13rem", y: "12rem" },
      { x: "-20rem", y: "-13rem" },
      { x: "-3.5rem", y: "-12rem" },
    ],
  };

  switch (true) {
    case screenWidth > 990:
      end_point = ending_positions.a;
      start_point = starting_positions.a;
      break;
    case screenWidth > 900:
      end_point = ending_positions.b;
      start_point = starting_positions.b;
      break;
    default:
      end_point = ending_positions.b;
      start_point = starting_positions.b;
  }

  useEffect(() => {
    //set width the first time the application loads
    setScreenWidth(window.innerWidth);

    //set width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="Technologies">
      <div className="radialGradient technologiesCenterdiv centered"></div>
      <div id="technologiesOuterCircle" className="circle centered"></div>
      <div id="technologiesInnerCircle" className="circle centered"></div>
      <div className="globeImageContainer centered">
        <img src={globe} alt="" className="globeImage" />
      </div>
      <div className="globeIconContainer">
        <div className="rotationAxis">
          <div className="globeImageContainer2">
            <img src={globe2} alt="" className="globeImage2" />
          </div>
        </div>
      </div>
      <div className="centered technologiesText">
        CRAFTING SECURE, FUTURE-READY WEB EXPERIENCES
      </div>

      <div ref={targetRef} className="scrollingAnimationContainer">
        {technologiesData.map((tech, index) => {
          return (
            <Technology
              key={index}
              text={tech.text}
              scrollYprogress={scrollYProgress}
              x={{ start: start_point[index].x, end: end_point[index].x }}
              y={{ start: start_point[index].y, end: end_point[index].y }}
              Tech_icon={getIcon(tech.icon)}
            />
          );
        })}
      </div>
    </div>
  );
}
