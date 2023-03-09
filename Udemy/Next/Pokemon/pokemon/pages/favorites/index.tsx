import { useEffect, useState } from 'react'
import { Grid } from '@nextui-org/react'
import { Layout } from '../../components/layouts'
import { FavoritePokemons, NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'


const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])
    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons())
    }, [])

    return (
        <Layout title='my Favorite Pokemons'>
            {
                favoritePokemons.length === 0 ?
                    (<NoFavorites />) : (
                        <Grid.Container gap={2} direction='row' justify='flex-start'>
                            {
                                favoritePokemons.map(id => (
                                    <FavoritePokemons id={id} key={id}></FavoritePokemons>
                                ))
                            }
                        </Grid.Container>
                    )
            }


        </Layout>
    )
}

export default FavoritesPage