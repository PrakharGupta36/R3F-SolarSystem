import { Html, Scroll } from "@react-three/drei";

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
          scale={scale}
          text={text}
          rotationClockWise={rotationClockWise}
        />
      </Scroll>
      <Html center position={position}>
        <div className='html-wrapper'>
          <p> {text} </p>
        </div>
      </Html>
      <Html center position={[0, -3, 0]}>
        <div className='mobile'>
          <p> Scroll Horizontally </p>
        </div>
      </Html>

      <Html center position={[6, -3, 0]}>
        <div className='absolute'>
          <a href='https://twitter.com/prakhar_369' target='_blank'>
            Prakhar
          </a>
        </div>
      </Html>

      <Html center prepend position={[-6, -3, 0]}>
        <p> Thanks to SketchFab </p>
      </Html>
    </>
  );
}
