import React from 'react'
import wipImage from '../Assets/images/wipArtClear.png'

const WIPalert = () => {
  return (
    <div className='alert-container'>
        <h1 className='alert-message'>This is still a work in progress. Please check back later.</h1>
        <img src={wipImage} className='wip-image'/>
    </div>
  )
}

export default WIPalert