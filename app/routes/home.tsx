import { useState } from "react";
import Introduction from "../components/Introduction";
import Header from "../layout/Header";
import AboutMe from "../components/AboutMe";
import RecentWork from "../components/RecentWork";
import Services from "../components/Services";
import SocialLinks from "../components/SocialLinks";
import ScrollingText from "../components/ScrollingText";
import Footer from "../layout/Footer";
import Technologies from "../components/Technologies";
import LoadingScreen from "../components/LoadingScreen";
import personData from "../data/personalData.json";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Full Stack Web Developer - Azfar Razzaq" },
    {
      name: "description",
      content:
        "Hi, I’m a full-stack Web developer building fast, secure and scalable web apps.",
    },
    {
      name: "keywords",
      content:
        "Azfar Razzaq, full stack developer, web developer, React,React.js, Node.js, React Router, React Router v7, TypeScript, Next.js, Express.js, front-end development, full-stack development, secure web development, cybersecurity, secure coding, API development, responsive design, performance optimization, scalable architecture, freelance developer, agency-level web development",
    },
    { name: "author", content: "Khalil & Khalil" },
  ];
}

export default function Home() {
  const [hasDataLoaded, setHasDataLoaded] = useState(true);

  return (
    <>
      {!hasDataLoaded ? (
        <LoadingScreen />
      ) : (
        <div className="appPage">
          <div className="scrollablePart">
            <Introduction
              name={personData.name}
              introContent={personData.introContent}
            />
            <div id="infoSection">
              <Header />
              <Technologies />
              <AboutMe aboutMeList={personData.aboutMeList} />

              <RecentWork />
              <Services />
              <ScrollingText text={" - Let's Connect"} />
            </div>
          </div>
          {/*Transparents div id is used to scroll to fixed section,
      as fixed section is not a part of the scrollabel div*/}
          <div id="ContactSection" className="transparentDiv">
            <div className="fixedPart">
              <SocialLinks />
              <Footer name={personData.name} email={personData.email} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
