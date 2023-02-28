import { GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/image"
import style from "@styles/Home.module.css"
import Card from "@/Components/Card"

interface Props {
  pokemons: InferGetStaticPropsType<typeof getStaticProps>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const maxPokemons = 251
  const api = "https://pokeapi.co/api/v2/pokemon"

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item: any, index: number) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

const Home = ({pokemons}: Props) => {
  return (
    <>
      <div className={style.title_container}>
          <h1 className={style.title}>Poke<span>Next</span></h1>
          <Image src="/images/pokeball.png" alt="pokebola" width="50" height="50" />
        </div>
        <div className={style.pokemon_container}>
          {
            pokemons.map((poke: any) => (
              <Card key={poke.id} poke={poke} />
            ))
          }
        </div>
    </>
  )
}

export default Home