import React, { useState } from "react";
import ModalCard from "../components/ModalCard";
import art from "../Assets/artwork.json";


export default function Artwork()  {
    const [isOpen, setOpen] = useState(false) //state starts in the parent

    return (
        <div>
            <div className="grid-container">
                { art.reverse().map( card => {
                    return(
                        <div key={card.id} className="grid-card" onClick={()=> setOpen(true)}>
                            <ModalCard  open={isOpen} onClose={() => setOpen(false)} >
                                <h5>{card.name}</h5>
                            </ModalCard>
                            <div className="grid-card-content">
                                <div className="grid-img-container">
                                    <img className="grid-card-img" src={card["preview-img"]}/>
                                </div>
                                <div className="grid-card-desc-container">
                                    <h5>{card.name}</h5>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}  
            </div>
        </div>
    )
}
