import BrandIdentity from "./GraphicComponents/BrandIdentity";
import PrintAdvertising from "./GraphicComponents/PrintAdvertising";
import Marketing from "./GraphicComponents/Marketing";
import Publishing from "./GraphicComponents/Publishing";
import Services from "./GraphicComponents/Services";

import { Link } from "react-router-dom/cjs/react-router-dom";

import { TbArrowBigDownLines } from "react-icons/tb";
import { MdTouchApp } from "react-icons/md";

const GraphicProjetcs = () => {
  //

  return (
    <div>
      <div className="w-full h-screen bg-[#9de0ce] flex flex-col justify-center items-center relative">
        <h1 className="text-[#177a5e] text-3xl lg:text-5xl font-bold mb-4">
          Graphic Designer
        </h1>
        <p className="text-[#55897a] px-[7%] lg:px-[20%] text-lg lg:text-xl text-center">
          Crafting compelling visual identities and print materials that tell
          stories, build brands, and connect with audiences.
        </p>
        <div className="text-4xl text-[#177a5e] animate-bounce duration-500 size-6 absolute bottom-8">
          <TbArrowBigDownLines />
        </div>
      </div>
      <BrandIdentity />
      <PrintAdvertising />
      <Marketing />
      <Publishing />
      <Services />
      <div className="flex items-center justify-center">
        <button className="my-6 bg-[#11694f] text-slate-100 py-3 px-6 rounded-xl cursor-pointer font-bold btnhvr hover:-translate-y-1.5 hover:shadow-xl hover:text-teal-600 hover:bg-[#74ebc7]">
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

export default GraphicProjetcs;
