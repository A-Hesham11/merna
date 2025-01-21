import { t } from "i18next";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import AboutUs_img from "../../assets/LandingPage/AbouUs.png";
import AbouUs_phone_img from "../../assets/LandingPage/AbouUs_phone.png";
import { apiRequest } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import DashTitle from "../Global/DashTitle";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const fetchAboutUsData = async () => {
    try {
      const data = await apiRequest({
        url: "/api/about",
        method: "GET",
      });
      return data?.data?.about;
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  const { data } = useQuery({
    queryKey: ["about"],
    queryFn: fetchAboutUsData,
  });

  const aboutInfo = data?.aboutInfo?.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  return (
    <section className="bg-mainLight dark:bg-mainDark h-svh sm:pt-[72px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-[72px] h-svh sm:h-auto  sm:pt-0 sm:items-center px-4 sm:px-6 md:px-10 lg:px-20 items-end">
        <div className="sm:mb-44 fadeLeft">
          <DashTitle title={aboutInfo?.["object-head"]} />

          <h2 className="text-black dark:text-white text-2xl md:text-4xl lg:text-5xl font-medium">
            {aboutInfo?.["object-h"]}
          </h2>
          <p className="text-black dark:text-white my-2 sm:my-4">
            {aboutInfo?.["object-p"]}
          </p>
          <Link to="/aboutMe" className="flex items-center gap-1 group">
            <p className="text-mainColor dark:text-white group-hover:!text-mainDarkColor duration-500 ">
              {t("Know More")}
            </p>
            <FiArrowUpRight className="text-mainColor dark:text-white group-hover:!text-mainDarkColor duration-500 " />
          </Link>
        </div>

        <div className="relative z-10 sm:block hidden">
          <img
            src={data?.aboutImage?.[0].value || AboutUs_img}
            alt="about us"
            className="w-full"
            style={{ height: "calc(100svh - 72px)" }}
          />
        </div>

        <div className="relative z-10 sm:hidden block">
          <img
            src={data?.aboutImage?.[0].value || AbouUs_phone_img}
            alt="about us"
            className="m-auto h-[55vw] min-h-40 max-h-80 w-auto"
          />
        </div>
      </div>

      <div className="absolute w-full h-28 sm:h-32 bottom-0 sm:bottom-20 bg-[#BF4F51CC] flex items-center">
        <q className="px-4 sm:px-6 md:px-10 lg:px-20 py-4 hidden sm:block text-[20px] lg:text-[21px] text-white relative z-30 sm:opacity-100 opacity-0 w-3/5 md:w-1/2 fadeLeft">
          {aboutInfo?.["object-h"]?.split(" ").slice(0, 23).join(" ")}
        </q>
      </div>
    </section>
  );
};

export default AboutUs;

// antrilla-font
