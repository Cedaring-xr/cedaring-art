import React, { useState, useRef, useEffect } from "react";
import art from "../Assets/artwork.json";
import closeIcon from '../Assets/logos/x-png.png';
import ModalCard from "../components/ModalCard";

import styles from '../scss/components/infoText.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { BiExpand } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

export default function Artwork()  {
    const [isOpen, setOpen] = useState(false) //state starts in the parent
    let card = useRef(null);

//gsap animation
    useEffect(() => {
        // let cardTimeline = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.grid-card',
        //         start: 'top bottom',
        //         duration: 1.2,
        //         y: 80
        //     }
        // })

        gsap.from('.grid-card', {
            duration: 1.2, 
            y: 80, 
            x: -40, 
            opacity: 0, 
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.grid-card',
                start: 'center bottom',
                duration: 1.2
            }
        });

    }, [])

    const handleExpand = (e) => {
        // gsap.to(e.target, {
        //     duration: 0.7, 
        //     width: 90, 
        //     height: 90,
        //     rotation: 90
        // })
        // console.log(e)
    }

    return (
        <>
            <div className={styles.text}>
                <h4 className={styles.tagline}>3D artwork created in virtual reality</h4>
                <p className={styles.text__content}>Openbrush is the VR application used to create most of my VR artwork. It is an open source version of Tiltbrush, the popular VR program. Open source projects like this take a lot of work to maintain. If you like my artwork or are interested in the program, consider supporting Openbrush or contributing to the community so that we don't lose these awesome resources.</p>
                <img className='openbrush-logo' />
            </div>
            <div className="grid-container">
                { art.map( card => {
                    return(
                        <div key={card.id} className="grid-card" onClick={(e) => setOpen(true)}>
                            <ModalCard open={isOpen} onClose={() => setOpen(false)} />
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
