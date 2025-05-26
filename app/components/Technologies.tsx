import "./Technologies.css";
import globe from "~/assets/globe.png";
import globe2 from "~/assets/globe2.png";
import Technology from "./Technology";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Technology2 from "./Technology2";
import Technology3 from "./Tech3";
import Technology4 from "./Tech4";

export default function Technologies() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center end"],
  });

  const [screenWidth, setScreenWidth] = useState<number>(0);
  let end_point
  
  const ending_positions = {
    a: [
      { x: "10rem", y: "20rem" },
      { x: "-5rem", y: "-20rem" },
      { x: "-2rem", y: "25rem" },
      { x: "-5rem", y: "-20rem" },
    ],
    b: [
      { x: "5rem", y: "10rem" },
      { x: "-2.5rem", y: "-10rem" },
      { x: "-1rem", y: "12rem" },
      { x: "-2.5rem", y: "-10rem" },
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
    setScreenWidth(window.innerWidth)
    
    //set width on resize
    const handleResize = () => {
      console.log("Width: ", window.innerWidth)
      setScreenWidth(window.innerWidth)};
    
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
        <Technology
          text="Remix"
          scrollYprogress={scrollYProgress}
          x={{ start: "0rem", end: end_point[0].x  }}
          y={{ start: "0rem", end: end_point[0].y  }}
        />
        <Technology2
          text={"React"}
          scrollYProgress={scrollYProgress}
          x={{ start: "0rem", end: end_point[1].x  }}
          y={{ start: "0rem", end: end_point[1].y  }}
        />
        <Technology3
          text={"Solidity"}
          scrollYProgress={scrollYProgress}
          x={{ start: "0rem", end: end_point[2].x  }}
          y={{ start: "0rem", end: end_point[2].y  }}
        />
        <Technology4
          text={"Typescript"}
          scrollYProgress={scrollYProgress}
          x={{ start: "0rem", end: end_point[3].x  }}
          y={{ start: "0rem", end: end_point[3].y  }}
        />
      </div>
    </div>
  );
}
