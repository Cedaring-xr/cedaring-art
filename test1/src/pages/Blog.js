import React from 'react'
import OpenBrushScene from '../utils/OBviewer'
import ShaderPractice from '../utils/shaderScene'
import ThreeScene from '../utils/three-scene';

export default function Blog() {
    return (
        <>
            <div className="text">
                <h1 className="tagline">Blog type posts with 3D graphics</h1>
                <p className="text__content">I like to write about esoteric tech stuff and my own perspectives on the future of the internet. I want to add 3D visual to enhance the narative experience. This is just for fun.</p>
            </div>
            {/* <OpenBrushScene /> */}
            {/* <FbxScene /> */}
            <ThreeScene />
        </>
    );
}
