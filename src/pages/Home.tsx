// import { useEffect, useRef, useState } from "react";
// import AboutUs from "../components/LandingPage/AboutUs";
// import Header from "../components/LandingPage/Header";
// import ReactFullpage from "@fullpage/react-fullpage";
// import Navbar from "../components/Global/Navbar/Navbar";
// import WhatWeDo from "../components/LandingPage/WhatWeDo";
// import Portfolio from "../components/LandingPage/Portfolio";
// import CompaniesWorked from "../components/LandingPage/CompaniesWorked";
// import DigitalProducts from "../components/LandingPage/DigitalProducts";
// import BeMyClient from "../components/LandingPage/BeMyClient";
// declare global {
//   interface Window {
//     fullpage_api: {
//       moveTo: (section: number) => void;
//     };
//   }
// }

// const Home = () => {
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//   const [isFirstSection, setIsFirstSection] = useState(0);

//   useEffect(() => {
//     if (window.fullpage_api) {
//       setTimeout(() => {
//         window.fullpage_api.moveTo(1);
//       }, 0);
//     }
//   }, []);

//   return (
//     <div className="font-serif relative">
//       <div
//         className={`${
//           isNavbarVisible ? "opacity-100 active" : "opacity-0"
//         } section transition-opacity duration-100`}
//       >
//         <Navbar isFirstSection={isFirstSection === 0} />
//       </div>
//       <ReactFullpage
//         // licenseKey={"YOUR_KEY_HERE"}
//         scrollingSpeed={1000}
//         onLeave={(_, destination) => {
//           setIsFirstSection(destination.index);
//           setIsNavbarVisible(false);
//           setTimeout(() => {
//             setIsNavbarVisible(true);
//           }, 1000);
//         }}
//         render={(state) => {
//           return (
//             <ReactFullpage.Wrapper>
//               <div className={`section ${state.active === 0 ? 'active' : ''}`}>
//                 <Header />
//               </div>
//               <div className={`section ${state.active === 0 ? 'active' : ''}`}>
//                 <AboutUs />
//               </div>
//               <div className={`section ${state.active === 0 ? 'active' : ''}`}>
//                 <WhatWeDo />
//               </div>
//               <div className={`section ${state.active === 0 ? 'active' : ''}`}>
//                 <Portfolio />
//               </div>
//               <div className={`section ${state.active === 0 ? 'active' : ''}`}>
//                 <CompaniesWorked/>
//               </div>
//               <div className={`section ${state.active === 0 ? 'active' : ''}`}>
//                 <DigitalProducts />
//               </div>
//               <div className="section scrollbar-none">
//                 <BeMyClient />
//               </div>
//             </ReactFullpage.Wrapper>
//           );
//         }}
//         credits={{ enabled: false }}
//       />
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import AboutUs from "../components/LandingPage/AboutUs";
import Header from "../components/LandingPage/Header";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "../components/Global/Navbar/Navbar";
import WhatWeDo from "../components/LandingPage/WhatWeDo";
import Portfolio from "../components/LandingPage/Portfolio";
import CompaniesWorked from "../components/LandingPage/CompaniesWorked";
import DigitalProducts from "../components/LandingPage/DigitalProducts";
import BeMyClient from "../components/LandingPage/BeMyClient";
declare global {
  interface Window {
    fullpage_api: {
      moveTo: (section: number) => void;
    };
  }
}

const Home = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFirstSection, setIsFirstSection] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState<Boolean>(false);

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
              <div className={`section `}>
                <Header isHeaderVisible={isHeaderVisible} />
              </div>
              <div className={`section `}>
                <AboutUs />
              </div>
              <div className={`section `}>
                <WhatWeDo />
              </div>
              <div className={`section `}>
                <Portfolio />
              </div>
              <div className={`section `}>
                <CompaniesWorked />
              </div>
              <div className={`section `}>
                <DigitalProducts />
              </div>
              <div className="section scrollbar-none">
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

export default Home;
