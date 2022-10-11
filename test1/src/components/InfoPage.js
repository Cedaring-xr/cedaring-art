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
                        <div className='text-angle'></div>
                        <p className={styles.text__content}>
                            Hi! My name is Matt Ray. Welcome to my personal website. I am a web developer, VR artist, and rock climber. I built this website to showcase some of the art that I have made and also to practice my web development skills learning three JS and bridging the gap between VR and web in my own little way. I believe that the internet is the greatest learning and communication resouce that has ever existed, and I'm happy to have lived at the dawn of its existance and work in this industry.
                        </p>
                    </div>
                    <div className="text block2">
                        <div className='text-angle'></div>
                        <p className={styles.text__content}>
                            Cedaring (Cedar Ring) is a play on words that combines the two. It symbolizes continual growth and circular unity. I also just like trees and needed a unique username.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
