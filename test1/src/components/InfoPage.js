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
                        <p className={styles.text__content}>
                            Hi! My name is Matt Ray. Welcome to my personal website. 
                            <br></br>
                            I am a web developer, VR artist, and rock climber. I built this website to showcase some of the art that I have made and also to practice my web development skills learning three JS and bridging the gap between VR, 3D, and web in my own little way. I believe that the internet is the greatest learning and communication resouce that has ever existed.
                        </p>
                    </div>
                    <div className="text block2">
                        <p className={styles.text__content}>
                            Cedaring (Cedar Ring) is a play on words that combines the two. It symbolizes continual growth and circular unity. I also just like trees and needed a unique username.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
