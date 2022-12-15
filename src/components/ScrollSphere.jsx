import { Html, Scroll, useIntersect } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { FiTwitter } from "react-icons/fi";

import Sphere from "./Sphere";
import Text from "./Text";
import { isMobile } from "react-device-detect";
import { Minimap } from "./Minimap";

export default function ScrollSphere({
  position,
  model,
  text,
  scale,
  para,
  boundingBox,
  rotation,
  map,
  rotationClockWise,
  distanceFromSun,
  lengthOfYear,
  numberOfMoon,
  img,
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
      <Scroll>
        <Sphere
          rotation={rotation}
          animate={animate}
          reference={ref}
          map={map}
          position={position}
          model={model}
          text={text}
          img={img}
          scale={scale}
          rotationClockWise={rotationClockWise}
        />
      </Scroll>

      <Scroll>
        <Text
          boundingBox={boundingBox}
          para={para}
          img={img}
          position={position}
          text={text}
          scale={scale}
          animate={animate}
          distanceFromSun={distanceFromSun}
          lengthOfYear={lengthOfYear}
          numberOfMoon={numberOfMoon}
        />
      </Scroll>

      <Minimap position={position} />

      <Html center position={[0, -2.2, 0]}>
        <div className='absolute'>
          <p className='html_p'>
            <p className='center'> Click on the text to see more </p>
          </p>
        </div>
      </Html>

      <Html center position={[0, -2.7, 0]}>
        <div className='absolute'>
          <p className='html_p'> Scroll Horizontally </p>
        </div>
      </Html>

      <Html center position={[isMobile ? 1.5 : 2, -3, 0]}>
        <div className='absolute'>
          <a href='https://twitter.com/prakhar_369' target={"_blank"}>
            <FiTwitter size={20} />
          </a>
        </div>
      </Html>

      <Html center position={[isMobile ? 1.5 : 2, 3, 0]}>
        <p className='html_p'>
          Thanks to
          <a
            target={"_blank"}
            href='https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/'>
            nasa.gov
          </a>
        </p>
      </Html>

      <Html center position={[isMobile ? -1.5 : -2, -3, 0]}>
        <p className='html_p'>
          Thanks to
          <a href='https://sketchfab.com/feed' target={"_blank"}>
            SketchFab
          </a>
        </p>
      </Html>

      <Html center position={[isMobile ? -1.5 : -2, 3, 0]}>
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
