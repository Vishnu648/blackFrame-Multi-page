import React from "react";
import Link from 'next/link'

export default function page() {
  return (
    <div className="flex flex-col text-[#2a2a2a] p-4 bg-[#e9ecef] w-full" style={{ fontFamily: "myCustomFont",letterSpacing:'1px'}}>
      <div className="w-full">
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

        <div className="flex flex-col h-[13vh] text-2xl md:text-3xl justify-between items-center">
          <h1
            style={{ fontFamily: "myCustomFont" }}
            className=" underline"
          >
            OUR SERVICES
          </h1>
          <p style={{ fontFamily: "myCustomFont" }} >
            WE OFFER PROFESSIONAL ONLINE VIDEO EDITING SERVICES
          </p>
        </div>

        <div className="flex flex-col p-6 text-2xl md:text:3xl">
            <h2 className="underline">WHAT WE DO</h2>
            <ul className="list-disc">
              <li>SHORT MOVIE EDITING</li>
              <li>MUSIC VIDEOS</li>
              <li>DOCUMENTARY</li>
              <li>YOUTUBE VIDEO</li>
              <li>TRAILER,TEASER</li>
              <li>WEDDING VIDEO</li>
              <li>EVENT FILM</li>
              <li>COLOR GRADING</li>
              <li>PHOTO EDITING</li>
              <li>LOGO DESIGN</li>
              <li>MOTION GRAPHICS</li>
              <li>MOTION ADS</li>
              <li>LIVE STREAM PACKS</li>
              <li>POSTER DESIGN</li>
              <li>BUSINESS CARD</li>
              <li>LOGO ANIMATION</li>
              <li>TITLE ANIMATION</li>
              <li>REELS EDITING</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
