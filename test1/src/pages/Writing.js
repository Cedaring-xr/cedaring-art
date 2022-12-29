import React, { useState } from "react";
import WritingModal from "../components/WritingModal";

export default function Writing() {

    const [isOpen, setOpen] = useState(false) 

    
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
                <h1 className="tagline">Blending 3D visuals and written narratives</h1>
                <p className="text__content">I want to write my own stories or blog posts eventually, but for now I am starting with poems or short stories written by actual writers as a test. The goal is to create fun 3D visual based aspects to ehance the storytelling of the writing.</p>
            </div>
            <div className="text writing-block">
                <div className="text-inner">
                    <h3>A Fireside Vision</h3>
                    <p>Short poem written by: Bliss Carman</p>
                </div>
                <button className="read-btn" onClick={() => {setOpen(true)}}>{ !isOpen ? 'Click to view' : 'Close' }</button>
            </div>
            {isOpen && <WritingModal  onClose={() => closeModal()}/>}
        </div>
    );
}
