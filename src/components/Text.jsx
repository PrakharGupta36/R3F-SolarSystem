import { Center, Float, Text3D } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { useContext } from "react";
import { ButtonContext } from "../context/useContext";

export default function Text({ position, text, animate }) {
  const { button } = useContext(ButtonContext);

  const props = useSpring({
    scale: animate ? 1 : (0.025 * 1) / 2,
    position: animate
      ? [position[0], position[1], position[2] + 3]
      : button === "left"
      ? [position[0] - 1, position[1], position[2] + 3]
      : button === "right"
      ? [position[0] + 1, position[1], position[2] + 3]
      : [position[0], position[1], position[2] + 3],
  });

  return (
    <>
      <a.group scale={props.scale} position={props.position}>
        <Center>
          <Float
            speed={0.05}
            rotationIntensity={0.05}
            floatIntensity={0.05}
            floatingRange={[0.01, 0.02]}>
            <Text3D
              rotation={[0, 0, 0]}
              scale={0.25}
              size={0.4}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.03}
              bevelThickness={0.05}
              height={0.01}
              lineHeight={0.8}
              letterSpacing={0.02}
              font='/Fonts/Poppins.json'>
              {`${text}`}
              <meshNormalMaterial />
            </Text3D>
          </Float>
        </Center>
      </a.group>
    </>
  );
}
