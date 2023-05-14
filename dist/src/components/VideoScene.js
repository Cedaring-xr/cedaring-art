import React from 'react'

const VideoScene = (card, onClose) => {

// export default function VideoScene({ card, onClose }) {
    return (
        <>
            <div className="video-description-box">
                <h2 className="video-description">
                    Some VR scenes are currently harder to import due to using
                    experimental features, so here is a video instead. I will
                    work on getting the 3D model added in the future.
                </h2>
            </div>
            <video className="video" src={card.video} muted autoPlay loop />
        </>
    )
}

export default VideoScene
