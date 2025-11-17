// Coding
const ProjDiplay = document.getElementById("ProjectDisplay");
const Coding = [
  {
    id: 1,
    pic: "./codingscreenshots/ToDoList-ReactJS.svg",
    title: "ToDo List - React JS",
    desc: "TaskFlow allows users to add, complete/uncomplete, and delete tasks. A core feature is the ability to filter tasks to quickly view all, completed/incomplete items or by categories, ensuring efficient task management.",
    tags: "React, Tailwind, Material UI library, Material Icons",
    livelink: "https://ttodolists-reactjs.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/ToDoList-using-ReactJS",
  },
  {
    id: 2,
    pic: "./codingscreenshots/WeatherApp-ReactJS.svg",
    title: "Weather App - React JS",
    desc: "A clean, intuitive weather app that provides real-time updates on temperature, humidity, wind, and daily or weekly forecasts. Built for anyone seeking quick, reliable weather insights, it offers a simple interface for checking local or global conditions with ease, perfect for planning your day without unnecessary clutter.",
    tags: "React (vite), Tailwind, Material UI library, React Icons, Axios",
    livelink: "https://waeatherapp.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/WeatherAPP-using-ReactJS",
  },
  {
    id: 3,
    pic: "./codingscreenshots/Games-VanillaJS.svg",
    title: "Games - Vanilla JS",
    desc: "This website offers a delightful collection of classic browser-based mini-games, including favorites like Whack-a-Mole, Tic-Tac-Toe, and a Number Guessing Game. Focusing on instant, accessible entertainment, its key benefit is providing users with a quick, engaging, and seamless way to enjoy a mental break directly from any device without requiring downloads or setup.",
    tags: "HTML, Vanilla CSS, Vanilla JS, Font Awsome Icons",
    livelink: "https://gameesjs.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/Games-js",
  },
  {
    id: 4,
    pic: "./codingscreenshots/Calculator-VanillaJS.svg",
    title: "Calculator - Vanilla JS",
    desc: "A functional and accessible calculator, providing users with a fast and reliable tool for all their mathematical needs, from basic arithmetic to everyday complex equations. Focusing on a clean, intuitive interface and rapid performance, it ensures an efficient and frustration-free experience for students, professionals, and anyone needing quick, on-the-go calculations.",
    tags: "HTML, Vanilla CSS, Vanilla JS, Tailwind",
    livelink: "https://calculatorss09.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/Calculator",
  },
  {
    id: 5,
    pic: "./codingscreenshots/PasswordGenerator-VanillaJS.svg",
    title: "Password Generator - Vanilla JS",
    desc: "The Secure Password Generator, offers generating strong, customizable, and random passwords instantly, focusing on providing a simple, yet powerful solution for enhanced online security. Its key benefit is allowing users to effortlessly create highly secure credentials by selecting options for length, uppercase, lowercase, numbers, and symbols, ensuring robust protection against breaches.",
    tags: "HTML, Vanilla CSS, Vanilla JS, Font Awsome Icon",
    livelink: "https://passwords12.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/Password-Generator",
  },
  {
    id: 6,
    pic: "./codingscreenshots/LiveWordCounter-VanillaJS.svg",
    title: "Live Word Counter - Vanilla JS",
    desc: "The Live Word Counter website provides a fast and efficient tool for instantly tracking text statistics as you type, offering real-time updates for words, characters (with and without spaces), and sentences. This simple, user-friendly tool is perfect for writers, students, and professionals who need to monitor their text length and structure instantly, focusing on providing precise, dynamic metrics for any piece of text.",
    tags: "HTML, Vanilla JS, Tailwind",
    livelink: "https://livewordcounter.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/Live-Word-Counter",
  },
  {
    id: 7,
    pic: "./codingscreenshots/PrayerTime-VanillaJS.svg",
    title: "Prayer Time - Vanilla JS",
    desc: "Prayer Times offers Muslims worldwide a quick and easy way to find accurate daily prayer times for various global cities, including Makkah, London, and Algiers. It features a simple interface that displays today's date in both the Gregorian and Islamic calendars, and instantly calculates the times for Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha based on the user's city selection, ensuring users can fulfill their religious obligations promptly.",
    tags: "HTML, Vanilla CSS, Vanilla JS, Axios, Font Awsome Icons",
    livelink: "https://prayerttimes.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/Prayer-Time",
  },
  {
    id: 8,
    pic: "./codingscreenshots/TimeManager-VanillaJS.svg",
    title: "Time Manager - Vanilla JS",
    desc: "TimeMaster is your all-in-one time management solution, offering essential tools like a World Clock for tracking global time zones, a precise Stopwatch for timing events, and a customizable Timer with convenient presets. This clean, efficient web application helps users stay organized and manage various time-related tasks effortlessly, whether they are coordinating with international contacts or focusing on personal productivity.",
    tags: "HTML, Vanilla CSS, Vanilla JS, Font Awsome Icons",
    livelink: "https://timemmanagers.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/TimeManager",
  },
  {
    id: 9,
    pic: "./codingscreenshots/ToDoList-VanillaJS.svg",
    title: "Student Task Manager - Vanilla JS",
    desc: "A clean and functional website that offers a dedicated task management system for academic organization, focusing on helping students effectively log, prioritize, and track assignments, exams, projects, and readings. Its key benefits include allowing users to easily add tasks with due dates and subject details, and providing filtering options to quickly view pending, completed, or high-priority items, ensuring students can effortlessly manage their academic workload.",
    tags: "HTML, Vanilla CSS, Vanilla JS, Font Awsome Icons",
    livelink: "https://todolist-vanillajsc.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/ToDoList-VanillaJS",
  },
  {
    id: 10,
    pic: "./codingscreenshots/NoteTakerApp-VanillaJS.svg",
    title: "Note Taker App - Vanilla JS",
    desc: "This concise and feature-rich digital workspace offers a comprehensive NoteTaker experience, focusing on powerful organization for efficient thought management. Users can easily capture and manage their notes using key features like customizable categorization (e.g., Work, Personal, Idea) and detailed tagging (e.g., #important, #todo). The benefit lies in its streamlined interface and advanced sorting and pinning options, ensuring quick access and retrieval of organized information for anyone needing to manage both their personal and professional life.",
    tags: "React, Tailwind, Material UI library, Material Icons",
    livelink: "https://notetakingapp10.netlify.app/",
    githublink: "https://github.com/ZakariaL-dev/NoteTaker",
  },
];
let codingdisp = Coding.map((c) => {
  const multitag = c.tags
    .split(/,\s*/)
    .filter((t) => t.trim() !== "")
    .map((t) => {
      return `
        <div class="rounded-full bg-lime-600 text-white text-center px-3 py-1 text-xs font-medium">
          ${t.trim()} 
        </div>
      `;
    })
    .join("");
  //
  ProjDiplay.innerHTML += `
  <div id=${c.id}
        class="relative max-w-sm rounded-2xl transition-all duration-500 shadow-lg bg-[#87CBB9] ease-out hover:-translate-y-3"
      >
        <div class="block overflow-hidden rounded-t-2xl h-60">
          <img src=${c.pic} alt="Card image" class=" transition-all ease-out hover:scale-110" />
        </div>
        <div class="p-4">
          <h4
            class="font-bold text-teal-700 text-xl mb-2 capitalize transition-all duration-500"
          >
            ${c.title}
          </h4>
          <p
            class="text-sm font-normal text-white transition-all duration-500 leading-5 mb-4"
          >
            ${c.desc}
          </p>
          <div class="w-full flex flex-wrap gap-2 mb-3">
            ${multitag}
          </div>
          <div class="w-full flex items-center gap-3">
          <a
          target="_blank"
            href="${c.livelink}"
            class="bg-green-800 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-500 hover:bg-green-700"
          >
            <i class="fa-solid fa-share-from-square"></i>
            Live Demo
          </a>
          <a
          target="_blank"
            href="${c.githublink}"
            class="py-1.5 px-5 text-sm border border-white rounded-full shadow-xs font-semibold text-white transition-all duration-500 hover:bg-green-300"
          >
            <i class="fa-brands fa-github"></i>
            Code
          </a>
          </div>
        </div>
      </div>`;
});

// Graphic
// const Displayer = document.getElementById("Portpage");
// function GraphicDisplay(id) {
//   Displayer.
// }