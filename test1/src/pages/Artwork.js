import React, { useState, useRef, useEffect } from "react";
import ModalCard from "../components/ModalCard";
import art from "../Assets/artwork.json";
import closeIcon from '../Assets/logos/x-png.png';

import styles from '../scss/components/infoText.module.scss';
import { gsap, ScrollTrigger } from "gsap/all";

import { BiExpand } from "react-icons/bi";


export default function Artwork()  {
    const [isOpen, setOpen] = useState(false) //state starts in the parent
    let card = useRef(null);

//gsap animation
    useEffect(() => {
        gsap.to(card, {duration: 2, x: 100});
    }, [])



    return (
        <>
            <div className={styles.text}>
                <p className={styles.text__content}>Openbrush is the VR application used to create most of my VR artwork. It is an open source version of Tiltbrush, the popular VR program. Open source projects like this take a lot of work to maintain. If you like my artwork or are interested in the program, consider supporting Openbrush or contributing to the community so that we don't lose these awesome resources.</p>
                <img className='openbrush-logo' />
            </div>
            <div className="grid-container">
                { art.reverse().map( card => {
                    return(
                        <div key={card.id} className="grid-card" >
                            <div className="grid-card-content" ref={el => card = el}>
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
