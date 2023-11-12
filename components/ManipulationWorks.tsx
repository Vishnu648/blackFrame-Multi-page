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
    <div style={{fontFamily:'MyCustomFont',letterSpacing:'2px'}} className="border w-full p-6 ">
      <h1 className="text-4xl md:text-5xl">Manipulation Works </h1>

      <div className="snap-x w-full rounded-md flex gap-2 overflow-auto whitespace-nowrap p-6">
          {
            manipulationImg.map((img,i) => {
              return(
                <img className="snap-center popup bg-[#2a2a2a] md:h-[380px] md:w-[300px] border rounded-xl h-[280px] w-[200px]" src={img} alt="image" key={i}/>
              )
            }
            )
          }
      </div>


    </div>
  );
}
