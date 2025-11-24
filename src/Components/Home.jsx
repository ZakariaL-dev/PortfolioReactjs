import { Link } from "react-router-dom/cjs/react-router-dom";
import FinisherBackground from "../animatedBG/FinisherBackground";
// import { FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="header finisher-header pt-5 w-full h-screen flex justify-center items-center flex-col px-8">
        <FinisherBackground />
        <h1 className="text-teal-800 lg:text-5xl text-center text-4xl font-extrabold">
          Zakaria Lardjane
        </h1>
        <h2 className="my-5 font-bold lg:text-xl text-center text-teal-700 text-lg">
          Graphic Designer & Web Developer
        </h2>
        <p className="text-center text-lg max-w-2xl text-teal-800 mb-6">
          Creative med student crafting brands through code & design.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap mt-10">
          <button className="bg-[#87CBB9] py-3 px-5 rounded-xl cursor-pointer font-bold text-[#11694f] flex items-center gap-1.5 btnhvr border-2 border-[#11694f] hover:text-teal-100 hover:border-teal-100 hover:-skew-2">
            {/* <FaFileDownload className="text-lg" /> */}
            <Link to="/dev"> View Developer Portfolio</Link>
          </button>
          <button className="border-2 border-[#11694f] text-[#11694f] hover:bg-[#56b89a] hover:skew-2 py-3 px-6 rounded-xl cursor-pointer font-bold btnhvr">
            <Link to="/graphic">View Design Portfolio</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
