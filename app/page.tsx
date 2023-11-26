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
    <main  className="flex absolute min-h-screen flex-col justify-center items-center gap-6">
      <Navbar />
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
