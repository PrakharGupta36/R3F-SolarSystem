import ScrollSphere from "./ScrollSphere";
import { useModels } from "../data/Data";
import { ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { isMobile } from "react-device-detect";

export default function ScrollPage() {
  const { width } = useThree((state) => state.viewport);

  return (
    <>
      <ScrollControls
        horizontal
        damping={isMobile ? 17 : 12}
        distance={1}
        pages={(width - 15 + useModels().length * 15) / width}>
        {useModels().map((e) => {
          const {
            id,
            model,
            text,
            scale,
            position,
            rotationClockWise,
            map,
            rotation,
            boundingBox,
            para,
            distanceFromSun,
            lengthOfYear,
            numberOfMoon,
            img,
          } = e;
          return (
            <ScrollSphere
              key={id}
              map={map}
              img={img}
              numberOfMoon={numberOfMoon}
              lengthOfYear={lengthOfYear}
              distanceFromSun={distanceFromSun}
              para={para}
              boundingBox={boundingBox}
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
