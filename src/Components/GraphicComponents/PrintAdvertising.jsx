import { Container } from "@mui/material";

const PrintAdvertising = () => {
  const prints = [
    {
      id: 1,
      title: "Business Cards",
      pics: [
        "/Graphic/business/2.svg",
        "/Graphic/business/4.svg",
        "/Graphic/business/7.svg",
      ],
    },
    {
      id: 2,
      title: "Instagram Style Cards",
      pics: ["/Graphic/4.svg", "/Graphic/4.svg", "/Graphic/4.svg"],
    },
    {
      id: 3,
      title: "Bookmarks",
      pics: [
        "/Graphic/bookm/1.png",
        "/Graphic/bookm/7.png",
        "/Graphic/bookm/12.png",
        "/Graphic/bookm/26.png",
        "/Graphic/bookm/31.png",
      ],
    },
    {
      id: 4,
      title: "Stickers",
      pics: [
        "/Graphic/sticker/1.svg",
        "/Graphic/sticker/3.svg",
        "/Graphic/sticker/6.svg",
        "/Graphic/sticker/7.svg",
      ],
    },
    {
      id: 5,
      title: "Certificates",
      pics: [
        "/Graphic/certificate/1.png",
        "/Graphic/certificate/2.png",
        "/Graphic/certificate/3.png",
        "/Graphic/certificate/4.png",
        "/Graphic/certificate/5.png",
      ],
    },
  ];

  const PrintsDisplay = prints.map((p) => {
    return (
      <div
        key={p.id}
        className="bg-[#b9eddd] p-6 rounded-xl w-2xl lg:w-[45%] shadow-xl transition-all duration-500 ease-out hover:-translate-y-3"
      >
        <h1 className="text-2xl font-bold">{p.title}</h1>
        <div className="flex gap-4 flex-wrap justify-start items-center mt-5">
          {p.pics.map((c, i) => {
            return (
              <img
                key={i}
                src={c}
                alt={`Pic: ${c + i} `}
                className="bg-center rounded-xl lg:max-w-40 lg:max-h-44 max-w-36 max-h-44 shadow-lg"
              />
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <div className="bg-[#77d6bd] pb-8">
      <h1 className="text-[#177a5e] text-3xl lg:text-4xl font-bold pt-6 text-center mb-5">
        Print & Stationery
      </h1>
      <p className="text-[#0e6147d8] px-[7%] lg:px-[20%] text-lg lg:text-xl text-center">
        Precision-crafted physical materials that elevate brand presence and
        create tangible experiences
      </p>
      <Container
        maxWidth="xl"
        className="flex gap-5 flex-wrap items-stretch justify-center py-6 text-[#154f3f]"
      >
        {PrintsDisplay}
      </Container>
    </div>
  );
};

export default PrintAdvertising;
