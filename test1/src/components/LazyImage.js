import React from 'react';
import { useState, useEffect } from 'react';

function LazyImage({ placeholderSrc, src }) {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onLoad = () => {
            setImgSrc(src);
        };
    }, [src]);

    return (
        <img
            {...{ src: imgSrc }}
            className="grid-card-img"
            loading="lazy"
            width="100%"
        />
    );
}

export default LazyImage;