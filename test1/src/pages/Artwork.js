import React, { Component } from "react";
import Counter from "../utils/counter";
import ModalCard from "../components/ModalCard";

 class Artwork extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    openModal() {
        this.setState((prevState, props) => ({
            isOpen: true
        }))
    }
    
    render() {
        return (
            <div>
                <div className="grid-container">
                <div className="grid-card">
                        <button onClick={()=> this.openModal()}>open</button>
                        <ModalCard isOpen={this.state.isOpen}/>
                        <div className="grid-card-content">
                            <div className="grid-img-container">
                                <img className="grid-card-img" src="/extras/clock_Moment.jpg"/>
                            </div>
                            <div className="grid-card-desc-container">
                                <h5>Artwork description</h5>
                                <Counter />
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
}

export default Artwork;
