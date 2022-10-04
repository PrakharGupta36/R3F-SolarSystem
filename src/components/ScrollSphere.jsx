import { Html, useIntersect } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { FiTwitter } from "react-icons/fi";

import Arrows from "./Arrows";

import Sphere from "./Sphere";
import Text from "./Text";
import ModalComponent from "./ModalComponent";
import { isMobile } from "react-device-detect";

export default function ScrollSphere({
  position,
  model,
  text,
  scale,
  para,
  boundingBox,
  rotation,
  rotationClockWise,
  distanceFromSun,
  lengthOfYear,
  numberOfMoon,
}) {
  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));

  const [animate, setAnimate] = useState(false);

  const [hovered, setHovered] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!visible.current) {
      setAnimate(true);
    }
  }, [visible]);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  function onClick() {
    document.body.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 250,
        iterations: 1,
      }
    );
    setModal(!modal);
  }

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

      {animate && !modal && <Arrows text={text} position={position} />}

      <mesh
        position={position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}>
        <boxGeometry args={boundingBox} />
        <meshBasicMaterial wireframe={true} color={"black"} />
      </mesh>

      <ModalComponent
        para={para}
        text={text}
        setModal={setModal}
        modal={modal}
        numberOfMoon={numberOfMoon}
        lengthOfYear={lengthOfYear}
        distanceFromSun={distanceFromSun}
      />
      <Html center position={[0, -3, 0]}>
        <div className='absolute'>
          <p className='html_p'> Click on the text to see more </p>
        </div>
      </Html>

      <Html center position={[isMobile ? 1.6 : 2, -3, 0]}>
        <div className='absolute'>
          <a href='https://twitter.com/prakhar_369' target={"_blank"}>
            {!modal && <FiTwitter size={20} />}
          </a>
        </div>
      </Html>

      <Html center position={[isMobile ? 1.6 : 2, 3, 0]}>
        {!modal && (
          <p className='html_p'>
            Thanks to
            <a
              target={"_blank"}
              href='https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/'>
              nasa.gov
            </a>
          </p>
        )}
      </Html>

      <Html center position={[isMobile ? -1.6 : -2, -3, 0]}>
        {!modal && (
          <p className='html_p'>
            Thanks to
            <a href='https://sketchfab.com/feed' target={"_blank"}>
              SketchFab
            </a>
          </p>
        )}
      </Html>

      <Html center position={[isMobile ? -1.6 : -2, 3, 0]}>
        <p className='html_p'>
          <a
            href='https://github.com/PrakharGupta36/R3F-SolarSystem'
            target={"_blank"}>
            GitHub
          </a>
        </p>
      </Html>
    </>
  );
}
