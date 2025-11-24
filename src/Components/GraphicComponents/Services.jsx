import { GrPaint } from "react-icons/gr";
import { FaPrint } from "react-icons/fa6";
import { CgSmartphoneChip } from "react-icons/cg";
import { RiBookShelfFill } from "react-icons/ri";
import { TbTopologyStar3 } from "react-icons/tb";


import { Container } from "@mui/material";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <GrPaint />,
      title: "Brand Identity",
      desc: "Complete visual systems including logos, color palettes, typography, and brand guidelines",
    },
    {
      id: 2,
      icon: <FaPrint />,
      title: "Print Design",
      desc: "High-precision print materials from business cards to packaging and stationery",
    },
    {
      id: 3,
      icon: <CgSmartphoneChip />,
      title: "Digital Marketing",
      desc: "Engaging social media graphics, banners, and promotional materials",
    },
    {
      id: 4,
      icon: <RiBookShelfFill />,
      title: "Publishing",
      desc: "Booklets, catalogs, coloring books, and long-form layout design",
    },
    // {
    //   id: 5,
    //   icon: <TbTopologyStar3 />,
    //   title: "Consulting",
    //   desc: "Brand strategy and positioning workshops for startups and established businesses",
    // },
  ];
  const ServicesDisplay = services.map((s) => {
    return (
      <div
        key={s.id}
        className="bg-[#87CBB9] p-6 rounded-xl w-full lg:w-1/5 hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-3 flex flex-col items-center"
      >
        <div className="text-5xl">{s.icon}</div>

        <h1 className="text-3xl font-bold py-4 text-center">{s.title}</h1>
        <p className="text-center">{s.desc}</p>
      </div>
    );
  });
  return (
    <div>
      <h1 className="text-[#177a5e] text-4xl font-bold pt-6 text-center mb-5">
        Services
      </h1>
      <p className="text-[#55897a] px-[7%] lg:px-[20%] text-md lg:text-xl text-center">
        Let's create something remarkable together
      </p>
      <Container
        maxWidth="xl"
        className="flex gap-6 flex-wrap items-stretch justify-center my-10 pb-6 text-[#154f3f]"
      >
        {ServicesDisplay}
      </Container>
    </div>
  );
};

export default Services;
