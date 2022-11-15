import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

export default function SideMenuDynamic() {
    const [menu, setMenu] = useState(false) // menu open
    const [active, setActive] = useState('') //active menu item maybe?

    const toggleOpen = () => {
        setMenu(!menu)
    }

    useEffect(() => {
        
    }, [])

    useLayoutEffect(() => {
        //gsap animation stuff
    }, [])

  return (
    <div className='widget-box'>
        <h1>Slide menu dynamic</h1>
        <button>Add menu Item</button>
        <button>Remove menu Item</button>
        <div className='side-menu-open' onClick={toggleOpen}>
            <h4>{!menu ? 'Open' : 'Close'}</h4>
            <h4>{!menu ? '====>' : '<===='}</h4>
        </div>

        {/* map over data and fill menu */}

        {menu ? <ul className="side-menu">
            <li className="menu-item">
                <p className="menu-item-text">Item 1</p>
            </li>
        </ul> : ''}
        <div className='active-page'>{active}  active page</div>
    </div>
  )
}
