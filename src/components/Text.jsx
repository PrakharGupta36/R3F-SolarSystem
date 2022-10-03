import { Center, Float, Text3D } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

export default function Text({ position, text, animate }) {
  const props = useSpring({
    scale: animate ? 1 : (0.025 * 1) / 2,
  });

  return (
    <a.group
      scale={props.scale}
      position={[position[0], position[1], position[2] + 3]}>
      <Center>
        <Float
          speed={0.05}
          rotationIntensity={0.05}
          floatIntensity={0.05}
          floatingRange={[0.01, 0.02]}>
          <Text3D
            rotation={[0, 0, 0]}
            scale={0.25}
            size={0.3}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.015}
            bevelThickness={0.2}
            height={0.01}
            lineHeight={0.8}
            letterSpacing={0.0001}
            font='/Fonts/Poppins.json'>
            {`${text}`}
            <meshNormalMaterial />
          </Text3D>
        </Float>
      </Center>
    </a.group>
  );
}
