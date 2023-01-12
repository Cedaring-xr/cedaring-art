import React, { useState } from 'react'
import ScrollBasedScene from '../class utils/ScrollBasedScene'
import { BiChevronDown } from 'react-icons/bi'

export default function Climbing() {
    const [view, setView] = useState(false)

    const videoStyle = {
        display: 'none'
    }

    return (
        <div className="body-content">
            <div className="heading-block">
                <p className="text-content">
                    Working with GPS and elevation data to create 3D explorable
                    layouts of mountain areas and climbing Destinations
                </p>
            </div>
            <div className="climbing-text">
                <h2>Noddle Head North</h2>
                <button className="view-btn" onClick={() => setView(!view)}>
                    {!view ? 'View' : 'Close'}
                </button>
            </div>
            <div className="climbing-text">
                <h2>Pangborn's Pinacle</h2>
                <button className="view-btn">View</button>
            </div>
            <div className="climbing-text">
                <h2>Tarryal Tower</h2>
                <button className="view-btn">View</button>
            </div>
            <div className="climbing-text">
                <h2>Lizard Head</h2>
                <button className="view-btn">View</button>
            </div>
            <div className="climbing-text">
                <h2>Curecanti Needle</h2>
                <button className="view-btn">View</button>
            </div>
            {view && (
                <div className="canvas-container">
                    <div className="top-text">
                        <h2>Scroll</h2>
                        <div className="icon">
                            <BiChevronDown className="chevron-down" />
                        </div>
                    </div>
                    <div className="center-loading">
                        <div className="ring"></div>
                        <span>Loading...</span>
                    </div>
                    <ScrollBasedScene className="scroll-scene" />
                    <div className="scrol-text-container">
                        <section className="canvas-text">
                            <h4>South Platte, Colorado</h4>
                            <p>Area to the southwest of Denver</p>
                        </section>
                        <section className="canvas-text">
                            <h4>Approach Hike</h4>
                            <ul>
                                <span className="highlight">Length:</span> ~5.5
                                miles round trip
                            </ul>
                            <ul>Starts at the red Pin</ul>
                            <ul>
                                Follows atv trails down the valley then walk the
                                powerlines clearing heading up a steep ridge to
                                the base of the rock.
                            </ul>
                        </section>
                        <section className="canvas-text">
                            <h4>Climb Route</h4>
                            <ul>
                                <span className="highlight">Difficulty:</span>{' '}
                                easy
                            </ul>
                            <ul>
                                <span className="highlight">Height:</span>{' '}
                                ~200ft of climbing
                            </ul>
                            <ul>
                                <span className="highlight">Pitches:</span> 2
                                short pitches of 5.7ish
                            </ul>
                            <ul>
                                <span className="highlight">Rock:</span> Pikes
                                peak granite
                            </ul>
                        </section>
                        <section className="canvas-text">
                            <h4>Summit</h4>
                            <ul>
                                <span className="highlight">Elevation:</span>{' '}
                                8224' (2506m)
                            </ul>
                            <ul>
                                Surrounding views of the north end of Pike
                                National Forest and Long Scraggy Peak in the
                                distance.
                            </ul>
                        </section>
                    </div>
                </div>
            )}
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
