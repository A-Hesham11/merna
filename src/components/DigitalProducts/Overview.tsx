import { t } from "i18next";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { ImFolderOpen } from "react-icons/im";
import { PiArrowsOutSimpleFill } from "react-icons/pi";

const Overview = () => {
  return (
    <section className="bg-mainLight dark:bg-mainDark h-auto md:h-svh sm:pt-[72px]">
      <div className="pt-[72px] sm:pt-0 px-4 sm:px-6 md:px-10 lg:px-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-4 md:mt-8 lg:mt-12">
          <div>
            <h2 className="mt-6 mb-6 text-2xl font-semibold dark:text-mainLight">
              {t("Overview")}
            </h2>
            <p className="text-[#222222] dark:text-mainLight text-lg">
              {t(
                "With over 100+ meticulously designed components, this dashboard UI kit is your go-to resource for building intuitive, sleek, and user - friendly real estate - related websites or applications. Tailored to meet the unique demands of the tech industry, it combines functionality with cutting-edge design trends to help you launch your project with confidence and style."
              )}
            </p>
            <h3 className="mt-6 mb-4 text-lg font-semibold dark:text-mainLight">
              {t("Pages Included:")}
            </h3>
            <ul className="!list-disc ms-8 text-[#222222] dark:text-mainLight text-lg">
              <li>{t("Dashboard Page")}</li>
              <li>{t("Order Page")}</li>
              <li>{t("Property Details")}</li>
              <li>{t("Customers List")}</li>
              <li>{t("Analytics Page")}</li>
              <li>{t("Review Page")}</li>
            </ul>
          </div>
          <div className="mb-12 md:mb-0">
            <h3 className="mt-6 mb-6 text-2xl font-semibold dark:text-mainLight">
              {t("Product Details")}
            </h3>
            <ul>
              <li className="flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                  <FaCalendarDays className="fill-mainColor dark:fill-[#E4797B] w-6 h-6 sm:w-7 sm:h-7" />
                  <h2 className="text-[#222222] dark:text-mainLight text-sm sm:text-base font-semibold">
                    {t("Created")}
                  </h2>
                </div>
                <p className="text-[#222222] dark:text-mainLight text-sm sm:text-base">
                  September 1, 2024
                </p>
              </li>
              <li className="flex items-center justify-between border-t border-t-[#22222226] dark:border-t-[#8080808C] py-4">
                <div className="flex items-center gap-2">
                  <ImFolderOpen className="fill-mainColor dark:fill-[#E4797B] w-6 h-6 sm:w-7 sm:h-7" />
                  <h2 className="text-[#222222] dark:text-mainLight text-sm sm:text-base font-semibold">
                    {t("File Size")}
                  </h2>
                </div>
                <p className="text-[#222222] dark:text-mainLight text-sm sm:text-base">120 MB</p>
              </li>
              <li className="flex items-center justify-between border-t border-t-[#22222226] dark:border-t-[#8080808C] py-4">
                <div className="flex items-center gap-2">
                  <div className="bg-mainColor dark:bg-[#E4797B] w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center">
                    <PiArrowsOutSimpleFill
                      // size={22}
                      className="fill-mainLight w-6 h-6 sm:w-7 sm:h-7"
                    />
                  </div>
                  <h2 className="text-[#222222] dark:text-mainLight text-sm sm:text-base font-semibold">
                    {t("File Dimensions")}
                  </h2>
                </div>
                <p className="text-[#222222] dark:text-mainLight text-sm sm:text-base">
                  1920x1080 px
                </p>
              </li>
              <li className="flex items-center justify-between border-t border-t-[#22222226] dark:border-t-[#8080808C] py-4">
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-mainColor dark:text-[#E4797B] w-6 h-6 sm:w-7 sm:h-7" />
                  <h2 className="text-[#222222] dark:text-mainLight text-sm sm:text-base font-semibold">
                    {t("Compatible App")}
                  </h2>
                </div>
                <p className="text-[#222222] dark:text-mainLight text-sm sm:text-base">
                  Figma, Sketch, Adobe XD
                </p>
              </li>
            </ul>
            <h2 className="mt-6 mb-6 text-2xl font-semibold dark:text-mainLight">
              {t("Product Tags")}
            </h2>
            <ul className="flex flex-wrap items-center gap-2">
              <li className="text-mainColor border border-mainColor dark:text-[#E4797B] dark:border-[#E4797B] rounded-full px-6 py-1">
                Real Estate
              </li>
              <li className="text-mainColor border border-mainColor dark:text-[#E4797B] dark:border-[#E4797B] rounded-full px-6 py-1">
                Startup
              </li>
              <li className="text-mainColor border border-mainColor dark:text-[#E4797B] dark:border-[#E4797B] rounded-full px-6 py-1">
                UI Kit
              </li>
              <li className="text-mainColor border border-mainColor dark:text-[#E4797B] dark:border-[#E4797B] rounded-full px-6 py-1">
                Modern
              </li>
              <li className="text-mainColor border border-mainColor dark:text-[#E4797B] dark:border-[#E4797B] rounded-full px-6 py-1">
                Figma
              </li>
              <li className="text-mainColor border border-mainColor dark:text-[#E4797B] dark:border-[#E4797B] rounded-full px-6 py-1">
                Sketch
              </li>
              <li className="text-mainColor border border-mainColor dark:text-[#E4797B] dark:border-[#E4797B] rounded-full px-6 py-1">
                Adobe XD
              </li>
              <li className="text-mainColor border border-mainColor dark:text-[#E4797B] dark:border-[#E4797B] rounded-full px-6 py-1">
                Responsive
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
