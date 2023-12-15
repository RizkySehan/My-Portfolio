import { socialMediaList, linkList } from "../../Constants/Data";
import { Link } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../Utils/Motion";

function Footer() {
  return (
    <motion.div
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="show"
      initial="hidden"
      className="bg-teal-500 w-full mt-32 flex flex-col justify-center items-center"
    >
      <Link
        to="home"
        smooth
        duration={500}
        className="text-4xl text-white py-5 animate-bounce cursor-pointer"
      >
        <IoIosArrowUp />
      </Link>
      <motion.div
        variants={fadeIn("down", "tween", 1, 1.1)}
        className="text-2xl flex justify-start gap-3"
      >
        {socialMediaList.map(({ id, SocialMediaIcon, href }) => (
          <a
            href={href}
            target="_blink"
            key={id}
            className=" p-2 bg-white rounded-lg hover:-translate-y-1 duration-500"
          >
            <SocialMediaIcon />
          </a>
        ))}
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 1, 1, 2)}
        className="flex gap-5 pt-4 text-white"
      >
        {linkList.map(({ title, href }, index) => (
          <Link
            key={index}
            to={href}
            smooth
            duration={500}
            className="text-base font-semibold hover:scale-105 duration-200 cursor-pointer"
          >
            {title}
          </Link>
        ))}
      </motion.div>
      <div className="w-full bg-teal-700 text-center mt-4">
        <motion.p
          variants={fadeIn("down", "tween", 1, 1.3)}
          className="text-white text-md p-1"
        >
          &#169; MuhammadRizkyRamdhani All Rights reserved
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Footer;
