import React, { useEffect, useState } from 'react';
import HomepageScene from '../utils/HomeScene';
import InfoPage from '../components/InfoPage';


export default function Home() {

    const [device, setDevice] = useState('')

    const getDeviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
          return "tablet";
        }
        if (
          /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
          )
        ) {
          return "mobile";
        }
        return "desktop";
    };

    useEffect(() => {
        let device = getDeviceType()
        console.log(device)
        setDevice(device)
    }, [])

    return (
        <>
            <div className={`canvas-box ${device}`} id="canvas">
                <HomepageScene />
            </div>
            <div className="center">
                <div className="ring"></div>
                <span>Loading...</span>
            </div>
            <InfoPage />
        </>
    );
}
