import "./SocialLinks.css";
import arrow from "/src/assets/icons8-arrow-32.png";
export default function SocialLinks({
  socialLinks,
}: {
  socialLinks: { name: string; link: string }[];
}) {
  const elem = socialLinks.map((site, index) => {
    return (
      <div
        key={site.link}
        className={` linkContainer ${
          index < socialLinks.length - 1 ? "rightBorder" : ""
        }`}
      >
        <a href={site.link} target="_blank">
          <div className={`link `}>
            <div className="linkName">{site.name}</div>
            <img src={arrow} alt="arrow symbol" />
          </div>
        </a>
      </div>
    );
  });

  const styles = {
    width: `${socialLinks.length * 20}%`,
    margin: "auto",
    maxWidth: "80%",
    height: "7rem",
    borderRadius: "5rem",
    // border: "1px solid rgba(255, 255, 255, 0.3)" ,
    boxShadow: " 0 0 0.1rem 0.1rem rgba(255, 255, 255, 0.3)",

    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  };

  return (
    <div id="SocialLinks">
      <div className="slTopGradient"></div>
      <div className="linksContainer" style={styles}>
        {elem}
      </div>
    </div>
  );
}
