import { motion } from "framer-motion";
import { zoomIn, staggerContainer, fadeIn } from "../Utils/Motion";
import CardPortfolio from "../Components/CardPortfolio/CardPortfolio";

function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto xl:px-32">
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="pt-24"
      >
        <motion.h1
          variants={zoomIn(0, 1)}
          className="text-4xl font-bold text-center mb-10"
        >
          Portfo<span className="text-teal-500">lio</span>
        </motion.h1>
        <motion.div
          variants={fadeIn("right", "tween", 1, 1)}
          className="flex flex-col justify-center items-center xl:justify-start xl:items-start mb-7"
        >
          <h1 className="text-teal-500 font-bold text-2xl">
            Protect {"i'm"} created
          </h1>
          <p className="text-gray-500 text-center xl:text-start">
            {"I'm"} created a few project while {"i'm"} learning about frontend
            development. and the project {"i'll"} explain below
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-12">
          <CardPortfolio />
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
