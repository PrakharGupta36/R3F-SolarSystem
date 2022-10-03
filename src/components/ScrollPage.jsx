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
    </>
  );
}
