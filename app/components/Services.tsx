import "./Services.css";
import ServiceCard from "./ServiceCard";
import WhatsAppButton from "~/common/WhatsAppButton";
import CircularText from "./CircularText";

export default function Services() {
  const cardData = [
    {
      number: "01",
      title1: "FRONT-END",
      title2: "DEVELOPMENT",
      description:
        "Got a design ready in Figma, Sketch, or any other tool? I’ll transform your vision into a blazing-fast, responsive React application—clean code, intuitive user experiences, and the latest security best practices all rolled into one.",
    },
    {
      number: "02",
      title1: "FULL-STACK",
      title2: "DEVELOPMENT",
      description:
        "Looking for more than just a pretty front end? From database architecture to server-side logic, I deliver end-to-end solutions built for scalability, performance, and airtight cybersecurity—so you can focus on growth without worrying about vulnerabilities.",
    },
    {
      number: "03",
      title1: "WEB3",
      title2: "DEVELOPMENT",
      description:
        "Ready to tap into the future of the web? I specialize in integrating blockchain functionality into your applications—enabling decentralized, transparent, and secure solutions that put you at the forefront of innovation.",
    },
  ];
  const serviceCards = cardData.map((card) => {
    return (
      <ServiceCard
        key={card.number}
        number={card.number}
        title1={card.title1}
        title2={card.title2}
        description={card.description}
      />
    );
  });
  return (
    <div id="Services">
      <div id="servicesLogo">
        <CircularText text={` React Developer •`} />
      </div>
      <div id="topDiv" className="radialGradient"></div>
      <div id="bottomLeftDiv" className="radialGradient"></div>
      <div id="bottomRightDiv" className="radialGradient"></div>
      <div id="servicesContent">
        <span className="smallText">HOW CAN I HELP?</span>
        <h2 id="serviceTitle" className="h2Titles">
          Services
        </h2>
        <div id="servicesCardContainer">{serviceCards}</div>
        <WhatsAppButton />
      </div>
    </div>
  );
}
