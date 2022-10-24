import React from 'react';
import HomepageScene from '../utils/HomeScene';
import InfoPage from '../components/InfoPage';


export default function Home() {
    return (
        <>
            <div className="canvas-box" id="canvas">
                <HomepageScene className="canvas-openbrush" />
            </div>
            <div className="center">
                <div className="ring"></div>
                <span>Loading...</span>
            </div>
            <InfoPage />
        </>
    );
}
