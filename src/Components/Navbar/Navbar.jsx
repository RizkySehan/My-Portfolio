import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { linkList } from "../../Constants/Data";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utils/Motion";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(true);

  return (
    <motion.nav
      variants={fadeIn("down", "tween", 0.3, 0.75)}
      className="flex justify-between p-10 xl:pb-10 xl:mb-12 fixed top-0 left-0 w-screen z-50"
    >
      <a href="#home" className="text-xl font-bold font-burtons">
        Rizky<span className="text-teal-500">Sehan</span>
      </a>
      <div className="hidden md:flex justify-center items-center gap-5">
        {linkList.map(({ title, href }, index) => (
          <Link
            key={index}
            to={href}
            smooth
            duration={500}
            className="text-base font-semibold hover:text-teal-500 cursor-pointer"
          >
            {title}
          </Link>
        ))}
      </div>

      <ul className="hidden md:flex items-center">
        <li onClick={() => setTheme(!theme)}>
          {theme ? (
            <BsFillMoonStarsFill className="cursor-pointer text-xl" />
          ) : (
            <BsFillSunFill className="cursor-pointer text-xl" />
          )}
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-teal-500 to-teal-400 text-white px-4 py-2 rounded-md ml-4 hover:opacity-80 duration-500"
          >
            Resume
          </a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-20 md:hidden"
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
            <li onClick={() => setTheme(!theme)}>
              {theme ? (
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              ) : (
                <BsFillSunFill className="cursor-pointer text-xl" />
              )}
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-black to-gray-700 text-white px-4 py-2 rounded-md ml-4"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
