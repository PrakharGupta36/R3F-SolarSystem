import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sphere({
  position,
  scale = 1,
  model,
  rotation,
  rotationClockWise,
  text,
}) {
  const ref = useRef();

  useFrame(() => {
    rotationClockWise
      ? (ref.current.rotation.y -= 0.0009)
      : (ref.current.rotation.y += 0.0009);
  });

  return (
    <>
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        <primitive object={model} />
      </group>
    </>
  );
}
