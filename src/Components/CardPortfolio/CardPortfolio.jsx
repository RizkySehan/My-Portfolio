import { portfolioList } from "../../Constants/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../Utils/Motion";

function CardPortfolio() {
  return (
    <>
      {portfolioList.map((portfolio) => (
        <motion.div
          variants={fadeIn("up", "Tween", 1, 1)}
          key={portfolio.id}
          className="group hover:border hover:border-teal-500 p-4 shadow-md rounded-xl duration-100 flex flex-col justify-between border-b-2 border-teal-500"
        >
          <div className="overflow-hidden rounded-xl h-64 border border-3">
            <img
              src={portfolio.img}
              alt="Project"
              className="h-full w-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-2xl text-center font-semibold mt-2">
            {portfolio.title}
          </h3>
          <p className="mt-2 text-md">{portfolio.description}</p>
          <div className="flex justify-start items-center gap-3 mt-3">
            {portfolio.techs.map((m, i) => (
              <p key={i} className="text-teal-500 font-semibold italic">
                {m}
              </p>
            ))}
          </div>
          <div className="flex justify-end items-center gap-2 mt-4">
            <Link
              to={portfolio.LinkGithub}
              target="_blank"
              className="cursor-pointer hover:scale-105 duration-300"
            >
              <portfolio.GithubIcon size={20} />
            </Link>
            <Link
              to={portfolio.LinkVercel}
              target="_blank"
              className="cursor-pointer hover:scale-105 duration-500"
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
