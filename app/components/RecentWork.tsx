import "./RecentWork.css";
import WorkCard from "./WorkCard";
import projectsData from "/src/data/projects.Data.json";

export default function RecentWork(props) {
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

  const handleMouseEnter = () => {
    props.setCurrentSection();
  };

  const handleMouseLeave = () => {
    props.unsetCurrentSection();
  };

  return (
    <div
      id="Work"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="smallText">Happy Clients {"<3"}</span>
      <h2 className="h2Titles">Recent Work</h2>
      <div id="workCardsContainer">{projectCards}</div>
    </div>
  );
}
