import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import styles from '../scss/components/modalCard.module.scss';

import closeIcon from '../Assets/logos/x-png.png';
import ArtworkScene1 from '../utils/ArtworkScene';
import ArtworkSceneFunctional from '../utils/ArtworkSceneFunctional';

const portalRoot = document.getElementById('portal-root');

export default function ModalCard({ card, onClose}) {
    // only the single card prop should be passed down along with the close function
    // item should be passed down again to the scene

    return ReactDom.createPortal(
        <div className="modal-background" onClick={onClose}>
            <div className='modal-container'>
                <img src={closeIcon} className='close' alt="" style={{ cursor: 'pointer' }} onClick={onClose} />
                {/* <ArtworkSceneFunctional /> */}
                <div>tesetasldkfjalsdjf alksdjf</div>
            </div>
        </div>,
        portalRoot
    );
}
