import { Center, Float, Html, Text3D, useIntersect } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { ButtonContext, THREEcontext } from "../context/useContext";
import { onNextUtil, onPreviousUtil } from "../utils/SwitchCase";
import { Transition } from "@react-spring/three";

import Sphere from "./Sphere";

export default function ScrollSphere({
  position,
  model,
  text,
  scale,
  rotation,
  rotationClockWise,
}) {
  const { setPlanetPosition } = useContext(THREEcontext);
  const { setButton } = useContext(ButtonContext);

  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));

  return (
    <>
      <Sphere
        rotation={rotation}
        visible={visible}
        refenence={ref}
        position={position}
        model={model}
        text={text}
        scale={scale}
        rotationClockWise={rotationClockWise}
      />

      <group position={[position[0], position[1], position[2] + 3]}>
        <Center>
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0.01, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
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
      </group>

      {text !== "Neptune" && (
        <group position={[position[0] + 1.5, position[1], position[2]]}>
          <Html center prepend>
            <div
              onClick={() => {
                onNextUtil(text, setPlanetPosition);
                setButton("right");
              }}
              className='html-wrapper'>
              <ImArrowRight2 className='icon' size={20} />
            </div>
          </Html>
        </group>
      )}
      {text !== "Mercury" && (
        <group position={[position[0] - 1.7, position[1], position[2]]}>
          <Html center prepend>
            <div
              onClick={() => {
                onPreviousUtil(text, setPlanetPosition);
                setButton("left");
              }}
              className='html-wrapper'>
              <ImArrowLeft2 className='icon' size={20} />
            </div>
          </Html>
        </group>
      )}

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
