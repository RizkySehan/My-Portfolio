import { identify, skillsList } from "../Constants/Data";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariants,
  zoomIn,
} from "../Utils/Motion";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function About() {
  const { description, picture } = identify;
  const { theme } = useContext(ThemeContext);

  return (
    <section id="about" className="container mx-auto pt-20 xl:px-32">
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
      >
        <motion.h1
          variants={zoomIn(0, 1)}
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-3xl lg:text-4xl font-bold text-center mb-10`}
        >
          About{" "}
          <span
            className={`${
              theme === "light" ? "text-primary" : "text-altPrimary"
            }`}
          >
            Me
          </span>
        </motion.h1>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-altSecondary"
          } flex justify-around items-center flex-col xl:flex-row gap-10  border-b-2 border-teal-500 p-5 xl:px-32 xl:py-5 shadow-md rounded-xl mx-4 lg:mx-0`}
        >
          <motion.img
            variants={fadeIn("right", "tween", 1, 1.1)}
            src={picture[1]}
            alt="About.Jpeg"
            className="rounded-full w-60 h-60 xl:rounded-lg lg:w-80 lg:h-80"
          />
          <div
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } flex flex-col gap-6 text-sm lg:text-lg font-semibold`}
          >
            <motion.p variants={textVariants(1.1)}>{description[1]}</motion.p>
            <motion.p variants={textVariants(1.2)}>{description[2]}</motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="mt-10"
      >
        <motion.h1
          variants={zoomIn(1, 1)}
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-2xl lg:text-3xl font-semibold text-center mb-3`}
        >
          Skill
          <span
            className={`${
              theme === "light" ? "text-primary" : "text-altPrimary"
            }`}
          >
            s
          </span>
        </motion.h1>
        <motion.p
          variants={textVariants(1.4)}
          className={`${
            theme === "light" ? "text-light" : "text-altLight"
          } text-sm lg:text-lg font-semibold text-center mb-10 mx-4 lg:mx-0`}
        >
          There are some{" "}
          <span
            className={`${
              theme === "light" ? "text-primary" : "text-altPrimary"
            } font-bold italic`}
          >
            Tech Stack & Tools
          </span>{" "}
          that {"i've"} learning and experienced below
        </motion.p>
        <div className="grid grid-cols-2 gap-4 px-10 md:px-0 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 md:gap-x-3 md:gap-y-8">
          {skillsList.map(({ SkillIcon, title, level }, index) => (
            <motion.div
              variants={fadeIn("up", "tween", 1, 1)}
              key={index}
              className={`${
                theme === "light"
                  ? "bg-white border-b-2 border-primary"
                  : "bg-altSecondary border-b-2 border-altPrimary"
              } flex justify-center items-center flex-col rounded-lg shadow-lg w-36 md:w-56 2xl:w-64 h-16 hover:-translate-y-1 cursor-pointer relative duration-500`}
            >
              <motion.div
                variants={textVariants(1.6)}
                className="flex justify-around items-center mb-4 w-full"
              >
                <SkillIcon
                  className={`${
                    theme === "light" ? "text-primary" : "text-altPrimary"
                  } text-2xl md:text-4xl`}
                />
                <p
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } font-semibold text-lg md:text-xl`}
                >
                  {title}
                </p>
              </motion.div>
              <p
                className={`${
                  theme === "light" ? "text-light" : "text-altLight"
                } flex justify-center items-end absolute w-full h-full opacity-0 hover:opacity-100 duration-300`}
              >
                {level}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
