const user=[
    {
        img:'/user.png',
        userName:'@DK_717',
        comment:'This is gonna blast after LEO release,.❤❤💥💥🔥🔥🔥',
    },
    {
        img:'/user.png',
        userName:'@ebiebi',
        comment:'You cooked well 🔥',
    },
    {
        img:'/user.png',
        userName:'@kavinnarayanan722',
        comment:'Seriously super bro',
    },
    {
        img:'/user.png',
        userName:'@sabareeshs7',
        comment:'Ennada panni vechirukee',
    },
    {
        img:'/user.png',
        userName:'@mtGuyzz',
        comment:'Underrated edit',
    },
]

export default function YoutubeVideo() {
  return (
    <div
      style={{ fontFamily: "MyCustomFont" }}
      className="w-full h-[800px] p-6 flex items-center"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 content-between p-6">
        <div
          className="bg-gray-600 rounded-md flex justify-center relative"
          style={{ aspectRatio: "16/9" }}
        >

          <div className="w-[88%] h-[88%] rounded-xl absolute top-[-100px]">
            <iframe
              className="absolute"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7fPYchPikvA?si=CYts5I5jzrqdZwmF"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{ borderRadius: "8px" }}
            ></iframe>
          </div>
        </div>

        <div
          className=" rounded-md flex flex-col p-5"
          style={{ aspectRatio: "16/9" }}
        >
            <h1 className="text-5xl mb-6">LEO - Lokiverse 2.0 Theme Video </h1>

            {
                user.map((usr) => {
                  return(
                   <div className="h-24 items-center gird " key={usr.userName} style={{ fontFamily: "MyIphoneFont" }}>
                        <img src={usr.img} alt={usr.userName} className="h-12 w-12 rounded-full"/>
                        <h2>{usr.userName}</h2>
                        <p>{usr.comment}</p>
                   </div>
                  )
                }
                )
            }

        </div>
      </div>
    </div>
  );
}
