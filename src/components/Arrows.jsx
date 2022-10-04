import { Html } from "@react-three/drei";
import { useContext } from "react";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { ButtonContext, THREEcontext } from "../context/useContext";
import { onNextUtil, onPreviousUtil } from "../utils/SwitchCase";

export default function Arrows({ text, position }) {
  const { setPlanetPosition } = useContext(THREEcontext);
  const { setButton } = useContext(ButtonContext);

  return (
    <>
      {text !== "Neptune" && (
        <group position={[position[0] + 1.5, position[1], position[2]]}>
          <Html center prepend>
            <div
              onClick={() => {
                onNextUtil(text, setPlanetPosition);
                setButton("right");
              }}
              className='html-wrapper'>
              <ImArrowRight2 className='icon' size={17} />
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
              <ImArrowLeft2 className='icon' size={17} />
            </div>
          </Html>
        </group>
      )}{" "}
    </>
  );
}
