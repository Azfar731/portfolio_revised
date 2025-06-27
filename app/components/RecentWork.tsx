import "./RecentWork.css";
import WorkCard from "./WorkCard";
// import projectsData from "../data/projectsdata.json";
import { getIcon } from "../utils/iconFactory";

const projectsData = [
  {
    title: "Movie Finder",
    project_image: "MovieFinder.PNG",
    project_url: "https://moviefinderproject.netlify.app/",
    project_description:
      "A movie finder app that allows users to search for movies and view their details.",
    tech_icons: ["fa6:FaReact", "si:SiJavascript", "fa6:FaNode"],
  },
  {
    title: "Colour Picker",
    project_image: "Color-Picker.PNG",
    project_url: "https://colourpickerproject.netlify.app/",
    project_description:
      "A color picker app that allows users to select and save colors.",
    tech_icons: ["fa6:FaReact", "si:SiJavascript", "fa6:FaNode"],
  },
  {
    title: "CapCompare",
    project_image: "CapCompare.PNG",
    project_url: "https://randomUrl.com",
    project_description:
      "A Crypto market cap comparison app that allows users to compare market caps of different Crypto coins.",
    tech_icons: [
      "fa6:FaReact",
      "si:SiReactrouter",
      "si:SiTypescript",
      "si:SiTailwindcss",
      "fa6:FaNode",
    ],
  },
  {
    title: "Khalil&Khalil",
    project_image: "CapCompare.PNG",
    project_url: "https://randomUrl.com",
    project_description:
      "A website for Khalil&Khalil law firm, operating in mulitple cities of Pakistan.",
    tech_icons: ["fa6:FaReact", "si:SiJavascript", "fa6:FaNode"],
  },
  {
    title: "Transaction Submitter",
    project_image: "TransactionSubmitter.png",
    project_url: "https://github.com/Azfar731/Transaction-Submitter",
    project_description:
      "This project showcases a system for managing blockchain transactions with a database-driven queue. It features a smart contract with a mutable state variable and a web application that lets users read and update this variable.",
    tech_icons: [
      "fa6:FaNode",
      "si:SiExpress",
      "si:SiJavascript",
      "si:SiSolidity",
    ],
  },
  {
    title: "Multi Part Form",
    project_image: "MultiPartForm.png",
    project_url: "https://github.com/Azfar731/multi_part_form",
    project_description:
      "This repository showcases how to implement a multi-part form in react router v7.",
    tech_icons: [
      "fa6:FaNode",
      "fa6:FaReact",
      "si:SiReactrouter",
      "si:SiTypescript",
      "si:SiTailwindcss",
    ],
  },
  {
    title: "Infinite Carousel",
    project_image: "InfiniteCarousel.png",
    project_url: "https://github.com/Azfar731/infinite_carousel",
    project_description:
      "A simple repo that showcases how to implement a seamless infinite carousel through tailwind v4.",
    tech_icons: [
      "fa6:FaNode",
      "fa6:FaReact",
      "si:SiTypescript",
      "si:SiTailwindcss",
    ],
  },
];

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
