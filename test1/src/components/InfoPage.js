import React from 'react';
import styles from '../scss/components/infoText.module.scss';
import testImage from '../Assets/images/test.jpg';

export default function InfoPage() {
    return (
        <>
            <div className={styles.container}>
                
                <div className={styles.text}>
                    <p className={styles.text__content}>
                        Hi! My name is Matt Ray. Welcome to my personal website. I am a web developer, VR artist, and rock climber. I built this website to showcase some of the art that I have made and also to practice my web development skills learning three JS and bridging the gap between VR and web in my own little way. I believe that the internet is the greatest learning and communication resouce that has ever existed, and I'm happy to have lived at the dawn of its existance and work in this industry.
                    </p>
                </div>
                <div className={styles.text}>
                    <p className={styles.text__content}>
                        Hi! My name is Matt Ray. Welcome to my personal website. I am a web developer, VR artist, and rock climber. I built this website to showcase some of the art that I have made and also to practice my web development skills
                    </p>
                </div>
                <img src={testImage} className={styles.img} />
            </div>
        </>
    );
}
