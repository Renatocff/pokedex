import { Container, Background, ButtonPokebola } from "./styles";
import { useBackPack } from '../../context/backpack';

import bg from '../../assets/vetor.png';
import ash from '../../assets/ash.png';
import pokebola from '../../assets/pokebola.png';

export default function Header() {

    const { setData } = useBackPack();

    return (
        <Container>
            <Background src={bg} alt="Imagem Header" />
            <img className="ash" src={ash} alt="Imagem Ash" />
            <ButtonPokebola onClick={() => setData({ ModalBackPackOpened: true })}>
                <img className="Pokebola" src={pokebola} alt="Pokebola" />
            </ButtonPokebola>
        </Container>
    );
}