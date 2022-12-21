import React from 'react'
import closeIcon from '../Assets/logos/x-png.png';

export default function VideoScene({ card, onClose}) {
    console.log("video scene log")

  return (
    <>
        <div className='video-description-box'>
            <h2 className='video-description'>Video instead of 3D model</h2>
        </div>
        <video width="100%" height="100%" src={card.video} muted autoPlay loop/>
    </>
  )
}
