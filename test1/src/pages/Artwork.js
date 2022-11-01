import React, { useState, useRef, useEffect } from "react";
import art from "../Assets/artwork.json";
import closeIcon from '../Assets/logos/x-png.png';
import ArtworkScene1 from "../utils/ArtworkScene";

import styles from '../scss/components/infoText.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { BiExpand } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

export default function Artwork()  {
    const [isOpen, setOpen] = useState(false) //state starts in the parent
    let card = useRef(null);



    // let tl = gsap.timeline({
    //     // yes, we can add it to an entire timeline!
    //     scrollTrigger: {
    //       trigger: ".container",
    //       pin: true,   // pin the trigger element while active
    //       start: "top top", // when the top of the trigger hits the top of the viewport
    //       end: "+=500", // end after scrolling 500px beyond the start
    //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //       snap: {
    //         snapTo: "labels", // snap to the closest label in the timeline
    //         duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //         ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    //       }
    //     }
    //   });
    
    // // add animations and labels to the timeline
    // tl.addLabel("start")
    //   .from(".box p", {scale: 0.3, rotation:45, autoAlpha: 0})
    //   .addLabel("color")
    //   .from(".box", {backgroundColor: "#28a92b"})
    //   .addLabel("spin")
    //   .to(".box", {rotation: 360})
    //   .addLabel("end");

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
                <p className={styles.text__content}>Openbrush is the VR application used to create most of my VR artwork. It is an open source version of Tiltbrush, the popular VR program. Open source projects like this take a lot of work to maintain. If you like my artwork or are interested in the program, consider supporting Openbrush or contributing to the community so that we don't lose these awesome resources.</p>
                <img className='openbrush-logo' />
            </div>
            <div className="grid-container">
                { art.map( card => {
                    return(
                        <div key={card.id} className="grid-card" onClick={(e) => handleExpand(e)}>
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
