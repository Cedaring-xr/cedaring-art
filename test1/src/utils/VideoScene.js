import React from 'react'
import closeIcon from '../Assets/logos/x-png.png';

export default function VideoScene({ card, onClose}) {
    console.log("video scene log")


    const videoHeader = {
        position: 'absolute'
    }

  return (
    <>
        <h2 style={videoHeader}>Video instead of 3D model</h2>
        <video width="100%" height="100%" src={card.video} muted autoPlay loop/>
    </>
  )
}
