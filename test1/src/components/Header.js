import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import styles from '../scss/components/header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backLayer from '../Assets/images/parallax/clear-back.png';
import midLayer from '../Assets/images/parallax/clear-mid.png';
import frontLayer from '../Assets/images/parallax/clear-front-short.png';
gsap.registerPlugin(ScrollTrigger);


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({ width: undefined, height: undefined });

    const menuOpenHandler = () => {
        document.body.classList.add('header-menu-open');
        setMenuOpen((open) => !open);
    };

    const menuCloseHandler = () => {
        document.body.classList.remove('header-menu-open');
        setMenuOpen((open) => !open);
    };

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

    useLayoutEffect(() => {
        //should be using Ref to attach to elements instead of class or id
        gsap.to('#prlx-back', {
            y: 600,
            scrollTrigger: {
                trigger: '.header',
                start: 'top top', // top of trigger top of viewport
                end: 'bottom top',
                scrub: true,
            }
        })
        gsap.to('#prlx-mid', {
            y: 400,
            scrollTrigger: {
                trigger: '.header',
                start: 'top top', // top of trigger top of viewport
                end: 'bottom top',
                scrub: true,
            }
        })
        gsap.to('#prlx-front', {
            y: 200,
            scrollTrigger: {
                trigger: '.header',
                start: 'top top', // top of trigger top of viewport
                end: 'bottom top',
                scrub: true,
            }
        })
        gsap.to('.parallax-text', {
            y: '90vh',
            x: '20vw',
            rotation: 15,
            scrollTrigger: {
                trigger: '.header',
                start: 'top top', // top of trigger top of viewport
                end: 'bottom top',
                scrub: true,
            }
        })
        gsap.to('.parallax-nav', {
            y: '90vh',
            x: '-20vw',
            rotation: -15,
            scrollTrigger: {
                trigger: '.header',
                start: 'top top', // top of trigger top of viewport
                end: 'bottom top',
                scrub: true,
            }
        })
    }, [])
    
    return (
        <div className="header-main">
            <header className={styles.header}>
               <div className="parallax-box">
                    <img src={backLayer} className="parallax-img" id="prlx-back" />
                    <h1 className="parallax-text"><a href="/">Cedaring.Art</a></h1>
                    <img src={midLayer} className="parallax-img" id="prlx-mid" />
                    <nav className={`parallax-nav ${styles.header__content__nav} ${
                            menuOpen ? styles.isMenu : ''
                        }`}>
                     <ul>
                        <li className="nav-item"><a href="/artwork">Artwork</a></li>
                        <li className="nav-item"><a href="/blog">Writing</a></li>
                        <li className="nav-item"><a href="/climbing">Climbing</a></li>
                        <li><a href="/react">React</a></li>
                     </ul>
                  </nav>
                  <img src={frontLayer} className="parallax-img" id="prlx-front" />
                  <div className={styles.header__content__toggle}>
                        {!menuOpen ? (
                           <BiMenuAltRight onClick={menuOpenHandler} />
                        ) : (
                           <AiOutlineClose onClick={menuCloseHandler} />
                        )}
                  </div>
               </div>
            </header>
        </div>
    );
}
