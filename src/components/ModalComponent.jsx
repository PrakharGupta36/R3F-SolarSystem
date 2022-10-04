import { Html } from "@react-three/drei";

import Modal from "react-modal";
import { customStyles } from "../utils/ModalStyle";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";

Modal.setAppElement("#modal");

export default function ModalComponent({
  modal,
  setModal,
  text,
  para,
  distanceFromSun,
  lengthOfYear,
  numberOfMoon,
}) {
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000000";
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <Html>
      <Modal
        isOpen={modal}
        shouldCloseOnEsc={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        <button className='modal-button' onClick={closeModal}>
          Close
        </button>
        <div className='content'>
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>{text}</h1>
          <p> {para} </p>
          <div className='grid'>
            <div className='grid-inner inner-1'>
              <p> {lengthOfYear} </p>
              <p className='line'> </p>
              <span> Length Of year </span>
            </div>
            <div className='grid-inner inner-2'>
              <p> {distanceFromSun} AU </p>
              <p className='line'> </p>
              <span> Distance from Sun </span>
            </div>
            <div className='grid-inner inner-3'>
              <p>
                {numberOfMoon} <WiMoonAltWaxingCrescent3 />
              </p>
              <p className='line'> </p>
              <span> Moons </span>
            </div>
          </div>
        </div>
      </Modal>
    </Html>
  );
}
