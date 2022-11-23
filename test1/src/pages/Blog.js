import React, { useState, useEffect } from "react";
import OpenBrushScene from '../utils/OBviewer'
import ShaderPractice from '../utils/shaderScene'
import ThreeScene from '../utils/three-scene'
import WritingSelection from '../components/WritingSelection'
import WritingModal from "../components/WritingModal";

export default function Blog() {

    const [isOpen, setOpen] = useState(false) 
    const [showPortal, toggleShowPortal] = useState(false)

    
    const openModal = () => {
        setOpen(true)
        // document.body.classList.remove('header-menu-open');
    }

    const closeModal = () => {
        setOpen(false)
        // document.body.classList.remove('header-menu-open');
    }

    return (
        <div className="writing-pagefill">
            <div className="text">
                <h1 className="tagline">Blending 3D visuals and written naratives</h1>
                <p className="text__content">I want to write my own stories or blog posts eventually but for now I am starting with poems or short stories written by actual writers. The goal is to create a fun 3D visual based aspect to ehance the storytelling.</p>
            </div>
            <div className="writing-block">
                <div className="text">
                    <h3>A Fireside Vision</h3>
                    <p>short poem written by: Bliss Carman</p>
                </div>
                <div className="explore">
                    <button className="read-btn" onClick={() => {setOpen(true)}}>Explore</button>
                </div>
            </div>
            <div className="writing-block">
                <div className="text">
                    <h3>section 2</h3>
                    <p>test test test test</p>
                </div>
                <div className="explore">
                    <button className="read-btn" onClick={() => {setOpen(true)}}>Explore</button>
                </div>
            </div>
            {isOpen && <WritingModal  onClose={() => closeModal()}/>}
        </div>
    );
}
