import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

import closeIcon from '../Assets/logos/x-png.png'
import ArtworkScene from '../classUtils/ArtworkScene'
import VideoScene from '../classUtils/VideoScene'

const portalRoot = document.getElementById('portal-root')

export default function ModalCard({ card, onClose }) {
    const [isModel, setIsModel] = useState(true)

    const modelCheck = () => {
        // console.log('single card', card)
        if (card.model == '') {
            setIsModel(false)
        }
    }

    useEffect(() => {
        modelCheck()
    })

    return ReactDom.createPortal(
        <div className="modal-background">
            <div className="modal-container">
                <img
                    src={closeIcon}
                    className="close"
                    alt="close-X"
                    style={{ cursor: 'pointer' }}
                    onClick={() => onClose(card.id)}
                />
                {/* <ArtworkSceneR3F card={card}/>  */}
                {isModel ? (
                    <ArtworkScene card={card} />
                ) : (
                    <VideoScene card={card} />
                )}
                <div className="center">
                    <div className="ring"></div>
                    <span>Loading...</span>
                </div>
            </div>
        </div>,
        portalRoot
    )
}
