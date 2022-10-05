import React, { useState } from "react";
import ModalCard from "../components/ModalCard";
import art from "../Assets/artwork.json";
import closeIcon from '../Assets/logos/x-png.png';

import styles from '../scss/components/modalCard.module.scss';


export default function Artwork()  {
    const [isOpen, setOpen] = useState(false) //state starts in the parent

    return (
        <>
            <div className='Heading_container'>
                <h1 className="page_header">Virtual Reality Artwork created with Openbrush</h1>
            </div>
            <div className="openbrush-banner">
                <p>Openbrush is the VR application used to create most of my VR artwork. It is an open source version of Tiltbrush, which google stopped updating in 2021. Open source projects like this take a lot of work to maintain. If you like my artwork or are interested in the program, consider supporting Openbrush or contributing to the community so that we don't lose these awesome resources.</p>
                <img src={closeIcon} className="close-icon" />
            </div>
            <div className="grid-container">
                { art.reverse().map( card => {
                    return(
                        <div key={card.id} className="grid-card" onClick={()=> setOpen(true)}>
                            <ModalCard  open={isOpen} onClose={() => setOpen(false)} >
                                <h5>{card.name}</h5>
                            </ModalCard>
                            <div className="grid-card-content">
                                <div className="grid-img-container">
                                    <img className="grid-card-img" src={card["preview-img"]}/>
                                </div>
                                <div className="grid-card-desc-container">
                                    <h5>{card.name}</h5>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}  
            </div>
        </>
    )
}
