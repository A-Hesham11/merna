import { t } from "i18next";
import WhatWeDo_1 from "../../assets/LandingPage/WhatWeDo_1.png";
import WhatWeDo_2 from "../../assets/LandingPage/WhatWeDo_2.png";
import WhatWeDo_Phone_1 from "../../assets/LandingPage/WhatWeDo_phone_1.png";
import WhatWeDo_Phone_2 from "../../assets/LandingPage/WhatWeDo_phone_2.png";
import { useRef, useState } from "react";
import { apiRequest } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import DashTitle from "../Global/DashTitle";

const fetchWhatWeDoData = async () => {
  try {
    const data = await apiRequest({
      url: "/api/weDo",
      method: "GET",
    });
    return data?.data?.items;
  } catch (error) {
    console.error("Error fetching items:", error.message);
  }
};

const WhatWeDo = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(true);
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["WhatWeDo"],
    queryFn: fetchWhatWeDoData,
  });

  const itemInfo = data?.itemInfo?.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

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
    <section className="bg-mainLight dark:bg-mainDark h-svh pt-[72px] flex items-center flex-col md:flex-row justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-2 px-4 sm:px-6 md:px-10 lg:px-20 items-center justify-between w-full">
        <div className="fadeLeft">
          <DashTitle title={itemInfo?.head} />
          <div className="hidden sm:block">
            {hovered ? (
              <h2
                className={`text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-serif`}
              >
                <span className="text-mainColor dark:text-mainDarkColor">
                  01.
                </span>{" "}
                {itemInfo?.title}
              </h2>
            ) : (
              <h2
                className={`text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-serif`}
              >
                <span className="text-mainColor dark:text-mainDarkColor">
                  02.
                </span>{" "}
                {t("Social Media Graphic Design")}
              </h2>
            )}
          </div>
          <div className="block sm:hidden">
            {!!swiperRef?.current && swiperRef?.current.activeIndex === 0 ? (
              <h2
                className={`text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-serif`}
              >
                <span className="text-mainColor dark:text-mainDarkColor">
                  01.
                </span>{" "}
                {itemInfo?.title}
              </h2>
            ) : (
              <h2
                className={`text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-serif`}
              >
                <span className="text-mainColor dark:text-mainDarkColor">
                  02.
                </span>{" "}
                {t("Social Media Graphic Design")}
              </h2>
            )}
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-11 gap-x-4">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(true)}
            className={` sm:h-[29rem] rounded-3xl overflow-hidden relative transition-all duration-500 cursor-pointer`}
            style={{
              gridColumn: hovered ? "span 7" : "span 4",
              transform: hovered ? "scale(1)" : "scale(0.98)",
              transition:
                "transform 0.5s ease-in-out, grid-column 0.5s ease-in-out",
            }}
            onClick={() => hovered && navigate("/branding")}
          >
            <img
              src={data?.itemImage?.[0]?.value || WhatWeDo_1}
              alt="What we do"
              className="w-full h-full object-cover"
            />
            {hovered ? (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-4/5 flex items-center">
                <div className="text-white">
                  <h2 className={`text-xl font-medium font-serif mb-2`}>
                    {itemInfo?.title}
                  </h2>
                  <p className="text-sm">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and{" "}
                  </p>
                </div>
                <FiArrowUpRight className="text-white" size={50} />
              </div>
            ) : (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full flex items-center justify-center">
                <h2
                  className={`text-white text-xl font-medium font-serif mb-2`}
                >
                  {t("Brand Identity")}
                </h2>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setHovered(false)}
            onMouseLeave={() => setHovered(true)}
            className={` sm:h-[29rem] rounded-3xl overflow-hidden relative transition-all cursor-pointer duration-500`}
            style={{
              gridColumn: hovered ? "span 4" : "span 7",
              transform: hovered ? "scale(0.98)" : "scale(1)",
              transition:
                "transform 0.5s ease-in-out, grid-column 0.5s ease-in-out",
            }}
            onClick={() => !hovered && navigate("/SocialMedia")}
          >
            <img
              src={data?.itemImage?.[1]?.value || WhatWeDo_2}
              alt="What we do"
              className="w-full h-full object-cover"
            />
            {hovered ? (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full flex items-center justify-center">
                <h2
                  className={`text-white text-xl font-medium font-serif mb-2`}
                >
                  {t("Social Media")}
                </h2>
              </div>
            ) : (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-4/5 flex items-center ">
                <div className="text-white">
                  <h2 className={`text-xl font-medium font-serif mb-2`}>
                    {t("Social Media Graphic Design")}
                  </h2>
                  <p className="text-sm">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and{" "}
                  </p>
                </div>
                <FiArrowUpRight className="text-white" size={50} />
              </div>
            )}
          </div>
        </div>
        <div className="swiper-container mt-1 block sm:hidden">
          <div className="flex items-center justify-end gap-3 col-span-2 mb-3">
            <div
              className={`border border-[#D6D6D6] w-14 h-9 flex items-center justify-center cursor-pointer group rounded-lg duration-500 ${
                currentIndex === 0
                  ? "cursor-not-allowed"
                  : "hover:border-mainDarkColor"
              }`}
              onClick={handlePrevSlide}
              disabled={currentIndex === 0}
            >
              <HiOutlineArrowSmLeft
                size={30}
                className={`${
                  currentIndex === 0
                    ? "text-[#D6D6D6]"
                    : "text-mainDarkColor group-hover:-translate-x-1"
                } transition-transform duration-500`}
              />
            </div>
            <div
              className={`border border-[#D6D6D6] w-14 h-9 flex items-center justify-center cursor-pointer group rounded-lg duration-500 ${
                currentIndex === data?.itemImage?.length - 3
                  ? "cursor-not-allowed"
                  : "hover:border-mainDarkColor "
              }`}
              onClick={handleNextSlide}
              disabled={currentIndex === data?.itemImage?.length - 3}
            >
              <HiOutlineArrowSmRight
                size={30}
                className="text-mainDarkColor group-hover:translate-x-1 transition-transform duration-500"
              />
            </div>
          </div>
          <Swiper
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              786: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative cursor-pointer">
                <img
                  src={data?.itemImage?.[0]?.value || WhatWeDo_Phone_1}
                  alt="What we do"
                  className="h-96 w-full object-cover rounded-3xl"
                />
                <div
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 w-4/5 flex items-center"
                  onClick={() => navigate("/branding")}
                >
                  <div className="text-white">
                    <h2 className={`text-xl font-medium font-serif mb-2`}>
                      {itemInfo?.title}
                    </h2>
                    <p className="text-sm">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and{" "}
                    </p>
                  </div>
                  <FiArrowUpRight className="text-white" size={50} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative cursor-pointer">
                <img
                  src={data?.itemImage?.[1]?.value || WhatWeDo_Phone_2}
                  alt="What we do"
                  className="h-96 w-full object-cover rounded-3xl"
                />
                <div
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 w-4/5 flex items-center"
                  onClick={() => navigate("/SocialMedia")}
                >
                  <div className="text-white">
                    <h2 className={`text-xl font-medium font-serif mb-2`}>
                      {t("Social Media Graphic Design")}
                    </h2>
                    <p className="text-sm">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and{" "}
                    </p>
                  </div>
                  <FiArrowUpRight className="text-white" size={50} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
