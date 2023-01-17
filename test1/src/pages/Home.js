import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import OpenBrushHomeScene from '../classUtils/HomeScene'
import LazyImage from '../components/LazyImage'
import selfie3 from '../Assets/images/self3.webp'
import selfPlaceholder from '../Assets/images/self3_mini.jpg'
import treeRings from '../Assets/images/T54Y.webp'
import treeRingsPlaceholder from '../Assets/images/T54Y_mini.jpg'
import mountains from '../Assets/images/sanJuan.webp'
import mountainsPlaceholder from '../Assets/images/sanJuan_mini.jpg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const [device, setDevice] = useState('')

    const getDeviceType = () => {
        const ua = navigator.userAgent
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return 'tablet'
        }
        if (
            /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            return 'mobile'
        }
        return 'desktop'
    }

    useEffect(() => {
        let device = getDeviceType()
        // console.log(device)
        setDevice(device)
    }, [])

    const gridItem = useRef()

    useLayoutEffect(() => {
        gsap.from('.grid-item', {
            duration: 0.6,
            y: 80,
            x: -80,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.grid-item',
                start: 'center bottom'
            }
        })
    }, [])

    return (
        <>
            <div className={`canvas-box ${device}`} id="canvas">
                <OpenBrushHomeScene />
            </div>
            <div className="content-container">
                <div className="grid grid-container">
                    <div ref={gridItem} className="grid-item grid-text grid-title" id="name-text">
                        <div className="title">
                            <span id='hello'>Hello!</span>
                            <span className='heading'>My name is Matt</span>
                        </div>
                    </div>
                    <div ref={gridItem} className="grid-item grid-text grid-title" id="welcome-title">
                        <div className="title">
                            <span className='heading'>Welcome to my own personal website</span>
                        </div>
                    </div>
                    <div className="grid-item grid-image self" id="self-img">
                        <LazyImage
                            src={selfie3}
                            placeholderSrc={selfPlaceholder}
                        />
                    </div>
                    <div className="grid-item grid-text" id="about-text">
                        <p className="text">
                            I am a web developer, VR artist, and rock climber. I
                            built this site for fun to showcase some of the art
                            that I have made, and also to experiment with
                            different web development effects. I love the
                            blending of technologies between 3D, VR, AR, and the
                            web. Some of my goals for this next year are
                            expanding into AR more, VR world building, and some
                            short 3D web-based puzzle mini-games with ThreeJS.
                            This site will improve and expand over time as I
                            build and finish more projects.
                        </p>
                    </div>
                    <div className="grid-item grid-image" id="mtn-img">
                        <LazyImage
                            src={mountains}
                            placeholderSrc={mountainsPlaceholder}
                        />
                    </div>
                    <div className="grid-item grid-text" id="cedaring">
                        <div className="title">
                            <span className='heading'>What is Cedaring?</span>
                        </div>
                        <p className="text">
                            Cedaring is the pseudonym that I use on social media. It
                            is a play on words that combines the two (Cedar +
                            Ring). Similar to tree rings in nature, it
                            symbolizes continual growth and circular
                            connectedness. I also just like trees and needed a
                            unique username. I have some plans to make an
                            artwork piece themed around it soon.
                        </p>
                    </div>
                    <div className="grid-item grid-image" id="tree-img">
                        <LazyImage
                            src={treeRings}
                            placeholderSrc={treeRingsPlaceholder}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
