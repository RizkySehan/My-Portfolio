import { portfolioList } from "../../Constants/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utils/Motion";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function CardPortfolio() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {portfolioList.map((portfolio) => (
        <motion.div
          variants={fadeIn("up", "Tween", 1, 1)}
          key={portfolio.id}
          className={`${
            theme === "light"
              ? "bg-white border-b-2 border-primary"
              : "bg-altSecondary border-b-2 border-altPrimary"
          } group hover:border hover:border-teal-500 p-4 shadow-md rounded-xl duration-100 flex flex-col justify-between`}
        >
          <div className="overflow-hidden rounded-xl h-64 border border-3">
            <img
              src={portfolio.img}
              alt="Project"
              className="h-full w-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <h3
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } text-2xl text-center font-semibold mt-2`}
          >
            {portfolio.title}
          </h3>
          <p
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } mt-2 text-md`}
          >
            {portfolio.description}
          </p>
          <div className="flex justify-start items-center gap-3 mt-3">
            {portfolio.techs.map((m, i) => (
              <p
                key={i}
                className={`${
                  theme === "light" ? "text-primary" : "text-altPrimary"
                } font-semibold italic`}
              >
                {m}
              </p>
            ))}
          </div>
          <div className="flex justify-end items-center gap-2 mt-4">
            <Link
              to={portfolio.LinkGithub}
              target="_blank"
              className={`${
                theme === "light" ? "text-black" : "text-white"
              } cursor-pointer hover:scale-105 duration-300`}
            >
              <portfolio.GithubIcon size={20} />
            </Link>
            <Link
              to={portfolio.LinkVercel}
              target="_blank"
              className={`${
                theme === "light" ? "text-black" : "text-white"
              } cursor-pointer hover:scale-105 duration-500`}
            >
              <portfolio.LinkIcon size={20} />
            </Link>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default CardPortfolio;
