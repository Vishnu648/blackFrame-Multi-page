import AnimationVideos from "./AnimationVideos";

const animatedVideos = [
  "/logoanimation/filmlust.mp4",
  "/logoanimation/logovr1.mp4",
  "/logoanimation/mattepaint.mp4",
  "/logoanimation/motionwolrdd.mp4",
  "/logoanimation/netFlixintro.mp4",
  "/logoanimation/rnder.mp4",
  "/logoanimation/shockwave logo.mp4",
  "/logoanimation/signature.mp4",
];

export default function LogoAnimation() {
  return (
    <div
      style={{ fontFamily: "MyCustomFont" }}
      className="w-full p-6 "
    >
      <h1 className="text-4xl md:text-5xl mb-6">LOGO ANIMATION </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10 content-between p-6">
        {animatedVideos.map((anim, i) => {
          return (
            <div
              key={i}
              className="bg-gray-600 rounded-xl"
              style={{ aspectRatio: "16/9",objectFit:'contain' }}
            >
            <AnimationVideos anim={anim}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
