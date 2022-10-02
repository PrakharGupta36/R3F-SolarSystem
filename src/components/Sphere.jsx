import { useFrame } from "@react-three/fiber";

import { a, useSpring } from "@react-spring/three";

import { useContext } from "react";
import { ButtonContext } from "../context/useContext";

export default function Sphere({
  position,
  scale = 1,
  model,
  animate,
  refenence,
  rotation,
  rotationClockWise,
}) {
  const { button } = useContext(ButtonContext);

  useFrame(() => {
    rotationClockWise
      ? (refenence.current.rotation.y -= 0.0009)
      : (refenence.current.rotation.y += 0.0009);
  });

  const props = useSpring({
    scale: animate ? scale : scale * 0.5,
    position: animate
      ? position
      : button === "left"
      ? [position[0] - 3, position[1], position[2]]
      : button === "right"
      ? [position[0] + 3, position[1], position[2]]
      : position,
  });

  return (
    <a.group
      ref={refenence}
      position={props.position}
      rotation={rotation}
      scale={props.scale}>
      <a.primitive object={model} />
    </a.group>
  );
}
