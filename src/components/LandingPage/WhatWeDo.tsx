import { t } from "i18next";
import { BsDash } from "react-icons/bs";
import WhatWeDo_1 from "../../assets/LandingPage/WhatWeDo_1.png";
import WhatWeDo_2 from "../../assets/LandingPage/WhatWeDo_2.png";
import { useState } from "react";

const WhatWeDo = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <section className="bg-mainLight dark:bg-mainDark h-screen pt-[72px] flex items-center">
      <div className="grid grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-20 items-center">
        <div className="">
          <div className="flex items-center">
            <BsDash size={50} className="fill-mainColor w-fit" />
            <p className="text-black dark:text-white -ms-1">
              {t("What we do")}
            </p>
          </div>
          {isActive ? (
            <h2 className={`text-black dark:text-white text-5xl font-medium font-serif`}>
              <span className="text-mainColor">01.</span>{" "}
              {t("Brand Identity & Art Direction")}
            </h2>
          ) : (
            <h2 className={`text-black dark:text-white text-5xl font-medium font-serif`}>
              <span className="text-mainColor">02.</span>{" "}
              {t("Social Media Graphic Design")}
            </h2>
          )}
        </div>
        <div className="flex gap-3">
          <div onClick={() => setIsActive(true)}>
            <img src={WhatWeDo_1} alt="What we do" className="w-40" />
          </div>
          <div onClick={() => setIsActive(false)}>
            <img src={WhatWeDo_2} alt="What we do" className="w-96" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
