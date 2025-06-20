import { useState } from "react";
import "./WorkCard.css"; // Keep for non-style animations
import arrow from "../assets/icons8-arrow-32.png";
import { FaArrowRightLong } from "react-icons/fa6";
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

  return (
    <a href={project_url} target="_blank" rel="noopener noreferrer">
      <div
        className="workCard"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src={`/projects/${project_image}`}
          className="workCardImage"
          alt=""
        />
        <div
          className={`flex flex-col w-full rounded-[1rem] p-[3%] transition-colors duration-300 ${
            isHovering ? "bg-[#0d0d0d]" : "bg-[#242629]"
          }`}
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
            {/* <img
              src={arrow}
              alt="little arrow image"
              className={`transform w-8 transition-transform duration-300 ${
                isHovering ? "rotate-45" : "rotate-90"
              }`}
            /> */}
            <FaArrowRightLong
              className={`transform w-8 transition-transform duration-300  ${
                isHovering ? "rotate-[-45deg]" : ""
              }`}
              size={18}
            />
          </div>
          <div className="workCardStack">
            {tech_icons.map((Icon, i) => (
              <Icon key={i} className="tech_stack_icons " />
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
