import React, { useState } from 'react'

function DotMaker() {

    const [dots, setDots] = useState([]) //dot position
    const [removedDots, setRemovedDots] = useState([]) //undo and redo


    const addCircle = (e) => {
        const {pageX, pageY} = e
        setDots([...dots, {
            x: pageX,
            y: pageY
        }])
    }

    const undo = () => {
        const newDots = [...dots]
        const removedDot = newDots.pop()
        if(!removedDot) return
        setRemovedDots([...removedDots, removedDot])
        setDots(newDots)
    }

    const redo = () => {
        const newRemoved = [...removedDots]
        const newDots = [...dots]
        if(!newRemoved) return
        const removedDot = newRemoved.pop()
        if(removedDots.length > 0) {
            newDots.push(removedDot)
            setDots(newDots)
            setRemovedDots(newRemoved)
        }
        return
    }

    const circleBox = {
        width: '100%',
        height: '500px'
    }

  return (
    <>
        <h2>DotMaker</h2>
        <p>click anywhere in the box below.</p>
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
        <span>count is {dots.length}</span>
        <div style={circleBox} onClick={addCircle}>
            {dots.map((dot, index) => (
                <div key={index} className='dot-cicle' style={{
                    left: dot.x + "px",
                    top: dot.y + "px",
                }}></div>
            ))}
        </div>
    </>
  )
}

export default DotMaker