import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../Utils/Motion";
import CardContact from "../Components/CardContact/CardContact";
import { FaPaperPlane } from "react-icons/fa";
import { useContext, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const { theme } = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVER_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your Message is Succesfully Sended!",
          timer: 2500,
        });
      })
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 2500,
        })
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="container mx-auto px-8 xl:px-32">
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
          } text-3xl lg:text-4xl font-bold text-center mb-14`}
        >
          Contact{" "}
          <span
            className={`${
              theme === "light" ? "text-primary" : "text-altPrimary"
            }`}
          >
            Me
          </span>
        </motion.h1>
        <div className="flex justify-between flex-col lg:flex-row gap-5">
          <motion.div
            variants={fadeIn("down", "tween", 1, 1)}
            className="flex-1"
          >
            <div className="flex flex-col gap-y-4 mb-4 items-center lg:items-start">
              <h1
                className={`${
                  theme === "light" ? "text-primary" : "text-altPrimary"
                } text-2xl lg:text-3xl font-semibold`}
              >
                {"Let's discuss your project"}
              </h1>
              <p
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } lg:text-lg font-semibold`}
              >
                Just contact me with this media below
              </p>
            </div>
            <CardContact />
          </motion.div>
          <motion.div
            variants={fadeIn("down", "tween", 1, 1.2)}
            className="flex-1"
          >
            <div className="flex flex-col gap-y-4 mb-4 items-center lg:items-start mt-8 lg:mt-0">
              <h1
                className={`${
                  theme === "light" ? "text-primary" : "text-altPrimary"
                } text-2xl lg:text-3xl font-semibold`}
              >
                Feel free to contact me
              </h1>
              <p
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } lg:text-lg font-semibold`}
              >
                Or contact me through this form
              </p>
            </div>
            <form
              action=""
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-y-5"
            >
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                required
                className={`${
                  theme === "light"
                    ? "border border-primary"
                    : "border border-altPrimary"
                } p-6 w-full rounded-lg bg-teal-500/10 placeholder:text-teal-500 placeholder:font-medium focus:outline-none focus:bg-white`}
              />

              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
                className={`${
                  theme === "light"
                    ? "border border-primary"
                    : "border border-altPrimary"
                } p-6 w-full rounded-lg bg-teal-500/10 placeholder:text-teal-500 placeholder:font-medium focus:outline-none focus:bg-white`}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                className={`${
                  theme === "light"
                    ? "border border-primary"
                    : "border border-altPrimary"
                } p-6 h-64 w-full rounded-lg bg-teal-500/10 placeholder:text-teal-500 placeholder:font-medium focus:outline-none focus:bg-white`}
              />
              <button
                type="submit"
                className="flex items-center gap-x-3 px-6 py-3 w-fit shadow-lg rounded-md bg-teal-500 text-white font-medium hover:text-teal-500 hover:bg-white hover:border hover:border-teal-500 duration-500"
              >
                Submit <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
