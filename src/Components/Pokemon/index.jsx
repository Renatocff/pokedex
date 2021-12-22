import {
    Container,
    Cabecalho,
    Number,
    Name,
    Type,
    TypeStyled,
    ImgPokemon,
    Details,
    DetailsButton,
    Loader,
    containerSize,
    Description,
    BodyDetaisTitle,
    DetailsBody,
    LineBodyItem
} from './styles';
import { useCallback, useEffect, useState, useRef } from 'react';
import { useLoading, Oval } from '@agney/react-loading';

import { api } from '../../services/api';
import IconDown from '../../assets/arrow-down.svg';
import IconUp from '../../assets/arrow-up.svg';
const imageUnavailable = (require(`../../assets/types/unavailable.svg`).default);

export function Pokemon({ poke }) {

    const [load, setLoad] = useState(false);
    const [pokemon, setPokemon] = useState({ id: 0, name: '', species: { name: '' }, types: [{ type: { name: 'unavailable' } }], abilities: [{ ability: { name: '' } }] });
    const [description, setDescription] = useState('');
    const imgPokemon = useRef(null);
    const containerRef = useRef(null);
    const [containerBoxSize, setContainerBoxSize] = useState(containerSize.height_normal);

    const { indicatorEl } = useLoading({
        loading: load,
        indicator: <Oval width="50" />,
    });

    const getData = useCallback(async () => {
        setLoad(true);
        await api.get(`/pokemon/${poke.name}`)
            .then((retorno) => {
                imgPokemon.current = require(`../../assets/pokemons/${retorno.data.id}.svg`).default;
                setPokemon(retorno.data);
                setLoad(false);
            }).catch(() => {
                setPokemon({
                    id: 0,
                    name: 'unavailable',
                    types: [{ type: { name: 'unavailable' } }],
                    abilities: [{ ability: { name: '' } }]
                });
            });

            await api.get(`/pokemon-species/${poke.name}`)
                    .then((retorno2) => {
                        setDescription(retorno2.data.flavor_text_entries[0].flavor_text);
                        setLoad(false);
                    }).catch(() => {
                        
                        setLoad(false);
                    });
    }, [poke.name]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <Container background={`--${pokemon.types[0].type.name}`} ref={containerRef} size={containerBoxSize}>
            {
                indicatorEl ? <Loader>{indicatorEl}</Loader> :
                    <>
                        <Cabecalho>
                            <Number>#{("0000" + pokemon.id).slice(-3)}</Number>
                            <Name>{pokemon.name}</Name>
                            <Type>
                                {pokemon.types ? pokemon.types.map((type, index) => {
                                    const imageType = require(`../../assets/types/${type.type.name}.svg`).default;
                                    return (
                                        <TypeStyled key={index} color={`--${type.type.name}`}>
                                            <img src={imageType} alt="Botão de Detalhes" />
                                            {type.type.name}
                                        </TypeStyled>
                                    )
                                }) : ''}
                            </Type>
                        </Cabecalho>
                        <ImgPokemon src={pokemon.name !== 'unavailable' && pokemon.id > 0 ? imgPokemon.current : imageUnavailable} alt={`Imagem de ${pokemon.name}`} />
                        <Details size={containerBoxSize} hidden={containerBoxSize !== containerSize.height_opened ? true : false}>
                            <Description>{description}</Description>
                            <BodyDetaisTitle>Pokedéx Data</BodyDetaisTitle>
                            <DetailsBody>
                                <LineBodyItem>Specie:<span>{pokemon.species.name}</span></LineBodyItem>
                                <LineBodyItem>Height:<span>{pokemon.height}</span></LineBodyItem>
                                <LineBodyItem>Weight:<span>{pokemon.weight}</span></LineBodyItem>
                                <LineBodyItem>Abilities:<span>{pokemon.abilities[0].ability.name}</span></LineBodyItem>
                            </DetailsBody>
                        </Details>
                        <DetailsButton disabled={pokemon.name !== 'unavailable' ? false : true} onClick={() => {
                            if (containerBoxSize === containerSize.height_normal) {
                                setContainerBoxSize(containerSize.height_opened);
                            } else {
                                setContainerBoxSize(containerSize.height_normal);
                            }
                        }}>
                            {pokemon.name !== 'unavailable' ? <img src={containerBoxSize === containerSize.height_normal ? IconDown : IconUp} alt="Botão de Detalhes" /> : null}
                        </DetailsButton>
                    </>
            }
        </Container>
    );
}