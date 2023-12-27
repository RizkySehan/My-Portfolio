import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
  SiRedux,
} from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export const identify = {
  name: "Muhammad Rizky Ramdhani",
  division: ["Frontend Developer", "College Student"],
  description: [
    "Recently, I have enjoyed exploring the JavaScript programming language, especially React.js",
    "Hi everyone! My name is Muhammad Rizky Ramdhani, I am a web developer from bekasi, west java. i am a person who has a high enthusiasm for all things programming and always feels challenged to work on new projects to create web-based applications, especially in the field of Front End. I really enjoy what I do now, I think that creating programs is not only about programming, but also about teamwork.",
    "As an informatics student, I have been involved in several projects at programming events, and in several assignments in college to create programs and work together in teams. I really enjoy what I am doing right now, in my opinion creating programs is not just a job but also an art that has aesthetic value.",
  ],
  picture: ["image/profile.jpeg", "image/about.jpeg"],
  CV: "pdf/CV.pdf",
};

export const linkList = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Portfolio",
    href: "portfolio",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

export const socialMediaList = [
  {
    id: 1,
    SocialMediaIcon: FaLinkedin,
    href: "http://www.linkedin.com/in/rizkysehan",
  },
  {
    id: 2,
    SocialMediaIcon: FaGithub,
    href: "https://github.com/RizkySehan",
  },
  {
    id: 3,
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
    SkillIcon: SiRedux,
    title: "Redux",
    level: "Basic",
    tech: true,
  },
  {
    SkillIcon: SiTailwindcss,
    title: "Tailwind",
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

export const portfolioList = [
  {
    id: 1,
    title: "Rental Car Binar",
    description:
      "Using Bootstrap HTML I have created a simple Binar Car Rental website that can display data about what is provided and this is just a display only",
    img: "image/project_1.jpeg",
    techs: ["HTML", "Bootstrap"],
    GithubIcon: FiGithub,
    LinkIcon: IoOpenOutline,
    LinkGithub: "https://github.com/RizkySehan/RentalMobil-Bootstrap",
    LinkVercel: "https://rental-car-binar.vercel.app/",
  },
  {
    id: 2,
    title: "TodoList App",
    description:
      "To-Do List program that I created using React JS is a application that can record the activities you are going to do and then delete those activities or marked as done when you are done",
    img: "image/project_2.jpeg",
    techs: ["React", "Bootstrap"],
    GithubIcon: FiGithub,
    LinkIcon: IoOpenOutline,
    LinkGithub: "https://github.com/RizkySehan/React-todolist-app",
    LinkVercel: "https://reactjs-todolist-app.vercel.app/",
  },
  {
    id: 3,
    title: "Movie List",
    description:
      "The Movie List application that I created using React JS, Tailwind CSS and Redux that can fetch data or save data from the TMDB API and display the data into several movie lists and we can search for the latest movie information this month and can search for movies that you want to know in detail",
    img: "image/project_3.jpeg",
    techs: ["React", "Redux", "Tailwind"],
    GithubIcon: FiGithub,
    LinkIcon: IoOpenOutline,
    LinkGithub: "https://github.com/RizkySehan/MovieList-React",
    LinkVercel: "https://react-app-movie-sigma.vercel.app/",
  },
  {
    id: 4,
    title: "Ruang Edukasi App",
    description:
      "Ruang Edukasi is a collaborative project between the Frontend and Backend teams. The project we created is a kind of paid online course with various features in general when accessing famous online courses.",
    img: "image/project_4.jpeg",
    techs: ["React", "Redux", "Tailwind"],
    GithubIcon: FiGithub,
    LinkIcon: IoOpenOutline,
    LinkGithub: "https://github.com/RizkySehan/ruangEdukasi-finalProject",
    LinkVercel: "https://ruang-edukasi-final-project.vercel.app/",
  },
];

export const contactCardList = [
  {
    ContactIcon: BsFillTelephoneFill,
    title: "Telephone",
    contact: "+628 977 580 200",
    href: "tel://08977580200",
  },
  {
    ContactIcon: MdEmail,
    title: "Email",
    contact: "rizkysehan@gmail.com",
    href: "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rizkysehan@gmail.com",
  },
  {
    ContactIcon: FaWhatsapp,
    title: "Whatsapp",
    contact: "+628 977 580 200",
    href: "https://wa.me/08977580200",
  },
];
