import React, { useCallback, useEffect, Suspense } from 'react'
import LandScene from '../utils/LandScene'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Climbing() {


    return (
        <>
            <div className='text '>
                <h1 className="text__content">Rock climbing trips</h1>
            </div>
            <LandScene />
            <div className='center'>
                <div className='ring'></div>
                <span>Loading...</span>
            </div>
        </> 
    )
}
