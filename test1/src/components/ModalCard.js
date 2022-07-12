import React, { useState } from "react";
import ThreeScene from '../utils/three-scene';
import classes from "./ModalCard.module.scss";
import Modal from "react-modal";



// covers the artwork viewer component that should call a glb or tilt file loader scene

export default function Modal() {
  const [display, setDisplay] = useState(true);

  const open = () => {
    setDisplay(true)
  };
  const close = () => {
    setDisplay(false)
  };

  return (
    <div className={classes.container}>
      <Modal isOpen={modalIsOpen}>
        <h3 className="temp-header">Modal openbrush canvas</h3>
        <ThreeScene />
        <div className={classes.close} onClick={close}>
          X close
        </div>
      </Modal>
    </div>
  )
}