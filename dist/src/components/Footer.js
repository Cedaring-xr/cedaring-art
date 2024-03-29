import React from 'react'
import styles from '../scss/components/footer.module.scss'
import instaIcon from '../Assets/logos/instaIcon-small.png'
import twitterIcon from '../Assets/logos/twitterIcon-small.png'
import githubIcon from '../Assets/logos/githubIcon-small.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <h6 className={styles.footer__content__logo}></h6>
            </div>
            <div className={styles.footer__social__icon}>
                <a
                    href="https://twitter.com/CedaringXR"
                    target="_blank"
                    rel="noreferrer"
                    id="twitter"
                >
                    <img src={twitterIcon} className={styles.footer__img} />
                    <p className={styles.footer__social__text}>@CedaringXR</p>
                </a>
            </div>
            <div className={styles.footer__social__icon}>
                <a
                    href="https://www.instagram.com/cedaring_xr/"
                    target="_blank"
                    rel="noreferrer"
                    id="instagram"
                >
                    <img src={instaIcon} className={styles.footer__img} />
                    <p className={styles.footer__social__text}>@cedaring_xr</p>
                </a>
            </div>
            <div className={styles.footer__social__icon}>
                <a
                    href="https://github.com/Cedaring-xr"
                    target="_blank"
                    rel="noreferrer"
                    id="github"
                >
                    <img src={githubIcon} className={styles.footer__img} />
                    <p className={styles.footer__social__text}>Cedaring-xr</p>
                </a>
            </div>
        </footer>
    )
}
