import { useGLTF } from "@react-three/drei";
import { isMobile, isTablet } from "react-device-detect";

export function useModels() {
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
      position: [0, 0, 0],
      scale: 0.009,
      rotationClockWise: false,
    },
    {
      id: 2,
      text: "Venus",
      model: venus,
      position: [15, 0, 0],
      scale: 0.013,
      rotationClockWise: true,
    },

    {
      id: 3,
      text: "Earth",
      model: earth,
      position: [30, 0, 0],
      scale: 1.75,
      rotation: [0, -20, 0],
      rotationClockWise: false,
    },
    {
      id: 4,
      text: "Mars",
      model: mars,
      position: [45, 0, 0],
      scale: 0.65,
      rotationClockWise: false,
    },
    {
      id: 5,
      text: "Jupiter",
      model: jupiter,
      position: [60, 0, 0],
      scale: 1.2,
      rotationClockWise: false,
    },
    {
      id: 6,
      text: "Saturn",
      model: saturn,
      position: [75, 0, 0],
      scale: 0.005,
      rotation: [0, 0, -15],
      rotationClockWise: false,
    },
    {
      id: 7,
      text: "Uranus",
      model: uranus,
      position: [90, 0, 0],
      scale: 1,
      rotationClockWise: false,
    },
    {
      id: 8,
      text: "Neptune",
      model: neptune,
      position: [105, 0, 0],
      scale: 0.009,
      rotationClockWise: false,
    },
  ];
}
