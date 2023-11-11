import Image from "next/image";
import React from "react";

const manipulationImg=[
  '/manipulation/1moonL.jpg',
  '/manipulation/2valO.jpg',
  '/manipulation/3godZ.jpg',
  '/manipulation/4wanD.jpg',
  '/manipulation/5jinX.jpg',
  '/manipulation/6nwh.jpg',
  '/manipulation/7callOF.jpg',
  '/manipulation/8drstrngE.png',
  '/manipulation/9knighT.png',
  '/manipulation/10dc.png',
  '/manipulation/11dod.jpg',
  '/manipulation/12strange.png',
  '/manipulation/13strnge.jpg',
  '/manipulation/14spidey.jpg',
  '/manipulation/15venom.jpg',
  '/manipulation/16venomspidey.jpg',
  '/manipulation/17fade.png',
  '/manipulation/18kakkashi.jpg',
  '/manipulation/19naruto.jpg',
  '/manipulation/20newcyberpunk.png',
  '/manipulation/21fkedup.jpg',
  '/manipulation/22meme.jpg',
  '/manipulation/23spoiderman.jpg',
]

export default function ManipulationWorks() {
  return (
    <div style={{fontFamily:'MyCustomFont',letterSpacing:'2px'}} className=" w-full p-6 ">
      <h1 className="text-4xl md:text-5xl">Manipulation Works </h1>

      <div
        className="h-[480px] w-full overflow-x-scroll rounded-xl flex items-center gap-2 pl-[260px] justify-around mt-6"
        style={{ flex: "0 0 auto" }}
      >
      
      {
        manipulationImg.map((img,i) => {
          return(
             <div
             key={i}
            className="h-[380px] w-[300px] bg-gray-600 rounded-xl bg- flex justify-center gap-2 border border-black"
            style={{ flex: "0 0 auto" }}
          >
            <img
              src={img}
              alt="ds"
              height={"100%"}
              width={"100%"}
              style={{ flex: "0 0 auto" }}
              className="popup rounded-xl object-cover"
            />
          </div>
          )
        }
        )
      }

         
      </div>
    </div>
  );
}
