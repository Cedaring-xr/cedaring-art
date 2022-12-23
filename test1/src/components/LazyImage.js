import React from 'react'
import { useState, useEffect } from 'react'

function LazyImage({placeholderSrc, src, ...props}) {
    const [imgSrc, setImgSrc] = useState( placeholderSrc || src )

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onLoad = () => {
            setImgSrc(src)
        }
    }, [src])

  return (
    <img 
        {...{ src: imgSrc, ...props }}
        alt={ props.alt || "" }
        className="grid-card-img"
    />
  )
}

export default LazyImage