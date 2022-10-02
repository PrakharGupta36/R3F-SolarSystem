export function onNextUtil(text, setPlanetPosition) {
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

export function onPreviousUtil(text, setPlanetPosition) {
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
