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
