import React from 'react'
import style from "@styles/About.module.css"
import Image from 'next/image'

interface Props {

}

function index({}: Props) {
  return (
    <div className={style.about}>
        <h1>About</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ex aliquam rem beatae optio dignissimos? Aut, iusto excepturi recusandae dolores sapiente porro, at aspernatur illum corporis maxime veritatis quae. Molestias.</p>
        <Image src="/images/charizard.png" alt="pokemon charizard" width="300" height="300" />
    </div>
  )
}

export default index