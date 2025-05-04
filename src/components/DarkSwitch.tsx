"use client";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState("light"); // Default to light mode

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "dark" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-primary rounded-md hover:text-primary focus:outline-none"
    >
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeChanger;
