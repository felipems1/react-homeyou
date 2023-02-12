import * as C from "./style";

const Footer = () => {
  return (
    <C.Container>
      <C.ContainerFooter>
        <C.AreaProduct>
          <C.Title>Produtos</C.Title>
          <C.Option>Mobilia</C.Option>
          <C.Option>Segurança</C.Option>
          <C.Option>Design Interior</C.Option>
        </C.AreaProduct>
        <C.AreaInfo>
          <C.Title>Mais informações</C.Title>
          <C.Option>Contrato</C.Option>
          <C.Option>Sobre nós</C.Option>
          <C.Option>Termos e Condições</C.Option>
        </C.AreaInfo>
        <C.AreaSocial>
          <C.Title>Redes Sociais</C.Title>
          <C.Option>Pinterest</C.Option>
          <C.Option>Facebook</C.Option>
          <C.Option>Instagram</C.Option>
        </C.AreaSocial>
      </C.ContainerFooter>
    </C.Container>
  );
};

export default Footer;
