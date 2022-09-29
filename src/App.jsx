import { Canvas } from "@react-three/fiber";

import "./css/style.css";

import ScrollPage from "./components/ScrollPage";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";
import { ProgressLoader } from "./components/Progress";
import { isMobile, isTablet, isWearable } from "react-device-detect";
import { EffectComposer, Noise } from "@react-three/postprocessing";

function Effects() {
  return (
    <EffectComposer>
      <Noise opacity={0.1} />
    </EffectComposer>
  );
}

export default function App() {
  return (
    <>
      {isMobile || isTablet || isWearable ? (
        <div className='center'>Mobile version is still in development 🥲</div>
      ) : (
        <Canvas
          shadows
          pixelratio={Math.min(2, isMobile ? devicePixelRatio : 1)}>
          <Suspense fallback={<ProgressLoader />}>
            <directionalLight intensity={0.7} position={[-2, 0, 0]} />
            <ScrollPage />
            <Stars
              count={200}
              factor={1}
              radius={10}
              fade={10}
              saturation={50}
              speed={5}
            />
          </Suspense>
          <Effects />
        </Canvas>
      )}
    </>
  );
}
