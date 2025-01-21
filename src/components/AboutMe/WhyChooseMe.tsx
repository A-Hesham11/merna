import WhyChooseMe_img from "../../assets/AboutMe/WhyChooseMe.png";
import WhyChooseMe_phone from "../../assets/AboutMe/WhyChooseMe_phone.png";
import { LuCheckCircle } from "react-icons/lu";
import { apiRequest } from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import DashTitle from "../Global/DashTitle";

const WhyChooseMe = () => {
  const fetchWhyChooseMeData = async () => {
    try {
      const data = await apiRequest({
        url: "/api/why",
        method: "GET",
      });
      return data?.data?.items;
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  const { data } = useQuery({
    queryKey: ["WhyChooseMe"],
    queryFn: fetchWhyChooseMeData,
  });

  const WhyChooseMeData = data?.itemInfo?.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  return (
    <section className="bg-mainLight dark:bg-mainDark h-auto sm:h-svh sm:pt-[72px] flex  items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 pt-[72px]  sm:pt-0 items-end sm:items-start px-4 sm:px-6 md:px-10 lg:px-20 justify-between">
        <div className="relative z-10 sm:block hidden ml-auto h-full me-auto fadeLeft">
          <img
            src={
              data?.itemImage?.lenght
                ? data?.itemImage?.[0]?.value
                : WhyChooseMe_img
            }
            alt="about us"
            className="w-full h-full"
          />
        </div>

        <div className="fadeRight">
          <DashTitle title={WhyChooseMeData?.head} />
          <h2 className="text-black dark:text-mainLight text-2xl md:text-3xl lg:text-4xl font-medium font-serif">
            {WhyChooseMeData?.["head-p"]}
          </h2>
          <p className="text-[#646464] dark:text-[#AEAEAE] my-2 sm:my-4">
            {WhyChooseMeData?.p}
          </p>
          <div className="mt-2">
            {data?.items?.map((item, index) => (
              <div key={index} className="flex mb-4 lg:mb-6 gap-4">
                <LuCheckCircle className="text-mainColor dark:text-mainDarkColor w-9 h-9" />
                <div>
                  <h2 className="text-[15px] md:text-lg lg:text-xl font-semibold mb-2 lg:mb-2.5 dark:text-mainDarkColor">
                    {item.value}
                  </h2>
                  <p className="text-[#646464]  dark:text-[#AEAEAE]">
                    {item.per}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 sm:hidden block mb-12">
          <img
            src={
              data?.itemImage?.lenght
                ? data?.itemImage?.[0]?.value
                : WhyChooseMe_phone
            }
            alt="about us"
            className="w-full mb-8"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
