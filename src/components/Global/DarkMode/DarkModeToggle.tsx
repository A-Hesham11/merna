import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === `true`;
    setIsDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", String(newMode));
    window.location.reload();
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <MdLightMode size={28} className="hover:text-mainColor hover:scale-125 duration-500" />
      ) : (
        <FaMoon size={28} className="hover:text-mainColor hover:scale-125 duration-500" />
      )}
    </button>
  );
};

export default DarkModeToggle;
