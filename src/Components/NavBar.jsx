import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { Link } from "react-router-dom/cjs/react-router-dom";

import "animate.css";

const NavBar = () => {
  const [checkInp, setcheckInp] = useState(false);
  const [DropProject, setDropProject] = useState(false);
  return (
    <div
      className={
        checkInp === true
          ? "w-full z-20 fixed top-0 backdrop-blur-md h-88 lg:h-20"
          : "w-full z-20 fixed top-0"
      }
    >
      <nav
        className={
          "backdrop-blur-md flex justify-between items-center px-7 lg:px-12 py-3 font-bold text-gray-100"
        }
      >
        <h1>
          <img src="/pics/Avatarnobg.png" alt="ZL" className="w-12" />
        </h1>
        {/*  */}
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center gap-5 text-xl">
            <Link to="/" className="link" onClick={() => setcheckInp(false)}>
              Home
            </Link>
            <Link
              to="/about"
              className="link"
              onClick={() => setcheckInp(false)}
            >
              About
            </Link>
            <p
              className="link flex items-center gap-1"
              onClick={() => {
                setDropProject(!DropProject);
              }}
            >
              Portfolio
              {DropProject === true ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </p>
            {/* </Link> */}

            <Link
              to="/contact"
              className="link"
              onClick={() => setcheckInp(false)}
            >
              Contact
            </Link>
          </ul>
        </div>
        {/*  */}

        {/* Drop Projects */}
        <div
          className={
            DropProject === true
              ? "absolute top-16 right-28 bg-[#58b99a65] shadow-2xs rounded-lg py-2"
              : "hidden"
          }
        >
          <div className="flex flex-col p-3">
            <Link
              to="/dev"
              className="link mb-4 w-[7.4rem]"
              onClick={() => {
                setcheckInp(false);
                setDropProject(false);
              }}
            >
              Web Developer
            </Link>
            <Link
              to="/graphic"
              className="link w-[7.4rem]"
              onClick={() => {
                setcheckInp(false);
                setDropProject(false);
              }}
            >
              Graphic Design
            </Link>
          </div>
        </div>
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
        {/* drop menu */}
        <div
          className={
            checkInp === true
              ? "absolute opacity-100 top-20 left-0 w-full p-7 text-2xl leading-8 lg:hidden flex flex-col"
              : "lg:hidden absolute opacity-0 pointer-events-none"
          }
        >
          <Link
            to="/"
            className="link mb-4 w-[4.3rem] "
            onClick={() => setcheckInp(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="link mb-4 w-[4.4rem]"
            onClick={() => setcheckInp(false)}
          >
            About
          </Link>

          <Link
            to="/dev"
            className="link w-44 mb-4"
            onClick={() => {
              setcheckInp(false);
              setDropProject(false);
            }}
          >
            Web Developer
          </Link>

          <Link
            to="/graphic"
            className="link w-44 mb-4"
            onClick={() => {
              setcheckInp(false);
              setDropProject(false);
            }}
          >
            Graphic Design
          </Link>

          <Link
            to="/contact"
            className="link mb-4 w-[5.6rem]"
            onClick={() => setcheckInp(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
