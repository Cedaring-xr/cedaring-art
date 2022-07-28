import React , { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import classes from './Footer.module.scss';

export default function Footer() {
  
  return (
    <footer className={classes.footer}>
    <div className={classes.footer__content}>
        <h2 className={classes.footer__content__logo}>
            Footer stuff
        </h2>
        <div className={classes.footer__social__icon}>
            <a href="https://www.instagram.com/cedaring_xr/" target="_blank">
                <img src='extras/github1.png' className={classes.footer__img}/>
                <p className={classes.footer__social__text} >@cedaring_xr</p>
            </a>
        </div>
        <div className={classes.footer__social__icon}>
            <a href="https://github.com/Cedaring-xr" target="_blank">
                <img src='extras/github1.png' className={classes.footer__img}/>
                <p className={classes.footer__social__text}>Cedaring-xr</p>
            </a>
        </div>
        <div className={classes.footer__social__icon}>
            <a href="https://twitter.com/CedaringXR" target="_blank">
                <img src='extras/github1.png' className={classes.footer__img}/>
                <p className={classes.footer__social__text}>@CedaringXR</p>
            </a>
        </div>
    </div>
    </footer>
)}
