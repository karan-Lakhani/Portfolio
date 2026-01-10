import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <section className="NAVBAR p-3 sm:p-4 md:p-5 mx-2 sm:mx-5 md:mx-10 lg:mx-20 mt-3 sm:mt-4 md:mt-5 font-['Poppins']">
        <div className="NAVBAR flex justify-between items-center capitalize">
          <div className="LOGO">
            <a
              href="#"
              className="text-2xl sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500"
            >
              {"<Karan/>"}
            </a>
          </div>

          <div className="NAVLINKS text-base sm:text-lg md:text-[20px] max-sm:hidden flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 text-[#00040f] dark:text-[#e1e1e1] items-center">
            <a href="#about" className="hover:text-cyan-500 transition-colors whitespace-nowrap">
              Home
            </a>
            <a href="#aboutme" className="hover:text-cyan-500 transition-colors whitespace-nowrap">
              About Me
            </a>
            <a href="#experience" className="hover:text-cyan-500 transition-colors whitespace-nowrap">
              Experience
            </a>
            <a href="#education" className="hover:text-cyan-500 transition-colors whitespace-nowrap">
              Education
            </a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors whitespace-nowrap">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors whitespace-nowrap">
              Contact
            </a>
            <button onClick={handleTheme} className="flex items-center">
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-xl sm:text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-xl sm:text-2xl" />
              )}
            </button>
          </div>

          <button onClick={() => setNav(!nav)} className="sm:hidden">
            <CgMenuRightAlt className="text-[#00040f] dark:text-[#e1e1e1] text-2xl sm:text-[32px]" />
          </button>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};

export default Navbar;
