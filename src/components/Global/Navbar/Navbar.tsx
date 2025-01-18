import { t } from "i18next";
import { FaBars } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineChevronRight } from "react-icons/md";

type NavbarProps = {
  isFirstSection?: boolean;
};

const Navbar = ({ isFirstSection }: NavbarProps) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navBarList = [
    { path: "/", label: "Home" },
    { path: "/aboutMe", label: "About Me" },
    { path: "/process", label: "Process" },
    { path: "/digitalProducts", label: "Digital Products" },
    { path: "/contactUs", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBarClasses = `
    flex items-center fadeTop !duration-1000 
    ${
      isFirstSection && location.pathname === "/" ? "text-white" : "text-black"
    } 
    justify-between py-5 px-4 sm:px-6 md:px-10 lg:px-20 
    fixed top-0 left-0 z-40 w-full dark:text-white 
    ${
      isFirstSection &&
      ![
        "/digitalProducts",
        "/process",
        "/contactUs",
        "/ProductDetails",
      ].includes(location.pathname)
        ? "bg-transparent dark:bg-transparent"
        : "bg-mainLight dark:bg-mainDark"
    }
  `;

  const dropdownClasses = `
    md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 lg:me-24 
    duration-300 ${isDropdownOpen ? "opacity-100" : "opacity-0 h-0 md:h-full"}
  `;

  return (
    <nav className={navBarClasses}>
      <Link to="/">
        <h1 className="font-bold text-2xl font-Neue">{t("Merna Nazmy")}</h1>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          to="/contactUs"
          className="sm:flex hidden items-center gap-1 hover:text-mainColor hover:scale-110 duration-500"
        >
          <p>{t("Be My Client")}</p>
          <FiArrowUpRight />
        </Link>
        <DarkModeToggle />
        <button onClick={() => setIsNavBarOpen(true)}>
          <FaBars
            size={28}
            className="hover:text-mainColor hover:scale-110 duration-500"
          />
        </button>
      </div>

      <div
        className={`w-full h-screen fixed top-0 bg-mainLight dark:bg-mainDark z-50 duration-500 p-8 ${
          isNavBarOpen ? "right-0" : "-right-full"
        }`}
      >
        <div className="w-full flex justify-end">
          <button onClick={() => setIsNavBarOpen(false)}>
            <IoClose
              size={50}
              className="text-mainDark dark:text-mainLight hover:scale-90 duration-500"
            />
          </button>
        </div>
        <ul className="font-semibold text-2xl text-center flex flex-col gap-6 mt-12">
          {navBarList.slice(0, 2).map((item) => (
            <li
              key={item.path}
              className={`${
                isActive(item.path)
                  ? "text-mainColor dark:text-mainDarkColor"
                  : "text-mainDark dark:text-mainLight hover:text-mainColor hover:dark:text-mainDarkColor hover:scale-105 duration-500"
              }`}
            >
              <Link
                to={item.path}
                onMouseEnter={() => setIsDropdownOpen(false)}
              >
                {t(item.label)}
              </Link>
            </li>
          ))}

          <li className="relative">
            <button
              className={`${
                isActive("/work")
                  ? "text-mainColor dark:text-mainDarkColor"
                  : "text-mainDark dark:text-mainLight hover:text-mainColor hover:dark:text-mainDarkColor hover:scale-105 duration-500"
              } md:ms-12`}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              <span className="flex flex-col md:flex-row gap-x-4 gap-y-2 items-center">
                <p
                  className={`${
                    ["/SocialMedia", "/branding"].some(isActive)
                      ? "text-mainColor dark:text-mainDarkColor"
                      : "text-mainDark dark:text-mainLight hover:text-mainColor hover:dark:text-mainDarkColor hover:scale-105 duration-500"
                  }`}
                >
                  {t("My Work")}
                </p>
                <MdOutlineChevronRight
                  size={30}
                  className={`fill-mainColor dark:fill-mainDarkColor md:rotate-0 rotate-90 duration-300 ${
                    isDropdownOpen
                      ? "rotate-90 opacity-100"
                      : "rotate-0 opacity-0 h-0 md:h-full"
                  }`}
                />
              </span>
            </button>
            <div className={dropdownClasses}>
              <div className={isDropdownOpen ? "block" : "hidden"}>
                {[
                  { path: "/branding", label: "Branding Designs" },
                  { path: "/SocialMedia", label: "Social Media Designs" },
                ].map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      className={`${
                        isActive(item.path)
                          ? "text-mainColor dark:text-mainDarkColor"
                          : "text-[#646464] dark:text-mainLight hover:text-mainColor hover:dark:text-mainDarkColor hover:scale-105 duration-500"
                      } text-2xl font-medium`}
                    >
                      {t(item.label)}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {navBarList.slice(2, 5).map((item) => (
            <li
              key={item.path}
              className={`${
                isActive(item.path)
                  ? "text-mainColor dark:text-mainDarkColor"
                  : "text-mainDark dark:text-mainLight hover:text-mainColor hover:dark:text-mainDarkColor hover:scale-105 duration-500"
              }`}
            >
              <Link
                to={item.path}
                onMouseEnter={() => setIsDropdownOpen(false)}
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex lg:hidden flex-col sm:flex-row items-center justify-between font-medium sm:font-semibold text-mainDark dark:text-mainLight absolute bottom-0 left-0 w-full p-8">
          <p className="whitespace-nowrap">
            {t("Graphic Designer | Based in Egypt")}
          </p>
          <p className="whitespace-nowrap">{t("+6 years experience")}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
