import "./IntroContent.css";
import WhatsAppButton from "~/common/WhatsAppButton";

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
      <div id="profileImageContainer"></div>
      <div id="intro-Content">
        <h2 className="smallText">{introContent.jobTitle}</h2>
        <h1>{introContent.sellingPoint}</h1>
        <p>{introContent.missionStatement}</p>
        <WhatsAppButton />
      </div>
    </div>
  );
}
