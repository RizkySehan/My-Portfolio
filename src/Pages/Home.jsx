import ReactTyped from "react-typed";
import { identify, socialMediaList } from "../Constants/Data";
import { IoArrowDownCircleOutline } from "react-icons/io5";

function Home() {
  const { name, division, description, picture } = identify;

  return (
    <section className="h-full container mx-auto  mb-24 xl:mb-52">
      <div className="flex flex-col xl:flex-row justify-center xl:gap-20 items-center">
        <div className="flex flex-col justify-center items-center xl:justify-normal xl:items-start gap-2 order-last xl:order-first mt-10">
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
            {socialMediaList.map(({ SocialMediaIcon, href }, index) => (
              <a href={href} key={index}>
                <SocialMediaIcon />
              </a>
            ))}
          </div>
          <a
            href="#about"
            className="flex items-center justify-center gap-1 mt-5 animate-bounce"
          >
            <p className="text-lg font-semibold">See about me</p>
            <IoArrowDownCircleOutline className="text-4xl text-teal-500" />
          </a>
        </div>
        <div className="relative mt-12">
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl absolute w-full h-full"></div>
          <img
            src={picture[0]}
            alt="PotoProfile"
            className="rounded-2xl mx-auto rotate-0 xl:rotate-12 hover:rotate-0 duration-300"
            width="350px"
            height="350px"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
