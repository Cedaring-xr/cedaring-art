import React from 'react';
import styles from '../scss/components/infoText.module.scss';
import testImage from '../Assets/images/land16-9.png';

export default function InfoPage() {
    return (
        <>
            <div className="outer-container">
                <div className='inner-container'>
                    <img src={testImage} className="img" />
                    <div className="text block1">
                        <h4 className={styles.tagline}>Hi! My name is Matt Ray. Welcome to my personal website. </h4>
                        <p className={styles.text__content}>
                            I am a web developer, VR artist, and rock climber. I built this website for fun to showcase some of the art that I have made and also to practice my web development skills. Each of the pages has a different implimentation of Three JS to display 3D scenes on the web. I love the blending of 3D, VR, AR, and the internet. I hope to do more VR and AR stuff in the future.
                        </p>
                    </div>
                    <div className="text block2">
                        <p className={styles.text__content}>
                            The name Cedaring is a play on words that combines Cedar and Ring. Similar to a tree ring it symbolizes continual growth and circular unity. I also just like trees and needed a unique username.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
