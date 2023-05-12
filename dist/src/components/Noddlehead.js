import React from 'react'

const Noddlehead = () => {
  return (
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
  )
}

export default Noddlehead