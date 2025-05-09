import { useState } from "react";
import "./WorkCard.css";
import arrow from "~/assets/icons8-arrow-32.png";
import { FaReact } from "react-icons/fa6";
// import Flag from "react-world-flags";
export default function WorkCard({
  title,
  project_image,
  project_url,
  project_description,
  tech_icons,
}: {
  title: string;
  project_image: string;
  project_url: string;
  project_description: string;
  tech_icons: React.ComponentType[];
}) {
  const [isHovering, setIsHovering] = useState(false);

  const workCardInfostyles = {
    default: {
      display: "flex",
      flexDirection: "column" as const,
      background: "#242629",
      width: "90%",
      borderRadius: "1rem",
      padding: "3%",
      // fontSize: "calc(1vw)"
    },
    hover: {
      display: "flex",
      flexDirection: "column" as const,
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
          <div className="workCardStack">
            {tech_icons.map((Icon, i) => (
              <Icon key={i} className="h-10 w-10" />
            ))}
          </div>
          <div className="project_description_container">
            <p className="project_description_text">
              {project_description.length > 130
                ? project_description.slice(0, 130) + "..."
                : project_description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
