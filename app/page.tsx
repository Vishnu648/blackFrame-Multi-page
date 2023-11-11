import Image from "next/image";
import {
  Navbar,
  Hero,
  ManipulationWorks,
  ColorGrading,
  LogoAnimation,
  About,
  YoutubeVideo,
  CopyRight,
} from "../components/index";

export default function Home() {
  return (
    <main  className="flex relative min-h-screen flex-col justify-center items-center gap-6">
      <div className="border h-[80px] mt-4 w-full flex justify-between items-center pr-6 text-4xl bg-white text-[#2a2a2a]">
      <Navbar />
      </div>
      <Hero />
      <ManipulationWorks />
      <ColorGrading />
      <LogoAnimation/>
      <About/>
      <YoutubeVideo/>
      <CopyRight/>
    </main>
  );
}
