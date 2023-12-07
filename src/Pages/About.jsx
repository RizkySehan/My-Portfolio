import { identify, skillsList } from "../Constants/Data";

function About() {
  const { description, picture } = identify;

  return (
    <section
      className="h-full container mx-auto pt-24 xl:pt-0 xl:px-32"
      id="about"
    >
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">
          About <span className="text-teal-500">Me</span>
        </h1>
        <div className="flex justify-around items-center flex-col xl:flex-row gap-10 bg-gradient-to-br from-cyan-500 to-teal-400 p-5 xl:bg-transparent xl:px-32 xl:py-5 shadow-xl rounded-xl">
          <img
            src={picture[1]}
            alt="About.Jpeg"
            className="rounded-full w-80 h-80"
          />
          <div className="flex flex-col gap-6 text-lg font-semibold text-white">
            <p>{description[1]}</p>
            <p>{description[2]}</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">
          <div className="relative flex py-5 items-center gap-4">
            <div className="flex-grow border-t border-gray-400"></div>
            Skills
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </h1>
        <p className="text-lg font-semibold text-center mb-10 text-gray-500">
          There are some{" "}
          <span className="text-teal-500 font-bold italic">
            Tech Stack & Tools
          </span>{" "}
          that {"i've"} learning and experienced below
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-8">
          {skillsList.map(({ SkillIcon, title, level }, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col rounded-lg shadow-lg w-56 xl:w-64 h-16 hover:-translate-y-1 hover:opacity-100 cursor-pointer relative duration-500"
            >
              <div className="flex justify-around items-center mb-4 w-full">
                <SkillIcon className="text-4xl text-teal-500" />
                <p className="font-semibold text-xl">{title}</p>
              </div>
              <p className="flex justify-center items-end text-slate-400 absolute w-full h-full opacity-0 hover:opacity-100 duration-300">
                {level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
