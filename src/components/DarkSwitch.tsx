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
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-500 rounded-md hover:text-primary focus:outline-none"
    >
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeChanger;
