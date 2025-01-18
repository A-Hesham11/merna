import { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "../components/Global/Navbar/Navbar";
import BeMyClient from "../components/LandingPage/BeMyClient";

const ContactUs = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFirstSection, setIsFirstSection] = useState(0);

  useEffect(() => {
    if (window.fullpage_api) {
      setTimeout(() => {
        window.fullpage_api.moveTo(1);
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

export default ContactUs;
