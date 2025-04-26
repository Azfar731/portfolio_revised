import "./Technologies.css";
import globe from "/src/assets/globe.png";
import globe2 from "/src/assets/globe2.png";
import Technology from "./Technology";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Technology2 from "./Technology2";
import Technology3 from "./Tech3";
import Technology4 from "./Tech4";

export default function Technologies() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

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
        <Technology
          text="Remix"
          scrollYprogress={scrollYProgress}
          x={{ start: "0rem", end: "10rem" }}
          y={{ start: "0rem", end: "20rem" }}
        />
        <Technology2
          text={"React"}
          scrollYProgress={scrollYProgress}
          x={{ start: "0rem", end: "-5rem" }}
          y={{ start: "0rem", end: "-20rem" }}
        />
        <Technology3
          text={"Solidity"}
          scrollYProgress={scrollYProgress}
          x={{ start: "0rem", end: "-2rem" }}
          y={{ start: "0rem", end: "25rem" }}
        />
        <Technology4
          text={"Typescript"}
          scrollYProgress={scrollYProgress}
          x={{ start: "0rem", end: "-5rem" }}
          y={{ start: "0rem", end: "-20rem" }}
        />
      </div>
    </div>
  );
}
