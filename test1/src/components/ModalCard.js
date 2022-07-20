import React, { useState } from "react";
import ReactDom from 'react-dom'
import ThreeScene from '../utils/three-scene';
import classes from "./ModalCard.module.scss";


import closeIcon from "../Assets/x-png.png"


const portalRoot = document.getElementById('portal-root')

export default function ModalCard({ open, onClose, children }) {
  if (!open) return null
  
  return (
    ReactDom.createPortal(
      <div className={classes.background} onClick={onClose}>
        <div >
          {children}
          <img src={closeIcon} alt="" style={{cursor: 'pointer'}} onClick={onClose} />
          <button onClick={onClose}>test</button> 
          {/* <ThreeScene /> */}
        </div>
      </div>, portalRoot
    )
  )
}
