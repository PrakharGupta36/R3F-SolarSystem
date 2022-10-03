import { Html } from "@react-three/drei";
import { useContext } from "react";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import {
  ButtonContext,
  GlitchContext,
  THREEcontext,
} from "../context/useContext";
import { onNextUtil, onPreviousUtil } from "../utils/SwitchCase";

export default function Arrows({ text, position }) {
  const { setPlanetPosition } = useContext(THREEcontext);
  const { setButton } = useContext(ButtonContext);
  const { setGlitch } = useContext(GlitchContext);

  return (
    <>
      {text !== "Neptune" && (
        <group position={[position[0] + 1.5, position[1], position[2]]}>
          <Html center prepend>
            <div
              onClick={() => {
                onNextUtil(text, setPlanetPosition);
                setButton("right");
                setGlitch(true);
              }}
              className='html-wrapper'>
              <ImArrowRight2 className='icon' size={20} />
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
                setGlitch(true);
              }}
              className='html-wrapper'>
              <ImArrowLeft2 className='icon' size={20} />
            </div>
          </Html>
        </group>
      )}{" "}
    </>
  );
}
