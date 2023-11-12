"use client"
import React from "react";
import { ImgComparisonSlider } from "@acf-comparison-slider/react";

interface MyComponentProps {
  logImg: string; 
  clrdImg: string; 
}

const MyComponent: React.FC<MyComponentProps> = ({ logImg, clrdImg }) => {
  return (
    <div className="h-full w-full outline-none" style={{ outline: 'none' }}>
      <ImgComparisonSlider style={{ outline: 'none', borderRadius: '6px', height: '100%', width: '100%', objectFit: 'contain' }}>
        <img
          slot="first"
          alt="first"
          style={{ height: '100%', width: '100%', borderRadius: '6px',backgroundColor:'#2a2a2a' }}
          src={logImg}
        />
        <img
          slot="second"
          alt="second"
          style={{ height: '100%', width: '100%', borderRadius: '6px',backgroundColor:'#000' }}
          src={clrdImg}
        />
      </ImgComparisonSlider>
    </div>
  );
}

export default MyComponent;
