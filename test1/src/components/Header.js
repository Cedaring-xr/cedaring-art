import React, { useLayoutEffect, useState, useEffect } from 'react';
import styles from '../scss/components/header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backLayer from '../Assets/images/parallax/clear-back.png';
import backPlaceholder from '../Assets/images/parallax/backPlaceholder.png'
import midLayer from '../Assets/images/parallax/clear-mid.png';
import midPlaceholder from '../Assets/images/parallax/midPlaceholder.png'
import frontLayer from '../Assets/images/parallax/clear-front-short.png';
import frontPlaceholder from '../Assets/images/parallax/frontPlaceholder.png'
import LazyImage from './LazyImage';
gsap.registerPlugin(ScrollTrigger);


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({ width: undefined, height: undefined });

    const menuToggleOpen = () => {
        document.body.classList.toggle('header-menu-open');
        setMenuOpen((open) => !open);
    };

    const menuCloseFull = () => {
        document.body.classList.remove('header-menu-open');
        setMenuOpen(false);
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
        ScrollTrigger.matchMedia({
            "(min-width: 768px)" : () => {
                gsap.to('#prlx-back', {
                    y: 60,
                    scrollTrigger: {
                        trigger: '.header-main',
                        start: 'top top', // top of trigger top of viewport
                        end: 'bottom top', // bottom of the trigger top of the viewport?
                        scrub: true, // bind to scroll 1:1
                    }
                })
                gsap.to('#prlx-mid', {
                    y: 40,
                    scrollTrigger: {
                        trigger: '.header-main',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    }
                })
                gsap.to('#prlx-front', {
                    y: 20,
                    scrollTrigger: {
                        trigger: '.header-main',
                        start: 'top top', 
                        end: 'bottom top',
                        scrub: true,
                    }
                })
                gsap.to('.parallax-text', {
                    y: 110, 
                    x: 40,
                    rotation: 4,
                    scrollTrigger: {
                        trigger: '.header-main',
                        start: 'top top', 
                        end: 'bottom top',
                        scrub: true,
                    }
                })
                gsap.to('.parallax-nav', {
                    y: 110,
                    x: -40,
                    rotation: -4,
                    scrollTrigger: {
                        trigger: '.header-main',
                        start: 'top top', 
                        end: 'bottom top',
                        scrub: true,
                    }
                })
            }
        });
    }, [])
    
    return (
        <div className="header-main">
            <header className={styles.header}>
               <div className="parallax-box" rel="preload">
                    <LazyImage src={backLayer} placeholderSrc={backPlaceholder} className="parallax-img" id="prlx-back" loading="eager"/>
                    <h1 className="parallax-text"><Link to="/" onClick={menuCloseFull}>Cedaring.Art</Link></h1>
                    <LazyImage src={midLayer} placeholderSrc={midPlaceholder} className="parallax-img" id="prlx-mid" loading="eager"/>
                    <nav className={`parallax-nav ${styles.header__content__nav} ${
                            menuOpen ? styles.isMenu : ''
                        }`}>
                     <ul>
                        <li className="nav-item"><Link to="/artwork" onClick={menuToggleOpen}>Artwork</Link></li>
                        <li className="nav-item"><Link to="/writing" onClick={menuToggleOpen}>Writing</Link></li>
                        <li className="nav-item"><Link to="/climbing" onClick={menuToggleOpen}>Climbing</Link></li>
                        {/* <li><Link to="/worlds">Worlds</Link></li> */}
                        {/* <li><Link to="/react">React</LInk></li> */}
                     </ul>
                  </nav>
                  <LazyImage src={frontLayer} placeholderSrc={frontPlaceholder} className="parallax-img" id="prlx-front" loading="eager"/>
                  <div className={styles.header__content__toggle}>
                        {!menuOpen ? (
                           <BiMenuAltRight onClick={menuToggleOpen} />
                        ) : (
                           <AiOutlineClose onClick={menuToggleOpen} />
                        )}
                  </div>
               </div>
            </header>
        </div>
    );
}
