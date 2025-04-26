import "./Introduction.css";
import Nav from "./Nav";
import IntroContent from "./IntroContent";

export default function Introduction({
  name,
  introContent,
}: {
  name: string;
  introContent: {
    jobTitle: string;
    sellingPoint: string;
    missionStatement: string;
  };
}) {
  return (
    <div id="intro">
      <div id="introTopLeftGradient" className="radialGradient"></div>
      <div id="introRightGradient" className="radialGradient"></div>
      <Nav name={name} />
      <IntroContent introContent={introContent} />
    </div>
  );
}
