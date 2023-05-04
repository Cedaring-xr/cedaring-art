import React, { useState } from 'react'
import WritingModal from '../components/WritingModal'

export default function Writing() {
    const [isOpen, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <div className="body-content">
            <div className="page-title-container">
                <h1 className="title">
                    Exploritory writings about technology and the future
                </h1>
                <div className="heading-banner">
                    <p className="text">
                        I write about lesser explored aspects of technology that I find interesting. These blog style posts are just my own musings about life.
                    </p>
                </div>
            </div>
            <div className="writing-block">
                <div className="text-inner">
                    <h3>The complexity of rocks: virtual vs real</h3>
                    <p>How rocks are protrayed in digital environments</p>
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
            <div className="writing-block">
                <div className="text-inner">
                    <h3>The importance of RP in the metaverse</h3>
                    <p>How imagination fills gaps for technical limitations</p>
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
            <div className="writing-block">
                <div className="text-inner">
                    <h3>The blissful ignorance in enjoyment of mondogreens</h3>
                    <p>How mis-interpretation of language can grow culture</p>
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
            <div className="writing-block">
                <div className="text-inner">
                    <h3>The tragedy of increased career specialization</h3>
                    <p>How a more separated world of knowledge adds stress to society</p>
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
