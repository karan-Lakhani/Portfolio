import { useState, useEffect } from "react";

const Menu = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="text-base sm:text-lg tracking-wider leading-8 sm:leading-10 border shadow-xl border-slate-300 text-[#00040f] dark:text-slate-300 mt-3 sm:mt-5 w-[140px] sm:w-[150px] p-3 rounded-lg hidden bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] max-sm:block absolute right-2 sm:right-5 top-14 sm:top-16 z-50">
      <ul className="pl-2 space-y-1 sm:space-y-0">
        <li>
          <a href="#about" className="block hover:text-cyan-500 transition-colors">Home</a>
        </li>
        <li>
          <a href="#aboutme" className="block hover:text-cyan-500 transition-colors">About Me</a>
        </li>
        <li>
          <a href="#experience" className="block hover:text-cyan-500 transition-colors">Experience</a>
        </li>
        <li>
          <a href="#education" className="block hover:text-cyan-500 transition-colors">Education</a>
        </li>
        <li>
          <a href="#projects" className="block hover:text-cyan-500 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#contact" className="block hover:text-cyan-500 transition-colors">Contact</a>
        </li>
        <li className="mt-2 sm:mt-0">
          <button
            className="text-base sm:text-xl font-semibold tracking-widest hover:text-cyan-500 transition-colors"
            onClick={handleTheme}
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
