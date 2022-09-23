import React from 'react';
import art from '../Assets/artwork.json';

import styles from '../scss/components/cardInfo.module.scss';

import closeIcon from '../Assets/logos/x-png.png';

export default function CardInfo(props) {
    // useStae
    console.log(props)
    return (
        <>
            <div className="grid-container">
                {art.reverse().map((card) => {
                    return (
                        <div key={card.id} className={styles.card}>
                            <h5 className={styles.title}>{card.name}</h5>
                            <div className={styles.content}>
                                <div className="grid-img-container">
                                    <img
                                        className="grid-card-img"
                                        src={card['preview-img']}
                                    />
                                </div>
                                <div className="grid-card-desc-container">
                                    <h5>{card.name}</h5>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
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
