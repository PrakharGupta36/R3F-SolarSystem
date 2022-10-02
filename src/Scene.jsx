import { Loader, Preload, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Glitch,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Suspense, useEffect } from "react";
import { isMobile } from "react-device-detect";
import ScrollPage from "./components/ScrollPage";
import { GlitchMode } from "postprocessing";
import { useContext } from "react";
import { GlitchContext } from "./context/useContext";

function Effects() {
  let { glitch, setGlitch } = useContext(GlitchContext);

  setTimeout((e) => {
    setGlitch(false);
  }, 1000);

  

  console.log(glitch);

  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.05} luminanceSmoothing={1.8} height={400} />
      <Glitch
        delay={[0.1, 0.5]} // min and max glitch delay
        duration={[0.1, 0.2]} // min and max glitch duration
        strength={[0.05, 0.07]} // min and max glitch strength
        mode={GlitchMode.SPORADIC} // glitch mode
        active={glitch} // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
        ratio={0.5} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
      />
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
