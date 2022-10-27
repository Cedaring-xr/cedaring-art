import React from 'react'
import OpenBrushScene from '../utils/OBviewer'
import ShaderPractice from '../utils/shaderScene'
import ThreeScene from '../utils/three-scene';

export default function Blog() {
    return (
        <>
            <div className="text">
                <h1 className="tagline">writings</h1>
            </div>
            {/* <OpenBrushScene /> */}
            {/* <FbxScene /> */}
            <ThreeScene />
        </>
    );
}
