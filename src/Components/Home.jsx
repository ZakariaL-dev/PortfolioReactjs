import { Link } from "react-router-dom/cjs/react-router-dom";
import FinisherBackground from "../animatedBG/FinisherBackground";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="header finisher-header pt-5 w-full h-screen flex justify-center items-center flex-col px-8">
        <FinisherBackground />
        <h1 id="MyName" className="text-teal-800 text-5xl text-center">
          Zakaria Lardjane
        </h1>
        <h2
          id="MyProfession"
          className="my-5 font-bold text-xl text-center text-teal-700"
        >
          Graphic Designer & Front-end Developer
        </h2>
        <p
          id="MyDiscription"
          className="text-center text-lg max-w-2xl text-teal-800"
        >
          Creative med student crafting brands through code & design.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <button className="slidebtn my-6 bg-[#11694f] text-slate-100 py-3 px-6 rounded-xl cursor-pointer font-bold">
            <Link to="/projects"> View My Work</Link>
          </button>
          <button className="slidebtn bg-[#87CBB9] py-3 px-5 rounded-xl cursor-pointer font-bold text-[#11694f] delay-300 flex items-center gap-1.5">
            <FaFileDownload className="text-lg" />
            My resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
