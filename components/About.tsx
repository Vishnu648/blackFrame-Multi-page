const icons = [
  "/softwareIcons/1ae.png",
  "/softwareIcons/2pr.png",
  "/softwareIcons/3ps.png",
  "/softwareIcons/5dv.png",
  "/softwareIcons/maya6.png",
  "/softwareIcons/nuke7.png",
  "/softwareIcons/blender8.png",
];

export default function About() {
  return (
    <div style={{ fontFamily: "MyCustomFont" }} className="w-full p-6 border-2">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 content-between p-6">
        <div
          className=" rounded-md flex flex-col justify-center"
          style={{ aspectRatio: "16/9" }}
        >
          <h1 className="text-4xl md:text-5xl mb-6">SOFTWARE WE USE </h1>
          <div className="flex h-12 gap-1 md:gap-2 object-contain">
            {icons.map((icon,i) => {
              return (
                <img
                  alt="icons"
                  key={i}
                  className="h-[80%] sm:h-full w-9 sm:w-[45px] rounded-md"
                  src={icon}
                />
              );
            })}
          </div>
        </div>

        <div
          className="bg-gray-600 rounded-md"
          style={{ aspectRatio: "16/9" }}
        >
             <img
                  alt="time line"
                  style={{ height: "100%", width: "100%", borderRadius: "6px",backgroundColor:"#2a2a2a" }}
                  src='/timeLine.jpg'
                  loading="lazy"
                />
        </div>
      </div>
    </div>
  );
}
