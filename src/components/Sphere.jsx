import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { a } from "@react-spring/three";
import { useIntersect } from "@react-three/drei";

export default function Sphere({
  position,
  scale = 1,
  model,
  rotation,
  rotationClockWise,
}) {
  const visible = useRef();

  

  useFrame(() => {
    rotationClockWise
      ? (visible.current.rotation.y -= 0.0009)
      : (visible.current.rotation.y += 0.0009);
  });

  return (
    <a.group ref={visible} position={position}>
      <a.group rotation={rotation} scale={scale}>
        <a.primitive object={model} />
      </a.group>
    </a.group>
  );
}
