import React from "react";


export default function Header() {
    return (
      <div className='header-main'>
        <h1>Title and nav stuff</h1>
        <nav className='nav-container'>
          <ul className='nav-list'>
            <li><a>about</a></li>
            <li><a>artwork</a></li>
            <li><a>VR worlds</a></li>
            <li><a>ntfs</a></li>
            <li><a>writings</a></li>
            <li><a>contact</a></li>
          </ul>
        </nav>
      </div>
    )
  }
