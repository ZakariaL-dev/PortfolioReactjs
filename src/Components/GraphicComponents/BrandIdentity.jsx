import { Container } from "@mui/material";

const BrandIdentity = () => {
  const Brand = [
    {
      id: 1,
      title: "EcoBloom Organic",
      logos: ["/Graphic/4.svg", "/Graphic/4.svg", "/Graphic/4.svg"],
      colorPalette: ["#0d1b2a", "#1b263b", "#415a77", "#778da9", "#e0e1dd"],
      typography: "Montserrat (Headings), Lato (Body)",
      mockups: ["/Graphic/4.svg", "/Graphic/4.svg", "/Graphic/4.svg"],
    },
    {
      id: 2,
      title: "EcoBloom Organic",
      logos: ["/Graphic/4.svg", "/Graphic/4.svg", "/Graphic/4.svg"],
      colorPalette: ["#0d1b2a", "#1b263b", "#415a77", "#778da9", "#e0e1dd"],
      typography: "Montserrat (Headings), Lato (Body)",
      mockups: ["/Graphic/4.svg", "/Graphic/4.svg", "/Graphic/4.svg"],
    },
  ];
  const BrandDisplay = Brand.map((b) => {
    return (
      <div
        key={b.id}
        className="rounded-2xl shadow-lg bg-[#87CBB9] transition-all duration-500 ease-out hover:-translate-y-3 p-6 text-[#154f3f] md:w-[44%] w-full"
      >
        <h1 className="font-bold text-2xl mb-4">{b.title}</h1>
        {/* logo section */}
        <h5 className="underline font-semibold">logos</h5>
        <div className="flex gap-2 flex-wrap justify-around items-center mt-3">
          {b.logos.map((l, i) => {
            return (
              <img
                key={i}
                src={l}
                alt={`Logo ${i + 1}`}
                className="bg-center rounded-xl w-36 h-36 shadow-lg"
              />
            );
          })}
        </div>
        {/* color palette section */}
        <h5 className="underline font-semibold mt-4">Color Palette</h5>
        <div className="flex gap-2 flex-wrap justify-start items-center mt-3 text-sm">
          {b.colorPalette.map((c, i) => {
            return (
              <div
                key={i}
                className={
                  "w-20 h-20 rounded-xl shadow-md flex items-center justify-center text-white font-bold"
                }
                style={{ backgroundColor: c }}
              >
                {c}
              </div>
            );
          })}
        </div>
        <h5 className="underline font-semibold mt-4">Typography</h5>
        <p className="mt-1 font">{b.typography}</p>
        <h5 className="underline font-semibold mt-4">Mockups</h5>
        <div className="flex gap-2 flex-wrap justify-start items-center mt-3">
          {b.mockups.map((m, i) => {
            return (
              <img
                key={i}
                src={m}
                alt={`Mockup ${i + 1}`}
                className="bg-center rounded-xl w-36 h-36 shadow-lg"
              />
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <>
      <div>
        <h1 className="text-[#177a5e] text-4xl font-bold pt-6 text-center mb-5">
          Brand identity
        </h1>
        <p className="text-[#55897a] px-[7%] lg:px-[20%] text-lg lg:text-xl text-center">
          Comprehensive visual systems that establish brand recognition and
          emotional connection
        </p>
      </div>
      <Container
        maxWidth="xl"
        className="flex gap-6 flex-wrap items-stretch justify-center py-6 mb-8"
      >
        {BrandDisplay}
      </Container>
    </>
  );
};

export default BrandIdentity;
