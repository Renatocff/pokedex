import { useCallback, useEffect, useState } from "react";
import { api } from '../../services/api';
import { useLoading, Oval } from '@agney/react-loading';
import { BackPackProvider } from '../../context/backpack';

import { Container, HeaderPesquisa, Pesquisa, Loader, More } from './styles';
import { Pokemon } from "../Pokemon";
import Header from '../Header';
import Modal from '../Modal';

export default function Dashboard() {

    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');
    const [load, setLoad] = useState(false);
    const [next, setNext] = useState('/pokemon-species');

    const { indicatorEl } = useLoading({
        loading: load,
        indicator: <Oval width="50" />,
    });

    const getPokemons = useCallback((link) => {
        setLoad(true);
        api.get(link ? link : '/pokemon-species')
            .then((response) => {
                setNext(response.data.next);
                setPokemons(prevItems => [...prevItems, ...response.data.results]);
                setLoad(false);
            })
            .catch((erro) => {
                console.log('erro', erro)
                setLoad(false)});
    }, []);

    useEffect(() => {
        getPokemons();
    }, [getPokemons]);

    return (
        <BackPackProvider>
            <Header />
            <HeaderPesquisa>
                <Pesquisa type="text" placeholder="Pesquisar" onChange={(e) => setSearch(e.target.value)} />
            </HeaderPesquisa>
            <Container>
                {!!indicatorEl ? '' : pokemons.filter((pokemon) => {
                    if (search === "") {
                        return pokemon
                    } else {
                        return pokemon.name.includes(search);
                    }
                }).map((pokemon) => (<Pokemon key={pokemon.name} poke={pokemon} />))}
            </Container>
            <More onClick={() => getPokemons(next)}>Mais...</More>
            {
                indicatorEl ? <Loader>{indicatorEl}</Loader> : ''
            }
            <Modal />
        </BackPackProvider>
    );
}