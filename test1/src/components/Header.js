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
    // let prlxTimeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.header',
    //         pin: false,
    //         start: 'top top', // top of trigger top of viewport
    //         end: '+= 500',
    //         scrub: 1,
    //         snap: {
    //             snapTo: 'labels',
    //             duration: {min: 0.2, max: 3},
    //             delay: 0.2
    //         }
    //     }
    // })

    // prlxTimeline.addLabel('start')
    //     .from(".box p", {scale: 0.3, rotation:45, autoAlpha: 0})
    //     .addLabel("color")
    //     .from(".box", {backgroundColor: "#28a92b"})
    //     .addLabel("spin")
    //     .to(".box", {rotation: 360})
    //     .addLabel("end");

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
            </header>
        </div>
    );
}
