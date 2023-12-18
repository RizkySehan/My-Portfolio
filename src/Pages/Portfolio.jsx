import { motion } from "framer-motion";
import { zoomIn, staggerContainer, fadeIn } from "../Utils/Motion";
import CardPortfolio from "../Components/CardPortfolio/CardPortfolio";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Portfolio() {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="portfolio" className="container mx-auto px-5 xl:px-32">
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="pt-24"
      >
        <motion.h1
          variants={zoomIn(0, 1)}
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-3xl lg:text-4xl font-bold text-center mb-10`}
        >
          Portfo
          <span
            className={`${
              theme === "light" ? "text-primary" : "text-altPrimary"
            }`}
          >
            lio
          </span>
        </motion.h1>
        <motion.div
          variants={fadeIn("right", "tween", 1, 1)}
          className="flex flex-col justify-center items-center xl:justify-start xl:items-start mb-7"
        >
          <h1
            className={`${
              theme === "light" ? "text-primary" : "text-altPrimary"
            } font-bold text-xl lg:text-2xl`}
          >
            Project {"i'm"} created
          </h1>
          <p
            className={`${
              theme === "light" ? "text-light" : "text-altLight"
            } text-sm lg:text-lg text-center xl:text-start`}
          >
            {"I'm"} created a few project while {"i'm"} learning about frontend
            development. and the project {"i'll"} explain below
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12">
          <CardPortfolio />
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
