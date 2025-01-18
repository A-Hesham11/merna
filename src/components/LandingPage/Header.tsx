import Header_Img from "../../assets/LandingPage/header.png";
import Header_phone_Img from "../../assets/LandingPage/header_phone.png";
import { apiRequest } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Global/Loading/Loading";
import "aos/dist/aos.css";

const fetchHomeData = async () => {
  try {
    const data = await apiRequest({
      url: "/api/home",
      method: "GET",
    });
    return data?.data?.headers;
  } catch (error) {
    console.error("Error fetching items:", error.message);
  }
};

const Header = ({ isHeaderVisible }: any) => {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: fetchHomeData,
  });

  const headerInfo = data?.headerInfo?.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  if (isLoading || isFetching) {
    return (
      <section className="bg-[#898989] h-svh pt-[72px]">
        <Loading />
      </section>
    );
  }

  return (
    <section
      className={`bg-[#898989] h-svh pt-[72px] sm:px-6 md:px-10 lg:px-20 ${
        isHeaderVisible && "slide-down-home"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full ">
        <div className="relative text-center mb-80 sm:mb-0 sm:mt-32 zoomIn">
          <h1 className="text-mainColor font-extrabold sm:font-semibold text-[40px] sm:text-7xl md:text-[82px] lg:text-8xl font-Neue">
            {headerInfo?.["hero-h1"]}
          </h1>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl antrilla-font w-full">
            {headerInfo?.["hero-p"]}
          </p>
        </div>
      </div>
      <div className="flex items-end justify-center lg:justify-between">
        <p className="mb-12 text-white whitespace-nowrap hidden lg:block fadeLeft">
          {headerInfo?.bottom_p}
        </p>
        <div className="sm:block hidden">
          <img
            src={data?.headerImage?.[0].value || Header_Img}
            alt="header"
            className="w-full"
            style={{ height: "calc(100svh - 72px)" }}
          />
        </div>

        <div
          className="sm:hidden flex items-end "
          style={{ height: "calc(100svh - 72px)" }}
        >
          <img
            src={data?.headerImage?.[0].value || Header_phone_Img}
            alt="header"
            className="w-full h-3/4 object-cover"
          />
        </div>
        <p className="mb-12 text-white whitespace-nowrap hidden lg:block fadeRight">
          {headerInfo?.bottom_e}
        </p>
      </div>
    </section>
  );
};

export default Header;
