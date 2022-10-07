import { useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { useTexture } from "@react-three/drei";

export default function Sphere({
  position,
  scale,
  model,
  animate,
  refenence,
  text,
  map,
  rotation,
  rotationClockWise,
}) {
  useFrame(() => {
    rotationClockWise
      ? (refenence.current.rotation.y -= 0.0009)
      : (refenence.current.rotation.y += 0.0009);
  });

  console.log(animate);

  const [normal, roughness] = useTexture([
    "/Textures/normal.png",
    "/Textures/roughness.png",
  ]);

  const props = useSpring({
    scale: animate ? scale : scale * 0.25,
  });

  return (
    <>
      {model ? (
        <a.mesh
          position={position}
          ref={refenence}
          rotation={rotation}
          scale={props.scale}>
          <primitive object={model} />
        </a.mesh>
      ) : (
        <a.mesh position={position} scale={props.scale} ref={refenence}>
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
