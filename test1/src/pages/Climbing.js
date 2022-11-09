import React, { useCallback, useEffect, Suspense } from 'react'
import LandScene from '../utils/LandScene'
import ScrollBasedScene from '../utils/ScrollBasedScene'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from '../scss/pages/climbing.scss';

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
            <div className='canvas-text'>
                <h4>Test</h4>
            </div>
            <div className='canvas-text'>
                <h4>Test</h4>
            </div>
            <div className='canvas-text'>
                <h4>Test</h4>
            </div>
            {/* <div className='center'>
                <div className='ring'></div>
                <span>Loading...</span>
            </div> */}
        </> 
    )
}
