"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuButton from "./MenuButton";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`h-[86px] w-full flex justify-between items-center pr-6 bg-white text-[#2a2a2a] fixed top-0 left-0 right-0 mb-6 z-50 ${
        !visible ? "hidden" : "transition-all duration-800 ease-in"
      }`}
    >
      <img
        src="/onlyLogo.png"
        alt="Logo"
        width={100}
        className="w-[120px] flex items-center justify-center mt-[20px] text-left"
      />

      <nav
        style={{ fontFamily: "MyIphoneFont", letterSpacing: 1, width: "58%" }}
        className="hidden lg:flex justify-center font-semibold gap-10 text-lg"
      >
        <Link className="hover:text-gray-500" href="/whatWeDo">
          What we do
        </Link>
        <Link className="hover:text-gray-500" href="/pricing">
          Price
        </Link>
        <Link className="hover:text-gray-500" href="/editing">
          Editing
        </Link>
        <Link className="hover:text-gray-500" href="/presets">
          Presets
        </Link>
        <Link className="hover:text-gray-500" href="/assets">
          Assets
        </Link>
        <Link className="hover:text-gray-500" href="/soundEffects">
          Sound Effects
        </Link>
      </nav>

      <h2
        style={{ letterSpacing: "4px", fontFamily: "MyCustomFont" }}
        className="text-[21px] md:text-4xl lg:5xl"
      >
        BLACKFRAME PICTURES
      </h2>
      <div className="lg:hidden">
        <MenuButton />
      </div>
    </nav>
  );
}
