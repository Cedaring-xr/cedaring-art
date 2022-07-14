import React, { Component } from "react";
import Counter from "../utils/counter";
import ModalCard from "../components/ModalCard";
import art from "../Assets/artwork.json";

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
                {
                    art.reverse().map( card => {
                        return(
                            <div className="grid-card">
                                <button onClick={()=> this.openModal()}>open</button>
                                <ModalCard isOpen={this.state.isOpen}/>
                                <div className="grid-card-content">
                                    <div className="grid-img-container">
                                        <img className="grid-card-img" src={card["preview-img"]}/>
                                    </div>
                                    <div className="grid-card-desc-container">
                                        <h5>{card.name}</h5>
                                        <Counter />
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }  
                </div>
            </div>
        )
    }
}

export default Artwork;
