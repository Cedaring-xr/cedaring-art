import React from "react";


export default function Header() {
    return (
      <div className='header-main'>
        <h1>Cedaring.art</h1>
        <nav className='nav-container'>
          <ul className='nav-list'>
            <li><a href='#about'>about</a></li>
            <li><a href='#artwork'>artwork</a></li>
            <li><a href='#ntfs'>nfts</a></li>
            <li><a href='#vr-worlds'>VR worlds</a></li>
            <li><a href='#blog'>blog</a></li>
            <li><a href='#other'>other</a></li>
          </ul>
        </nav>
      </div>
    )
  }
