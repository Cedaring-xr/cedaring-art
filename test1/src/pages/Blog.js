import React from 'react';
import OpenBrushScene from '../utils/OBviewer';
import TiltLoad from '../utils/tiltLoader';
import ShaderPractice from '../utils/shaderScene';

export default function Blog() {
    return (
        <>
            <div className="Heading_container">
                <h1 className="page_header">writings</h1>
            </div>
            {/* <TiltLoad /> */}
            <OpenBrushScene />
            {/* <ShaderPractice /> */}
        </>
    );
}
