import { Container } from "@mui/material";

import { FaGithubAlt } from "react-icons/fa";
import { LuScreenShare } from "react-icons/lu";
import { TbArrowBigDownLines } from "react-icons/tb";
import { MdTouchApp } from "react-icons/md";

import { Link } from "react-router-dom/cjs/react-router-dom";

const FrontEndProjects = () => {
  // Front End
  const FrontProject = [
    {
      id: 1,
      pic: "/codingscreenshots/ToDoList-ReactJS.svg",
      title: "ToDo List - React JS",
      desc: "A fast and responsive task manager built with React, featuring task creation, completion toggles, deletion, and category-based filtering. It stores data in LocalStorage and uses Tailwind + Material UI to deliver a clean, intuitive experience.",
      tags: "React, Vite, Tailwind CSS, Material UI, React Icons",
      livelink: "https://ttodolists-reactjs.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/ToDoList-using-ReactJS",
    },
    {
      id: 2,
      pic: "/codingscreenshots/WeatherApp-ReactJS.svg",
      title: "Weather App - React JS",
      desc: "A sleek weather dashboard that fetches real-time temperature, humidity, wind, and condition icons using Axios. Its responsive interface provides instant local or global weather insights without unnecessary clutter.",
      tags: "React, Vite, Tailwind CSS, Material UI, React Icons, Axios, OpenWeather API",
      livelink: "https://waeatherapp.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/WeatherAPP-using-ReactJS",
    },
    // {
    //   id: 3,
    //   pic: "/codingscreenshots/PrayerTime-VanillaJS.svg",
    //   title: "Prayer Time - Vanilla JS",
    //   desc: "A simple and accurate prayer time tracker that displays daily timings for major cities worldwide. It shows both Gregorian and Hijri dates, fetches times dynamically, and offers a clean interface for quick daily reference.",
    //   tags: "HTML, CSS, JavaScript, Axios, Font Awesome",
    //   livelink: "https://prayerttimes.netlify.app/",
    //   githublink: "https://github.com/ZakariaL-dev/Prayer-Time",
    // },
    {
      id: 4,
      pic: "/codingscreenshots/TimeManager-VanillaJS.svg",
      title: "Time Manager - Vanilla JS",
      desc: "An all-in-one time utility offering a world clock, stopwatch, and customizable timer. Designed for clarity and speed, it helps users stay organized, track events, and manage time effectively across multiple use cases.",
      tags: "HTML, CSS, JavaScript, Font Awesome",
      livelink: "https://timemmanagers.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/TimeManager",
    },
    {
      id: 5,
      pic: "/codingscreenshots/ToDoList-VanillaJS.svg",
      title: "Student Task Manager - Vanilla JS",
      desc: "A lightweight academic task manager where students can add assignments, projects, and exam reminders with due dates. It includes filters for pending, completed, and priority tasks, helping users stay on top of their workload effortlessly.",
      tags: "HTML, CSS, JavaScript, Font Awesome",
      livelink: "https://todolist-vanillajsc.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/ToDoList-VanillaJS",
    },
    {
      id: 6,
      pic: "/codingscreenshots/NoteTakerApp-VanillaJS.svg",
      title: "Note Taker App - Vanilla JS",
      desc: "A simple note-taking dashboard that allows users to create, organize, and delete notes with ease. Notes are saved in LocalStorage and displayed in a clean card layout for fast access and efficient organization.",
      tags: "HTML, CSS, JavaScript, LocalStorage",
      livelink: "https://notetakingapp10.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/NoteTaker",
    },
  ];
  const FrontEndDisplay = FrontProject.map((f) => {
    const multitag = f.tags
      .split(/,\s*/)
      .filter((t) => t.trim() !== "")
      .map((t) => {
        return (
          <div class="rounded-full bg-lime-600 text-white text-center px-3 py-1 text-xs font-medium">
            {t}
          </div>
        );
      });
    return (
      <div
        key={f.id}
        className="relative lg:max-w-[32%] md:max-w-[46%] rounded-2xl transition-all duration-500 shadow-lg bg-[#87CBB9] ease-out hover:-translate-y-3"
      >
        <div className="block overflow-hidden rounded-t-2xl h-60">
          <img
            src={f.pic}
            alt="Card image"
            className=" transition-all ease-out hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h4 className="font-bold text-teal-700 text-xl mb-2 capitalize transition-all duration-500">
            {f.title}
          </h4>
          <p className="text-sm font-normal text-white transition-all duration-500 leading-5 mb-4">
            {f.desc}
          </p>
          <div className="w-full flex flex-wrap gap-2 mb-3">{multitag}</div>
          <div className="w-full flex items-center gap-3">
            <a
              target="_blank"
              href={f.livelink}
              className="bg-green-800 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-500 hover:bg-green-700 flex gap-1.5 items-center"
            >
              <LuScreenShare />
              Live Demo
            </a>
            <a
              target="_blank"
              href={f.githublink}
              className="py-1.5 px-5 text-sm border border-white rounded-full shadow-xs font-semibold text-white transition-all duration-500 hover:bg-green-300 flex gap-1.5 items-center"
            >
              <FaGithubAlt />
              Code
            </a>
          </div>
        </div>
      </div>
    );
  });

  // Mini apps
  const MiniApps = [
    {
      id: 1,
      pic: "/codingscreenshots/Calculator-VanillaJS.svg",
      title: "Calculator - Vanilla JS",
      tags: "HTML, CSS, JavaScript, Tailwind CSS",
      livelink: "https://calculatorss09.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/Calculator",
    },
    {
      id: 2,
      pic: "/codingscreenshots/PasswordGenerator-VanillaJS.svg",
      title: "Password Generator - Vanilla JS",
      tags: "HTML, CSS, JavaScript, Font Awesome",
      livelink: "https://passwords12.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/Password-Generator",
    },
    {
      id: 3,
      pic: "/codingscreenshots/LiveWordCounter-VanillaJS.svg",
      title: "Live Word Counter - Vanilla JS",
      tags: "HTML, JavaScript, Tailwind CSS",
      livelink: "https://livewordcounter.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/Live-Word-Counter",
    },
  ];
  const MiniAppDisplay = MiniApps.map((m) => {
    const multitag = m.tags
      .split(/,\s*/)
      .filter((t) => t.trim() !== "")
      .map((t) => {
        return (
          <div class="rounded-full bg-lime-600 text-white text-center px-3 py-1 text-xs font-medium">
            {t}
          </div>
        );
      });
    return (
      <div
        key={m.id}
        className="relative lg:max-w-[32%] md:max-w-[46%] rounded-2xl transition-all duration-500 shadow-lg bg-[#87CBB9] ease-out hover:-translate-y-3"
      >
        <div className="block overflow-hidden rounded-t-2xl h-60">
          <img
            src={m.pic}
            alt="Card image"
            className=" transition-all ease-out hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h4 className="font-bold text-teal-700 text-xl mb-2 capitalize transition-all duration-500">
            {m.title}
          </h4>
          <div className="w-full flex flex-wrap gap-2 mb-3">{multitag}</div>
          <div className="w-full flex items-center gap-3">
            <a
              target="_blank"
              href={m.livelink}
              className="bg-green-800 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-500 hover:bg-green-700 flex gap-1.5 items-center"
            >
              <LuScreenShare />
              Live Demo
            </a>
            <a
              target="_blank"
              href={m.githublink}
              className="py-1.5 px-5 text-sm border border-white rounded-full shadow-xs font-semibold text-white transition-all duration-500 hover:bg-green-300 flex gap-1.5 items-center"
            >
              <FaGithubAlt />
              Code
            </a>
          </div>
        </div>
      </div>
    );
  });

  // Games
  const Games = [
    // games
    {
      id: 1,
      pic: "/codingscreenshots/Games-VanillaJS.svg",
      title: "Games - Vanilla JS",
      tags: "HTML, Vanilla CSS, Vanilla JS, Font Awsome Icons",
      livelink: "https://gameesjs.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/Games-js",
    },
    {
      id: 2,
      pic: "/codingscreenshots/TypingSpeedTest.svg",
      title: "Typing Speed Test - React JS",
      tags: "React (Vite), Tailwind CSS, Material UI, React Icons",
      livelink: "https://typedtxttest.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/Typing-Speed-Test",
    },
    {
      id: 2,
      pic: "/codingscreenshots/RockPaperScissors.svg",
      title: "Rock-Paper-Scissors Game - React JS",
      tags: "React (Vite), Tailwind CSS, Material UI, React Icons, Moment js",
      livelink: "https://rockpaperscissorssgames.netlify.app/",
      githublink: "https://github.com/ZakariaL-dev/Rock-Paper-Scissors-Game",
    },
  ];
  const GameDisplay = Games.map((m) => {
    const multitag = m.tags
      .split(/,\s*/)
      .filter((t) => t.trim() !== "")
      .map((t) => {
        return (
          <div class="rounded-full bg-lime-600 text-white text-center px-3 py-1 text-xs font-medium">
            {t}
          </div>
        );
      });
    return (
      <div
        key={m.id}
        className="relative lg:max-w-[32%] md:max-w-[46%] rounded-2xl transition-all duration-500 shadow-lg bg-[#87CBB9] ease-out hover:-translate-y-3"
      >
        <div className="block overflow-hidden rounded-t-2xl h-60">
          <img
            src={m.pic}
            alt="Card image"
            className=" transition-all ease-out hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h4 className="font-bold text-teal-700 text-xl mb-2 capitalize transition-all duration-500">
            {m.title}
          </h4>
          <div className="w-full flex flex-wrap gap-2 mb-3">{multitag}</div>
          <div className="w-full flex items-center gap-3">
            <a
              target="_blank"
              href={m.livelink}
              className="bg-green-800 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-500 hover:bg-green-700 flex gap-1.5 items-center"
            >
              <LuScreenShare />
              Live Demo
            </a>
            <a
              target="_blank"
              href={m.githublink}
              className="py-1.5 px-5 text-sm border border-white rounded-full shadow-xs font-semibold text-white transition-all duration-500 hover:bg-green-300 flex gap-1.5 items-center"
            >
              <FaGithubAlt />
              Code
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="w-full h-screen bg-[#9de0ce] flex flex-col justify-center items-center relative">
        <h1 className="text-[#177a5e] text-3xl lg:text-5xl font-bold mb-4">
          Front-End Developer
        </h1>
        <p className="text-[#55897a] px-[7%] lg:px-[20%] text-md lg:text-xl text-center">
          Front-end developer focused on clean UI, fast interfaces, and
          practical apps. Passionate about creating engaging user experiences
          with modern web technologies.
        </p>
        <div className="text-4xl text-[#177a5e] animate-bounce duration-500 size-6 absolute bottom-8">
          <TbArrowBigDownLines />
        </div>
      </div>
      <div>
        <h1 className="text-[#177a5e] text-2xl lg:text-4xl font-bold py-6 text-center">
          Featured Projects
        </h1>
        <Container className="text-[#2e9779] text-xl lg:text-3xl font-semibold pb-10 pl-8 underline">
          Front-end Projects
        </Container>
        <Container
          maxWidth="lg"
          className="flex gap-4 flex-wrap items-stretch justify-center mb-10"
        >
          {FrontEndDisplay}
        </Container>
        {/* mini app */}
        <Container className="text-[#2e9779] text-xl lg:text-3xl font-semibold pb-10 pl-8 underline">
          Mini apps
        </Container>
        <Container
          maxWidth="lg"
          className="flex gap-4 flex-wrap items-stretch justify-center mb-10"
        >
          {MiniAppDisplay}
        </Container>
        {/* Games */}
        <Container className="text-[#2e9779] text-xl lg:text-3xl font-semibold pb-10 pl-8 underline">
          Games
        </Container>
        <Container
          maxWidth="lg"
          className="flex gap-4 flex-wrap items-stretch justify-center mb-10"
        >
          {GameDisplay}
        </Container>
      </div>
      <div className="flex items-center justify-center">
        <button className="btnhvr my-6 bg-[#11694f] text-slate-100 py-3 px-6 rounded-xl cursor-pointer font-bold hover:-translate-y-1.5 hover:shadow-xl hover:text-teal-600 hover:bg-[#74ebc7]">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-5"
          >
            Get in Touch <MdTouchApp className="text-lg" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FrontEndProjects;
