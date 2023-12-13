import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "../Utils/Motion";
import CardContact from "../Components/CardContact/CardContact";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="container mx-auto xl:px-32">
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="pt-24"
      >
        <motion.h1
          variants={zoomIn(0, 1)}
          className="text-4xl font-bold text-center mb-14"
        >
          Contact <span className="text-teal-500">Me</span>
        </motion.h1>
        <div className="flex justify-between flex-col lg:flex-row gap-5">
          <div className="flex-1">
            <div className="flex flex-col gap-y-4 mb-4 items-center lg:items-start">
              <h1 className="text-3xl font-semibold text-teal-500">
                {"Let's discuss your project"}
              </h1>
              <p className="text-lg font-semibold">
                Just contact me with this media below
              </p>
            </div>
            <CardContact />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-y-4 mb-4 items-center lg:items-start mt-8 lg:mt-0">
              <h1 className="text-3xl font-semibold text-teal-500">
                Feel free to contact me
              </h1>
              <p className="text-lg font-semibold">
                Or contact me through this form
              </p>
            </div>
            <form action="" className="flex flex-col gap-y-5">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                className="border border-teal-500 p-6 w-full rounded-lg bg-teal-500/10 placeholder:text-teal-500 placeholder:font-medium focus:outline-none focus:bg-white"
              />

              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="border border-teal-500 p-6 w-full rounded-lg bg-teal-500/10 placeholder:text-teal-500 placeholder:font-medium focus:outline-none focus:bg-white"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="border border-teal-500 p-6 h-64 w-full rounded-lg bg-teal-500/10 placeholder:text-teal-500 placeholder:font-medium focus:outline-none focus:bg-white"
              />
              <button
                type="submit"
                className="flex items-center gap-x-3 px-6 py-3 w-fit shadow-lg rounded-md bg-teal-500 text-white font-medium hover:text-teal-500 hover:bg-white hover:border hover:border-teal-500 duration-500"
              >
                Submit <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
