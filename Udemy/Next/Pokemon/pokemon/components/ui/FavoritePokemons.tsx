import { FC } from 'react'
import { Button, Grid, Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from "../../interfaces";
import { useRouter } from 'next/router';

interface Props {
    id: number
}

export const FavoritePokemons: FC<Props> = ({ id }) => {
    const router = useRouter();

    const seeFavorite = () => {
        router.push(`/pokemon/${id}`)
    }
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card
                isHoverable
                isPressable
                css={{ padding: 10 }}
                onClick={seeFavorite}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}