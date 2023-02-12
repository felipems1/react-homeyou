import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colorPrimary};

  @media (max-width: 425px) {
    height: 900px;
  }
`;

export const ContainerGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 425px) {
    width: 380px;
  }
`;
export const Title = styled.h3`
  margin-top: 80px;
  color: ${(props) => props.theme.fontColorPrimary};
`;

export const Description = styled.p`
  margin: 20px 20px 0 20px;
  text-align: center;
  color: ${(props) => props.theme.fontColorSecondary};
  font-size: 15px;
`;

export const AreaImages = styled.div`
  margin: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Banner1 = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    width: 280px;
    height: 370px;
  }

  @media (max-width: 425px) {
    height: 300px;
    margin-bottom: 20px;
  }
`;

export const Banner2 = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    width: 280px;
    height: 370px;
  }

  @media (max-width: 425px) {
    height: 300px;
  }
`;

export const Banner3 = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    display: none;
  }
`;
