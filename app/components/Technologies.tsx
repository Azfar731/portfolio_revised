import "./Technologies.css";
import globe from "../assets/globe.png";
import globe2 from "../assets/globe2.png";
import Technology from "./Technology";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getIcon } from "~/utils/iconFactory";

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
    offset: ["start end", "center end"],
  });

  const [screenWidth, setScreenWidth] = useState<number>(0);
  let end_point;

  const ending_positions = {
    a: [
      { x: "10rem", y: "12rem" },
      { x: "3rem", y: "-10rem" },
      { x: "5rem", y: "15rem" },
      { x: "-7rem", y: "-14rem" },
      { x: "-3.5rem", y: "-15rem" },
      { x: "-3.5rem", y: "-9rem" },
      { x: "-8rem", y: "9rem" },
    ],
    b: [
      { x: "14rem", y: "10rem" },
      { x: "3rem", y: "2rem" },
      { x: "13rem", y: "12rem" },
      { x: "-7rem", y: "-10rem" },
      { x: "-3.5rem", y: "-12rem" },
      { x: "-3.5rem", y: "-7rem" },
      { x: "-8rem", y: "9rem" },
    ],
  };

  switch (true) {
    case screenWidth > 990:
      end_point = ending_positions.a;
      break;
    case screenWidth > 900:
      end_point = ending_positions.b;
      break;
    default:
      end_point = ending_positions.b;
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
              x={{ start: "0rem", end: end_point[index].x }}
              y={{ start: "0rem", end: end_point[index].y }}
              Tech_icon={getIcon(tech.icon)}
            />
          );
        })}
      </div>
    </div>
  );
}
