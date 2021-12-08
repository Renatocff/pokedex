import { Container, Header, Content } from './styles';
import { useEffect, useState } from 'react';

import { api } from '../services/api';

export function Pokemon({poke}) {

    const [pokemon, setPokemon] = useState('');
    

    useEffect(() => {
        api.get(`/pokemon/${poke.name}`)
        .then((retorno) => setPokemon(retorno.data))
    }, [poke.name]);
    
    return (
        <Container>
            <Header>
                <img src={pokemon.sprites?.front_default} alt="Imagem Pokemon" />
                <h4>#{pokemon.id}</h4>
                <h3>{pokemon.name}</h3>
                <div>
                    {pokemon.types ? pokemon.types.map((type) => (<strong>{type.type.name}</strong>)) : ''}
                </div>
            </Header>

            <Content>
                <h3>Pokédex Data</h3>
                <h5>Species: {pokemon.species?.name}</h5>
                <h5>Height: {pokemon.height}</h5>
                <h5>weight: {pokemon.weight}</h5>
                {/* <h5>Abilities: x</h5> */}
            </Content>
        </Container>
    );
}