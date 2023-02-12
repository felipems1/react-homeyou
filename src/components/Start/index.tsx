import Banner from "../../assets/banner.png";
import * as C from "./style";

const Start = () => {
  return (
    <C.Container id="start">
      <C.ContainerStart>
        <C.AreaInfo>
          <C.Title>
            Ajudar você a encontrar o melhor conforto, é nossa prioridade.
          </C.Title>
          <C.Description>
            Encontre uma variedade de propriedades que combinam com você.
            Esqueça todas as dificuldades em encontrar uma residência
          </C.Description>
          <C.AreaButtons>
            <C.Button>Entre em contato</C.Button>
            <C.Link>Mais sobre nós</C.Link>
          </C.AreaButtons>
        </C.AreaInfo>
        <C.AreaImage>
          <C.Image src={Banner} alt="banner" />
        </C.AreaImage>
      </C.ContainerStart>
    </C.Container>
  );
};

export default Start;
