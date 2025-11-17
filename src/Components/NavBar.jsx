import { useState } from "react";
import Avatarnobg from "../pics/Avatarnobg.png";

import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

import { Link } from "react-router-dom/cjs/react-router-dom";

import "animate.css";

const NavBar = () => {
  const [checkInp, setcheckInp] = useState(false);
  return (
    <nav className="bg-[#87CBB9] flex justify-between items-center px-7 lg:px-12 py-3 font-bold text-gray-100 w-full z-20 fixed top-0">
      <h1>
        <img src={Avatarnobg} alt="ZL" className="w-12" />
      </h1>
      {/*  */}
      <div className="hidden lg:block">
        <ul className="flex justify-center items-center gap-5 text-xl">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/projects" className="link">
            Portfolio
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </ul>
      </div>
      {/*  */}
      {/*  */}

      <FaBars
        className={
          checkInp === true
            ? "hidden"
            : "cursor-pointer text-3xl block lg:hidden animate__animated animate__fadeInRight"
        }
        onClick={() => setcheckInp(true)}
      />
      <FaXmark
        className={
          checkInp === true
            ? "block cursor-pointer text-3xl animate__animated animate__fadeInRight lg:hidden"
            : "hidden"
        }
        onClick={() => setcheckInp(false)}
      />
      <ul
        className={
          checkInp === true
            ? "absolute opacity-100 top-20 left-0 w-full p-7 text-2xl leading-8 bg-[#87cbb9] lg:hidden"
            : "lg:hidden absolute opacity-0"
        }
      >
        <li className="link mb-4 w-[4.3rem]">
          <Link to="/"> Home</Link>
        </li>
        <li className="link mb-4 w-18">
          <Link to="/about"> About</Link>
        </li>
        <li className="link mb-4 w-[6.3rem]">
          <Link to="/projects"> Portfolio</Link>
        </li>

        <li className="link w-[5.6rem]">
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
