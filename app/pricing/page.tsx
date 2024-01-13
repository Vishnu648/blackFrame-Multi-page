import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col text-[#2a2a2a] h-[110vh] bg-[white] w-full">
      <div className="w-full md:w-[50vw]">
        <div className="flex  ">
          <Link className="hover:text-gray-500" href="/">
            <img
              src="/onlyLogo.png"
              alt="Logo"
              width={100}
              className=" flex items-center justify-center text-left"
            />
          </Link>

          <h1 style={{ fontFamily: "myCustomFont" }} className="text-3xl pt-[25px]">
            BLACKFRAME PICTURES
          </h1>
        </div>

        <div
          className="flex flex-col gap-4 text-2xl md:text-3xl p-6"
          style={{ fontFamily: "myCustomFont" }}
        >
          <h2 className="underline">PRICING LIST</h2>
          <div className="flex justify-between ">
            <h2>VIDEO 1:00 MINUTE OR LESS</h2>
            <h2>200RS</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 1:00 - 2:59 MINUTES</h2>
            <h2>400RS</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 3:00 - 5:00 MINUTES</h2>
            <h2>600RS</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 5:00 - 10:00 MINUTES</h2>
            <h2>900RS</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 10:00 - 30:00 MINUTES</h2>
            <h2>2000RS</h2>
          </div>
          <div className="flex justify-between ">
            <h2>VIDEO 30:00 - 60:00 MINUTES</h2>
            <h2>4000RS</h2>
          </div>
          <div className="flex justify-between ">
            <h2>WEDDING VIDEO EDITING</h2>
            <h2>Dipend on your content</h2>
          </div>
          <div className="flex justify-between ">
            <h2>SAVE THE DATE VIDEO AND PHOTO EDITING</h2>
            <h2>Dipend on your content</h2>
          </div>
          <div className="flex justify-between ">
            <h2>BIRTHDAY VIDEO EDITING</h2>
            <h2>Dipend on your content</h2>
          </div>

          <div className="flex justify-between ">
            <h2>COLOR GRADING</h2>
            <h2>Dipend on your content</h2>
          </div>

          <div className=" rounded-xl bg-[#f9f9f9] text-[#2a2a2a]">
            FINAL VIDEO EDITS LONGER THAN 60 MINUTES ARE ON A CASE BY CASE BASIS
          </div>

          <div className=" rounded-xl bg-[#f9f9f9] text-[#2a2a2a]">
            OUR PRICE WILL BE CHANGING BY LENGTH AND MINUTES OF YOUR VIDEO
          </div>
        </div>
      </div>
    </div>
  );
}
