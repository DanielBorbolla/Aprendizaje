import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { Button, Grid, Card, Row, Text } from '@nextui-org/react';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}
const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title='Lista de Pokemons de primera generación '>

        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map((poke) => (
              <PokemonCard pokemon={poke} key={poke.id}></PokemonCard>

            ))
          }
        </Grid.Container>

      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151xs', {
    headers: {
      'accept-encoding': '*'
    }
  })
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))


  return {
    props: {
      pokemons: pokemons
    }
  }
}


export default Home;