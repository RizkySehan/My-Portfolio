import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiGithub,
  SiNpm,
  SiGit,
} from "react-icons/si";

export const identify = {
  name: "Muhammad Rizky Ramdhani",
  division: ["Frontend Developer", "College Student"],
  description: [
    "Recently, I have enjoyed exploring the JavaScript programming language, especially React.js",
    "Hi everyone! My name is Muhammad Rizky Ramdhani, I am a web developer from bekasi, west java. i am a person who has a high enthusiasm for all things programming and always feels challenged to work on new projects to create web-based applications, especially in the field of Front End. I really enjoy what I do now, I think that creating programs is not only about programming, but also about teamwork.",
    "As an informatics student, I have been involved in several projects at programming events, and in several assignments in college to create programs and work together in teams. I really enjoy what I am doing right now, in my opinion creating programs is not just a job but also an art that has aesthetic value.",
  ],
  picture: ["/profile.jpeg", "/about.jpeg"],
};

export const socialMediaList = [
  {
    SocialMediaIcon: FaLinkedin,
    href: "http://www.linkedin.com/in/rizkysehan",
  },
  {
    SocialMediaIcon: FaGithub,
    href: "https://github.com/RizkySehan",
  },
  {
    SocialMediaIcon: FaInstagram,
    href: "https://www.instagram.com/rizkysehann",
  },
];

export const skillsList = [
  {
    SkillIcon: SiHtml5,
    title: "HTML",
    level: "Advanced",
    tech: true,
  },
  {
    SkillIcon: SiCss3,
    title: "CSS",
    level: "Advanced",
    tech: true,
  },
  {
    SkillIcon: SiJavascript,
    title: "JavaScript",
    level: "Intermediate",
    tech: true,
  },
  {
    SkillIcon: SiReact,
    title: "React JS",
    level: "Intermediate",
    tech: true,
  },
  {
    SkillIcon: SiNextdotjs,
    title: "Next JS",
    level: "Basic",
    tech: true,
  },
  {
    SkillIcon: SiTailwindcss,
    title: "Tailwind CSS",
    level: "Intermediate",
    tech: true,
  },
  {
    SkillIcon: SiBootstrap,
    title: "Bootstrap",
    level: "Intermediate",
    tech: true,
  },
  {
    SkillIcon: SiGithub,
    title: "Github",
    level: "Intermediate",
    tech: false,
  },
  {
    SkillIcon: SiNpm,
    title: "NPM",
    level: "Intermediate",
    tech: false,
  },
  {
    SkillIcon: SiGit,
    title: "GIT",
    level: "Intermediate",
    tech: false,
  },
];
