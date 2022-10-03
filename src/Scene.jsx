import { Loader, OrbitControls, Preload, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { isMobile } from "react-device-detect";
import ScrollPage from "./components/ScrollPage";

export default function Scene() {
  return (
    <>
      <Canvas pixelratio={Math.min(2, isMobile ? devicePixelRatio : 1)}>
        <Suspense fallback={null}>
          <directionalLight intensity={1.5} position={[-2, 0, 0]} />
          <ScrollPage />
          <Preload />
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
