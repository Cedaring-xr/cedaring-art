import React from "react";
import ThreeScene from '../utils/three-scene';
import OpenBrushScene from '../utils/glbLoader';


// add in a three js scene into this component


export default function Main() {

    return (
      <div className='body-container'>
        <h3 className="temp-header">Three JS canvas without react</h3>
        <ThreeScene />
        <div className='body-container'>
          <h3 className="temp-header">Openbrush Three JS Canvas</h3>
        </div>
        <OpenBrushScene className="canvas-openbrush"/>
      </div>
    )
  }
