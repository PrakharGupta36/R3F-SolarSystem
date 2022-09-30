import { Html, ScrollControls } from "@react-three/drei";
import ScrollSphere from "./ScrollSphere";

import { useModels } from "../data/Data";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

export default function ScrollPage() {
  return (
    <>
      <ScrollControls
        horizontal
        pages={isMobile ? 25 : isDesktop ? 8.9 : null}
        distance={1}
        damping={10}>
        {useModels().map((e) => {
          const {
            id,
            model,
            text,
            scale,
            position,
            rotationClockWise,
            rotation,
          } = e;
          return (
            <ScrollSphere
              key={id}
              model={model}
              text={text}
              scale={scale}
              position={position}
              rotationClockWise={rotationClockWise}
              rotation={rotation}
            />
          );
        })}
      </ScrollControls>
    </>
  );
}
