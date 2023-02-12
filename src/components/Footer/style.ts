import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colorPrimary};

  @media (max-width: 425px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  background-color: ${(props) => props.theme.colorPrimary};

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 425px) {
    width: 380px;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  }

  @media (max-width: 375px) {
    width: 350px;
    margin-left: 15px;
  }
`;

export const AreaProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 425px) {
    width: 180px;
  }

  @media (max-width: 375px) {
    width: 150px;
  }
`;

export const AreaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 375px) {
    width: 150px;
  }
`;

export const AreaSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 425px) {
    width: 180px;
  }

  @media (max-width: 375px) {
    width: 150px;
  }
`;

export const Title = styled.h5`
  color: ${(props) => props.theme.fontColorPrimary};
  cursor: pointer;
`;

export const Option = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.fontColorSecondary};
  cursor: pointer;
`;
