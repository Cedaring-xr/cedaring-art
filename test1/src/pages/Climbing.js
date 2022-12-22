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
                <h2>South Platte test demo Route</h2>
                <button className="view-btn" onClick={() => setView(!view)} >{!view ? 'Click to view' : 'Close'}</button>
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
                        <h4>South Platte, Colorado</h4>
                        <p>Area to the southwest of Denver</p>
                    </section>
                    <section className='canvas-text'>
                        <h4>Approach Hike</h4>
                        <p>length: 5.5 miles round trip</p>
                        <p>starts at the Pin</p>
                        <p>Follows 4x4 trails down the valley then walk the powerlines eventually heading up the steep ridge to the base of the climb.</p>
                    </section>
                    <section className='canvas-text'>
                        <h4>Climb Route</h4>
                        <p>difficulty: easy</p>
                        <p>length: ~200ft of climbing</p>
                        <p>Pitches: 2 short pitches of 5.7ish</p>
                        <p>Rock: Pikes peak granite</p>
                    </section>
                    <section className='canvas-text'>
                        <h4>Summit</h4>
                        <p>elevation: 8224' (2506m)</p>
                        <p>good view of Long Scraggy Peak to the east</p>
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
                crossOrigin="anonymous"
                src="extras/videos/noddleSummit.mp4"
                style={videoStyle}
                />
        </div> 
    )
}
