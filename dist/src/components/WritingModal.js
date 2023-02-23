import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

import closeIcon from '../Assets/logos/x-png.png'
import FiresideScene from '../classUtils/FiresideScene'
import WIPalert from './WIPalert'

const portalRoot = document.getElementById('portal-root')

export default function WritingModal({ card, onClose }) {
    return ReactDom.createPortal(
        <div className="modal-background">
            <div className="modal-container">
                <img
                    src={closeIcon}
                    className="close"
                    alt=""
                    style={{ cursor: 'pointer' }}
                    onClick={() => onClose()}
                />
                <WIPalert />
                {/* <FiresideScene /> */}
            </div>
        </div>,
        portalRoot
    )
}
