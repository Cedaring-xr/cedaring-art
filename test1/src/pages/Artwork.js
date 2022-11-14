import React, { useState, useRef, useLayoutEffect } from "react";
import artwork from "../Assets/artwork.json";
import ModalCard from "../components/ModalCard";

import styles from '../scss/components/infoText.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export default function Artwork()  {
    const [artworkItems, setArtworkItems] = useState([])
    const [showPortal, toggleShowPortal] = useState(false)

    const gridCard = useRef()

    //gsap animation
    useLayoutEffect(() => {
        gsap.from(gridCard.current, {
            duration: 1.2, 
            y: 80, 
            x: -40, 
            opacity: 0, 
            stagger: 0.1,
            scrollTrigger: {
                trigger: gridCard.current,
                start: 'center bottom',
                duration: 1.2
            }
        });
    }, [])

    const openModal = (card) => {
        // set state to open with id of card?
        console.warn('card id', card.id)
        toggleShowPortal(true)
    }

    const closeModal = (card) => {
        console.warn(card.id)
        toggleShowPortal(false)
    }

    return (
        <>
            <div className={styles.text}>
                <h4 className={styles.tagline}>3D artwork created in virtual reality with Openbrush</h4>
                <p className={styles.text__content}>Openbrush is the VR application used to create most of my VR artwork. It is an open source version of Tiltbrush, the popular VR program. Open source projects like this take a lot of work to maintain. If you like my artwork or are interested in the program, consider supporting Openbrush or contributing to the community so that we don't lose these awesome resources.</p>
                <img className='openbrush-logo' />
            </div>
            <div className="artwork-grid-container">
                { artwork.map( card => {
                    return(
                        <div key={card.id} ref={gridCard} className="grid-card" onClick={() => openModal(card)}>
                            {showPortal && <ModalCard onClose={() => closeModal(card)} />}
                            <div className="grid-card-content">
                                <div className="grid-img-container">
                                    <img className="grid-card-img" src={card["preview-img"]}/>
                                </div>
                                <div className="grid-card-desc-container">
                                    <h4>{card.name}</h4>
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
