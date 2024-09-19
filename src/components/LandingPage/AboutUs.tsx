import { t } from "i18next";
import { BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import AboutUs_img from "../../assets/LandingPage/AbouUs.png";

const AboutUs = () => {
  return (
    <section className="bg-mainLight dark:bg-mainDark h-screen pt-[72px]">
      <div className="grid grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mt-24">
          <div className="flex items-center">
            <BsDash size={50} className="fill-mainColor w-fit" />
            <p className="text-black dark:text-white -ms-1">{t("About Us")}</p>
          </div>
          <h2 className="text-black dark:text-white text-5xl font-medium font-serif">
            {t("Crafting Brilliance, Inspiring Creativity")}
          </h2>
          <p className="text-black dark:text-white my-4">
            {t(
              "with more than 6 years of experience focused on design, I have a lot of expertise and have been trusted by more than 30 companiesBut I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a cete account of the system "
            )}
          </p>
          <Link to="/" className="flex items-center gap-1">
            <p className="text-mainColor dark:text-white">{t("Know More")}</p>
            <FiArrowUpRight className="text-mainColor dark:text-white" />
          </Link>
        </div>
        <div className="relative z-10">
          <img
            src={AboutUs_img}
            alt="about us"
            className="w-full"
            style={{ height: "calc(100vh - 72px)" }}
          />
        </div>
      </div>

      <div className="absolute w-full bottom-20 bg-mainColor ">
        <p className="px-4 sm:px-6 md:px-10 lg:px-20 text-9xl text-white font-whisper">
          {t("Merna Nazmy")}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
