import { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "../components/Global/Navbar/Navbar";
import BeMyClient from "../components/LandingPage/BeMyClient";
import SocialMediaDesignsHeader from "../components/Designs/SocialMediaDesignsHeader";

const SocialMediaDesigns = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFirstSection, setIsFirstSection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const handleModalStateChange = (isOpen) => {
    setIsModalOpen(isOpen);
    if (window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(!isOpen); // Disable scrolling when modal is open
    }
  };

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
        scrollingSpeed={1000}
        onLeave={(_, destination) => {
          if (!isModalOpen) { // Prevent scrolling when modal is open
            setIsFirstSection(destination.index);
            setIsNavbarVisible(false);
            setTimeout(() => {
              setIsNavbarVisible(true);
            }, 1000);
          }
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <SocialMediaDesignsHeader isHeaderVisible={isHeaderVisible} onModalStateChange={handleModalStateChange} />
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

export default SocialMediaDesigns;
