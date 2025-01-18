import { useRef, useState } from "react";
import BrandingDesigns_1 from "../../assets/BrandingDesigns/BrandingDesigns_1.png";
import BrandingDesigns_2 from "../../assets/BrandingDesigns/BrandingDesigns_2.png";
import BrandingDesigns_3 from "../../assets/BrandingDesigns/BrandingDesigns_3.png";
import BrandingDesigns_4 from "../../assets/BrandingDesigns/BrandingDesigns_4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import DashTitle from "../Global/DashTitle";

const BrandingDesignsHeader = () => {
  const [activeItem, setActiveItem] = useState("All");
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const DigitalProductData = [
    {
      image: BrandingDesigns_1,
      title: "Branding Board Template..",
      price: "Free",
      desc_1: "Beanding",
      desc_2: "Print Template",
    },
    {
      image: BrandingDesigns_2,
      title: "Social media designs",
      price: "8.00",
      desc_1: "Social media designs",
      desc_2: "+100 Posts",
      unit: "$",
    },
    {
      image: BrandingDesigns_3,
      title: "Branding Board Template..",
      price: "Free",
      desc_1: "Beanding",
      desc_2: "Print Template",
    },
    {
      image: BrandingDesigns_4,
      title: "Social media designs",
      price: "8.00",
      desc_1: "Social media designs",
      desc_2: "+100 Posts",
      unit: "$",
    },
    {
      image: BrandingDesigns_1,
      title: "Branding Board Template..",
      price: "Free",
      desc_1: "Beanding",
      desc_2: "Print Template",
    },
    {
      image: BrandingDesigns_3,
      title: "Branding Board Template..",
      price: "Free",
      desc_1: "Beanding",
      desc_2: "Print Template",
    },
  ];

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <section className="bg-mainLight dark:bg-mainDark h-svh sm:pt-[72px]">
      <div className="pt-[72px] sm:pt-0 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mt-4 sm:mt-12 fadeLeft">
          <DashTitle title={t("Branding Designs")} />

          <div className="grid grid-cols-10 items-center">
            <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-medium font-serif col-span-8 fadeLeft">
              {t("Latest Projects i’ve worked on")}
            </h2>
            <div className="flex items-center justify-end gap-3 col-span-2">
              <div
                className={`border border-[#D6D6D6] w-14 h-9 flex items-center justify-center cursor-pointer  group rounded-lg duration-500 hover:border-mainDarkColor`}
                onClick={handlePrevSlide}
              >
                <HiOutlineArrowSmLeft
                  size={30}
                  className="text-[#D6D6D6]  group-hover:text-mainDarkColor group-hover:-translate-x-[0.3rem] transition-transform duration-500"
                />
              </div>
              <div
                className={`border border-[#D6D6D6] w-14 h-9 flex items-center justify-center cursor-pointer group rounded-lg duration-500 ${"hover:border-mainDarkColor"}`}
                onClick={handleNextSlide}
              >
                <HiOutlineArrowSmRight
                  size={30}
                  className="text-[#D6D6D6]  group-hover:text-mainDarkColor group-hover:translate-x-1 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap gap-5 font-bold text-sm mt-6 mb-8 fadeLeft">
          {[
            "All",
            "Social Media Designs",
            "Branding",
            "Fonts & Typography",
            "Graphic Design ",
          ].map((item) => (
            <li
              key={item}
              className={`cursor-pointer w-fit ${
                activeItem === item
                  ? "text-mainColor dark:text-mainDarkColor border-b-2 border-mainColor dark:border-mainDarkColor duration-300"
                  : "text-[#BBBCBF] hover:text-mainDarkColor hover:border-b border-mainDarkColor"
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="fadeRight">
          {activeItem === "All" && (
            <div className="swiper-container mt-8">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                  786: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                }}
                loop={true}
              >
                {DigitalProductData?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="h-72 sm:h-[25rem] rounded-2xl relative overflow-hidden group cursor-pointer"
                      onClick={() => navigate("/ProductDetails")}
                    >
                      <img
                        src={item.image}
                        alt="Portfolio"
                        className="h-full w-full"
                      />
                      <div className="absolute top-full left-full right-full bottom-full group-hover:left-0 group-hover:top-0 group-hover:right-0 group-hover:bottom-0 duration-500">
                        <div className="relative">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/4909/61e8/dbab7e947a53e52638a2f72e596d105e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o1DOChtmCxYzi7I~0PXK8DWXdmD5BjPb~aoKy2EXdxpJRd~Syf6R6IaspmkGZL8Q2V32SqveEAjb5ybRN~ecJ8vLdjfWMWywRNMSq0-VYF4gU1Rx~2JNncwkU0B7iSm~oRGbJCL9qh~Oh7oNxEZ3Ds4f6pR~RRTu51mIkkSqBAyrpzvibtFsN-H4uj3yIM4yq7iIbnjIcrJZVB9eT6iaYm6CIexE8yAdwSkx5TtUvEsAjE~d8atvWavRgQqvaT-ZUVcKcqqDmltbfrVZ1Je2byBp~V7oSR67B2dof6OYBWgb7XJ1aATlvfgIXUCrNf~2NdiVrkt~P6DX5uAFNERZBg__"
                            alt="Figma Image"
                            className="w-full h-72 sm:h-[25rem] object-cover"
                          />
                          <div className="absolute top-0 left-0 w-full h-72 sm:h-[25rem]">
                            <div className="flex items-center justify-center flex-col bg-[#00000094] h-full">
                              <h2 className="text-2xl font-medium text-white">
                                {t("Fashion House Social media ")}
                              </h2>
                              <p className="text-white">
                                {t("Social media design")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandingDesignsHeader;
