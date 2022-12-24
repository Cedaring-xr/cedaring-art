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
                <h1 className="tagline">Rock Climbing Trips</h1>
                <p className="text__content">Working with gps and elevation data to create 3D explorable layouts of mountain areas and climbing locations</p>
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
                <div className="center-loading">
                    <div className="ring"></div>
                    <span>Loading...</span>
                </div>
                <ScrollBasedScene className='scroll-scene' />
                <div className="scrol-text-container">
                    <section className='canvas-text'>
                        <h4>South Platte, Colorado</h4>
                        <p>Area to the southwest of Denver</p>
                    </section>
                    <section className='canvas-text'>
                        <h4>Approach Hike</h4>
                        <ul>length: 5.5 miles round trip</ul>
                        <ul>starts at the Pin</ul>
                        <ul>Follows atv trails down the valley then walk the powerline clearing heading up the steep ridge to the base of the climb.</ul>
                    </section>
                    <section className='canvas-text'>
                        <h4>Climb Route</h4>
                        <ul>difficulty: easy</ul>
                        <ul>length: ~200ft of climbing</ul>
                        <ul>Pitches: 2 short pitches of 5.7ish</ul>
                        <ul>Rock: Pikes peak granite</ul>
                    </section>
                    <section className='canvas-text'>
                        <h4>Summit</h4>
                        <ul>elevation: 8224' (2506m)</ul>
                        <ul>Surrounding views of the north end of Pike National Forest and Long Scraggy Peak in the distance.</ul>
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
