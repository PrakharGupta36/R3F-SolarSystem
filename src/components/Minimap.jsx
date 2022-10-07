import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useModels } from "../data/Data";

const material = new THREE.LineBasicMaterial({ color: "white" });
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);
const damp = THREE.MathUtils.damp;

export function Minimap() {
  const ref = useRef();
  const scroll = useScroll();
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(index / 9 - 1.5 / 9, 4 / 9);
      child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, delta);
    });
  });
  return (
    <group ref={ref}>
      {useModels().map((_, i) => (
        <line
          key={i}
          geometry={geometry}
          material={material}
          position={[i * 0.06 - 9 * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  );
}
