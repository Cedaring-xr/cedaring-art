import React from 'react'
import closeIcon from '../Assets/logos/x-png.png';

export default function VideoScene({ card, onClose}) {
    console.log("video scene log")

  return (
    <>
        <div className='video-description-box'>
            <h2 className='video-description'>Some VR scenes are currently harder to import due to using experimental features, so here is a video instead. I will work on getting the 3D model added in the future.</h2>
        </div>
        <video width="100%" height="100%" src={card.video} muted autoPlay loop/>
    </>
  )
}
