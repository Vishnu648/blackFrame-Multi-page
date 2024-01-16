import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex sm:flex-row flex-col text-[#2a2a2a] h-[110vh] bg-[white] w-full">
      <div className="w-full lg:w-[50vw]">
        <div className="flex  ">
          <Link className="hover:text-gray-500" href="/">
            <img
              src="/onlyLogo.png"
              alt="Logo"
              width={100}
              className=" flex items-center justify-center text-left"
            />
          </Link>

          <h1
            style={{ fontFamily: "myCustomFont" }}
            className="text-3xl pt-[25px]"
          >
            BLACKFRAME PICTURES
          </h1>
        </div>

        <div
          className="flex flex-col gap-4 text-1xl md:text-3xl p-6"
          style={{ fontFamily: "myCustomFont" }}
        >
          <h2 className="underline">PRICING LIST</h2>
          <div className="flex justify-between ">
            <h2>VIDEO 1:00 MINUTE OR LESS</h2>
            <h2>will be updated soon</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 1:00 - 2:59 MINUTES</h2>
            <h2>will be updated soon</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 3:00 - 5:00 MINUTES</h2>
            <h2>will be updated soon</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 5:00 - 10:00 MINUTES</h2>
            <h2>will be updated soon</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 10:00 - 30:00 MINUTES</h2>
            <h2>will be updated soon</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 30:00 - 60:00 MINUTES</h2>
            <h2>will be updated soon</h2>
          </div>
          <div className="flex justify-between ">
            <h2>WEDDING VIDEO EDITING</h2>
            <h2>Dipend on your content</h2>
          </div>
          <div className="flex justify-between ">
            <h2>SAVE THE DATE VIDEO AND PHOTO EDITING</h2>
            <h2 className="text-base md:text-3xl" style={{ textAlign: "end" }}>
              Dipend on your content
            </h2>
          </div>
          <div className="flex justify-between ">
            <h2>BIRTHDAY VIDEO EDITING</h2>
            <h2>Dipend on your content</h2>
          </div>

          <div className="flex justify-between ">
            <h2>COLOR GRADING</h2>
            <h2>Dipend on your content</h2>
          </div>

          <div className=" rounded-xl bg-[#f9f9f9] p-2 pl-0 text-[#2a2a2a]">
            FINAL VIDEO EDITS LONGER THAN 60 MINUTES ARE ON A CASE BY CASE BASIS
          </div>

          <div className=" rounded-xl bg-[#f9f9f9] p-2 pl-0 text-[#2a2a2a]">
            OUR PRICE WILL BE CHANGING BY LENGTH AND MINUTES OF YOUR VIDEO
          </div>
        </div>
      </div>
      {/* please uncomment to check */}
      
      {/* <div className="w-full md:w-[50vw] flex flex-col p-auto p-8 h-screen justify-between">
        <div>
          <div className="border border-black h-80 w-96"></div>
        </div>
        <div className=" flex justify-end">
          <div className="border border-black h-80 w-96"></div>
        </div>
      </div> */}
    </div>
  );
}
