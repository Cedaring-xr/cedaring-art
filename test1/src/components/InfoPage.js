import React, { useEffect } from "react";
import styles from '../scss/components/infoText.module.scss';
import testImage from '../Assets/images/land16-9.png';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export default function InfoPage() {

    useEffect(() => {
        gsap.from('.text', {
            duration: 1, 
            y: 20, 
            x: -100, 
            opacity: 0, 
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.text',
                start: 'center bottom',
                duration: 1
            }
        });

        gsap.from('.info-img-large', {
            duration: 0.8, 
            y: 20, 
            x: 200, 
            opacity: 0, 
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.info-img-large',
                start: 'center bottom',
                duration: 0.8
            }
        });
    }, [])

    return (
        <>
            <div className="outer-container">
                <div className='inner-container'>
                    <img src={testImage} className="img info-img-large" />
                    <div className="text block1">
                        <h4 className={styles.tagline}>Hi! I'm Matt. <br></br>Welcome to my personal website. </h4>
                        <p className={styles.text__content}>
                            I am a web developer, VR artist, and rock climber. I built this website for fun to showcase some of the art that I have made and also to practice my web development skills. Each of the pages has a different implimentation of ThreeJS used to display 3D scenes on the web. I love the blending of technologies betweeen 3D, VR, AR, and the web. I hope to do more VR and AR stuff in the future.
                        </p>
                    </div>
                    <div className="text block2">
                        <p className={styles.text__content}>
                            Cedaring is a play on words that combines the two (Cedar + Ring). Similar to a tree ring it symbolizes continual growth and circular unity. I also just like trees and needed a unique username.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
