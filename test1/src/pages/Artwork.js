import React from "react";
import ThreeScene from '../utils/three-scene';
import OpenBrushScene from '../utils/glbLoader';
import Main from '../components/Main';

export default function Artwork() {
    return (
        <div>
            <h1 className="page-header">VR Artwork</h1>
            <ThreeScene />
            <div className="break-box"></div>
            <OpenBrushScene className="canvas-openbrush"/>
        </div>
        
    )
}