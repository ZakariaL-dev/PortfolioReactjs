import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Character from "../pics/My Character.svg";
import Tailwind from "../pics/TailwindIcon.svg";
import ReactIcon from "../pics/ReactIcon.svg";

const About = () => {
  return (
    <div className="text-center bg-[#87CBB9] pt-20">
      <h1 className="text-slate-50 text-center text-4xl font-bold relative after:content-[''] after:bg-[#B9EDDD] after:w-[150px] after:h-[5px] after:absolute after:rounded-[20px] after:mt-[50px] after:left-1/2 after:-translate-x-1/2">
        About Me
      </h1>
      {/* content */}
      <div className="pt-14 flex flex-row justify-around items-start flex-wrap lg:px-20">
        {/* My Photo */}
        <img src={Character} className="w-80 mb-7" />
        {/* shadow-[0px_0px_6px_1px_rgba(87,125,134,0.7)] */}
        <div className="px-10 lg:w-3/5 text-left">
          <h2 className="font-bold text-2xl mb-4 text-slate-50">
            Crafting Digital <span className="text-lime-800"> Experiences </span>
          </h2>
          <p className="text-slate-50 mb-3">
            With a background in both graphic design and computer science, I
            bring a unique perspective to every project. I believe that great
            digital experiences are born from the perfect marriage of aesthetics
            and functionality.
          </p>
          <p className="text-slate-50 mb-3">
            My approach combines user-centered design principles with
            cutting-edge development practices to create solutions that not only
            look beautiful but also perform exceptionally well across all
            devices and platforms.
          </p>
          {/* graphic */}
          <h4 className="font-semibold underline my-5 text-lime-800">
            Graphic Design & Advertising Printing
          </h4>
          <div className="flex flex-row flex-wrap justify-start items-center gap-7 mb-5 font-bold text-[#11694f]">
            {/* specialties */}
            <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
              Social Media Designs
            </div>
            <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
              Stationary Designs
            </div>
            <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
              Invitation Cards
            </div>
            <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
              Banner Designs
            </div>
            <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
              Marketing Designs
            </div>
            <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
              Flyers & Roll UP Designs
            </div>
            <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
              Bookmarks & Covers
            </div>
            <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
              Certificates & Prescriptions Designs
            </div>
          </div>
          {/* dev */}
          <h4 className="font-semibold underline my-3 text-lime-800">
            Front-end Developer
          </h4>
          <div>
            {/* specialties */}
            <div className="flex flex-row flex-wrap justify-start items-center gap-7 mb-5 font-bold text-[#11694f]">
              {/* specialties */}
              <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
                <i className="fa-brands fa-html5"></i>
                HTML
              </div>
              <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
                <i className="fa-brands fa-css3"></i>
                CSS
              </div>
              <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
                <i className="fa-brands fa-square-js"></i>
                JavaScript
              </div>
              <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer flex gap-1 items-center justify-between">
                <img src={Tailwind} className="w-6" />
                Tailwind CSS
              </div>
              <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer flex gap-1 items-center justify-between">
                <img src={ReactIcon} className="w-6" />
                ReactJS
              </div>
              {/*  <div
                  className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer"
                >
                  Git & Github
                </div> 
                 <div
                  className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer"
                >
                  Next.js
                </div> 
                 <div
                  className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer"
                >
                  Node.js
                </div> 
                 <div
                  className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer"
                >
                  MongoDB
                </div>  */}
              <div className="MiniCard bg-slate-50 py-3 px-5 rounded-2xl shadow-[0px_0px_6px_1px_rgba(87,125,134,0.66)] transition-all duration-500 ease-in-out hover:bg-[#B9EDDD] cursor-pointer">
                Responsive Design
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="slidebtn bg-[#11694f] text-xl text-slate-100 my-6 py-3 px-5 rounded-xl cursor-pointer font-bold w-1/3">
        <Link to="/projects"> See My Work</Link>
      </button>
    </div>
  );
};

export default About;
