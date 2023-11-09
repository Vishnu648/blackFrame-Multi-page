import React from "react";
import { ImgComparisonSlider } from "@acf-comparison-slider/react";

// Define the prop types using TypeScript
interface MyComponentProps {
  logImg: string; // Fix: Add type for logImg
  clrdImg: string; // Fix: Add type for clrdImg
}

const MyComponent: React.FC<MyComponentProps> = ({ logImg, clrdImg }) => {
  return (
    <div className="h-full w-full outline-none" style={{ outline: 'none' }}>
      <ImgComparisonSlider style={{ outline: 'none', borderRadius: '6px', height: '100%', width: '100%', objectFit: 'contain' }}>
        <img
          slot="first"
          alt="first"
          style={{ height: '100%', width: '100%', borderRadius: '6px' }}
          src={logImg}
        />
        <img
          slot="second"
          alt="second"
          style={{ height: '100%', width: '100%', borderRadius: '6px' }}
          src={clrdImg}
        />
      </ImgComparisonSlider>
    </div>
  );
}

export default MyComponent;
