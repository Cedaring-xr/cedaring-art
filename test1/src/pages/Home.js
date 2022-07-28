import React from "react";
import HomepageScene from '../utils/HomeScene';
import InfoPage from "../components/InfoPage";

export default function Home() {
    return (
        <>
            <div className="header-parallax-container">

            </div>
            <HomepageScene className="canvas-openbrush"/>
            <div className="info-container">
                <InfoPage />
            </div>
        </>
    )
}
