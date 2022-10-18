import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../scss/components/header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backLayer from '../Assets/images/parallax/backLayer2.png';
import midLayer from '../Assets/images/parallax/midLayer2.png';
import frontLayer from '../Assets/images/parallax/frontLayer2.png';
gsap.registerPlugin(ScrollTrigger);


export default function Header() {
    // let navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);


// parallax stuff


    if(document.querySelector('#prlx-back')) {
        gsap.to('#prlx-back', {
            scrollTrigger: {
                scrub : 1.2
            },
            y: 400
         })
    }
    if(document.querySelector('#prlx-mid')) {
        gsap.to('#prlx-mid', {
            scrollTrigger: {
                start: 'top top',
                scrub : 1.4
            },
            y: 450
        })
    }
    if(document.querySelector('#prlx-front')) {
        gsap.to('#prlx-front', {
                scrollTrigger: {
                    scrub : 1.6,
                    start: 'top top'
                },
                y: 300
        })
    }
   gsap.to('.parallax-text', {
         scrollTrigger: {
            scrub: 0.5
         },
         y: 900,
         x: 400,
         rotation: 30
   })
   gsap.to('.parallax-nav', {
         scrollTrigger: {
            scrub: 0.5
         },
         y: 600,
         x: -400,
         rotation: -40
   })

    return (
        <div className="header-main">
            <header className={styles.header}>
               <div className="parallax-box">
                  <img src={backLayer} className="parallax-img" id="prlx-back" />
                  <a href="/">
                        <h1 className="parallax-text">Cedaring.Art</h1>
                  </a>
                  <img src={midLayer} className="parallax-img" id="prlx-mid" />
                  <nav className={`parallax-nav ${styles.header__content__nav} ${
                            menuOpen ? styles.isMenu : ''
                        }`}>
                     <ul>
                        <li className="nav-item"><a href="/artwork">Artwork</a></li>
                        <li className="nav-item"><a href="/blog">stories</a></li>
                        <li className="nav-item"><a href="/climbing">Climbing</a></li>
                        {/* <li><a href="/react">React</a></li> */}
                     </ul>
                  </nav>
                  <img src={frontLayer} className="parallax-img" id="prlx-front" />
                  <div className={styles.header__content__toggle}>
                        {!menuOpen ? (
                           <BiMenuAltRight onClick={menuToggleHandler} />
                        ) : (
                           <AiOutlineClose onClick={menuToggleHandler} />
                        )}
                  </div>
               </div>

                {/* <div className={styles.header__content}>
                    <div className={styles.header__content__logo}>
                        <a href="/">
                            <h1 className={styles.header__content__title}>
                                Cedaring.Art
                            </h1>
                        </a>
                    </div>
                    <nav
                        className={`${styles.header__content__nav} ${
                            menuOpen ? styles.isMenu : ''
                        }`}
                    >
                        <ul>
                            <li>
                                <a href="/artwork">VR Artwork</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/climbing">Climbing</a>
                            </li>
                            <li>
                                <a href="/worlds">VR worlds</a>
                            </li>
                            <li>
                                <a href="/react">React Practice</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.header__content__toggle}>
                        {!menuOpen ? (
                            <BiMenuAltRight onClick={menuToggleHandler} />
                        ) : (
                            <AiOutlineClose onClick={menuToggleHandler} />
                        )}
                    </div>
                </div> */}
            </header>
        </div>
    );
}
