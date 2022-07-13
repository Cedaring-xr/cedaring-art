import React, { useState } from "react";
import ThreeScene from '../utils/three-scene';
import classes from "./ModalCard.module.scss";
import Modal from "react-modal";



// covers the artwork viewer component that should call a glb or tilt file loader scene

const ModalCard = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState()

  function onClose() {
    setOpen(isOpen = false)
  }

  if (!isOpen) {
    console.log('modal') 
    return null
  } else {
    return (
      <div className={classes.container}>
        <Modal isOpen={isOpen} onClose={() => isOpen(false)}>
          <h3 className="temp-header">Modal openbrush canvas</h3>
          <button className={classes.close} onClick={onClose}>
            X close
          </button>
          <ThreeScene />
        </Modal>
      </div>
    )
  }
}

export default ModalCard