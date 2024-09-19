import { useState } from "react";
import AboutUs from "../components/LandingPage/AboutUs";
import Header from "../components/LandingPage/Header";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "../components/Global/Navbar/Navbar";
import WhatWeDo from "../components/LandingPage/WhatWeDo";

const Home = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFirstSection, setIsFirstSection] = useState(0);
  return (
    <div className="font-serif relative">
      <div
        className={`${
          isNavbarVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        <Navbar isFirstSection={isFirstSection} />
      </div>
      <ReactFullpage
        // licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        onLeave={(destination) => {
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
                <Header />
              </div>
              <div className="section">
                <AboutUs />
              </div>
              <div className="section">
                <WhatWeDo />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
        credits={{ enabled: false }}
      />
    </div>
  );
};

export default Home;
