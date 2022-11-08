import React, { useCallback, useEffect, Suspense } from 'react'
import LandScene from '../utils/LandScene'
import ScrollBasedScene from '../utils/ScrollBasedScene'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from '../scss/pages/climbing.scss';

export default function Climbing() {


    return (
        <>
            <div className='text'>
                <h1 className="text__content">Rock climbing trips</h1>
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
