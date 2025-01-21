import { t } from "i18next";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Portfolio_1 from "../../assets/LandingPage/Portfolio_1.png";
import Portfolio_2 from "../../assets/LandingPage/Portfolio_2.png";
import Portfolio_3 from "../../assets/LandingPage/WhatWeDo_1.png";
import Portfolio_4 from "../../assets/LandingPage/WhatWeDo_2.png";
import { apiRequest } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import DashTitle from "../Global/DashTitle";

const getSlidesToSubtract = () => {
  if (window.innerWidth >= 786) {
    return 3; // Large screens
  } else if (window.innerWidth >= 640) {
    return 2; // Medium screens
  } else {
    return 1; // Small screens
  }
};

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToSubtract, setSlidesToSubtract] = useState(
    getSlidesToSubtract()
  );
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToSubtract(getSlidesToSubtract());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchWhatWeDoData = async () => {
    try {
      const data = await apiRequest({
        url: "/api/portfolio",
        method: "GET",
      });
      return data?.data?.items;
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["landing_portfolio"],
    queryFn: fetchWhatWeDoData,
  });

  const [totalSlides, setTotalSlides] = useState(data?.itemImage?.length);

  useEffect(() => {
    if (data) {
      setTotalSlides(data?.itemImage?.length);
    }
  }, [data]);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const calculateWidth = () => {
    const slidesToShow =
      window.innerWidth >= 786 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    const progress =
      ((currentIndex + slidesToShow) / data?.itemImage?.length) * 100;
    return `${progress}%`;
  };

  const images = [
    { image: Portfolio_1 },
    { image: Portfolio_2 },
    { image: Portfolio_3 },
    { image: Portfolio_4 },
  ];

  const itemInfo = data?.itemInfo?.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

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
    <section className="bg-mainLight dark:bg-mainDark h-svh flex flex-col justify-center">
      <div className="h-auto sm:pt-0 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mt-4">
          <DashTitle title={itemInfo?.head} className="fadeLeft" />
          <div className="flex justify-between sm:flex-row flex-col items-start gap-y-1 sm:items-center">
            <h2 className="text-black dark:text-white text-xl md:text-3xl lg:text-4xl font-serif fadeLeft">
              {itemInfo?.p}
            </h2>
            <Link to="/" className="flex items-center gap-1">
              <p className="text-mainColor dark:text-[#E4797B]">
                {t("See all work")}
              </p>
              <FiArrowUpRight className="text-mainColor dark:text-[#E4797B]" />
            </Link>
          </div>
        </div>

        <div className="swiper-container mt-2 zoomIn">
          <div className="flex items-center justify-end gap-3 col-span-2 mb-4">
            <div
              className={`border border-[#D6D6D6] w-14 h-9 flex items-center justify-center cursor-pointer group rounded-lg duration-500  ${
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
                } transition-transform duration-500 `}
              />
            </div>
            <div
              className={`border border-[#D6D6D6] duration-500 w-14 h-9 flex items-center justify-center cursor-pointer group rounded-lg ${
                currentIndex === data?.itemImage?.length - slidesToSubtract
                  ? "cursor-not-allowed"
                  : "hover:border-mainDarkColor"
              }`}
              onClick={handleNextSlide}
              disabled={
                currentIndex === data?.itemImage?.length - slidesToSubtract
              }
            >
              <HiOutlineArrowSmRight
                size={30}
                className={`${
                  currentIndex === data?.itemImage?.length - slidesToSubtract
                    ? "text-[#D6D6D6]"
                    : "text-mainDarkColor group-hover:translate-x-[0.3rem]"
                } transition-transform duration-500`}
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
            className="mySwiper"
          >
            {data?.itemImage?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-72 sm:h-80 rounded-2xl overflow-hidden">
                  <img
                    src={item.value || images?.[index]?.image}
                    alt="Portfolio"
                    className="h-full w-full hover:scale-95 duration-500 cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="progress-container bg-[#BEBEBE] h-1 mt-6 rounded-full">
            <div
              className="progress-bar bg-mainColor dark:bg-[#E4797B] h-full rounded-full"
              style={{
                width: calculateWidth(),
                transition: "width 0.7s ease",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
