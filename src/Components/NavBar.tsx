import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import style from "@styles/NavBar.module.css"

interface Props {

}

const NavBar = ({}: Props) => {
  return (
    <nav className={style.navbar}>
        <div className={style.logo}>
            <Image src="/images/pokeball.png" alt='pokebola' width="30" height="30" />
            <h1>PokeNext</h1>
        </div>
        <ul className={style.link_items}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar