import "./SocialLinks.css";
import arrow from "~/assets/icons8-arrow-32.png";

export default function SocialLinks({
  socialLinks,
}: {
  socialLinks: { name: string; link: string }[];
}) {
  const elem = socialLinks.map((site, index) => (
    <div
      key={site.link}
      className={`linkContainer ${
        index < socialLinks.length - 1 ? "rightBorder" : ""
      }`}
    >
      <a href={site.link} target="_blank">
        <div className="link">
          <div className="linkName">{site.name}</div>
          <img src={arrow} alt="arrow symbol" />
        </div>
      </a>
    </div>
  ));

  return (
    <div id="SocialLinks">
      <div className="slTopGradient" />
      <div className="linksContainer">
        {elem}
      </div>
    </div>
  );
}
