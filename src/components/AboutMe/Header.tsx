import { t } from "i18next";
import HeaderImg from "../../assets/AboutMe/Header_img.png";
import HeaderPhoneImg from "../../assets/AboutMe/Header_Phone.png";
import Header_bgLight from "../../assets/AboutMe/header_bgLight.png";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../../utils/axios";
import Loading from "../Global/Loading/Loading";
import DashTitle from "../Global/DashTitle";

const Header = ({ isHeaderVisible }) => {
  const fetchAboutMeHeaderData = async () => {
    try {
      const data = await apiRequest({
        url: "/api/about-page",
        method: "GET",
      });
      return data?.data?.items;
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["About_me"],
    queryFn: fetchAboutMeHeaderData,
  });

  const aboutMeInfo = data?.itemInfo?.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  if (isLoading || isFetching) {
    return (
      <section className="bg-[#898989] h-svh pt-[72px]">
        <Loading />
      </section>
    );
  }
  return (
    <section
      className={`bg-mainLight dark:bg-mainDark h-svh sm:pt-[72px] ${
        isHeaderVisible && "slide-down-home"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-[72px]  h-svh sm:h-auto  sm:pt-0 items-end sm:items-center px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="sm:mt-8 sm:mb-36 fadeLeft">
          <DashTitle title={t("About Me")} />
          <h2 className="text-black dark:text-mainLight text-xl md:text-3xl lg:text-5xl font-medium font-serif">
            {aboutMeInfo?.head}
          </h2>
          <p className="text-mainDark dark:text-mainLight text-base md:text-xl my-2 sm:my-4">
            {aboutMeInfo?.["p-head"]}
          </p>
          <p className="text-[#646464] dark:text-[#AEAEAE] my-2 sm:my-4">
            {aboutMeInfo?.p}
          </p>
        </div>
        <div className="relative z-10 sm:block hidden ml-auto">
          <img
            src={
              data?.itemImage?.lenght ? data?.itemImage?.[0]?.value : HeaderImg
            }
            alt="about us"
            className="w-full"
            style={{ height: "calc(100svh - 72px)" }}
          />
        </div>

        <div className="relative z-10 sm:hidden block">
          <img
            src={
              data?.itemImage?.lenght
                ? data?.itemImage?.[0]?.value
                : HeaderPhoneImg
            }
            alt="about us"
            className="w-[55%] m-auto"
          />
        </div>
      </div>

      <div className="absolute -top-[72px] right-0 sm:block hidden">
        <img src={Header_bgLight} alt="about us" className="w-full h-svh" />
      </div>

      <div className="absolute w-full h-28 sm:h-auto bottom-0 bg-[#BF4F51CC] px-4 sm:px-6 md:px-10 lg:px-20">
        <ul className="lg:flex lg:gap-6 w-4/5 lg:py-11 text-mainLight sm:grid sm:grid-cols-2 sm:py-4 gap-y-3 hidden fadeBottom">
          <li>
            <h2 className="text-2xl">08</h2>
            <p className="lg:text-base text-sm whitespace-nowrap">
              {t("Award winner")}
            </p>
          </li>
          <li>
            <h2 className="text-2xl">1.2k</h2>
            <p className="lg:text-base text-sm whitespace-nowrap">
              {t("Worldwide client")}
            </p>
          </li>
          <li>
            <h2 className="text-2xl">350</h2>
            <p className="lg:text-base text-sm whitespace-nowrap">
              {t("Project done successfully")}
            </p>
          </li>
          <li>
            <h2 className="text-2xl">3.5k</h2>
            <p className="lg:text-base text-sm whitespace-nowrap">
              {t("Job done successfully")}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
