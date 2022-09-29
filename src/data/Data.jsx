import { Html, useGLTF, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import ProgressBar from "@ramonak/react-progress-bar";


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
    },
    {
      id: 2,
      text: "Venus",
      model: venus,
      position: isMobile || isTablet ? [0, -15, 0] : [15, 0, 0],
      scale: 0.013,
    },
    {
      id: 3,
      text: "Earth",
      model: earth,
      position: isMobile || isTablet ? [0, -30, 0] : [30, 0, 0],
      scale: 0.017,
    },
    {
      id: 4,
      text: "Mars",
      model: mars,
      position: isMobile || isTablet ? [0, -45, 0] : [45, 0, 0],
      scale: 0.19,
    },
    {
      id: 5,
      text: "Jupiter",
      model: jupiter,
      position: isMobile || isTablet ? [0, -60, 0] : [60, 0, 0],
      scale: 0.025,
    },
    {
      id: 6,
      text: "Saturn",
      model: saturn,
      position: isMobile || isTablet ? [0, -75, 0] : [75, 0, 0],
      scale: 0.005,
      rotation: true,
    },
    {
      id: 7,
      text: "Uranus",
      model: uranus,
      position: isMobile || isTablet ? [0, -90, 0] : [90, 0, 0],
      scale: 1,
    },
    {
      id: 8,
      text: "Neptune",
      model: neptune,
      position: isMobile || isTablet ? [0, -105, 0] : [105, 0, 0],
      scale: 0.009,
    },
  ];
}
