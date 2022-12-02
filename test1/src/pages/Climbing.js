import React, { useState } from 'react'
import ScrollBasedScene from '../utils/ScrollBasedScene'

export default function Climbing() {
    const [view, setView] = useState(false)



    const videoStyle = {
        'display': 'none'
    }

    return (
        <>
            <div className="text">
                <h1 className="tagline">Rock climbing trips</h1>
                <p className="text__content">Working with gps and elevation data to create 3D layouts of mountains</p>
            </div>
            <div className='text climbing-text'>
                <h3>Climbing location</h3>
                <button onClick={() => setView(!view)} >Expand to view</button>
            </div>
            { view && <div className='canvas-container'>
                <ScrollBasedScene className='scroll-scene' />
                <section className='canvas-text'>
                    <h4>Test section 1</h4>
                </section>
                <section className='canvas-text'>
                    <h4>Test section 2</h4>
                </section>
                <section className='canvas-text'>
                    <h4>Test section 3</h4>
                </section>
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
        </> 
    )
}
