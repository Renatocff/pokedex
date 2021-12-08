import { useEffect, useState } from "react";
import { api } from '../services/api';
import { useLoading, Oval } from '@agney/react-loading';

import { Container, Header, Pesquisa, Loader } from './styles';
import { Pokemon } from "../Pokemon";

export default function Dashboard() {

    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');
    const [load, setLoad] = useState(false);

    const { containerProps, indicatorEl } = useLoading({
        loading: load,
        indicator: <Oval width="50" />,
    });

    useEffect(() => {
        setLoad(true);
        api.get('/pokemon-species')
            .then((response) => {
                setPokemons(response.data.results);
                setLoad(false);
            })
            .catch((erro) => console.log('erro na consulta', erro));

    }, []);

    return (
        <>
            <Header>
                <Pesquisa type="text" placeholder="Pesquisar" onChange={(e) => setSearch(e.target.value)} />
            </Header>
            <Container>
                {!!indicatorEl ? '' : pokemons.filter((pokemon) => {
                    if (search === "") {
                        return pokemon
                    } else {
                        return pokemon.name.includes(search);
                    }
                }).map((pokemon) => (<Pokemon key={pokemon.name} poke={pokemon} />))}
            </Container>
            {
                indicatorEl ? <Loader>{indicatorEl}</Loader> : ''
            }
        </>
    );
}