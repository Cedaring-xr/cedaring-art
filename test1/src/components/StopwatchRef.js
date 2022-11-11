import React, { useState, useRef, useEffect } from 'react';

function StopwatchRef() {
    const [randomInput, setRandomInput] = useState('')
    const [seconds, setSeconds] = useState(0)
    const renders = useRef(0)
    const timerId = useRef()
    

    const handleChange = (e) => {
        setRandomInput(e.target.value)
        renders.current++
    }

    const startTimer = () => {
        timerId.current = setInterval(() => {
            renders.current++
            setSeconds(prev => prev + 1)
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timerId.current)
        timerId.current = 0
    }

    const resetTimer = () => {
        stopTimer()
        if(seconds > 0) {
            renders.current++
            setSeconds(0)
        }
    }

  return (
    <>
        <h1>Timer Renders vs seconds</h1>
        <input type="text" value={randomInput} placeholder="Random Input" onChange={handleChange} />
        <p>Renders: {renders.current}</p>
        <p>there is a bug with stoping timer</p>
        <p>Seconds: {seconds}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        <br />
        <p>{randomInput}</p>
    </>
  )
}
export default StopwatchRef
