import { useGLTF, useTexture } from "@react-three/drei";
import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { THREEcontext } from "../context/useContext";

export function useModels() {
  const { planetPosition } = useContext(THREEcontext);
  const [{ scene: earth }, { scene: saturn }] = useGLTF([
    "/models/earth/scene.gltf",
    "/models/saturn/scene.gltf",
  ]);

  const [mercury, venus, neptune, mars, jupiter, uranus] = useTexture([
    "/Textures/mercury.jpeg",
    "/Textures/venus.jpeg",
    "/Textures/neptune.jpeg",
    "/Textures/mars.jpeg",
    "/Textures/jupiter.png",
    "/Textures/uranus.jpeg",
  ]);

  return [
    {
      id: 1,
      text: "Mercury",
      position: planetPosition[0].mercury,
      scale: 2,
      boundingBox: [1.5, 0.3, 0.5],
      rotationClockWise: false,
      para: "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
      lengthOfYear: "88 Earth Days",
      distanceFromSun: 0.4,
      numberOfMoon: 0,
      map: mercury,
    },
    {
      id: 2,
      text: "Venus",
      position: planetPosition[1].venus,
      scale: 2.2,
      boundingBox: [1.15, 0.3, 0.5],
      rotationClockWise: true,
      para: "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
      lengthOfYear: "225 Earth Days",
      distanceFromSun: 0.7,
      numberOfMoon: 0,
      map: venus,
    },

    {
      id: 3,
      text: "Earth",
      model: earth,
      position: planetPosition[2].earth,
      scale: 1.75,
      rotation: [0, -20, 0],
      boundingBox: [1, 0.3, 0.5],
      rotationClockWise: false,
      para: "Earth—our home planet—is the only place we know of so far that's inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
      lengthOfYear: "365.25 Earth Days",
      distanceFromSun: 1,
      numberOfMoon: 1,
    },
    {
      id: 4,
      text: "Mars",
      position: planetPosition[3].mars,
      scale: 2.2,
      boundingBox: [0.9, 0.3, 0.5],
      rotationClockWise: false,
      para: "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",
      lengthOfYear: "1.88 Earth Years",
      distanceFromSun: 1.5,
      numberOfMoon: 2,
      map: mars,
    },
    {
      id: 5,
      text: "Jupiter",
      position: planetPosition[4].jupiter,
      scale: isMobile ? 2.6 : 2.6,
      boundingBox: [1.2, 0.3, 0.5],
      rotationClockWise: false,
      para: "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",
      lengthOfYear: "11.86 Earth Years",
      distanceFromSun: 5.2,
      numberOfMoon: 79,
      map: jupiter,
    },
    {
      id: 6,
      text: "Saturn",
      model: saturn,
      position: planetPosition[5].saturn,
      scale: isMobile ? 0.004 : 0.005,
      rotation: [0, 0, -15],
      boundingBox: [1.2, 0.3, 0.5],
      rotationClockWise: false,
      para: "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
      lengthOfYear: "29.45 Earth Years",
      distanceFromSun: 9.5,
      numberOfMoon: 62,
    },
    {
      id: 7,
      text: "Uranus",
      position: planetPosition[6].uranus,
      scale: 2.5,
      boundingBox: [1.2, 0.3, 0.5],
      rotationClockWise: false,
      para: "Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
      lengthOfYear: "84 Earth Years",
      distanceFromSun: 19.8,
      numberOfMoon: 27,
      map: uranus,
    },
    {
      id: 8,
      text: "Neptune",
      position: planetPosition[7].neptune,
      scale: 2.8,
      boundingBox: [1.5, 0.3, 0.5],
      rotationClockWise: false,
      para: "Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",
      lengthOfYear: "164.81 Earth Years",
      distanceFromSun: 30.1,
      numberOfMoon: 14,
      map: neptune,
    },
  ];
}
