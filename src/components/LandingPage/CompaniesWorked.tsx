import { useEffect, useState } from "react";
import CompaniesWorked_1 from "../../assets/LandingPage/CompaniesWorked_1.svg";
import { t } from "i18next";
import { apiRequest } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";

const CompaniesWorked = () => {
  const [activeItem, setActiveItem] = useState("All Partners");
  const darkMode = localStorage.getItem("darkMode");
  const is_theme = darkMode === "true" ? 0 : 1;

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const fetchCompaniesWorkedData = async () => {
    try {
      const data = await apiRequest({
        url: `/api/all-partners?is_thme=${is_theme}`,
        method: "GET",
      });
      return data?.data?.items;
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  const { data } = useQuery({
    queryKey: ["CompaniesWorked"],
    queryFn: fetchCompaniesWorkedData,
  });

  console.log("🚀 ~ CompaniesWorked ~ data:", data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className={`bg-mainLight dark:bg-mainDark sm:pt-[72px] ${
        data?.all?.length > 18 && activeItem === "All Partners"
          ? "h-svh "
          : "h-svh"
      }`}
    >
      <div className={`pt-[72px] sm:pt-0 px-4 sm:px-6 md:px-10 lg:px-20`}>
        <div className="mt-8 sm:mt-4 text-center zoomIn">
          <h2 className="text-black dark:text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium font-serif">
            {t("Companies i’ve worked with")}
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 text-center items-center text-[15px] w-full md::w-[80%] lg:w-2/3 m-auto mt-6 mb-6">
            {[
              "All Partners",
              "Freelance Partners",
              "Art Media’s partners",
              "Menaboom’s partners",
            ].map((item) => (
              <li
                key={item}
                className={`cursor-pointer w-fit m-auto ${
                  activeItem === item
                    ? "text-mainColor dark:text-mainDarkColor border-b border-mainColor dark:border-mainDarkColor duration-300"
                    : "text-[#BBBCBF] hover:text-mainDarkColor hover:border-b border-mainDarkColor"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="zoomIn">
          {activeItem === "All Partners" && (
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-6 gap-y-2 sm:gap-y-5 gap-x-4 sm:gap-8 items-center md:pb-16 pt-5">
              {data?.all?.map((item, index) => (
                <img
                  src={item.value || CompaniesWorked_1}
                  key={index}
                  alt="Companies Worked"
                  className="w-3/4 lg:w-1/2 m-auto hover:scale-125 duration-500 cursor-pointer"
                />
              ))}
            </div>
          )}
        </div>
        <div className="zoomIn">
          {activeItem === "Freelance Partners" && (
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-8 items-center pt-10">
              {data?.freelanceImages?.map((item, index) => (
                <img
                  src={item.value || CompaniesWorked_1}
                  key={index}
                  alt="Companies Worked"
                  className="w-3/4 lg:w-1/2 m-auto hover:scale-125 duration-500 cursor-pointer"
                />
              ))}
            </div>
          )}
        </div>
        <div className="zoomIn">
          {activeItem === "Art Media’s partners" && (
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-8 items-center pt-10">
              {data?.artImages?.map((item, index) => (
                <img
                  src={item.value || CompaniesWorked_1}
                  key={index}
                  alt="Companies Worked"
                  className="w-3/4 lg:w-1/2 m-auto hover:scale-125 duration-500 cursor-pointer"
                />
              ))}
            </div>
          )}
        </div>
        <div className="zoomIn">
          {activeItem === "Menaboom’s partners" && (
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-8 items-center pt-10">
              {data?.menaboomImages?.map((item, index) => (
                <img
                  src={item.value || CompaniesWorked_1}
                  key={index}
                  alt="Companies Worked"
                  className="w-3/4 lg:w-1/2 m-auto hover:scale-125 duration-500 cursor-pointer"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompaniesWorked;
