import React from 'react';
import art from '../Assets/artwork.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import styles from '../scss/components/cardInfo.module.scss';

import closeIcon from '../Assets/logos/x-png.png';
gsap.registerPlugin(ScrollTrigger);



export default function CardInfo(props) {

    

    gsap.from('.grid-img-container', {duration: 2, opacity: 0, delay: 1} )
    gsap.fromTo(".card" , { opacity: 0, scale: 0.5 , rotation: 180 }, {duration: 1, delay: 1, opacity: 1, scale: 1, rotation: 0})


    const artData = art.reverse().map(props => {
        return (
            <>
                <div key={props.id} className="card">
                    {props['date-created'] !== 0 && <div className={styles.newItem}>New!</div>}
                    <h5 className={styles.title}>{props.name}</h5>
                    <div className={styles.content}>
                        <div className="grid-img-container">
                            <img
                                className="grid-card-img"
                                src={props['preview-img']}
                            />
                        </div>
                        <div className="grid-card-desc-container">
                            <h5>{props.name}</h5>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    });

    //parse date-created into number
    //compare number to date.now
    //render tag if current

    return (
        <>
            <div className="grid-container">
                {artData}
            </div>
        </>
    );
}

// const nums = [1, 2, 3, 4, 5]

// const squared = nums.map(function(i) {
//     return i^2
// })

// const names = ['test', 'words', 'tree', 'rock']

// const capitals = names.map((i) => {
//     return i[0].toUpperCase() + i.slice(1)
// })

// const items = ['block', 'camera', 'light']

// const par = items.map((i) => `<p>${i}</p>`)  //implicit return example
