import { ScrollControls } from "@react-three/drei";
import ScrollSphere from "./ScrollSphere";
import { useModels } from "../data/Data";

export default function ScrollPage() {
  return (
    <>
      <ScrollControls
        pages={8.5} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={10} // Friction, higher is faster (default: 4)
        horizontal={true}
        infinite={false} // Can also scroll infinitely (default: false)
      >
        {useModels().map((e) => {
          return (
            <ScrollSphere
              key={e.id}
              model={e.model}
              scale={e.scale}
              text={e.text}
              position={e.position}
              rotationClockWise={e.rotationClockWise}
              rotation={e.rotation}
            />
          );
        })}
      </ScrollControls>
    </>
  );
}
