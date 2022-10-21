import React, { useCallback, useEffect, Suspense } from 'react'
import LandScene from '../utils/LandScene'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Climbing() {


    return (
        <>
            <div className='Heading_container'>
                <h1 className="page_header">Colorado climbing projects visualized in 3D</h1>
            </div>
            <LandScene />
            <div className='center'>
                <div className='ring'></div>
                <span>Loading...</span>
            </div>
        </> 
    )
}
