import { useQuery } from "@tanstack/react-query";
import { t } from "i18next";
import { useState } from "react";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialDribbble } from "react-icons/sl";
import { apiRequest } from "../../utils/axios";
import DashTitle from "../Global/DashTitle";

const BeMyClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  const fetchFooterData = async () => {
    try {
      const data = await apiRequest({
        url: "/api/footer",
        method: "GET",
      });
      return data?.data?.items;
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["footer"],
    queryFn: fetchFooterData,
  });

  const footerData = data?.itemInfo?.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});
  return (
    <section className="bg-mainLight dark:bg-mainDark h-auto sm:h-svh sm:pt-[72px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-[72px] gap-y-8 mb-16 sm:mb-16 md:mb-0  sm:h-auto  sm:pt-0 items-end sm:items-start px-4 sm:px-6 md:px-10 lg:px-20 mt-3">
        <div className="mt-0 sm:mt-12 w-full lg:w-4/5 fadeLeft">
          <DashTitle title={footerData?.head} />
          <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl font-medium font-serif mb-5">
            {footerData?.p}
          </h2>
          <ul>
            <li>
              <h2 className="text-mainColor dark:text-[#E4797B] font-medium">
                {t("Phone")}
              </h2>
              <p className="my-2 dark:text-mainLight">{footerData?.phone}</p>
            </li>
            <li>
              <h2 className="text-mainColor dark:text-[#E4797B] font-medium">
                {t("Email")}
              </h2>
              <p className="my-2 dark:text-mainLight">{footerData?.email}</p>
            </li>
            <li>
              <h2 className="text-mainColor dark:text-[#E4797B] font-medium">
                {t("Social Media")}
              </h2>
              <div className="text-[#494949] flex gap-5 mt-3 dark:text-white">
                <FaBehance
                  size={28}
                  className="hover:scale-125 duration-500 cursor-pointer"
                />
                <FaInstagram
                  size={28}
                  className="hover:scale-125 duration-500 cursor-pointer"
                />
                <FaLinkedin
                  size={27}
                  className="hover:scale-125 duration-500 cursor-pointer"
                />
                <SlSocialDribbble
                  size={27}
                  className="hover:scale-125 duration-500 cursor-pointer"
                />
                <FaFacebookF
                  size={27}
                  className="hover:scale-125 duration-500 cursor-pointer"
                />
                <FaXTwitter
                  size={27}
                  className="hover:scale-125 duration-500 cursor-pointer"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="relative z-10 block w-full lg:w-[90%]  ml-auto fadeRight">
          <form
            onSubmit={handleSubmit}
            className="bg-[#FFFCF7] dark:bg-[#272526] px-4 md:px-8 py-5 rounded-2xl w-full "
          >
            <h2 className="text-2xl font-bold text-center mb-2 dark:text-mainLight">
              {t("Get In Touch")}
            </h2>
            <p className="text-center dark:text-[#838287] mb-6">
              {t("Contact us for a quote, help or to join the team")}
            </p>

            {/* Name Field */}
            <div className="mb-4">
              <label
                className="block dark:text-mainLight text-sm font-bold mb-2"
                htmlFor="name"
              >
                {t("What’s your name?")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("Full Name here")}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full my-4 py-1.5 border-b bg-transparent border-gray-300 focus:outline-none focus:border-mainColor dark:focus:border-[#E4797B] transition-all"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                className="block dark:text-mainLight text-sm font-bold mb-2"
                htmlFor="email"
              >
                {t("Enter Your Email address?")}
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("Email here")}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 my-3 border-b bg-transparent border-gray-300 focus:outline-none focus:border-mainColor dark:focus:border-[#E4797B] transition-all"
                />
              </div>
            </div>

            {/* Service Type Field */}
            <div className="mb-4">
              <label
                className="block dark:text-mainLight text-sm font-bold mb-2"
                htmlFor="serviceType"
              >
                {t("Service Type")}
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full my-4 py-1.5 dark:text-mainLight dark:bg-[#272526] border-b bg-transparent border-gray-300 focus:outline-none focus:border-mainColor dark:focus:border-[#E4797B] transition-all"
              >
                <option value="">Select service type</option>
                <option value="webDevelopment">Web Development</option>
                <option value="seo">SEO Services</option>
                <option value="design">Graphic Design</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 border mt-5 border-mainColor dark:border-mainLight  text-mainColor dark:text-mainLight font-medium rounded-md transition-colors flex justify-center items-center hover:scale-[0.98] duration-300"
            >
              LAST STEP: MY DETAILS →
            </button>
          </form>
        </div>
      </div>

      <div className="sm:absolute sm:bottom-0 flex self-end justify-center sm:justify-between w-full h-auto bg-[#BF4F51CC] px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex flex-col-reverse sm:flex-row w-full self-end justify-center sm:justify-between items-center sm:items-end sm:mb-4 text-white h-32 sm:h-36">
          <p className="text-xs sm:text-sm md:text-base pt-3 sm:pt-0 fadeLeft">
            Copyright © 2024 by octopus. All Rights Reserved
          </p>
          <ul className="flex items-center gap-3 text-xs sm:text-sm md:text-base border-b sm:border-none pb-3 sm:pb-0 fadeRight">
            <li>{t("About")}</li>
            <li>{t("Service")}</li>
            <li>{t("Work")}</li>
            <li>{t("Clients")}</li>
            <li>{t("Contact Me")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BeMyClient;
