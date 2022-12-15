import { useEffect, useState } from "react";
import ModalComponent from "./ModalComponent";
import { a } from "@react-spring/three";

export default function Modal({
  para,
  numberOfMoon,
  text,
  lengthOfYear,
  boundingBox,
  position,
  distanceFromSun,
  img,
}) {
  const [hovered, setHovered] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  function onClick() {
    document.body.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 250,
        iterations: 1,
      }
    );
    setModal(!modal);
  }
  return (
    <>
      <a.mesh
        position={position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}>
        <boxGeometry args={boundingBox} />
        <meshBasicMaterial visible={false} />
      </a.mesh>
      <ModalComponent
        para={para}
        text={text}
        img={img}
        setModal={setModal}
        modal={modal}
        numberOfMoon={numberOfMoon}
        lengthOfYear={lengthOfYear}
        distanceFromSun={distanceFromSun}
      />
    </>
  );
}
