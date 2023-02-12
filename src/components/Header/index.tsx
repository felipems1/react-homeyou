import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import Switch from "react-switch";
import * as C from "./style";
import logo from "../../assets/logo.svg";

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

const Header = ({ theme, setTheme }: Props) => {
  const [menu, setMenu] = useState(true);

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const menuToggler = () => {
    menu === false ? setMenu(true) : setMenu(false);
  };

  const handleMenu = () => {
    setMenu(true);
  };

  return (
    <C.Container>
      <C.Header>
        <C.LogoArea>
          <C.Logo>
            <C.LogoImage src={logo} alt="logo" />
          </C.Logo>
          <C.LogoTitle>HOMEYOU</C.LogoTitle>
        </C.LogoArea>
        <Switch
          onChange={() => themeToggler()}
          checked={theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          onColor="#f5f5f5"
          offColor="#121212"
          offHandleColor="#00f"
          onHandleColor="#0f0"
          handleDiameter={20}
        />
        <C.ButtonMobile onClick={menuToggler}>
          {menu ? (
            <CgMenu size={25} color={theme === "light" ? "272727" : "fff"} />
          ) : (
            <AiOutlineClose
              size={25}
              color={theme === "light" ? "272727" : "fff"}
            />
          )}
        </C.ButtonMobile>
        <C.Options menu={menu}>
          <C.Option>
            <C.Link href="#start" onClick={handleMenu}>
              Início
            </C.Link>
          </C.Option>
          <C.Option>
            <C.Link href="#gallery" onClick={handleMenu}>
              Galeria
            </C.Link>
          </C.Option>
          <C.Option>
            <C.Link href="#contact" onClick={handleMenu}>
              Contato
            </C.Link>
          </C.Option>
        </C.Options>
      </C.Header>
    </C.Container>
  );
};

export default Header;
