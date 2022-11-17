import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import styles from '../scss/components/modalCard.module.scss';

import closeIcon from '../Assets/logos/x-png.png';
import ArtworkScene1 from '../utils/ArtworkScene';
import ArtworkSceneR3F from '../utils/ArtworkSceneR3F';

const portalRoot = document.getElementById('portal-root');

export default function ModalCard({ card, onClose}) {

    return ReactDom.createPortal(
        <div className="modal-background" >
            <div className='modal-container'>
                <img src={closeIcon} className='close' alt="" style={{ cursor: 'pointer' }} onClick={() => onClose(card.id)} />
                <ArtworkSceneR3F card={card}/> 
                {/* <ArtworkScene1 card={card} /> */}
            </div>
        </div>,
        portalRoot
    );
}
