import React from 'react';
import HomepageScene from '../utils/HomeScene';
import InfoPage from '../components/InfoPage';

import loading from '../scss/components/threeLoading.module.scss';

export default function Home() {
    return (
        <>
            <div className="canvas-box">
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
