import { useMutation, useQuery } from "@tanstack/react-query";
import { t } from "i18next";
import { useEffect, useRef, useState } from "react";
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
import { Link } from "react-router-dom";

const postClientData = async (data: Record<string, any>) => {
  const url = "/api/postEmail";
  return await apiRequest({
    url,
    method: "POST",
    data,
  });
};

const BeMyClient = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    serviceType: "",
  });

  const handleInputClick = () => {
    setIsDropdownVisible(true);
  };

  const handleOptionClick = (value) => {
    setFormData({ ...formData, serviceType: value });
    setIsDropdownVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const { data } = useQuery({
    queryKey: ["footer"],
    queryFn: fetchFooterData,
  });

  const footerData = data?.itemInfo?.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  const { mutate, isPending } = useMutation({
    mutationKey: ["client_data"],
    mutationFn: (data: any) => postClientData(data),
    onSuccess: (data) => {
      console.log("Data posted successfully:", data);
    },
  });

  const handlePost = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData?.name,
      mobile: formData?.mobile,
      email: formData?.email,
      serviceType: formData?.serviceType,
    };

    mutate(payload);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
            onSubmit={handlePost}
            className="bg-[#FFFCF7] dark:bg-[#272526] px-4 md:px-8 py-5 rounded-2xl w-full "
          >
            <h2 className="text-2xl font-bold text-center mb-2 dark:text-mainLight">
              {t("Get In Touch")}
            </h2>
            <p className="text-center dark:text-[#838287] mb-6">
              {t("Contact us for a quote, help or to join the team")}
            </p>

            {/* Name Field */}
            <div className="mb-2">
              <label
                className="block dark:text-mainLight text-sm font-bold"
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
                  autoComplete="off"
                  required
                  className="w-full my-4 py-1.5 border-b bg-transparent text-mainDark dark:text-mainLight border-gray-300 focus:outline-none focus:border-mainColor dark:focus:border-[#E4797B] transition-all"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-2">
              <label
                className="block dark:text-mainLight text-sm font-bold"
                htmlFor="email"
              >
                {t("Enter Your Mobile Number?")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder={t("Mobile here")}
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  className="w-full py-2 my-3 border-b bg-transparent text-mainDark dark:text-mainLight border-gray-300 focus:outline-none focus:border-mainColor dark:focus:border-[#E4797B] transition-all"
                />
              </div>
            </div>

            <div className="mb-2">
              <label
                className="block dark:text-mainLight text-sm font-bold"
                htmlFor="email"
              >
                {t("Enter Your Email address?")}
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t("Email here")}
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full py-2 my-3 border-b bg-transparent text-mainDark dark:text-mainLight border-gray-300 focus:outline-none focus:border-mainColor dark:focus:border-[#E4797B] transition-all"
                />
              </div>
            </div>

            {/* Service Type Field */}
            <div className="mb-2 relative" ref={dropdownRef}>
              <label
                className="block dark:text-mainLight text-sm font-bold"
                htmlFor="serviceType"
              >
                {t("Service Type")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="serviceType"
                  name="serviceType"
                  required
                  placeholder={t("Select service type")}
                  value={formData.serviceType}
                  onChange={handleChange}
                  onClick={handleInputClick}
                  autoComplete="off"
                  className="w-full mt-4 py-1.5 border-b bg-transparent text-mainDark dark:text-mainLight border-gray-300 focus:outline-none focus:border-mainColor dark:focus:border-[#E4797B] transition-all"
                />
              </div>
              {isDropdownVisible && (
                <ul className="bg-mainDark dark:bg-mainLight text-mainLight dark:text-mainDark rounded-xl mt-1 absolute w-full">
                  <li
                    className="hover:bg-mainDarkColor pt-3 pb-1 px-4 rounded-t-xl cursor-pointer"
                    onClick={() => handleOptionClick("Web Development")}
                  >
                    Web Development
                  </li>
                  <li
                    className="hover:bg-mainDarkColor py-2 px-4 cursor-pointer"
                    onClick={() => handleOptionClick("SEO Services")}
                  >
                    SEO Services
                  </li>
                  <li
                    className="hover:bg-mainDarkColor pb-3 pt-1 px-4 rounded-b-xl cursor-pointer"
                    onClick={() => handleOptionClick("Graphic Design")}
                  >
                    Graphic Design
                  </li>
                </ul>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-2 border mt-8 border-mainColor dark:border-mainLight  text-mainColor dark:text-mainLight font-medium rounded-md transition-colors flex justify-center items-center hover:scale-[0.98] duration-300"
            >
              {isPending ? "Posting..." : "Submit"}
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
            {[
              { title: "About", route: "/aboutMe" },
              { title: "Service", route: "/process" },
              { title: "Work", route: "/branding" },
              { title: "Contact Me", route: "/contactUs" },
            ]?.map((item) => (
              <li className="hover:scale-110 duration-500">
                <Link to={item.route}>{t(item.title)}</Link>
              </li>
            ))}

            {/* <li>{t("Clients")}</li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BeMyClient;
