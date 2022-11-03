import React from 'react'
import OpenBrushScene from '../utils/OBviewer'
import ShaderPractice from '../utils/shaderScene'
import ThreeScene from '../utils/three-scene'
import WritingSelection from '../components/WritingSelection'

export default function Blog() {
    return (
        <>
            <div className="text">
                <h1 className="tagline">Blending of 3D visuals and written naratives</h1>
                <p className="text__content">I want to write my own stories/naratives/blog posts eventually but for now I am starting with poems or short stories written by actual writers. The goal is to create a fun 3D visual based aspect to ehance the storytelling.</p>
            </div>
            <WritingSelection props />
        </>
    );
}
