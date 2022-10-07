import { Center, Float, Text3D } from "@react-three/drei";
import Modal from "./Modal";

export default function Text({
  position,
  text,
  boundingBox,
  para,
  distanceFromSun,
  lengthOfYear,
  numberOfMoon,
  img,
}) {
  return (
    <>
      <Modal
        distanceFromSun={distanceFromSun}
        lengthOfYear={lengthOfYear}
        numberOfMoon={numberOfMoon}
        boundingBox={boundingBox}
        position={position}
        para={para}
        text={text}
        img={img}
      />
      {text !== "Pluto" && (
        <group position={[position[0], position[1], position[2] + 3]}>
          <Center>
            <Float
              speed={0.05}
              rotationIntensity={0.05}
              floatIntensity={0.05}
              floatingRange={[0.01, 0.02]}>
              <Text3D
                rotation={[0, 0, 0]}
                scale={0.25}
                size={0.9}
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
        </group>
      )}
    </>
  );
}
