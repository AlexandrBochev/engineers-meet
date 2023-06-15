import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.scss'
import arrow from '../public/arrow-left-up.svg'
import Link from 'next/link'

const Navbar = () => {

  const items = ['Activities', 'Technology', 'R&D', 'Community']

  // to change burger class
  const [burgerClass, setBurgerClass] = useState(`${styles.burgder_bar} ${styles.unclicked}`)
  const [menuClass, setMenuClass] = useState(`${styles.menu} ${styles.hiden}`)
  const [itemsClass, setItemsClass] = useState(`${styles.items} ${styles.hiden_items}`)
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = (event: any) => {
    if (!isMenuClicked) {
      event.preventDefault()
      setBurgerClass(`${styles.burgder_bar} ${styles.clicked}`)
      setMenuClass(`${styles.menu} ${styles.visible}`)
      setItemsClass(`${styles.items} ${styles.visible_items}`)
    } else {
      event.preventDefault()
      setBurgerClass(`${styles.burgder_bar} ${styles.unclicked}`)
      setMenuClass(`${styles.menu} ${styles.hiden}`)
      setItemsClass(`${styles.items} ${styles.hiden_items}`)
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div>
      <nav className={menuClass}>
        <Link href="/" className={styles.logo}>C</Link>
        <div className={itemsClass}>
          <ul>
            { items.map(item => <li id={item}><Link href="/" onClick={updateMenu}>{item}</Link></li>) }
          </ul>
          <div className={styles.btn} onClick={updateMenu}>
            <p>Career</p>
            <Image
              src={arrow}
              width={24}
              height={24}
              alt="Career"
            />
          </div>
        </div>
        <div className={styles.burger_menu} onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar