import { Html, useIntersect } from "@react-three/drei";
import { useContext, useEffect, useRef, useState } from "react";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { ButtonContext, THREEcontext } from "../context/useContext";
import { onNextUtil, onPreviousUtil } from "../utils/SwitchCase";
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

      <Text position={position} text={text} animate={animate} />

      {animate && <Arrows text={text} position={position} />}

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
