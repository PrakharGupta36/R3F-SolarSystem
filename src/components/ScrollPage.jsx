import ScrollSphere from "./ScrollSphere";
import { useModels } from "../data/Data";

export default function ScrollPage() {
  return (
    <>
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
        } = e;
        return (
          <ScrollSphere
            key={id}
            map={map}
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
    </>
  );
}
