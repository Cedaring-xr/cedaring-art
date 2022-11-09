import React, { useEffect, useLayoutEffect } from "react";
import styles from '../scss/components/infoText.module.scss';
import testImage from '../Assets/images/land16-9.png';
import selfie3 from '../Assets/images/self3.jpg';
import treeRings from '../Assets/images/T54Y.jpg';
import mountains from '../Assets/images/fMHm.jpg';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export default function InfoPage() {

    useLayoutEffect(() => {
        gsap.from('.grid-item', {
            duration: 0.6,
            y: 50, 
            x: -20, 
            opacity: 0, 
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.grid-item',
                start: 'center bottom'
            }
        });

        return () => {
            // cleanup-code
        }
    }, [])

    return (
        <>
            <div className="outer-container">
                <div className="grid info-grid-container">
                    <div className="grid-item grid-text">
                        <h4 className="tagline grid-tagline">Hi! I'm Matt. <br></br>Welcome to my personal website. </h4>
                    </div>
                    <div className="grid-item">
                        <img src={selfie3} className="grid-img-sm"/>
                    </div>
                    <div className="grid-item grid-text text-mid">
                        <p className="text-block">
                            I am a web developer, VR artist, and rock climber. I built this website for fun to showcase some of the art that I have made and also to practice my web development skills. I love the blending of technologies betweeen 3D, VR, AR, and the web. Some of my goals for the next year are expanding into AR more, Virtual world building, and some short 3D web-based puzzle mini-games.
                        </p>
                    </div>
                    <div className="grid-item img-mid">
                        <img src={mountains} className="grid-img"/>
                    </div>
                    <div className="grid-item grid-text">
                        <h4 className="tagline grid-header">What is Cedaring???</h4>
                        <p className="text-block text-extra">
                            Cedaring is the name I use on social media. It is a play on words that combines the two (Cedar + Ring). Similar to a tree ring it symbolizes continual growth and circular unity. I also just like trees and needed a unique username. I have some plans to make an artwork piece themed around it soon. 
                        </p>
                    </div>
                    <div className="grid-item">
                        <img src={treeRings} className="grid-img-sm"/>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
