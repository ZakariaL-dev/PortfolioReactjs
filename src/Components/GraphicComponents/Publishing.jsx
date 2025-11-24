import { Container } from "@mui/material";

const Publishing = () => {
  const pub = [
    {
      id: 1,
      title: "Coloring Mini Books",
      pics: ["/Graphic/coloriage/1.svg", "/Graphic/coloriage/2.svg"],
    },
    {
      id: 2,
      title: "Mini Cat Calendar",
      pics: [
        "/Graphic/minicalendar/1.png",
        "/Graphic/minicalendar/10.png",
        "/Graphic/minicalendar/14.png",
      ],
    },
    {
      id: 2,
      title: "Cat Diary 2025",
      pics: [
        "/Graphic/catDiary/1.png",
        "/Graphic/catDiary/2.png",
        "/Graphic/catDiary/3.png",
        "/Graphic/catDiary/12.png",
        "/Graphic/catDiary/16.png",
      ],
    },
  ];
  const pubDisplay = pub.map((u) => {
    return (
      <div
        key={u.id}
        className="bg-[#b9eddd] p-6 rounded-xl w-full lg:w-[46%] shadow-xl transition-all duration-500 ease-out hover:-translate-y-3"
      >
        <h1 className="text-2xl font-bold">{u.title}</h1>
        <div className="flex gap-4 flex-wrap justify-start items-center mt-5">
          {u.pics.map((p, i) => {
            return (
              <img
                key={i}
                src={p}
                alt={`Pic: ${p + i} `}
                className="bg-center rounded-xl w-[47%] h-[47%] shadow-lg"
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
        Publishing & Misc.
      </h1>
      <p className="text-[#0e6147d8] px-[7%] lg:px-[20%] text-lg lg:text-xl text-center">
        Structured, multi-page designs that guide readers through compelling
        narratives.
      </p>
      <Container
        maxWidth="xl"
        className="flex gap-5 flex-wrap items-stretch justify-center py-6 text-[#154f3f]"
      >
        {pubDisplay}
      </Container>
    </div>
  );
};

export default Publishing;
