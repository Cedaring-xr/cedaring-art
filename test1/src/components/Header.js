import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../scss/components/header.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Header() {
   // let navigate = useNavigate()
   const [menuOpen, setMenuOpen] = useState(false)
   const menuToggleHandler = () => {
      setMenuOpen((p) => !p)
   }

   const [size, setSize] = useState({
      width: undefined,
      height: undefined,
   })

   useEffect(() => {
      const handleResize = () => {
         setSize({
            width: window.innerWidth,
            height: window.innerHeight,
         })
      }
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
   }, [] )

   useEffect(() => {
      if (size.width > 768 && menuOpen) {
         setMenuOpen(false)
      }
   }, [size.width, menuOpen])

   return (
      <div className='header-main'>
         <header className={styles.header}>
            <div className={styles.header__content}>
               <div className={styles.header__content__logo}>
                  <a href="/">
                     <h1 className={styles.header__content__title}>Cedaring.Art</h1>
                  </a>
               </div>
               <nav className={`${styles.header__content__nav} ${menuOpen ? styles.isMenu : ''}`}>
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
            </div>
         </header>
      </div>
   )
}
