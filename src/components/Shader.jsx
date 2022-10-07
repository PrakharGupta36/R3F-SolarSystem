import {
  GradientTexture,
  MeshDistortMaterial,
  SpotLight,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function Shader({ position, img }) {
  const ref = useRef();
  const [texture] = useTexture([img]);

  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, 0.4, 0.05);
  });
  return (
    <>
      <mesh position={position} scale={[2, 4, 1]}>
        <planeGeometry args={[1, 1, 32, 32]} />
        <MeshDistortMaterial ref={ref} speed={5} map={texture} />
      </mesh>
      <SpotLight
        position={[120, 0, 4]}
        distance={10}
        angle={1}
        attenuation={0}
        anglePower={15} // Diffuse-cone anglePower (default: 5)
      />
    </>
  );
}
