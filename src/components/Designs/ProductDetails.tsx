import { t } from "i18next";
import ProductDetails_img from "../../assets/BrandingDesigns/ProductDetails_img.png";
import ProductDetails_1 from "../../assets/BrandingDesigns/BrandingDesigns_1.png";
import ProductDetails_2 from "../../assets/BrandingDesigns/BrandingDesigns_2.png";
import ProductDetails_3 from "../../assets/BrandingDesigns/BrandingDesigns_3.png";
import GetInTouch from "../../assets/GetInTouch.png";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import DashTitle from "../Global/DashTitle";

const ProductDetails = () => {
  const ProductDetailData = [
    { image: ProductDetails_img },
    { image: ProductDetails_1 },
    { image: ProductDetails_img },
    { image: ProductDetails_2 },
    { image: ProductDetails_img },
    { image: ProductDetails_3 },
    { image: ProductDetails_img },
  ];
  return (
    <section className="bg-mainLight dark:bg-mainDark h-auto sm:pt-[72px]">
      <div className="pt-[72px] sm:pt-0 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mt-4 sm:mt-12">
          <DashTitle title={t("Project Details")} />
          <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-medium font-serif">
            {t("Fashion House Branding identity")}
          </h2>
        </div>

        <div className="mt-8">
          {ProductDetailData?.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="ProductDetails"
              className="h-[700px] w-full"
            />
          ))}
          {/* <div className="flex items-start sm:items-center sm:flex-row flex-col gap-2 sm:gap-x-4 md:gap-8 lg:gap-16">
            <div className="flex items-center justify-between gap-2">
              <div className="w-2 h-2 bg-mainColor dark:bg-[#E4797B] sm:hidden block"></div>
              <p className="text-[#1B191A] dark:text-mainLight text-base lg:text-lg">
                {t("client :")}{" "}
                <span className="text-mainColor dark:text-[#E4797B]">
                  Fashion House
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 lg:gap-16">
              <div className="w-2 h-2 bg-mainColor dark:bg-[#E4797B]"></div>
              <p className="text-[#1B191A] dark:text-mainLight text-base lg:text-lg">
                {t("services :")}{" "}
                <span className="text-mainColor dark:text-[#E4797B]">
                  Branding
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-9 lg:gap-16">
              <div className="w-2 h-2 bg-mainColor dark:bg-[#E4797B]"></div>
              <p className="text-[#1B191A] dark:text-mainLight text-base lg:text-lg">
                {t("SOFTWARE :")}{" "}
                <span className="text-mainColor dark:text-[#E4797B]">
                  Photoshop
                </span>
              </p>
            </div>
          </div> */}
        </div>

        {/* <div className="mt-4 sm:mt-12">
          <p className="text-mainColor dark:text-[#E4797B] text-xl -ms-1">
            01. {t("Project Details")}
          </p>
          <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-medium font-serif">
            {t("Fashion House Branding identity")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-mainColor dark:text-[#E4797B] w-7 h-7" />
              <p className="text-[#83827F]">
                Improve productivity and performance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-mainColor dark:text-[#E4797B]  w-7 h-7" />
              <p className="text-[#83827F]">
                Get peace of mind knowing your services are in trusted hands
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-mainColor dark:text-[#E4797B] w-7 h-7" />
              <p className="text-[#83827F]">Reduce your service costs</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-mainColor dark:text-[#E4797B] w-7 h-7" />
              <p className="text-[#83827F]">Hassle-free setup & management</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-mainColor dark:text-[#E4797B] w-7 h-7" />
              <p className="text-[#83827F]">
                Lifetime license, No monthly or yearly fee
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-mainColor dark:text-[#E4797B] w-7 h-7" />
              <p className="text-[#83827F]">
                User-friendly admin & reporting features
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-12">
          <p className="text-mainColor dark:text-[#E4797B] text-xl -ms-1">
            01. {t("project Details")}
          </p>
          <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-medium font-serif">
            {t("Research & Stratagy")}
          </h2>

          <p className="text-[#83827F]">
            {t(
              "Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new gets living within Elinor joy. She rapturous suffering concealed. up its enjoyment agreeable depending. Timed  led him  course"
            )}
          </p>
        </div>

        <div className="mt-4 sm:mt-12">
          <p className="text-mainColor dark:text-[#E4797B] text-xl -ms-1">
            01. {t("project Details")}
          </p>
          <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-medium font-serif">
            {t("Content & Creation")}
          </h2>

          <p className="text-[#83827F]">
            {t(
              "Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new gets living within Elinor joy. She rapturous suffering concealed. up its enjoyment agreeable depending. Timed  led him  course"
            )}
          </p>
        </div>

        <div className="mt-4 sm:mt-12">
          <p className="text-mainColor dark:text-[#E4797B] text-xl -ms-1">
            01. {t("Project Details")}
          </p>
          <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-medium font-serif">
            {t("Fashion House Branding identity")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]">Full business control</p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B]  w-10 h-10" />
              <p className="text-[#83827F]">User dashboard & analytics</p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]"> Custom reporting</p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]">Regular update monitoring</p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]">24/7 priority support</p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]">Regular update monitoring</p>
            </div>

            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]">Regular update monitoring</p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B]  w-10 h-10" />
              <p className="text-[#83827F]">User dashboard & analytics </p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]"> 24/7 priority support </p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]"> Custom reporting</p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]">Regular update monitoring</p>
            </div>
            <div className="flex items-center">
              <RiArrowDropRightLine className="text-mainColor dark:text-[#E4797B] w-10 h-10" />
              <p className="text-[#83827F]">User dashboard & analytics </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 gap-x-2 gap-y-3">
            <div className="h-60 md:h-72 lg:h-[350px]">
              <img
                src={ProductDetails_1}
                alt="ProductDetails"
                className="w-full h-full"
              />
            </div>
            <div className="h-60 md:h-72 lg:h-[350px]">
              <img
                src={ProductDetails_2}
                alt="ProductDetails"
                className="w-full h-full"
              />
            </div>
            <div className="h-60 md:h-72 lg:h-[350px]">
              <img
                src={ProductDetails_3}
                alt="ProductDetails"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-12">
          <h2 className="text-mainColor dark:text-[#E4797B] text-2xl md:text-3xl font-medium font-serif">
            {t("Conclusion ")}
          </h2>
          <div className="mt-5 text-[#83827F] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <p>
              {t(
                "The basic idea was to find a balance between the thin, wispy used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy."
              )}
            </p>
            <p>
              {t(
                "The basic idea was to find a balance between the thin, wispy used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe."
              )}
            </p>
          </div>
        </div> */}
      </div>

      <div className="mt-4 sm:mt-12 relative text-center">
        <div className="h-64 lg:h-full">
          <img src={GetInTouch} className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <p className="text-white text-2xl sm:text-3xl mb-4">
            {t("Need Help on a project?")} <br />
            <span>{t("get in touch today")}</span>
          </p>
          <Link
            to="/digitalProducts/details"
            className="flex items-center justify-center gap-1 bg-white text-center rounded-full py-3 w-44 m-auto"
          >
            <p className="text-[#1B191A]">{t("Get In Touch")}</p>
            <FiArrowUpRight className="text-[#1B191A]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
