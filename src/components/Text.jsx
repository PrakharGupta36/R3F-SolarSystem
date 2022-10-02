import { Center, Float, Text3D } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { useContext } from "react";
import { ButtonContext } from "../context/useContext";

export default function Text({ position, text, animate }) {
  const { button } = useContext(ButtonContext);

  const props = useSpring({
    position: animate
      ? [position[0], position[1], position[2] + 3]
      : button === "left"
      ? [position[0] - 1, position[1], position[2] + 3]
      : button === "right"
      ? [position[0] + 1, position[1], position[2] + 3]
      : [position[0], position[1], position[2] + 3],
  });

  return (
    <a.group position={props.position}>
      <Center>
        <Float
          speed={1}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0.01, 0.05]}>
          <Text3D
            rotation={[0, 0, 0]}
            scale={0.25}
            size={0.35}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.015}
            bevelThickness={0.2}
            height={0.05}
            lineHeight={0.8}
            letterSpacing={0.0002}
            font='/Fonts/Poppins.json'>
            {`${text}`}
            <meshNormalMaterial />
          </Text3D>
        </Float>
      </Center>
    </a.group>
  );
}
