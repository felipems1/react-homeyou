import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colorPrimary};
  position: fixed;
  top: 0;
`;

export const Header = styled.header`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colorPrimary};

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

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Logo = styled.div`
  background-color: ${(props) => props.theme.logoColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const LogoTitle = styled.h3`
  color: ${(props) => props.theme.fontColorPrimary};
`;

export const ButtonMobile = styled.button`
  display: none;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background: transparent;
  }
`;

interface OptionsProps {
  menu?: boolean;
}

export const Options = styled.ul<OptionsProps>`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.fontColorPrimary};

  @media (max-width: 425px) {
    display: ${(props) => (props.menu ? "none" : "block")};
    position: absolute;
    top: 80px;
    right: 0;
    left: 0;
    background-color: #222;
    width: 100%;
    height: 1660px;
    overflow: hidden;
  }
`;

export const Option = styled.li`
  @media (max-width: 425px) {
    padding: 20px 15px;
    font-size: 20px;
    border-bottom: 1px solid rgba(77, 77, 77, 0.8);
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.fontColorPrimary};
  text-decoration: none;

  @media (max-width: 425px) {
    color: #fff;
  }
`;
