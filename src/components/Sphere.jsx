import { useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { useEffect, useState } from "react";

export default function Sphere({
  position,
  scale = 1,
  model,
  animate,
  refenence,
  rotation,
  rotationClockWise,
}) {
  useFrame(() => {
    rotationClockWise
      ? (refenence.current.rotation.y -= 0.0005)
      : (refenence.current.rotation.y += 0.0005);
  });

  const props = useSpring({
    scale: animate ? scale : scale * 0.25,
  });

  return (
    <>
      <a.group
        ref={refenence}
        position={position}
        rotation={rotation}
        scale={props.scale}>
        <primitive object={model} />
      </a.group>
    </>
  );
}
