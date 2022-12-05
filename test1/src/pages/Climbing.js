import React, { useState } from 'react'
import ScrollBasedScene from '../utils/ScrollBasedScene'
import { BiChevronDown } from 'react-icons/bi';

export default function Climbing() {
    const [view, setView] = useState(false)



    const videoStyle = {
        'display': 'none'
    }

    return (
        <div className='body-content'>
            <div className="text">
                <h1 className="tagline">Rock climbing trips</h1>
                <p className="text__content">Working with gps and elevation data to create 3D layouts of mountains</p>
            </div>
            <div className='text climbing-text'>
                <h3>south Platte Test Demo Summit</h3>
                <button className="view-btn" onClick={() => setView(!view)} >Click to view</button>
            </div>
            { view && <div className='canvas-container'>
                <div className="top-text">
                    <h2>Scroll</h2>
                    <div className='icon'>
                        <BiChevronDown className='chevron-down'/>
                    </div>
                </div>
                <ScrollBasedScene className='scroll-scene' />
                <div className="scrol-text-container">
                    <section className='canvas-text'>
                        <h4>South platte, Colorado</h4>
                        <p>Area to the south west of denver</p>
                    </section>
                    <section className='canvas-text'>
                        <h4></h4>
                        <p>starting location</p>
                        <p>approach length: 5.5 miles round trip</p>
                        <p>trail winds down and around then back up</p>
                    </section>
                    <section className='canvas-text'>
                        <h4>Climb Stats</h4>
                        <p>Pitches: 2 short pitches</p>
                        <p>difficulty: easy</p>
                    </section>
                    <section className='canvas-text'>
                        <h4>Summit?</h4>
                        <p>elevation: 8224'</p>
                        <p>other info</p>
                    </section>
                </div>
            </div> }
            {/* <div className='center'>
                <div className='ring'></div>
                <span>Loading...</span>
            </div> */}
            <video
                id="summit1-video"
                playsInline
                muted
                loop
                autoPlay
                width="1260"
                height="1040"
                src="../Assets/videos/clip2.mp4"
                style={videoStyle}
                ></video>
        </div> 
    )
}
