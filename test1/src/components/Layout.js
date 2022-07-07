import React from 'react';
import Header from "./Header";
import classes from "./Layout.module.scss";


export default function Layout() {
    return (
        <>
            <Header />
            <div className={classes.container}>
                <h1>TEST</h1>
            </div>
        </>
    )
}