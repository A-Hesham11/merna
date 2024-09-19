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
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <MdLightMode size={28} /> : <FaMoon size={28} />}
    </button>
  );
};

export default DarkModeToggle;
