import React from "react";
import Link from 'next/link'

export default function page() {
  return (
    <div className="flex flex-col text-[#2a2a2a] h-[110vh] bg-[#e9ecef] w-full">
      <div className="w-full md:w-[50vw]">
      <div className="flex items-center ">
      <Link className="hover:text-gray-500" href='/'>
      <img
        src="/onlyLogo.png"
        alt="Logo"
        width={100}
        className=" flex items-center justify-center text-left"
      />
      </Link>

      <h1 style={{ fontFamily: "myCustomFont" }} className="text-3xl">
        BLACKFRAME PICTURES
      </h1>
      </div>

      <div className="flex flex-col gap-4 text-2xl md:text-3xl p-6" style={{fontFamily:'myCustomFont'}}>
        <h2 className="underline">ASSETS</h2>
      </div>
      </div>
    </div>
  );
}
