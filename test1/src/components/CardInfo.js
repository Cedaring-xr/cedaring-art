import React from 'react';
import art from '../Assets/artwork.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import styles from '../scss/components/cardInfo.module.scss';
import closeIcon from '../Assets/logos/x-png.png';
gsap.registerPlugin(ScrollTrigger);



export default function CardInfo(props) {

    // gsap.from('.grid-img-container', {duration: 2, opacity: 0, delay: 1} )
    // gsap.fromTo(".card" , { opacity: 0, scale: 0.5 , rotation: 180 }, {duration: 1, delay: 1, opacity: 1, scale: 1, rotation: 0})

    // expand card animation
    const tween = gsap.to(".card", {
        duration: 4, 
        x: 750, 
        rotation: 90, 
        scale: 2,
        paused: true
    });
    
    // click handlers for controlling the tween instance...
    const button = document.querySelectorAll(".art-card")
    
    if(button) {
        button.onclick = () => tween.play();

    }
    // button.addEventListener('click', () => {
    //     tween.play();
    // })
    // document.querySelector(".play").onclick = () => tween.play();

    return (
        <>
            <div className="grid-container">
                { art.reverse().map( card => {
                    return (
                        <div key={card.id} className="card art-card">
                            {props['date-created'] !== 0 && <div className={styles.newItem}>New!</div>}
                            <h5 className={styles.title}>{card.name}</h5>
                            <div className={styles.content}>
                                <div className="grid-img-container">
                                    <img
                                        className="grid-card-img"
                                        src={card['preview-img']}
                                    />
                                </div>
                                <div className="grid-card-desc-container">
                                    <h5>{card.name}</h5>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                )};
            </div>
        </>
    );
}


{/* <div className="grid-container">
{ art.reverse().map( card => {
    return(
        <div key={card.id} className="grid-card" > */}
