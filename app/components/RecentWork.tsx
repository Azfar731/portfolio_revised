import "./RecentWork.css";
import WorkCard from "./WorkCard";
import projectsData from "~/data/projectsdata.json";

export default function RecentWork() {
  const projectCards = projectsData.map((proj) => {
    return (
      <WorkCard
        key={proj.title}
        title={proj.title}
        project_image={proj.project_image}
        project_url={proj.project_url}
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
