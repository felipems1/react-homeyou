import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colorSecondary};

  @media (max-width: 768px) {
    padding-top: 80px;
  }

  @media (max-width: 425px) {
    height: 400px;
    padding-top: 90px;
  }

  @media (max-width: 375px) {
    height: 400px;
  }
`;

export const ContainerStart = styled.div`
  display: flex;
  justify-content: space-between;
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

export const AreaInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;

  @media (max-width: 768px) {
    margin-right: 50px;
  }
`;

export const Title = styled.h3`
  font-size: 25px;
  color: ${(props) => props.theme.fontColorPrimary};
  margin-top: 150px;

  @media (max-width: 768px) {
    margin-top: 40px;
    font-size: 20px;
  }

  @media (max-width: 425px) {
    margin-top: 20px;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.fontColorSecondary};
  font-size: 17px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const AreaButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

export const Button = styled.button`
  padding: 8px 30px;
  background-color: ${(props) => props.theme.fontColorPrimary};
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme.colorPrimary};
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 6px;
    font-size: 12px;
  }
`;
export const Link = styled.a`
  color: ${(props) => props.theme.fontColorPrimary};
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const AreaImage = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const Image = styled.img`
  @media (max-width: 768px) {
    width: 330px;
  }
`;
