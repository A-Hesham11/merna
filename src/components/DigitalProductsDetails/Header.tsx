import { useState } from "react";
import Details_1 from "../../assets/DigitalProductsDetails/Details_1.png";
import Details_2 from "../../assets/DigitalProductsDetails/Details_2.png";
import Details_3 from "../../assets/DigitalProductsDetails/Details_3.png";
import Details_4 from "../../assets/DigitalProductsDetails/Details_4.png";
import { t } from "i18next";
import { ImFolderOpen } from "react-icons/im";
import { PiArrowsOutSimpleFill } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaCalendarDays } from "react-icons/fa6";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState();
  const DigitalProducts = [
    { image: Details_1 },
    { image: Details_2 },
    { image: Details_3 },
    { image: Details_4 },
  ];

  const [selectedImage, setSelectedImage] = useState<any>(
    DigitalProducts[0].image
  );

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const totalSlides = 4;

  const getDashClass = (index) => {
    return index === currentIndex
      ? "bg-mainColor dark:bg-[#E4797B]"
      : "bg-[#DADBDC]";
  };

  return (
    <section className="bg-mainLight dark:bg-mainDark h-auto md:h-svh sm:pt-[72px]">
      <div className="pt-[72px] sm:pt-0 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-4 md:mt-8 lg:mt-12 ">
          <div className="hidden md:flex gap-x-4">
            <div className="grid grid-cols-1 gap-y-3">
              {DigitalProducts?.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.image}
                    alt={`Product ${index + 1}`}
                    className="cursor-pointer h-full rounded-2xl overflow-hidden"
                    onClick={() => setSelectedImage(item?.image)}
                  />
                </div>
              ))}
            </div>
            <div>
              <img
                src={selectedImage}
                alt="Selected"
                className="h-full rounded-2xl overflow-hidden"
              />
            </div>
          </div>
          <div className="mt-8 flex md:hidden">
            <Swiper
              onSlideChange={handleSlideChange}
              slidesPerView={1}
              spaceBetween={10}
              loop={false}
            >
              {DigitalProducts?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="h-72 sm:h-80 rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt="Portfolio"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex md:hidden justify-center my-6 space-x-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`w-10 h-1 rounded-full ${getDashClass(index)}`}
              ></div>
            ))}
          </div>
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl font-semibold dark:text-mainLight">
              {t("Branding  Board Template")}
            </h2>
            <p className="text-[#222222] dark:text-mainLight font-semibold my-6">
              {t(
                "HARMONY Brand Guidelines for Canva, Illustrator, and Indesign"
              )}
            </p>
            <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-8">
              <p className="text-2xl sm:text-4xl text-[#107D2B]">$16.00</p>
              <span className="text-lg sm:text-2xl text-[#838287]">$16.00</span>
              <p className="bg-[#107D2B] text-white px-4 rounded-full py-1 font-medium">
                30% off
              </p>
            </div>
            <h3 className="mt-6 mb-6 text-2xl font-semibold dark:text-mainLight">
              {t("Product Details")}
            </h3>
            <ul>
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
                  Photoshop, illustrator, Adobe XD
                </p>
              </li>
            </ul>
            <button className="bg-mainColor dark:bg-[#E4797B] w-full py-4 text-mainLight text-xl font-medium rounded-2xl mt-4">
              {t("Purchase Now")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
