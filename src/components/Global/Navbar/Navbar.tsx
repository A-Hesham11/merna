import { t } from "i18next";
import { FaBars } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

type navbar_TP = {
  isFirstSection?: number;
};

const Navbar = ({ isFirstSection }: navbar_TP) => {
  console.log("🚀 ~ Navbar ~ isFirstSection:", isFirstSection);
  const [navBarToggle, setNavBarToggle] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`flex items-center ${
        isFirstSection === 0 ? "text-white" : "text-black"
      } justify-between py-5 px-4 sm:px-6 md:px-10 lg:px-20 fixed top-0 left-0 z-50 w-full dark:text-white`}
    >
      <h1 className="font-bold text-2xl font-Neue">{t("Merna Nazmy")}</h1>
      <div className="flex items-center gap-6">
        <Link to="/" className="sm:flex hidden items-center gap-1">
          <p>{t("Be My Client")}</p>
          <FiArrowUpRight />
        </Link>
        <DarkModeToggle />
        <button onClick={() => setNavBarToggle(true)}>
          <FaBars size={28} />
        </button>
      </div>

      <div
        className={`w-full h-screen fixed top-0 bottom-0 bg-mainLight dark:bg-mainDark z-50 duration-500 p-8 ${
          navBarToggle ? "right-0" : "-right-full"
        } `}
      >
        <div className="w-full flex justify-end">
          <button onClick={() => setNavBarToggle(false)}>
            <IoClose size={50} className="text-mainDark dark:text-mainLight" />
          </button>
        </div>
        <ul className="text-mainDark dark:text-mainLight font-semibold text-2xl text-center flex flex-col gap-6 mt-12">
          <li>
            <Link to="/" className={isActive("/") ? "text-mainColor" : ""}>
              {t("Home")}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isActive("/about") ? "text-mainColor" : ""}
            >
              {t("About Me")}
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={isActive("/work") ? "text-mainColor" : ""}
            >
              {t("My Work")}
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className={isActive("/process") ? "text-mainColor" : ""}
            >
              {t("Process")}
            </Link>
          </li>
          <li>
            <Link
              to="/digital-products"
              className={isActive("/digital-products") ? "text-mainColor" : ""}
            >
              {t("Digital Products")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact") ? "text-mainColor" : ""}
            >
              {t("Contact Us")}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex sm:hidden items-center justify-center gap-1"
            >
              <p className="font-medium">{t("Be My Client")}</p>
              <FiArrowUpRight />
            </Link>
          </li>
        </ul>
        <div className="flex lg:hidden flex-col sm:flex-row items-center justify-between font-medium sm:font-semibold text-mainDark dark:text-mainLight absolute bottom-0 left-0 w-full p-8">
          <p className="whitespace-nowrap">
            {t("Graphic Designer | Based in Egypt")}
          </p>
          <p className="whitespace-nowrap">{t("+6 years experience ")}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
