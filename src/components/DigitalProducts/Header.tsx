import { t } from "i18next";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import DigitalProducts_1 from "../../assets/DigitalProducts/DigitalProducts_1.png";
import DigitalProducts_2 from "../../assets/DigitalProducts/DigitalProducts_2.png";
import DigitalProducts_3 from "../../assets/DigitalProducts/DigitalProducts_3.png";
import DigitalProductsPhone_1 from "../../assets/DigitalProducts/DigitalProductsPhone_1.png";
import DigitalProductsPhone_2 from "../../assets/DigitalProducts/DigitalProductsPhone_2.png";
import DashTitle from "../Global/DashTitle";

const Header = () => {
  return (
    <section className="bg-mainLight dark:bg-mainDark md:h-svh h-auto sm:pt-[72px] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-[72px] sm:pt-0 items-center px-4 sm:px-6 md:px-10 lg:px-20 gap-y-8">
        <div className="fadeLeft">
          <DashTitle title={t("About Me")} />
          <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl font-medium font-serif mt-1.5">
            {t("Ignite Your Creativity with Premium Designs")}
          </h2>
          <p className="text-black dark:text-white my-2 sm:my-4">
            {t(
              "Discover, explore, and purchase the finest digital design assets that is tailored for your needs, all within our platform."
            )}
          </p>
          <Link
            to="/digitalProducts/details"
            className="flex items-center gap-1"
          >
            <p className="text-mainColor dark:text-white">{t("SHOP NOW")}</p>
            <FiArrowUpRight className="text-mainColor dark:text-white" />
          </Link>
        </div>
        <div className="relative z-10 m-auto hidden md:block fadeRight">
          <div className="rounded-2xl overflow-hidden mb-4">
            <img
              src={DigitalProducts_1}
              alt="about us"
              className="h-full hover:scale-95 duration-500 cursor-pointer"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={DigitalProducts_2}
                alt="about us"
                className="h-full hover:scale-110 duration-500 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={DigitalProducts_3}
                  alt="about us"
                  className="h-full hover:scale-110 duration-500 cursor-pointer"
                />
              </div>
              <div className="bg-mainColor dark:bg-[#E4797B] text-white rounded-2xl overflow-hidden flex flex-col px-5 justify-center h-24 hover:scale-110 duration-500 cursor-pointer">
                <h2 className="text-xl lg:text-2xl font-medium">1,000+</h2>
                <p className="text-sm lg:text-base">
                  {t("Digital Design Assets")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 md:hidden block mb-12">
          <div className="rounded-2xl overflow-hidden mb-4">
            <img
              src={DigitalProductsPhone_1}
              alt="about us"
              className="w-full h-60 ms:h-72"
            />
          </div>
          <div className="bg-mainColor dark:bg-[#E4797B] text-white rounded-2xl overflow-hidden flex flex-col px-5 justify-center h-24 mb-5">
            <h2 className="text-2xl font-medium">1,000+</h2>
            <p>{t("Digital Design Assets")}</p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={DigitalProductsPhone_2}
              alt="about us"
              className="w-full h-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
