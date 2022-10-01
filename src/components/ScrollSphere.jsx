import { Center, Html, Text3D } from "@react-three/drei";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import Sphere from "./Sphere";

export default function ScrollSphere({
  position,
  model,
  text,
  scale,
  rotation,
  rotationClockWise,
}) {
  function onNext() {
    console.log("Next");
  }
  function onPrevious() {
    console.log("onPrevious");
  }

  return (
    <>
      <Sphere
        rotation={rotation}
        position={position}
        model={model}
        text={text}
        scale={scale}
        rotationClockWise={rotationClockWise}
      />
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

      {text !== "Neptune" && (
        <group position={[position[0] + 1.5, position[1], position[2]]}>
          <Html center prepend>
            <div className='html-wrapper'>
              <AiOutlineArrowRight onClick={onNext} size={20} />
            </div>
          </Html>
        </group>
      )}
      {text !== "Mercury" && (
        <group position={[position[0] - 1.7, position[1], position[2]]}>
          <Html>
            <div className='html-wrapper'>
              <AiOutlineArrowRight onClick={onPrevious} size={20} />
            </div>
          </Html>
        </group>
      )}

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
