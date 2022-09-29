import { Canvas } from "@react-three/fiber";

import "./css/style.css";

import ScrollPage from "./components/ScrollPage";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";
import { ProgressLoader } from "./components/Progress";
import { isMobile, isTablet, isWearable } from "react-device-detect";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  SSAO,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

function Effects() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0}
        luminanceSmoothing={1.1}
        height={300}
        opacity={1}
      />
      <Vignette
        offset={0.25} // vignette offset
        darkness={1} // vignette darkness
        eskil={false} // Eskil's vignette technique
        blendFunction={BlendFunction.NORMAL} // blend mode
      />
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
        <Canvas pixelratio={Math.min(2, isMobile ? devicePixelRatio : 1)}>
          <Suspense fallback={<ProgressLoader />}>
            <directionalLight intensity={0.7} position={[-2, 0, 0]} />
            <ScrollPage />
            <Stars
              count={5000}
              factor={1}
              radius={100}
              saturation={50}
              speed={1}
            />
          </Suspense>
          <Effects />
        </Canvas>
      )}
    </>
  );
}
