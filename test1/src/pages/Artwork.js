import React, { useState, useRef, useLayoutEffect } from "react";
import artwork from "../Assets/artwork.json";
import ModalCard from "../components/ModalCard";
import Openbrushlogo from "../Assets/logos/OBtestTP.png";

import styles from '../scss/components/infoText.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export default function Artwork(  )  {
    const [artworkItems, setArtworkItems] = useState(artwork)
    const [showPortal, toggleShowPortal] = useState(false)
    const [activeObject, setActiveObject] = useState(null); //should be card object

    const gridCard = useRef()

    //gsap animation
    useLayoutEffect(() => {
        gsap.from('.grid-card', {
            delay: 0.2,
            duration: 0.8, 
            y: 80, 
            x: -40, 
            opacity: 0, 
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.grid-card',
                // scrub: true,    //scrubing locks the animation to the scroll position. stop scrolling = animation stop
                start: 'center bottom',
            }
        })
    }, [])

    const openModal = (card, index) => {
        console.warn('card id', index)
        //set active object
        //toogle portal state
        setActiveObject(card)
        toggleShowPortal(true)
    }

    const closeModal = (id) => {
        setActiveObject(null)
        toggleShowPortal(false)
    }

    return (
        <>
            <div className={styles.text}>
                <h4 className={styles.tagline}>3D artwork created in virtual reality with OpenBrush</h4>
                <p className={styles.text__content}>OpenBrush is a VR painting application. It is an open source version of TiltBrush. Open source projects like this take a lot of work to maintain. If you like my artwork or are interested in learning more, consider supporting Openbrush or contributing to the community so that we don't lose these awesome resources.
                    <a href="https://openbrush.app/" target="_blank">
                        <img className='openbrush-logo' src={Openbrushlogo} />
                    </a>
                </p>
                
            </div>
            <div className="artwork-grid-container">
                { artworkItems.map((card, index) => {
                    return(
                        <div key={index} ref={gridCard} className="grid-card" onClick={() => openModal(card, index)}>
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
            {showPortal && <ModalCard onClose={() => closeModal()} card={activeObject} />}
        </>
    )
}
