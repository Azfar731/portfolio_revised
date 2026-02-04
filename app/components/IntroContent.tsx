import "./IntroContent.css";
import WhatsAppButton from "../common/WhatsAppButton";
import portfolioImg from "/portfolio_img.jpeg";

export default function IntroContent({
  introContent,
}: {
  introContent: {
    jobTitle: string;
    sellingPoint: string;
    missionStatement: string;
  };
}) {
  return (
    <div className="introContainer">
      <div id="profileImageContainer">
        <img src={portfolioImg} alt="Profile" />
      </div>
      <div id="intro-Content">
        <h2 className="smallText">{introContent.jobTitle}</h2>
        <h1>{introContent.sellingPoint}</h1>
        <p>{introContent.missionStatement}</p>
        <WhatsAppButton />
      </div>
    </div>
  );
}
