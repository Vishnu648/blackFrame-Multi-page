"use client";
import React, { useRef } from "react";

interface MyComponentProps {
  anim: string;
}

const AnimationVideos: React.FC<MyComponentProps> = ({ anim }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    if (videoRef.current) {
      // Set the currentTime to 2 seconds
      videoRef.current.currentTime = 1/4;

      // Check if the video is already playing
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={anim}
        className="rounded-2xl w-screen"
        title="Play/Pause"
        muted
        loop
        onClick={playVideo}
      />
    </div>
  );
};

export default AnimationVideos;
