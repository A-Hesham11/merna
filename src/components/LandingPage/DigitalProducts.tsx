import { t } from "i18next";
import { useRef, useState } from "react";
import DigitalProducts_1 from "../../assets/LandingPage/DigitalProducts_1.png";
import DigitalProducts_2 from "../../assets/LandingPage/DigitalProducts_2.png";
import DigitalProducts_3 from "../../assets/LandingPage/DigitalProducts_3.png";
import DigitalProducts_4 from "../../assets/LandingPage/DigitalProducts_4.png";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../../utils/axios";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DashTitle from "../Global/DashTitle";

const DigitalProducts = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const fetchCategoriesData = async () => {
    try {
      const data = await apiRequest({
        url: "/api/categories",
        method: "GET",
      });
      return data?.data;
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategoriesData,
  });

  const modifiedCategories = categories?.length && [
    { id: 0, name: "All" },
    ...categories,
  ];

  const fetchDigitalProductsData = async () => {
    try {
      const data = await apiRequest({
        url: "/api/products",
        method: "GET",
      });
      return data?.data;
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  const { data } = useQuery({
    queryKey: ["DigitalProducts"],
    queryFn: fetchDigitalProductsData,
  });

  const fetchDigitalProductData = async () => {
    try {
      const data = await apiRequest({
        url: `/api/product/${activeItem}`,
        method: "GET",
      });
      return data?.data;
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  const { data: product } = useQuery({
    queryKey: ["DigitalProduct", activeItem],
    queryFn: fetchDigitalProductData,
    enabled: !!activeItem,
  });

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
    <section className="bg-mainLight dark:bg-mainDark h-svh sm:pt-[72px] flex flex-col justify-center">
      <div className="pt-[72px] sm:pt-0 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="lg:-mt-16 fadeTop">
          <DashTitle title={t("Digital Products")} />
          <div className="grid grid-cols-10 items-center">
            <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-medium font-serif col-span-8">
              {t("Spotlight Digital Assets Selections")}
            </h2>
            <div className="flex items-center justify-end gap-3 col-span-2">
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
                  currentIndex === data?.length - 3
                    ? "cursor-not-allowed"
                    : "hover:border-mainDarkColor"
                }`}
                onClick={handleNextSlide}
                disabled={currentIndex === data?.length - 3}
              >
                <HiOutlineArrowSmRight
                  size={30}
                  className="text-mainDarkColor group-hover:translate-x-1 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap gap-5 font-bold text-sm mt-6 mb-8 fadeTop">
          {modifiedCategories?.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer w-fit ${
                activeItem === item.id
                  ? "text-mainColor dark:text-mainDarkColor border-b-2 border-mainColor dark:border-mainDarkColor duration-300"
                  : "text-[#BBBCBF] hover:text-mainDarkColor hover:border-b border-mainDarkColor"
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="zoomIn">
          {activeItem === 0 && (
            <Swiper
              spaceBetween={5}
              slidesPerView={1}
              speed={1000}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                452: {
                  slidesPerView: 2, // 1 slide for screens >= 640px
                  spaceBetween: 4, // Less space between slides
                },
                768: {
                  slidesPerView: 3, // 2 slides for screens >= 768px
                  spaceBetween: 8,
                },
                1024: {
                  slidesPerView: 4, // 3 slides for screens >= 1024px
                  spaceBetween: 12,
                },
              }}
            >
              <div className="grid grid-cols-4 gap-4 pb-10 lg:pb-0">
                {data?.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className={`${
                      index === 0 ? "col-span-4" : "col-span-3"
                    } p-1`}
                  >
                    <div className="group cursor-pointer">
                      <div>
                        <img
                          src={item.image}
                          alt="card"
                          className="h-52 w-full group-hover:scale-95 duration-500"
                        />
                      </div>
                      <div className="my-4">
                        <div className="font-semibold text-sm flex justify-between items-center">
                          <h2 className="text-[#222222] dark:text-mainLight mb-3">
                            {item.name}
                          </h2>
                          <p className="text-mainColor dark:text-mainDarkColor">
                            {item.price} <span>{item.unit}</span>
                          </p>
                        </div>
                        <p className="text-[#222222] dark:text-mainLight text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          )}
        </div>

        {activeItem !== 0 && (
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            speed={1000}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              452: {
                slidesPerView: 2, // 1 slide for screens >= 640px
                spaceBetween: 4, // Less space between slides
              },
              768: {
                slidesPerView: 3, // 2 slides for screens >= 768px
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 4, // 3 slides for screens >= 1024px
                spaceBetween: 12,
              },
            }}
          >
            <div className="grid grid-cols-4 gap-4 pb-10 lg:pb-0">
              {product?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`${index === 0 ? "col-span-4" : "col-span-3"} p-1`}
                >
                  <div className="group">
                    <div>
                      <img
                        src={item.image}
                        alt="card"
                        className="h-52 w-full group-hover:scale-95 duration-500"
                      />
                    </div>
                    <div className="my-4">
                      <div className="font-semibold text-sm flex justify-between items-center">
                        <h2 className="text-[#222222] dark:text-mainLight mb-3">
                          {item.name}
                        </h2>
                        <p className="text-mainColor dark:text-mainDarkColor">
                          {item.price} <span>{item.unit}</span>
                        </p>
                      </div>
                      <p className="text-[#222222] dark:text-mainLight text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default DigitalProducts;
