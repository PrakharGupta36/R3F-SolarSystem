import { useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { useContext } from "react";
import { ButtonContext } from "../context/useContext";
import { useTexture } from "@react-three/drei";

export default function Sphere({
  position,
  scale = 1,
  model,
  animate,
  refenence,
  text,
  map,
  rotation,
  rotationClockWise,
}) {
  const { button } = useContext(ButtonContext);

  useFrame(() => {
    rotationClockWise
      ? (refenence.current.rotation.y -= 0.0005)
      : (refenence.current.rotation.y += 0.0005);
  });

  const [normal, roughness] = useTexture([
    "/Textures/normal.png",
    "/Textures/roughness.png",
  ]);

  console.log(model);

  const props = useSpring({
    scale: animate ? scale : scale * 0.25,
    position: animate
      ? position
      : button === "left"
      ? [position[0] - 3, position[1], position[2]]
      : button === "right"
      ? [position[0] + 3, position[1], position[2]]
      : position,
  });

  return (
    <>
      {model ? (
        <a.mesh
          position={props.position}
          ref={refenence}
          rotation={rotation}
          scale={props.scale}>
          <primitive object={model} />
        </a.mesh>
      ) : (
        <a.mesh position={props.position} scale={props.scale} ref={refenence}>
          <sphereGeometry args={[0.5, 128, 128]} />
          <meshStandardMaterial
            wireframe={false}
            normalMap={text === "Earth" ? normal : null}
            roughnessMap={text === "Earth" ? roughness : null}
            map={map}
          />
        </a.mesh>
      )}
    </>
  );
}
