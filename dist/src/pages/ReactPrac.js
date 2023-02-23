import React, { useState, useRef, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { useTransition, animated } from 'react-spring'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ReactPrac() {
    const [items, setItems] = useState([])

    const transition = useTransition(items, {
        from: { x: -500, y: 350, opacity: 0 },
        enter: (item) => async (next) => {
            await next({ y: item.y, opacity: 1, delay: item.delay }) //back to back animation chain (react spring)
            await next({ x: -100 })
        },
        leave: { x: 500, y: 200, opacity: 0 }
    })

    return (
        <>
            <div className="content-block">
                <span>React spring content loading and animation</span>
                <br />
                <button
                    onClick={() => {
                        setItems((v) =>
                            v.length
                                ? []
                                : [
                                      { y: 100, delay: 0 },
                                      { y: 120, delay: 100 },
                                      { y: 140, delay: 200 }
                                  ]
                        )
                    }}
                >
                    {items.length ? 'un-mount' : 'mount'}
                </button>
                {transition((style, item) =>
                    item ? (
                        <animated.div
                            style={style}
                            className="spring-container"
                        >
                            <h1>react-spring</h1>
                        </animated.div>
                    ) : (
                        ''
                    )
                )}
            </div>
        </>
    )
}
