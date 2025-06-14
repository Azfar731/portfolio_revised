import "./RecentWork.css";
import WorkCard from "./WorkCard";
import projectsData from "../data/projectsdata.json";
import { getIcon } from "../utils/iconFactory";

export default function RecentWork() {
  const projectCards = projectsData.map((proj) => {
    return (
      <WorkCard
        key={proj.title}
        title={proj.title}
        project_image={proj.project_image}
        project_url={proj.project_url}
        project_description={proj.project_description}
        tech_icons={proj.tech_icons
          .map(getIcon)
          .filter((item) => item !== null)}
      />
    );
  });

  return (
    <div id="Work">
      <span className="smallText">Happy Clients {"<3"}</span>
      <h2 className="h2Titles">Recent Work</h2>
      <div id="workCardsContainer">{projectCards}</div>
    </div>
  );
}
