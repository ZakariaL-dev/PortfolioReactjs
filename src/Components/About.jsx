import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { Container } from "@mui/material";

const About = () => {
  // frontend
  const front = [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      id: 5,
      name: "React Js",
      icon: <FaReact />,
    },
  ];
  const FrontDisplay = front.map((c) => {
    return (
      <div
        key={c.id}
        className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer flex gap-1.5 items-center text-sm"
      >
        {c.icon}
        {c.name}
      </div>
    );
  });
  const back = [
    {
      id: 1,
      name: "Node Js",
      icon: <FaNodeJs />,
    },
    {
      id: 2,
      name: "Express Js",
      icon: <SiExpress />,
    },
    {
      id: 3,
      name: "Mongo DB",
      icon: <BiLogoMongodb />,
    },
  ];
  const BackDisplay = back.map((c) => {
    return (
      <div
        key={c.id}
        className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer flex gap-1.5 items-center text-sm"
      >
        {c.icon}
        {c.name}
      </div>
    );
  });
  // tools
  const tools = [
    {
      id: 1,
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      id: 2,
      name: "Github",
      icon: <FaGithub />,
    },
    {
      id: 3,
      name: "VSCode",
      icon: <VscVscode />,
    },
    {
      id: 4,
      name: "Postman",
      icon: <SiPostman />,
    },
  ];
  const ToolDisplay = tools.map((c) => {
    return (
      <div
        key={c.id}
        className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer flex gap-1.5 items-center text-sm"
      >
        {c.icon}
        {c.name}
      </div>
    );
  });
  // Graphic
  const GraphicSkills = [
    {
      id: 1,
      name: "Social Media Designs",
    },
    {
      id: 2,
      name: "Brand Identity",
    },
    {
      id: 3,
      name: "Print & Stationery",
    },
    {
      id: 4,
      name: "Marketing & Advertising",
    },
    {
      id: 5,
      name: "Publishing & Misc",
    },
  ];
  const GraphicDisplay = GraphicSkills.map((g) => {
    return (
      <div
        key={g.id}
        className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer text-sm"
      >
        {g.name}
      </div>
    );
  });
  return (
    <div className="text-center bg-[#87CBB9] pt-20">
      <h1 className="text-slate-50 text-center text-4xl font-bold relative after:content-[''] after:bg-[#B9EDDD] after:w-[150px] after:h-[5px] after:absolute after:rounded-[20px] after:mt-[50px] after:left-1/2 after:-translate-x-1/2">
        About Me
      </h1>
      {/* content */}
      <div className="pt-14 flex flex-row justify-around items-start flex-wrap lg:px-20">
        {/* My Photo */}
        <img src="/pics/My Character.svg" className="w-80 mb-7" />
        {/* shadow-[0px_0px_6px_1px_rgba(87,125,134,0.7)] */}
        <div className="px-10 lg:w-3/5 text-left">
          <p className="text-slate-50 mb-3 text-center text-lg">
            I enjoy building clean interfaces and solving problems with code. I
            am aiming for{" "}
            <span className="text-lime-800 font-bold">
              Junior Web Developer and Graphic Designer roles
            </span>{" "}
            , where i can grow while contributing solid UI and responsive
            components.
          </p>
          {/* graphic */}
          <h4 className="font-semibold underline my-5 text-lime-800 text-xl">
            Graphic Design
          </h4>
          <div className="flex flex-row flex-wrap justify-start items-center gap-4 mb-5 font-bold text-[#11694f]">
            {GraphicDisplay}
          </div>
          {/* dev */}
          <h4 className="font-semibold underline my-3 text-lime-800 text-xl">
            Web Developer
          </h4>
          <div>
            {/* specialties */}
            <div>
              <div>
                <h1 className="text-[#11694f] text-lg font-semibold mb-2.5">
                  Front-End
                </h1>
                <div className="flex flex-row flex-wrap justify-start items-center gap-4 mb-5 font-bold text-[#11694f]">
                  {FrontDisplay}
                </div>
              </div>
              <div>
                <h1 className="text-[#11694f] text-lg font-semibold mb-2.5">
                  Back-End Basics
                </h1>
                <div className="flex flex-row flex-wrap justify-start items-center gap-4 mb-5 font-bold text-[#11694f]">
                  {BackDisplay}
                </div>
              </div>
              <div>
                <h1 className="text-[#11694f] text-lg font-semibold mb-2.5">
                  Tools
                </h1>
                <div className="flex flex-row flex-wrap justify-start items-center gap-4 mb-5 font-bold text-[#11694f]">
                  {ToolDisplay}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container
        maxWidth="xl"
        className="flex flex-wrap w-full items-start justify-center text-left gap-8"
      >
        {/* Front focus */}
        <div className="lg:w-[45%] w-full">
          <h1 className="font-semibold underline my-5 text-lime-800 text-xl">
            Frontend Focus
          </h1>
          <div className="flex flex-wrap flex-3 items-stretch gap-3.5 text-[#118667]">
            <div className="bg-[#B9EDDD] p-6 rounded-xl sm:max-w-[40%] w-full hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5">
              <h3 className="font-bold mb-1.5">Looking for:</h3>
              <p>Junior Front-End / React roles</p>
            </div>
            <div className="bg-[#B9EDDD] p-6 rounded-xl sm:max-w-[40%] w-full hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5">
              <h3 className="font-bold mb-1.5">Motivated by:</h3>
              <p>Clean UI, practical apps, component-based design</p>
            </div>
            <div className="bg-[#B9EDDD] p-6 rounded-xl sm:max-w-[40%] w-full hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5">
              <h3 className="font-bold mb-1.5">Currently learning:</h3>
              <p>Authentication, PostgreSQL, Next js</p>
            </div>
          </div>
        </div>
        {/* Graphic focus */}
        <div className="lg:w-[45%] w-full">
          <h1 className="font-semibold underline my-5 text-lime-800 text-xl">
            Design Focus
          </h1>
          <div className="flex flex-wrap flex-3 items-stretch gap-3.5 text-[#118667]">
            <div className="bg-[#B9EDDD] p-6 rounded-xl sm:max-w-[40%] w-full hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5">
              <h3 className="font-bold mb-1.5">Looking for:</h3>
              <p>Branding, visual identity, social media design projects</p>
            </div>
            <div className="bg-[#B9EDDD] p-6 rounded-xl sm:max-w-[40%] w-full hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5">
              <h3 className="font-bold mb-1.5">Motivated by:</h3>
              <p>
                Strong minimal visuals, clear typography, real-world
                deliverables
              </p>
            </div>
            <div className="bg-[#B9EDDD] p-6 rounded-xl sm:max-w-[40%] w-full hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5">
              <h3 className="font-bold mb-1.5">Currently learning:</h3>
              <p>
                Business cards, flyers, invitations, social media layouts,
                identity systems
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex justify-center items-center gap-4 flex-wrap py-8 ">
        <button className="py-3 px-5 rounded-xl cursor-pointer font-bold text-[#11694f] flex items-center gap-1.5 btnhvr border-2 border-[#11694f] hover:-translate-y-1 hover:bg-[#56b89a]">
          {/* <FaFileDownload className="text-lg" /> */}
          <Link to="/dev">See my developer projects</Link>
        </button>
        <button className="btnhvr bg-[#11694f] text-slate-100 py-3 px-6 rounded-xl cursor-pointer font-bold btnhvr hover:text-teal-100 hover:-translate-y-1 ">
          <Link to="/graphic">View my design work</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
