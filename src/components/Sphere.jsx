import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


export default function Sphere({ position, scale = 1, model, rotation }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });

  return (
    <>
      <group
        ref={ref}
        position={position}
        rotation={rotation ? [0, 0, -15] : [0, 0, 0]}
        scale={scale}>
        <primitive object={model} />
      </group>

    </>
  );
}
