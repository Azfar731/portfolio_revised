import "./SocialLinks.css";
import { FaStackOverflow } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
export default function SocialLinks({
  socialLinks,
}: {
  socialLinks: { name: string; link: string }[];
}) {
  const sites = [
    {
      icon: <FaStackOverflow className="site-icons" />,
      name: "Stack Overflow",
      link: "https://stackoverflow.com/users/26767975/azfar-razzaq",
    },
    {
      icon: <FaLinkedin className="site-icons" />,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/azfar-razzaq/",
    },
    {
      icon: <FaGithub className="site-icons" />,
      name: "Github",
      link: "https://github.com/Azfar731",
    },
  ];

  const elem = sites.map((site, index) => (
    <div
      key={index}
      className={`linkContainer ${
        index < socialLinks.length - 1 ? "rightBorder" : ""
      }`}
    >
      <a href={site.link} target="_blank">
        <div className="link">
          {site.icon}
          <span>{site.name}</span>
          <GoArrowUpRight size={15} className="top-right-arrow"  />
        </div>
      </a>
    </div>
  ));

  return (
    <div id="SocialLinks">
      <div className="slTopGradient" />
      <div className="linksContainer">{elem}</div>
    </div>
  );
}
