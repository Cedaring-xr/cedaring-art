import React from 'react'
import { useState, useEffect } from 'react'

function LazyImage({ src, placeholderSrc, id }) {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src)

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            setImgSrc(src)
        }
    }, [src])

    const loadingStyle =
        placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded'

    return (
        <img
            {...{ src: imgSrc }}
            className={`grid-card-img ${loadingStyle}`}
            id={id}
        />
    )
}

export default LazyImage
