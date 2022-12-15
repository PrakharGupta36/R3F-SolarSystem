import { useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { useTexture } from "@react-three/drei";
import Shader from "./Shader";

export default function Sphere({
  position,
  scale,
  model,
  animate,
  reference,
  text,
  map,
  rotation,
  img,
}) {
  useFrame(() => {
    text === "Venus"
      ? (reference.current.rotation.y -= 0.0009)
      : text !== "Pluto" && (reference.current.rotation.y += 0.0009);
  });

  console.log(animate);

  const [normal, roughness] = useTexture([
    "/Textures/normal.jpg",
    "/Textures/roughness.png",
  ]);

  const props = useSpring({
    scale: animate ? scale : scale * 0.25,
  });

  return (
    <>
      {text === "Saturn" ? (
        <a.mesh
          position={position}
          ref={reference}
          rotation={rotation}
          scale={props.scale}>
          <primitive object={model} />
        </a.mesh>
      ) : text === "Pluto" ? (
        <Shader reference={reference} position={position} img={img} />
      ) : (
        <a.mesh position={position} scale={props.scale} ref={reference}>
          <sphereGeometry args={[0.5, 128, 128]} />
          <meshStandardMaterial
            wireframe={false}
            normalMap={text === "Earth" ? normal : null}
            map={map}
          />
        </a.mesh>
      )}
    </>
  );
}
