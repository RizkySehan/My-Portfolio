import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { linkList, identify } from "../../Constants/Data";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../Utils/Motion";
import { Link } from "react-scroll";
import { ThemeContext } from "../../Context/ThemeContext";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { CV } = identify;

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
    ),
      [];
  });

  return (
    <motion.header
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      className={`${
        isScrolled && theme === "light"
          ? "shadow-lg lg:bg-glassmorph bg-white"
          : isScrolled && theme === "dark"
          ? "shadow-lg lg:bg-glassmorph bg-[#0e1b31]"
          : "shadow-none bg-transparent"
      } px-10 py-6 fixed top-0 left-0 w-full transition-all lg:backdrop-blur-[20px] z-50`}
    >
      <motion.nav
        variants={fadeIn("down", "tween", 0.3, 0.75)}
        className="flex justify-between"
      >
        <Link
          to="home"
          smooth
          duration={500}
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-xl font-bold font-burtons cursor-pointer`}
        >
          Rizky
          <span
            className={`${
              theme === "light" ? "text-primary" : "text-altPrimary"
            }`}
          >
            Sehan
          </span>
        </Link>
        <div
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } hidden md:flex justify-center items-center gap-5`}
        >
          {linkList.map(({ title, href }, index) => (
            <Link
              key={index}
              to={href}
              smooth
              duration={500}
              className={`${
                theme === "light"
                  ? "hover:text-primary"
                  : "hover:text-altPrimary"
              } text-base font-semibold cursor-pointer`}
            >
              {title}
            </Link>
          ))}
        </div>

        <ul className="hidden md:flex items-center">
          <li onClick={toggleTheme}>
            {theme === "light" ? (
              <BsFillSunFill className="cursor-pointer text-xl" />
            ) : (
              <BsFillMoonStarsFill className="cursor-pointer text-xl text-white" />
            )}
          </li>
          <li>
            <a
              href={CV}
              target="_blink"
              className="bg-gradient-to-r from-teal-500 to-teal-400 text-white px-4 py-2 rounded-md ml-4 hover:opacity-80 duration-500"
            >
              Resume
            </a>
          </li>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } cursor-pointer z-20 md:hidden`}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <div className="flex flex-col gap-y-8 justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-500 to-teal-500 z-10">
            {linkList.map(({ title, href }, index) => (
              <Link
                key={index}
                to={href}
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
                className="text-4xl capitalize text-white hover:text-teal-200 cursor-pointer"
              >
                {title}
              </Link>
            ))}
            <ul className="flex items-center">
              <li onClick={toggleTheme}>
                {theme === "light" ? (
                  <BsFillSunFill className="cursor-pointer text-xl" />
                ) : (
                  <BsFillMoonStarsFill className="cursor-pointer text-xl" />
                )}
              </li>
              <li>
                <a
                  href={CV}
                  target="_blink"
                  className="bg-gradient-to-r from-black to-gray-700 text-white px-4 py-2 rounded-md ml-4"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </motion.nav>
    </motion.header>
  );
}

export default Navbar;
