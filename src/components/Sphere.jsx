import { Center, Text, Text3D, useIntersect } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sphere({
  position,
  scale = 1,
  model,
  text,
  rotation,
  rotationClockWise,
}) {
  const visible = useRef(false);
  const refIntersect = useIntersect(
    (isVisible) => (visible.current = isVisible)
  );

  useFrame(() => {
    rotationClockWise
      ? (visible.current.rotation.y -= 0.0009)
      : (visible.current.rotation.y += 0.0009);
  });

  return (
    <>
      <group position={position}>
        <group ref={visible} rotation={rotation} scale={scale}>
          <primitive object={model} />
        </group>
      </group>
    </>
  );
}
