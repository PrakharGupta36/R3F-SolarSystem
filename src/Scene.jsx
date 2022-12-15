import { Loader, Preload, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { isMobile, isTablet } from "react-device-detect";

import ScrollPage from "./components/ScrollPage";

export default function Scene() {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const frustumSize = 430;
  const aspect = sizes.width / sizes.height;

  return (
    <>
      <Canvas
        orthographic
        camera={{
          left: (frustumSize * aspect) / -2,
          right: (frustumSize * aspect) / 2,
          top: frustumSize / 2,
          bottom: frustumSize / -2,
          far: 100,
          near: 0.1,
          zoom: isMobile ? 90 : isTablet ? 100 : 120,
        }}
        pixelratio={Math.min(2, isMobile ? devicePixelRatio : 1)}>
        <Suspense fallback={null}>
          <directionalLight intensity={1.5} position={[-5, 0, 0]} />
          <ScrollPage />
          <Preload />
          <Stars
            radius={0.0001}
            depth={35}
            count={100000}
            factor={1}
            saturation={0}
            fade
            speed={2}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
