import React, { useEffect } from 'react';
import { useBackPack } from '../../context/backpack';
import { Container, Header, Close, BoxHeader, Card, CardItem } from './styles';
import { Modal } from 'rsuite';

import imgClose from '../../assets/close.png';
import imgBackPack from '../../assets/backpack.png';
import imgTrash from '../../assets/trash.png';
import imgPlus from '../../assets/plus.png';
import imgteste from '../../assets/pokemons/1.svg';

export default function ModalBackPack() {

    const { ModalBackPackOpened, setData } = useBackPack();

    useEffect(() => {
        
    }, [ModalBackPackOpened]);

    return (
        <Modal open={ModalBackPackOpened} backdrop={'static'}>
            <Modal.Body backdrop='static'>
                <Container>
                    <Header>
                        <Close onClick={() => setData({ ModalBackPackOpened: false })}>
                            <img src={imgClose} alt="Imagem Close" />
                        </Close>
                        <BoxHeader>
                            <img src={imgBackPack} alt="Imagem backPack" />
                            <h4>Backpack</h4>
                        </BoxHeader>
                    </Header>
                    <Card>
                        <h4>My Backpack</h4>
                        <CardItem>
                            <img src={imgteste} alt="Imagem backPack" />
                            <h5>Bulbasaur</h5>
                            <button>
                                <img src={imgTrash} alt="Imagem backPack" />
                            </button>
                        </CardItem>
                        <CardItem>
                            <img src={imgteste} alt="Imagem backPack" />
                            <h5>Bulbasaur</h5>
                            <button>
                                <img src={imgTrash} alt="Imagem backPack" />
                            </button>
                        </CardItem>
                        <CardItem>
                            <img src={imgteste} alt="Imagem backPack" />
                            <h5>Bulbasaur</h5>
                            <button>
                                <img src={imgTrash} alt="Imagem backPack" />
                            </button>
                        </CardItem>
                        <CardItem>
                            <img src={imgteste} alt="Imagem backPack" />
                            <h5>Bulbasaur</h5>
                            <button>
                                <img src={imgTrash} alt="Imagem backPack" />
                            </button>
                        </CardItem>
                        <CardItem>
                            <img src={imgteste} alt="Imagem backPack" />
                            <h5>Bulbasaur</h5>
                            <button>
                                <img src={imgTrash} alt="Imagem backPack" />
                            </button>
                        </CardItem>
                        <CardItem>
                            <img src={imgteste} alt="Imagem backPack" />
                            <h5>Bulbasaur</h5>
                            <button>
                                <img src={imgTrash} alt="Imagem backPack" />
                            </button>
                        </CardItem>
                        <CardItem>
                            <img src={imgteste} alt="Imagem backPack" />
                            <h5>Bulbasaur</h5>
                            <button>
                                <img src={imgTrash} alt="Imagem backPack" />
                            </button>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <input type="text" placeholder="Search pokemon..." />
                        </CardItem>
                        <CardItem>
                            <img src={imgteste} alt="Imagem backPack" />
                            <h5>Bulbasaur</h5>
                            <button>
                                <img src={imgPlus} alt="Imagem backPack" />
                            </button>
                        </CardItem>
                    </Card>
                </Container>
            </Modal.Body>
        </Modal>
    );
}