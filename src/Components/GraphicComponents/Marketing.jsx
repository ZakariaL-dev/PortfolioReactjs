import { Container } from "@mui/material";

const Marketing = () => {
  const market = [
    {
      id: 1,
      title: "Flyers",
      pics: [
        "/Graphic/duplliant/1.svg",
        "/Graphic/duplliant/2.svg",
        "/Graphic/duplliant/3.svg",
        "/Graphic/duplliant/4.svg",
        "/Graphic/duplliant/5.svg",
        "/Graphic/duplliant/6.svg",
        "/Graphic/duplliant/7.svg",
      ],
    },
    {
      id: 2,
      title: "Instagram Posts & Stories",
      pics: [
        "/Graphic/igPosts/1.svg",
        "/Graphic/igPosts/2.svg",
        "/Graphic/igPosts/3.svg",
        "/Graphic/igPosts/4.svg",
        "/Graphic/igPosts/5.svg",
      ],
    },
    {
      id: 3,
      title: "Thank you Cards",
      pics: ["/Graphic/Thank You Card/1.svg", "/Graphic/Thank You Card/2.svg"],
    },
    {
      id: 4,
      title: "Loyalty Cards",
      pics: ["/Graphic/Thank You Card/3.svg"],
    },
    {
      id: 5,
      title: "Wedding Invitation Cards",
      pics: [
        "/Graphic/wedding/7.png",
        "/Graphic/wedding/8.png",
        "/Graphic/wedding/9.png",
        "/Graphic/wedding/22.png",
        "/Graphic/wedding/23.png",
        "/Graphic/wedding/24.png",
      ],
    },
  ];
  const MarketingDisplay = market.map((m) => {
    return (
      <div
        key={m.id}
        className="bg-[#87CBB9] p-6 rounded-xl w-2xl lg:w-[45%] shadow-xl transition-all duration-500 ease-out hover:-translate-y-3"
      >
        <h1 className="text-2xl font-bold">{m.title}</h1>
        <div className="flex gap-4 flex-wrap justify-start items-center mt-5">
          {m.pics.map((p, i) => {
            return (
              <img
                key={i}
                src={p}
                alt={`Pic: ${p + i} `}
                className="bg-center rounded-xl max-w-40 max-h-44 shadow-lg"
              />
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className="text-[#177a5e] text-2xl lg:text-4xl font-bold pt-6 text-center mb-5">
        Marketing & Advertising
      </h1>
      <p className="text-[#55897a] px-[7%] lg:px-[20%] text-lg lg:text-xl text-center">
        Strategic visual campaigns designed to capture attention and drive
        engagement across platforms
      </p>
      <Container
        maxWidth="xl"
        className="flex gap-6 flex-wrap items-stretch justify-center my-10 pb-6 text-[#154f3f]"
      >
        {MarketingDisplay}
      </Container>
    </div>
  );
};

export default Marketing;
