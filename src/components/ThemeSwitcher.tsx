import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<string | null>(null);

  useEffect(() => {
    setDarkMode(localStorage.getItem("darkMode")!);
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      document.documentElement.classList.toggle("dark", darkMode === "dark");
      localStorage.setItem("darkMode", darkMode as unknown as string);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className="md:static absolute top-5 right-5">
      <DarkModeSwitch checked={darkMode === null ? false : darkMode === "light" ? false : true} onChange={toggleDarkMode} size={30} />
    </div>
  );
};

export default ThemeSwitcher;
