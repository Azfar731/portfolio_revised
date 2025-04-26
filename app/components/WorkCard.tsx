import { useState } from "react";
import "./WorkCard.css";
import arrow from "~/assets/icons8-arrow-32.png";
// import Flag from "react-world-flags";
export default function WorkCard({
  title,
  project_image,
  project_url,
}: {
  title: string;
  project_image: string;
  project_url: string;
}) {
  const [isHovering, setIsHovering] = useState(false);

  const workCardInfostyles = {
    default: {
      display: "flex",
      flexDirection: "column",
      background: "#242629",
      width: "90%",
      borderRadius: "1rem",
      padding: "3%",
      // fontSize: "calc(1vw)"
    },
    hover: {
      display: "flex",
      flexDirection: "column",
      background: "#0d0d0d",
      width: "90%",
      borderRadius: "1rem",
      padding: "3%",
      // fontSize: "calc(1vw)"
    },
  };

  const arrowImageStyles = {
    default: {
      transform: "rotate(90deg)",
      width: "2em",
    },
    hover: {
      transform: "rotate(45deg)",
      width: "2em",
    },
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <a href={project_url} target="_blank" rel="noopener noreferrer">
      <div
        className="workCard"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={`/projects/${project_image}`}
          className="workCardImage"
          alt=""
        />
        <div
          style={
            isHovering ? workCardInfostyles.hover : workCardInfostyles.default
          }
        >
          <div className="workCardHeading">
            <div className="titleContainer">
              <div
                className={`workCardTitle textLine ${
                  isHovering ? "line1-exit" : "line1-enter"
                }`}
              >
                {title}
              </div>
              <div
                className={`workCardTitleHover textLine ${
                  isHovering ? "line2-enter" : "line2-exit"
                }`}
              >
                {title}
              </div>
            </div>
            <img
              src={arrow}
              alt="little arrow image"
              style={
                isHovering ? arrowImageStyles.hover : arrowImageStyles.default
              }
            />
          </div>
          <div className="workCardLocation">
            {/* <img src={flag} alt="usa flag" className="locationFlag" /> */}
            {/* <Flag code={"PK"} className="locationFlag" /> */}
            <span className="locationText">Pakistan</span>
          </div>
          <div className="workCardPartners">
            Developed By: AzfarRazzaq <span className="dot">•</span> Designed
            By: AzfarRazzaq
          </div>
        </div>
      </div>
    </a>
  );
}
