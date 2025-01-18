import { useEffect, useRef, useState } from "react";
import SocialMediaDesigns_1 from "../../assets/SocialMediaDesigns/SocialMediaDesigns_1.png";
import SocialMediaDesigns_2 from "../../assets/SocialMediaDesigns/SocialMediaDesigns_2.png";
import SocialMediaDesigns_3 from "../../assets/SocialMediaDesigns/SocialMediaDesigns_3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { t } from "i18next";
import { IoClose } from "react-icons/io5";
import DashTitle from "../Global/DashTitle";

const SocialMediaDesignsHeader = ({ onModalStateChange }: any) => {
  const [activeItem, setActiveItem] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [dragging, setDragging] = useState(false);
  const touch = useRef({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(new Image());
  const imageSrc = selectedImage;

  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
    onModalStateChange(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    onModalStateChange(false);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const DigitalProductData = [
    {
      image: SocialMediaDesigns_1,
      title: "Fashion House Social media",
      desc: "Social media design",
    },
    {
      image: SocialMediaDesigns_2,
      title: "Fashion House Social media",
    },
    {
      image: SocialMediaDesigns_3,
      title: "Fashion House Social media",
      desc: "Social media design",
    },
    {
      image: SocialMediaDesigns_1,
      desc: "Social media design",
    },
    {
      image: SocialMediaDesigns_2,
      title: "Fashion House Social media",
      desc: "Social media design",
    },
    {
      image: SocialMediaDesigns_3,
      title: "Fashion House Social media",
      desc: "Social media design",
    },
  ];

  const modifiedCategories = [
    { id: 0, name: "Medical" },
    { id: 1, name: "Dental" },
    { id: 2, name: "Real Estate" },
    { id: 3, name: "Food and Beverages" },
    { id: 4, name: "Media & Technology" },
    { id: 5, name: "Events" },
    { id: 6, name: "Arts" },
    { id: 7, name: "Occasions" },
    { id: 8, name: "Infographics" }, // (1080x1920)
    { id: 9, name: "Thumbnails " }, // (1080x1920)
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

  useEffect(() => {
    if (imageSrc) {
      imageRef.current.src = imageSrc;
      imageRef.current.onload = () => draw();
    }
  }, [imageSrc]);

  const handleMouseMove = (event) => {
    if (dragging) {
      const { x, y } = touch.current;
      const { clientX, clientY } = event;

      setOffset((prevOffset) => ({
        x: prevOffset.x + (x - clientX),
        y: prevOffset.y + (y - clientY),
      }));

      touch.current = { x: clientX, y: clientY };
    }
  };

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    touch.current = { x: clientX, y: clientY };
    setDragging(true);
  };

  const handleMouseUp = () => setDragging(false);

  const handleWheel = (event) => {
    setZoom((prevZoom) => Math.max(0.1, prevZoom + event.deltaY * -0.001));
  };

  const draw = () => {
    if (canvasRef.current && imageRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;

      context.resetTransform();
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.translate(-offset.x, -offset.y);
      context.scale(zoom, zoom);

      const x = (canvas.width / zoom - imageRef.current.width) / 2;
      const y = (canvas.height / zoom - imageRef.current.height) / 2;

      context.drawImage(imageRef.current, x, y);
    }
  };

  useEffect(() => {
    draw();
  }, [zoom, offset]);

  useEffect(() => {
    const handleResize = () => draw();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-mainLight dark:bg-mainDark h-svh sm:pt-[72px]">
      <div className="pt-[72px] sm:pt-0 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mt-4 sm:mt-12">
          <DashTitle title={t("Social media designs")} className="fadeLeft" />
          <div className="grid grid-cols-10 items-center">
            <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-medium font-serif col-span-8 fadeLeft">
              {t("Latest Projects i’ve worked on")}
            </h2>
            {/* <div className="flex items-center justify-end gap-3 col-span-2">
              <div
                className={`border border-[#D6D6D6] w-14 h-9 flex items-center justify-center cursor-pointer ${
                  currentIndex === 0 ? "cursor-not-allowed" : ""
                }`}
                onClick={handlePrevSlide}
                disabled={currentIndex === 0}
              >
                <HiOutlineArrowSmLeft
                  size={30}
                  className={
                    currentIndex === 0 ? "text-[#D6D6D6]" : "text-mainDarkColor"
                  }
                />
              </div>
              <div
                className={`border border-[#D6D6D6] w-14 h-9 flex items-center justify-center cursor-pointer ${
                  currentIndex === DigitalProductData?.length - 3
                    ? "cursor-not-allowed"
                    : ""
                }`}
                onClick={handleNextSlide}
                disabled={currentIndex === DigitalProductData?.length - 3}
              >
                <HiOutlineArrowSmRight
                  size={30}
                  className="text-mainDarkColor"
                />
              </div>
            </div> */}
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
        </div>

        <div className="fadeRight">
          {activeItem === 0 && (
            <div className="swiper-container mt-8">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                  786: {
                    slidesPerView: 3,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                }}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 0,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                speed={2000}
              >
                {DigitalProductData?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="h-72 sm:h-80 rounded-2xl relative overflow-hidden group hover:scale-95 duration-500 cursor-pointer"
                      onClick={() => openModal(item.image)}
                    >
                      <img
                        src={item.image}
                        alt="Portfolio"
                        className="h-full w-full "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        {isOpen && selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden"
            onClick={closeModal}
          >
            <div
              className="bg-white p-8 rounded-2xl shadow-lg relative !z-[99999] inline-block w-[85%] h-[85%]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-gray-700 hover:text-gray-900"
              >
                <IoClose
                  size={50}
                  className="text-mainDark dark:text-mainLight"
                />
              </button>

              <div ref={containerRef} className="my-8 h-[520px]">
                <canvas
                  width={350}
                  height={600}
                  ref={canvasRef}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  onWheel={handleWheel}
                  className={dragging ? "cursor-zoom-out" : "cursor-zoom-in"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialMediaDesignsHeader;
