import React from "react"
import styles from "../scss/components/infoText.module.scss"
import testImage from "../Assets/images/test.jpg"


export default function InfoPage() {
    

    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p className={styles.text__content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <img src={testImage} className={styles.img} />
            </div>
        </>
    )
}