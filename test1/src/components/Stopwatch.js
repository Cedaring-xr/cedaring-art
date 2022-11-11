import React, { useState, useRef, useEffect } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval = null
        if(running) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [running])

    const numberStyle = {
        margin: '20px',
        display: 'flex',
        gap: '0.3rem'
    }

  return (
    <>
        <h1>Stopwatch</h1>
        <div style={numberStyle}>
            <h1>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</h1>
            <h1>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</h1>
            <h1>{('0' + ((time / 10) % 100)).slice(-2)}</h1>
        </div>
        {!running && time === 0 && (
            <button onClick={() => setRunning(true)}>start</button>
        )}
        {running && (
            <button onClick={() => setRunning(false)}>stop</button>
        )}
        {running || time !== 0 && (
            <button onClick={() => setRunning(true)}>resume</button>
        )}
        {running || time > 0 && (
            <button onClick={() => setTime(0)}>reset</button>
        )}
    </>
  )
}
export default Stopwatch
