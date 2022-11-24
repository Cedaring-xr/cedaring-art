import React from 'react'

import ScrollBasedScene from '../utils/ScrollBasedScene'

export default function Climbing() {


    return (
        <>
            <div className="text">
                <h1 className="tagline">Rock climbing trips</h1>
                <p className="text__content">Working with gps and elevation data to create 3D layouts of mountains</p>
            </div>
            {/* <LandScene /> */}
            <ScrollBasedScene className='scroll-scene'>
                
            </ScrollBasedScene>
            <section className='canvas-text'>
                <h4>Test section 1</h4>
            </section>
            <section className='canvas-text'>
                <h4>Test section 2</h4>
            </section>
            <section className='canvas-text'>
                <h4>Test section 3</h4>
            </section>
            {/* <div className='center'>
                <div className='ring'></div>
                <span>Loading...</span>
            </div> */}
        </> 
    )
}
