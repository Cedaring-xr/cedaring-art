import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import styles from '../scss/components/modalCard.module.scss';

import closeIcon from '../Assets/logos/x-png.png';
import ArtworkScene1 from '../utils/ArtworkScene';

const portalRoot = document.getElementById('portal-root');

export default function ModalCard({ open, onClose, children, cardId }) {
    if (!open) return null;

    console.warn(cardId, 'should return card id number')

    return ReactDom.createPortal(
        <div className="modal-background" onClick={onClose}>
            <div className='modal-container'>
                {children}
                <img src={closeIcon} className='close' alt="" style={{ cursor: 'pointer' }} onClick={onClose} />
                <ArtworkScene1 />
            </div>
        </div>,
        portalRoot
    );
}
