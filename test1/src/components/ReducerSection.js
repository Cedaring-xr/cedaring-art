import React, { useState, useReducer, useEffect } from 'react';
import xIcon from "../Assets/logos/x-png.png";

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_ELEMENT':
            return {numElements: state.numElements + 1, showElements: true}
        case 'REMOVE_ELEMENT':
            return {numElements: state.numElements -1, showElements: false}
        case 'RESET_ELEMENT':
            return {numElements: state.numElements = 1, showElements: false}
        default: 
            return state
    }
}

function ReducerSection() {
    const [numItems, setNumItems] = useState(1)
    const [showIcon, toggleShowIcom] = useState(false)


    const [state, dispatch] = useReducer(reducer, {numElements: 1, showElements: false}) 

    const iconStyle = {
        width: '50px'
    }

  return (
    <>
        <div>ReducerSection using state</div>
        <h1>{'hello'.repeat(numItems)}</h1>
        <button onClick={() => {
            toggleShowIcom(true)
            setNumItems(numItems + 1)}}>add</button>
        <button onClick={() => setNumItems(numItems - 1)}>remove</button>
        <button onClick={() => setNumItems(1)}>clear</button>
        {showIcon && <img style={iconStyle} src={xIcon} />}
        <div>ReducerSection using useReducer</div>
        <h1>{'hello'.repeat(state.numElements)}</h1>
        <button onClick={() => dispatch({type: 'ADD_ELEMENT'})}>add</button>
        <button onClick={() => dispatch({type: 'REMOVE_ELEMENT'})}>remove</button>
        <button onClick={() => dispatch({type: 'RESET_ELEMENT'})}>clear</button>
        {state.showElements && <img style={iconStyle} src={xIcon} />}
    </>
    
  )
}

export default ReducerSection