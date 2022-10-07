import "./css/style.css";

import { THREEcontext } from "./context/useContext";
import Scene from "./Scene";
import { useState } from "react";

export default function App() {
  const [planetPosition, setPlanetPosition] = useState([
    { mercury: [0, 0, 0] },
    { venus: [15, 0, 0] },
    { earth: [30, 0, 0] },
    { mars: [45, 0, 0] },
    { jupiter: [60, 0, 0] },
    { saturn: [75, 0, 0] },
    { uranus: [90, 0, 0] },
    { neptune: [105, 0, 0] },
  ]);

  return (
    <>
      <THREEcontext.Provider value={{ planetPosition, setPlanetPosition }}>
        <Scene />
      </THREEcontext.Provider>
    </>
  );
}
