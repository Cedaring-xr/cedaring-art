import React, { useState } from 'react'
import WritingModal from '../components/WritingModal'

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
        <div className="body-content">
            <div className="page-title-container">
                <h1 className="title">
                    Blending 3D visuals and written narratives
                </h1>
                <div className="heading-banner">
                    <p className="text">
                        I want to write my own stories or blog posts eventually,
                        but for now I am starting with poems or short stories.
                        The goal is to create fun 3D visual-based aspects to
                        enhance the storytelling of the writing.
                    </p>
                </div>
            </div>
            <div className="writing-block">
                <div className="text-inner">
                    <h3>A Fireside Vision</h3>
                    <p>Short poem written by: Bliss Carman</p>
                </div>
                <button
                    className="view-btn"
                    onClick={() => {
                        setOpen(true)
                    }}
                >
                    {!isOpen ? 'View' : 'Close'}
                </button>
            </div>

            {isOpen && <WritingModal onClose={() => closeModal()} />}
        </div>
    )
}
