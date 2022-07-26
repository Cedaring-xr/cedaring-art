import React, { useCallback, useEffect, Suspense } from 'react'
import LandScene from '../utils/LandScene'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import image1 from '../Assets/skybox1_Moment.jpg'

export default function Climbing() {


    return (
        <>
            {/* <Parallax pages={2}>
                <ParallaxLayer speed={1} style={{ backgroundImage: `url(${image1})`, backgroundSize: 'contain'}}>
                    
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 0, end: 1.5}}>
                <h4>page header text</h4>
                </ParallaxLayer>
                
            </Parallax> */}
            <div className='Heading_container'>
                <h1 className="page_header">Colorado climbing projects visualized in 3D</h1>
            </div>
            <LandScene />
            <div className='canvas-loading-bar'></div>
        </> 
    )
}
