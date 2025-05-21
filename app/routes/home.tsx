import { useState, useEffect } from "react";
import Introduction from "../components/Introduction";
import Header from "../layout/Header";
import AboutMe from "~/components/AboutMe";
import RecentWork from "../components/RecentWork";
import Services from "../components/Services";
import SocialLinks from "../components/SocialLinks";
import ScrollingText from "../components/ScrollingText";
import Footer from "../layout/Footer";
import Technologies from "../components/Technologies";
import LoadingScreen from "../components/LoadingScreen";
import personData from "../data/personalData.json";

export default function  Home() {
  const [currentSection, setCurrentSection] = useState("");
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
              <Header currentSection={currentSection} />
              <Technologies />
              <AboutMe aboutMeList={personData.aboutMeList} />

              <RecentWork />
              {/*<Services />
              <ScrollingText text={" - Let's Connect"} /> */}
            </div>
          </div>
          {/*Transparents div id is used to scroll to fixed section,
      as fixed section is not a part of the scrollabel div*/}
          {/* <div
            id="Profiles"
            className="transparentDiv"
          >
            <div className="fixedPart">
              <SocialLinks socialLinks={personData.socialLinks}/>
              <Footer name={personData.name} email={personData.email}/>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
}


