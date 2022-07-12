import React, { useState } from "react";
import ThreeScene from '../utils/three-scene';
import OpenBrushScene from '../utils/glbLoader';

export default function Artwork() {
    const setModalOpen = false
    return (
        <div>
            <div className="grid-container">
            <div className="grid-card" onClick={()=> setModalOpen(true)}>
                    <div className="grid-card-content">
                        <div className="grid-img-container">
                            <img className="grid-card-img" src="/extras/clock_Moment.jpg"/>
                        </div>
                        <div className="grid-card-desc-container">
                            <h5>Artwork description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="grid-card-content">
                        <div className="grid-img-container">
                            <img className="grid-card-img" src="/extras/clock_Moment.jpg"/>
                        </div>
                        <div className="grid-card-desc-container">
                            <h5>Artwork description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="grid-card-content">
                        <div className="grid-img-container">
                            <img className="grid-card-img" src="/extras/clock_Moment.jpg"/>
                        </div>
                        <div className="grid-card-desc-container">
                            <h5>Artwork description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="grid-card-content">
                        <div className="grid-img-container">
                            <img className="grid-card-img" src="/extras/clock_Moment.jpg"/>
                        </div>
                        <div className="grid-card-desc-container">
                            <h5>Artwork description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="grid-card-content">
                        <div className="grid-img-container">
                            <img className="grid-card-img" src="/extras/clock_Moment.jpg"/>
                        </div>
                        <div className="grid-card-desc-container">
                            <h5>Artwork description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="grid-card-content">
                        <div className="grid-img-container">
                            <img className="grid-card-img" src="/extras/clock_Moment.jpg"/>
                        </div>
                        <div className="grid-card-desc-container">
                            <h5>Artwork description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="grid-card-content">
                        <div className="grid-img-container">
                            <img className="grid-card-img" src="/extras/clock_Moment.jpg"/>
                        </div>
                        <div className="grid-card-desc-container">
                            <h5>Artwork description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="grid-card-content">
                        <div className="grid-img-container">
                            <img className="grid-card-img" src="/extras/clock_Moment.jpg"/>
                        </div>
                        <div className="grid-card-desc-container">
                            <h5>Artwork description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
