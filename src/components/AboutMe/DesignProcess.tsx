import { t } from "i18next";
import "reactflow/dist/style.css";
// Light
import DesignProcess01 from "../../assets/AboutMe/DesignProcess01.svg";
import DesignProcess02 from "../../assets/AboutMe/DesignProcess02.svg";
import DesignProcess03 from "../../assets/AboutMe/DesignProcess03.svg";
import DesignProcess04 from "../../assets/AboutMe/DesignProcess04.svg";
import DesignProcess05 from "../../assets/AboutMe/DesignProcess05.svg";
import DesignProcess06 from "../../assets/AboutMe/DesignProcess06.svg";
// DARK
import DesignProcessDark01 from "../../assets/AboutMe/DesignProcessDark01.svg";
import DesignProcessDark02 from "../../assets/AboutMe/DesignProcessDark02.svg";
import DesignProcessDark03 from "../../assets/AboutMe/DesignProcessDark03.svg";
import DesignProcessDark04 from "../../assets/AboutMe/DesignProcessDark04.svg";
import DesignProcessDark05 from "../../assets/AboutMe/DesignProcessDark05.svg";
import DesignProcessDark06 from "../../assets/AboutMe/DesignProcessDark06.svg";
import Arrow from "../../assets/AboutMe/Arrow.png";
import DashTitle from "../Global/DashTitle";

const DesignProcess = () => {
  const designProcessData = [
    {
      number: "01",
      image: DesignProcess01,
      imageDark: DesignProcessDark01,
      title: "Client Onboarding & Design Brief",
      desc: "Our first meeting in which I understand your brand and future goals,  Gather detailed information about your vision and preferences. This brief guides the entire creative process.",
    },
    {
      number: "02",
      image: DesignProcess02,
      imageDark: DesignProcessDark02,
      title: "Strategy and Creative Direction",
      desc: "Creative Direction: Develop a strategic plan and creative direction based on the brief. This ensures the brand design aligns with the brand's core vision.",
    },
    {
      number: "03",
      image: DesignProcess03,
      imageDark: DesignProcessDark03,
      title: "Design and Refinements",
      desc: "Create the brand designs and present them for feedback. Then refine if needed based on your inputs.",
    },
    {
      number: "04",
      image: DesignProcess04,
      imageDark: DesignProcessDark04,
      title: "Off-boarding Delivery of The Files",
      desc: "Deliver the finalized branding design files in various formats and complete the project handover.",
    },
    {
      number: "05",
      image: DesignProcess05,
      imageDark: DesignProcessDark05,
      title: "Off-boarding Delivery of The Files",
      desc: "Deliver the finalized branding design files in various formats and complete the project handover.",
    },
    {
      number: "06",
      image: DesignProcess06,
      imageDark: DesignProcessDark06,
      title: "Off-boarding Delivery of The Files",
      desc: "Deliver the finalized branding design files in various formats and complete the project handover.",
    },
  ];

  return (
    <div className="bg-mainLight dark:bg-mainDark h-auto  sm:pt-[72px]">
      <div className="sm:pt-0 items-end pt-[72px] sm:items-start px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="sm:mt-8">
          <DashTitle title={t("Work process")} className="fadeLeft" />

          <div className="flex items-start sm:items-center flex-col sm:flex-row justify-between">
            <h2 className="text-black dark:text-mainLight text-2xl md:text-3xl lg:text-5xl font-medium font-serif fadeLeft">
              {t("My Design Process")}
            </h2>
            <p className="text-[#646464] dark:text-[#AEAEAE] my-2 sm:my-5 w-full sm:w-1/2 fadeRight sm:fadeLeft">
              {t(
                "I have developed a streamlined process that ensures every project runs smoothly from start to finish. Here’s how it works:"
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-0 gap-y-12 relative items-start mt-4 lg:mt-10 lg:pb-0">
          {designProcessData?.slice(0, 4).map((item, index) => (
            <div className="relative cursor-pointer group">
              <div
                className={`flex items-center gap-4 absolute left-1/2 ${
                  index === 3
                    ? "w-fit"
                    : index === 1
                    ? "lg:w-full w-fit"
                    : "sm:w-full w-fit"
                } -translate-x-14 text-center`}
              >
                <div className="min-w-16 text-center w-1/5">
                  <div className="text-[#0000004D] dark:text-[#FFFFFF4D] text-xl font-medium mb-4 group-hover:text-mainDarkColor">
                    {item.number}
                  </div>

                  <img
                    src={item.image}
                    alt="image"
                    className="block dark:hidden  group-hover:!filter-none transition-all duration-500"
                    style={{
                      filter:
                        "grayscale(100%) brightness(0.2) sepia(1) hue-rotate(180deg)",
                    }}
                  />
                  <img
                    src={item.imageDark}
                    alt="image"
                    className="hidden dark:block group-hover:!filter-none transition-all duration-500"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <div
                  className={`${
                    index === 3
                      ? "hidden"
                      : index === 1
                      ? "lg:block hidden"
                      : "sm:block hidden"
                  } w-4/5`}
                >
                  <img
                    src={Arrow}
                    alt="image"
                    className="w-[35svw] lg:w-[95%] mt-16"
                  />
                </div>
              </div>
              <div className="text-center mt-32 text-full sm:w-full lg:w-[90%] fadeBottom">
                <h3
                  className={`font-medium mt-5 mb-2 text-black dark:text-white group-hover:text-mainDarkColor duration-500`}
                >
                  {item.title}
                </h3>

                <p className="text-[#646464] dark:text-[#AEAEAE] text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-0 gap-y-12 relative items-start mt-4 lg:mt-10 lg:pb-0 mb-8">
          <div className="lg:block hidden"></div>
          {designProcessData?.slice(4, 6).map((item, index) => (
            <div className="relative cursor-pointer group">
              <div
                className={`flex items-center gap-4 absolute left-1/2 ${
                  index === 3
                    ? "w-fit"
                    : index === 1
                    ? "lg:w-full w-fit"
                    : "sm:w-full w-fit"
                } -translate-x-14 text-center`}
              >
                <div className="min-w-16 text-center w-1/5">
                  <div className="text-[#0000004D] dark:text-[#FFFFFF4D] text-xl font-medium mb-4 group-hover:text-mainDarkColor">
                    {item.number}
                  </div>

                  <img
                    src={item.image}
                    alt="image"
                    className="block dark:hidden group-hover:!filter-none transition-all duration-500"
                    style={{
                      filter:
                        "grayscale(100%) brightness(0.2) sepia(1) hue-rotate(180deg)",
                    }}
                  />
                  <img
                    src={item.imageDark}
                    alt="image"
                    className="hidden dark:block group-hover:!filter-none transition-all duration-500"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <div
                  className={`${
                    index === 1 ? "hidden" : "hidden sm:block"
                  } w-4/5`}
                >
                  <img
                    src={Arrow}
                    alt="image"
                    className="w-[35svw] lg:w-[95%] mt-16"
                  />
                </div>
              </div>
              <div className="text-center mt-32 text-full sm:w-full lg:w-[90%] fadeBottom">
                <h3
                  className={`font-medium mt-5 mb-2 text-black dark:text-white group-hover:text-mainDarkColor duration-500`}
                >
                  {item.title}
                </h3>

                <p className="text-[#646464] dark:text-[#AEAEAE] text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="lg:block hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
