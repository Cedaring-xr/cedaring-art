import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

import closeIcon from '../Assets/logos/x-png.png';
import ArtworkScene1 from '../utils/ArtworkScene';
import ArtworkSceneR3F from '../utils/ArtworkSceneR3F';
import VideoScene from '../utils/VideoScene';

const portalRoot = document.getElementById('portal-root');

export default function ModalCard({ card, onClose}) {

    const [isModel, setIsModel] = useState(true)

    const check = () => {
        console.log('single card', card)
        //if card has no model
        if(card.model == '') {
            setIsModel(false)
        }
        // then fall back to video
        // also fallback to picture?
    }
    
    
    useEffect(() => {
        check() 
    })

    return ReactDom.createPortal(
        <div className="modal-background" >
            <div className='modal-container'>
                <img src={closeIcon} className='close' alt="close-X" style={{ cursor: 'pointer' }} onClick={() => onClose(card.id)} />
                {/* <ArtworkSceneR3F card={card}/>  */}
                { isModel 
                ? <ArtworkScene1 card={card} /> 
                : <VideoScene card={card}/> }
            </div>
        </div>,
        portalRoot
    );
}
