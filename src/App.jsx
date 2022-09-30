import { Canvas } from "@react-three/fiber";

import "./css/style.css";

import ScrollPage from "./components/ScrollPage";
import { Preload, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { ProgressLoader } from "./components/Progress";
import { isMobile, isTablet, isWearable } from "react-device-detect";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

function Effects() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.05} luminanceSmoothing={1.5} height={400} />
      <Noise opacity={0.1} />
      <Vignette eskil={false} offset={0.1} darkness={1.5} />
    </EffectComposer>
  );
}

export default function App() {
  return (
    <>
      {isTablet || isWearable ? (
        <div className='center'>Mobile version is still in development 🥲</div>
      ) : (
        <Canvas pixelratio={Math.min(2, isMobile ? devicePixelRatio : 1)}>
          <Suspense fallback={<ProgressLoader />}>
            <directionalLight intensity={1} position={[-2, 0, 0]} />
            <ScrollPage />
            <Preload />
            <Effects />
          </Suspense>
          <Stars
            count={1000}
            factor={1}
            radius={10}
            fade={10}
            saturation={50}
            speed={2.5}
          />
        </Canvas>
      )}
    </>
  );
}
