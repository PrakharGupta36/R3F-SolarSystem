import { Center, Html, Text3D } from "@react-three/drei";
import { useContext } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { THREEcontext } from "../context/useContext";

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

  function onNext() {
    switch (text) {
      case "Mercury":
        setPlanetPosition([
          { mercury: [-15, 0, 0] },
          { venus: [0, 0, 0] },
          { earth: [15, 0, 0] },
          { mars: [30, 0, 0] },
          { jupiter: [45, 0, 0] },
          { saturn: [60, 0, 0] },
          { uranus: [75, 0, 0] },
          { neptune: [90, 0, 0] },
        ]);
        break;
      case "Venus":
        setPlanetPosition([
          { mercury: [-30, 0, 0] },
          { venus: [-15, 0, 0] },
          { earth: [0, 0, 0] },
          { mars: [15, 0, 0] },
          { jupiter: [30, 0, 0] },
          { saturn: [45, 0, 0] },
          { uranus: [60, 0, 0] },
          { neptune: [75, 0, 0] },
        ]);
        break;
      case "Earth":
        setPlanetPosition([
          { mercury: [-35, 0, 0] },
          { venus: [-30, 0, 0] },
          { earth: [-15, 0, 0] },
          { mars: [0, 0, 0] },
          { jupiter: [15, 0, 0] },
          { saturn: [30, 0, 0] },
          { uranus: [45, 0, 0] },
          { neptune: [60, 0, 0] },
        ]);
        break;
      case "Mars":
        setPlanetPosition([
          { mercury: [-60, 0, 0] },
          { venus: [-45, 0, 0] },
          { earth: [-30, 0, 0] },
          { mars: [-15, 0, 0] },
          { jupiter: [0, 0, 0] },
          { saturn: [15, 0, 0] },
          { uranus: [30, 0, 0] },
          { neptune: [45, 0, 0] },
        ]);
        break;
      case "Jupiter":
        setPlanetPosition([
          { mercury: [-75, 0, 0] },
          { venus: [-60, 0, 0] },
          { earth: [-45, 0, 0] },
          { mars: [-30, 0, 0] },
          { jupiter: [-15, 0, 0] },
          { saturn: [0, 0, 0] },
          { uranus: [15, 0, 0] },
          { neptune: [30, 0, 0] },
        ]);
        break;
      case "Saturn":
        setPlanetPosition([
          { mercury: [-90, 0, 0] },
          { venus: [-75, 0, 0] },
          { earth: [-60, 0, 0] },
          { mars: [-45, 0, 0] },
          { jupiter: [-30, 0, 0] },
          { saturn: [-15, 0, 0] },
          { uranus: [0, 0, 0] },
          { neptune: [30, 0, 0] },
        ]);
        break;
      case "Uranus":
        setPlanetPosition([
          { mercury: [-105, 0, 0] },
          { venus: [-90, 0, 0] },
          { earth: [-75, 0, 0] },
          { mars: [-60, 0, 0] },
          { jupiter: [-45, 0, 0] },
          { saturn: [-30, 0, 0] },
          { uranus: [-15, 0, 0] },
          { neptune: [0, 0, 0] },
        ]);
        break;
      default:
        break;
    }
  }

  function onPrevious() {
    switch (text) {
      case "Neptune":
        setPlanetPosition([
          { mercury: [-90, 0, 0] },
          { venus: [-75, 0, 0] },
          { earth: [-60, 0, 0] },
          { mars: [-45, 0, 0] },
          { jupiter: [-30, 0, 0] },
          { saturn: [-15, 0, 0] },
          { uranus: [0, 0, 0] },
          { neptune: [15, 0, 0] },
        ]);
        break;
      case "Uranus":
        setPlanetPosition([
          { mercury: [-75, 0, 0] },
          { venus: [-60, 0, 0] },
          { earth: [-45, 0, 0] },
          { mars: [-30, 0, 0] },
          { jupiter: [-15, 0, 0] },
          { saturn: [0, 0, 0] },
          { uranus: [15, 0, 0] },
          { neptune: [30, 0, 0] },
        ]);
        break;
      case "Saturn":
        setPlanetPosition([
          { mercury: [-60, 0, 0] },
          { venus: [-45, 0, 0] },
          { earth: [-30, 0, 0] },
          { mars: [-15, 0, 0] },
          { jupiter: [0, 0, 0] },
          { saturn: [15, 0, 0] },
          { uranus: [30, 0, 0] },
          { neptune: [45, 0, 0] },
        ]);
        break;
      case "Jupiter":
        setPlanetPosition([
          { mercury: [-45, 0, 0] },
          { venus: [-30, 0, 0] },
          { earth: [-15, 0, 0] },
          { mars: [0, 0, 0] },
          { jupiter: [15, 0, 0] },
          { saturn: [30, 0, 0] },
          { uranus: [45, 0, 0] },
          { neptune: [60, 0, 0] },
        ]);
        break;
      case "Mars":
        setPlanetPosition([
          { mercury: [-30, 0, 0] },
          { venus: [-15, 0, 0] },
          { earth: [0, 0, 0] },
          { mars: [15, 0, 0] },
          { jupiter: [30, 0, 0] },
          { saturn: [45, 0, 0] },
          { uranus: [60, 0, 0] },
          { neptune: [75, 0, 0] },
        ]);
        break;
      case "Earth":
        setPlanetPosition([
          { mercury: [-15, 0, 0] },
          { venus: [0, 0, 0] },
          { earth: [15, 0, 0] },
          { mars: [30, 0, 0] },
          { jupiter: [45, 0, 0] },
          { saturn: [60, 0, 0] },
          { uranus: [75, 0, 0] },
          { neptune: [90, 0, 0] },
        ]);
        break;
      case "Venus":
        setPlanetPosition([
          { mercury: [0, 0, 0] },
          { venus: [15, 0, 0] },
          { earth: [30, 0, 0] },
          { mars: [45, 0, 0] },
          { jupiter: [60, 0, 0] },
          { saturn: [75, 0, 0] },
          { uranus: [90, 0, 0] },
          { neptune: [105, 0, 0] },
        ]);
        break;
      default:
        break;
    }
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
              <AiOutlineArrowRight onClick={() => onNext()} size={20} />
            </div>
          </Html>
        </group>
      )}
      {text !== "Mercury" && (
        <group position={[position[0] - 1.7, position[1], position[2]]}>
          <Html>
            <div className='html-wrapper'>
              <AiOutlineArrowLeft onClick={() => onPrevious()} size={20} />
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
