"use client"
import React from "react";
import { ImgComparisonSlider } from "@acf-comparison-slider/react";

export default function CompareImg({logImg,clrdImg}) {
  return (
    <div className="h-full w-fulll outline-none" style={{outline:'none'}}>
      <ImgComparisonSlider  style={{outline:'none',borderRadius:'6px',height:'100%',width:'100%',objectFit:'contain'}}>
        <img
          slot="first"
          alt="first"
          style={{height:'100%',width:'100%',borderRadius:'6px'}}
          src={logImg}
        />
        <img
          slot="second"
          alt="second"
          style={{height:'100%',width:'100%',borderRadius:'6px'}}
          src={clrdImg}
        />
      </ImgComparisonSlider>
    </div>
  );
}
