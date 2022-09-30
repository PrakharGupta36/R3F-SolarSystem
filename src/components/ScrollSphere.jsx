import {
  Center,
  Html,
  MeshDistortMaterial,
  MeshReflectorMaterial,
  MeshWobbleMaterial,
  Scroll,
  Text3D,
} from "@react-three/drei";

import Sphere from "./Sphere";

export default function ScrollSphere({
  position,
  model,
  text,
  scale,
  rotation,
  rotationClockWise,
}) {
  return (
    <>
      <Scroll>
        <Sphere
          rotation={rotation}
          position={position}
          model={model}
          text={text}
          scale={scale}
          rotationClockWise={rotationClockWise}
        />
      </Scroll>
      <Scroll>
        <group position={[position[0], position[1], position[2] + 3]}>
          <Center>
            <Text3D
              rotation={[0, 0, 0]}
              scale={0.25}
              size={0.45}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.02}
              bevelThickness={0.2}
              height={0.05}
              lineHeight={0.8}
              letterSpacing={0.0002}
              font='/Fonts/Poppins.json'>
              {`${text}`}
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </group>
      </Scroll>
      <Html center position={[0, -3, 0]}>
        <div className='mobile'>
          <p> Scroll Horizontally </p>
        </div>
      </Html>

      <Html center position={[1.5, -3, 0]}>
        <div className='absolute'>
          <a href='https://twitter.com/prakhar_369' target='_blank'>
            👋
          </a>
        </div>
      </Html>

      <Html center prepend position={[-1.5, -3, 0]}>
        <p> Thanks to SketchFab </p>
      </Html>
    </>
  );
}
