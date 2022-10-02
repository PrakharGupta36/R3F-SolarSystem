import { Loader, Preload, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Suspense } from "react";
import { isMobile } from "react-device-detect";
import ScrollPage from "./components/ScrollPage";

function Effects() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.05} luminanceSmoothing={1.8} height={400} />
      <Noise opacity={0.1} />
      <Vignette eskil={false} offset={0.1} darkness={1.5} />
    </EffectComposer>
  );
}

export default function Scene() {
  return (
    <>
      <Canvas pixelratio={Math.min(2, isMobile ? devicePixelRatio : 1)}>
        <Suspense fallback={null}>
          <directionalLight intensity={1.5} position={[-2, 0, 0]} />
          <ScrollPage />
          <Preload />
          <Effects />
          <Stars
            count={2500}
            factor={1}
            radius={10}
            fade={10}
            saturation={50}
            speed={2.5}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
