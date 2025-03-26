

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ToggleButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check user's saved theme in localStorage
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-32 h-16 rounded-full p-1 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.1),0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 relative ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
      aria-label="Toggle theme"
    >
      {/* Background icons */}
      <div className="absolute inset-0 flex justify-between items-center px-3 pointer-events-none">
        <Sun 
          className={`h-8 w-8 text-blue-500 transition-opacity duration-300 ${
            isDark ? "opacity-30" : "opacity-100"
          }`} 
        />
        <Moon 
          className={`h-8 w-8 text-blue-500 transition-opacity duration-300 ${
            isDark ? "opacity-100" : "opacity-30"
          }`} 
        />
      </div>
      
      {/* Moving toggle */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-sm transition-all duration-300 ease-in-out ${
          isDark
            ? "translate-x-16 bg-blue-600"
            : "translate-x-0 bg-blue-600"
        }`}
      >
        {isDark ? (
          <Moon className="h-8 w-8 text-white" />
        ) : (
          <Sun className="h-8 w-8 text-white" />
        )}
      </div>
    </button>
  );
}