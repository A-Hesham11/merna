import { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "../components/Global/Navbar/Navbar";
import CompaniesWorked from "../components/LandingPage/CompaniesWorked";
import BeMyClient from "../components/LandingPage/BeMyClient";
import Header from "../components/AboutMe/Header";
import WhyChooseMe from "../components/AboutMe/WhyChooseMe";
import DesignProcess from "../components/AboutMe/DesignProcess";

const AboutMe = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFirstSection, setIsFirstSection] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    if (window.fullpage_api) {
      setTimeout(() => {
        window.fullpage_api.moveTo(1);
        setIsHeaderVisible(true);
      }, 0);
    }
  }, []);

  return (
    <div className="font-serif relative">
      <div
        className={`${
          isNavbarVisible ? "opacity-100 active" : "opacity-0"
        } section transition-opacity duration-100`}
      >
        <Navbar isFirstSection={isFirstSection === 0} />
      </div>
      <ReactFullpage
        // licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        onLeave={(_, destination) => {
          setIsFirstSection(destination.index);
          setIsNavbarVisible(false);
          setTimeout(() => {
            setIsNavbarVisible(true);
          }, 1000);
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Header isHeaderVisible={isHeaderVisible} />
              </div>
              <div className="section">
                <WhyChooseMe />
              </div>
              <div className="section">
                <DesignProcess />
              </div>
              <div className="section">
                <CompaniesWorked />
              </div>
              <div className="section">
                <BeMyClient />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
        credits={{ enabled: false }}
      />
    </div>
  );
};

export default AboutMe;
