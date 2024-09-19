import { t } from "i18next";
import Header_Img from "../../assets/LandingPage/header.png";

const Header = () => {
  return (
    <section className="bg-[#898989] h-screen pt-[72px] sm:px-6 md:px-10 lg:px-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="relative text-center mt-20">
          <h1 className="text-mainColor font-semi text-5xl sm:text-7xl md:text-[82px] lg:text-8xl font-Neue">
            {t("MERNA NAZMY")}
          </h1>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl !font-whisper">
            {t("Graphic Designer")}
          </p>
        </div>
      </div>
      <div className="flex items-end justify-center lg:justify-between">
        <p className="mb-12 text-white whitespace-nowrap hidden lg:block">
          {t("Graphic Designer | Based in Egypt")}
        </p>
        <div>
          <img
            src={Header_Img}
            alt="header"
            className="w-full"
            style={{ height: "calc(100vh - 72px)" }}
          />
        </div>
        <p className="mb-12 text-white whitespace-nowrap hidden lg:block">
          {t("+6 years experience ")}
        </p>
      </div>
    </section>
  );
};

export default Header;
