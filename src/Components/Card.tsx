import Image from 'next/image'
import React from 'react'
import style from "@styles/Card.module.css"
import Link from 'next/link'

interface Props {
    poke: any
}

function Card({poke}: Props) {
  return (
    <div className={style.card}>
    <Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
      width="120"
      height="120"
      alt={poke.name}
    />
    <p className={style.id}>#{poke.id}</p>
    <h3 className={style.title}>{poke.name}</h3>
    <Link className={style.btn} href={`/pokemon/${poke.id}`}>Detalhes</Link>
  </div>
  )
}

export default Card