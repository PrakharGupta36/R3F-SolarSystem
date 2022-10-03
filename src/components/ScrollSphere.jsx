import { Html, Scroll, useIntersect } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

import Arrows from "./Arrows";

import Sphere from "./Sphere";
import Text from "./Text";

export default function ScrollSphere({
  position,
  model,
  text,
  scale,
  rotation,
  rotationClockWise,
}) {
  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!visible.current) {
      setAnimate(true);
    }
  }, [visible]);

  return (
    <>
      <Sphere
        rotation={rotation}
        animate={animate}
        refenence={ref}
        position={position}
        model={model}
        text={text}
        scale={scale}
        rotationClockWise={rotationClockWise}
      />

      <Text position={position} text={text} scale={scale} animate={animate} />

      <Arrows text={ text } position={ position } />
      
      {/*
      <Html center position={[0, -3, 0]}>
        <div className="absolute">
          <p> Click on the text to see more </p>
        </div>
      </Html> */}

      <Html center position={[1.6, -3, 0]}>
        <div className='absolute'>
          <a href='https://twitter.com/prakhar_369' target='_blank'>
            👋
          </a>
        </div>
      </Html>

      <Html center prepend position={[-1.6, -3, 0]}>
        <p> Thanks to SketchFab </p>
      </Html>
    </>
  );
}
