import { Canvas } from "@react-three/fiber";

import "./css/style.css";

import ScrollPage from "./components/ScrollPage";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";
import { ProgressLoader } from "./data/Data";
import { isMobile, isTablet, isWearable } from "react-device-detect";

export default function App() {
  return (
    <>
      {isMobile || isTablet || isWearable ? (
        <div className='center'>Mobile version is still in development 🥲</div>
      ) : (
        <Canvas pixelratio={Math.min(2, isMobile ? devicePixelRatio : 1)}>
          <Suspense fallback={<ProgressLoader />}>
            <directionalLight intensity={0.9} position={[-20, 0, 1]} />
            <ScrollPage />
            <Stars
              count={5000}
              factor={1}
              radius={50}
              saturation={50}
              speed={2.5}
            />
          </Suspense>
        </Canvas>
      )}
    </>
  );
}
