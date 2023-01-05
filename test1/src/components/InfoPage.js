import React, { useEffect, useRef, useLayoutEffect } from "react";
import LazyImage from "./LazyImage";
import selfie3 from '../Assets/images/self3.jpg';
import selfPlaceholder from "../Assets/images/self3_mini.jpg"
import treeRings from '../Assets/images/T54Y.jpg';
import treeRingsPlaceholder from "../Assets/images/T54Y_mini.jpg"
import mountains from '../Assets/images/fMHm.jpg';
import mountainsPlaceholder from "../Assets/images/fMHm_mini.jpg"

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export default function InfoPage() {

    const gridItem = useRef()

    useLayoutEffect(() => {
        gsap.from(".grid-item", {
            duration: 0.3,
            y: 40, 
            x: -20, 
            opacity: 0, 
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".grid-item",
                start: 'center bottom'
            }
        });
    }, [])

    return (
        <>
            <div className="outer-container">
                <div className="grid info-grid-container">
                    <div ref={gridItem} className="grid-item grid-text">
                        <h4 className="tagline grid-tagline">Hi! My name is Matt. <br></br>Welcome to my personal website. </h4>
                    </div>
                    <div className="grid-item">
                        <LazyImage src={selfie3} placeholderSrc={selfPlaceholder} id="grid-img-sm"/>
                    </div>
                    <div className="grid-item grid-text text-mid">
                        <p className="text-block">
                            I am a web developer, VR artist, and rock climber. I built this website for fun to showcase some of the art that I have made, and also to experiment with different web development effects. I love the blending of technologies between 3D, VR, AR, and the web. Some of my goals for this next year are expanding into AR more, VR world building, and some short 3D web-based puzzle mini-games with ThreeJS. The website will improve and expand over time as I build and learn more.
                        </p>
                    </div>
                    <div className="grid-item img-mid">
                        <LazyImage src={mountains} placeholderSrc={mountainsPlaceholder} id="grid-img"/>
                    </div>
                    <div className="grid-item grid-text">
                        <h4 className="tagline grid-header">What is Cedaring???</h4>
                        <p className="text-block text-extra">
                            Cedaring is the name that I use on social media. It is a play on words that combines the two (Cedar + Ring). Similar to tree rings in nature, it symbolizes continual growth and circular connectedness. I also just like trees and needed a unique username. I have some plans to make an artwork piece themed around it soon. 
                        </p>
                    </div>
                    <div className="grid-item">
                        <LazyImage src={treeRings} placeholderSrc={treeRingsPlaceholder} id="grid-img-sm"/>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
