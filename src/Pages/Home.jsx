import ReactTyped from "react-typed";
import { identify, socialMediaList } from "../Constants/Data";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariants,
  zoomIn,
} from "../Utils/Motion";

function Home() {
  const { name, division, description, picture } = identify;

  return (
    <section id="home" className="min-h-screen container mx-auto">
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="flex flex-col xl:flex-row justify-center xl:gap-20 items-center pt-24 xl:pt-40"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.1, 1)}
          className="flex flex-col justify-center items-center xl:justify-normal xl:items-start gap-2 order-last xl:order-first mt-10"
        >
          <h3 className="text-2xl font-bold">Hello, My name is</h3>
          <h1 className="text-4xl xl:text-6xl font-bold">{name}</h1>

          <h2 className="text-3xl xl:text-4xl font-bold"></h2>
          <h2 className="text-3xl xl:text-4xl font-bold ">
            {"And I'm a "}
            <span className="text-teal-500">
              <ReactTyped
                strings={division}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </span>
          </h2>
          <p className="py-4 max-w-lg xl:max-w-xl text-gray-500">
            {description[0]}
          </p>
          <div className="text-4xl flex justify-start gap-3">
            {socialMediaList.map(({ id, SocialMediaIcon, href }) => (
              <a
                href={href}
                target="_blink"
                key={id}
                className="hover:-translate-y-1 duration-500"
              >
                <SocialMediaIcon />
              </a>
            ))}
          </div>
          <motion.div variants={textVariants(1.2)}>
            <Link
              to="about"
              smooth
              duration={500}
              className="flex items-center justify-center gap-1 mt-5 animate-bounce cursor-pointer"
            >
              <p className="text-lg font-semibold">See about me</p>
              <IoArrowDownCircleOutline className="text-4xl text-teal-500" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div variants={zoomIn(0, 1)} className="relative mt-12">
          <div className="bg-gradient-to-r from-teal-500 to-teal-400 rounded-2xl absolute w-full h-full"></div>
          <img
            src={picture[0]}
            alt="PotoProfile"
            className="rounded-2xl mx-auto rotate-0 xl:rotate-12 hover:rotate-0 duration-300"
            width="350px"
            height="350px"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
