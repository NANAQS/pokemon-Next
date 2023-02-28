import React from 'react'
import style from "@styles/Footer.module.css"

interface Props {

}

const Footer = ({}: Props) => {
  return (
    <footer className={style.footer}>
        <p><span>PokeNext</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer