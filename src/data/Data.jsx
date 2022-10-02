import { useGLTF } from "@react-three/drei";
import { useContext } from "react";
import { isMobile, isTablet } from "react-device-detect";
import { THREEcontext } from "../context/useContext";

export function useModels() {
  const { planetPosition, setPlanetPosition } = useContext(THREEcontext);
  const [
    { scene: mercury },
    { scene: venus },
    { scene: earth },
    { scene: mars },
    { scene: jupiter },
    { scene: saturn },
    { scene: uranus },
    { scene: neptune },
  ] = useGLTF([
    "/models/mercury/scene.gltf",
    "/models/venus/scene.gltf",
    "/models/earth/scene.gltf",
    "/models/mars/scene.gltf",
    "/models/jupiter/scene.gltf",
    "/models/saturn/scene.gltf",
    "/models/uranus/scene.gltf",
    "/models/neptuno/scene.gltf",
  ]);

  return [
    {
      id: 1,
      text: "Mercury",
      model: mercury,
      position: planetPosition[0].mercury,
      scale: 0.009,
      rotationClockWise: false,
    },
    {
      id: 2,
      text: "Venus",
      model: venus,
      position: planetPosition[1].venus,
      scale: 0.013,
      rotationClockWise: true,
    },

    {
      id: 3,
      text: "Earth",
      model: earth,
      position: planetPosition[2].earth,
      scale: 1.75,
      rotation: [0, -20, 0],
      rotationClockWise: false,
    },
    {
      id: 4,
      text: "Mars",
      model: mars,
      position: planetPosition[3].mars,
      scale: 0.65,
      rotationClockWise: false,
    },
    {
      id: 5,
      text: "Jupiter",
      model: jupiter,
      position: planetPosition[4].jupiter,
      scale: 1.2,
      rotationClockWise: false,
    },
    {
      id: 6,
      text: "Saturn",
      model: saturn,
      position: planetPosition[5].saturn,
      scale: 0.005,
      rotation: [0, 0, -15],
      rotationClockWise: false,
    },
    {
      id: 7,
      text: "Uranus",
      model: uranus,
      position: planetPosition[6].uranus,
      scale: 1,
      rotationClockWise: false,
    },
    {
      id: 8,
      text: "Neptune",
      model: neptune,
      position: planetPosition[7].neptune,
      scale: 0.009,
      rotationClockWise: false,
    },
  ];
}
