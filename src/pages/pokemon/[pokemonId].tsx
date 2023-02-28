import style from "@styles/Pokemon.module.css"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from "next/image"

interface Props {
    poke: InferGetStaticPropsType<typeof getStaticProps>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const maxPokemons = 251
    const api = "https://pokeapi.co/api/v2/pokemon/"

    const res = await fetch(`${api}?limit=${maxPokemons}`)
    const data = await res.json()

    const paths = data.results.map((_: any, index: number) => {
        return {
            params: {
                pokemonId: (index+1).toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const id = ctx.params?.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return {
        props:{
            poke: data
        }
    }
}

function pokemonID({poke}: Props) {
  return (
    <div className={style.pokemon_container}>
        <h1 className={style.title}>{poke.name}</h1>
        <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
        width="200"
        height="200"
        alt={poke.name}
        />
        <div>
            <h3>Numero:</h3>
            <p>{poke.id}</p>
        </div>
        <div>
            <h3>Tipo:</h3>
            <div className={style.types_container}>
                {poke.types.map((item: any)=> {
                    return (<span key={item.id} className={`${style.type} ${style['type_'+item.type.name]}`}>
                        {item.type.name}
                    </span>)
                })}
            </div>
        </div>
        <div className={style.data_container}>
            <div>
                <h4>Altura:</h4>
                <p>{poke.height * 10} cm</p>
            </div>
            <div>
                <h4>Altura:</h4>
                <p>{poke.weight / 10} kg</p>
            </div>
        </div>
    </div>
  )
}

export default pokemonID