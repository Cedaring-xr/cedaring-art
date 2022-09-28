import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../scss/components/footer.module.scss';

import instaIcon from '../Assets/logos/insta-icon.png';
import twitterIcon from '../Assets/logos/twitter-icon.png';
import githubIcon from '../Assets/logos/github-icon.png';
import gitIconGimp from '../Assets/logos/gitIcon-gimp.png';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <h2 className={styles.footer__content__logo}>Footer stuff</h2>
            </div>
            <div className={styles.footer__social__icon}>
                <a href="https://www.instagram.com/cedaring_xr/" target="_blank">
                    <img
                        src={instaIcon}
                        className={styles.footer__img}
                    />
                    <p className={styles.footer__social__text}>@cedaring_xr</p>
                </a>
            </div>
            <div className={styles.footer__social__icon}>
                <a href="https://github.com/Cedaring-xr" target="_blank">
                    <img
                        src={gitIconGimp}
                        className={styles.footer__img}
                    />
                    <p className={styles.footer__social__text}>Cedaring-xr</p>
                </a>
            </div>
            <div className={styles.footer__social__icon}>
                <a href="https://twitter.com/CedaringXR" target="_blank">
                    <img
                        src={twitterIcon}
                        className={styles.footer__img}
                    />
                    <p className={styles.footer__social__text}>@CedaringXR</p>
                </a>
            </div>
        </footer>
    );
}
