import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colorSecondary};
`;

export const ContainerContact = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  width: 800px;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 425px) {
    width: 380px;
  }

  @media (max-width: 375px) {
    width: 350px;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.fontColorPrimary};
  font-size: 25px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.fontColorSecondary};
  font-size: 16px;
  text-align: center;
`;

export const Button = styled.button`
  padding: 5px 30px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.fontColorPrimary};
  cursor: pointer;
  color: ${(props) => props.theme.fontColorPrimary};

  @media (max-width: 425px) {
    padding: 5px 100px;
  }
`;
