// LinkContainers.tsx

import { FaStackOverflow, FaLinkedin, FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import "./SocialLinks.css";
export default function LinkContainers() {
  const sites = [
    {
      icon: <FaStackOverflow className="site-icons" />,
      name: "Stack Overflow",
      link: "https://stackoverflow.com/users/26767975/azfar-razzaq",
    },
    {
      icon: <FaLinkedin className="site-icons" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/azfar-razzaq/",
    },
    {
      icon: <FaGithub className="site-icons" />,
      name: "GitHub",
      link: "https://github.com/Azfar731",
    },
  ];

  return (
    <div className="linksContainer">
      {sites.map((site, idx) => (
        <div
          key={idx}
          className={`linkContainer ${
            idx < sites.length - 1 ? "rightBorder" : ""
          }`}
        >
          <a href={site.link} target="_blank" rel="noopener noreferrer">
            <div className="link">
              {site.icon}
              <span>{site.name}</span>
              <GoArrowUpRight  className="top-right-arrow" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
