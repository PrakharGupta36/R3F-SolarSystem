import { Canvas } from "@react-three/fiber";

import "./css/style.css";

import ScrollPage from "./components/ScrollPage";
import { Loader, Preload, Stars } from "@react-three/drei";
import { Suspense, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { THREEcontext, ButtonContext } from "./context/useContext";

function Effects() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.05} luminanceSmoothing={1.8} height={400} />
      <Noise opacity={0.1} />
      <Vignette eskil={false} offset={0.1} darkness={1.5} />
    </EffectComposer>
  );
}

export default function App() {
  const [planetPosition, setPlanetPosition] = useState([
    { mercury: [0, 0, 0] },
    { venus: [15, 0, 0] },
    { earth: [30, 0, 0] },
    { mars: [45, 0, 0] },
    { jupiter: [60, 0, 0] },
    { saturn: [75, 0, 0] },
    { uranus: [90, 0, 0] },
    { neptune: [105, 0, 0] },
  ]);

  const [button, setButton] = useState(null);

  return (
    <>
      <Canvas pixelratio={Math.min(2, isMobile ? devicePixelRatio : 1)}>
        <Suspense fallback={null}>
          <THREEcontext.Provider value={{ planetPosition, setPlanetPosition }}>
            <ButtonContext.Provider value={{ button, setButton }}>
              <directionalLight intensity={1.5} position={[-2, 0, 0]} />
              <ScrollPage />
              <Preload />
              <Effects />

              <Stars
                count={500}
                factor={1}
                radius={10}
                fade={10}
                saturation={50}
                speed={2.5}
              />
            </ButtonContext.Provider>
          </THREEcontext.Provider>
        </Suspense>
      </Canvas>

      <Loader />
    </>
  );
}
