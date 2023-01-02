/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import Button from "../button";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/newLogo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <header>
        <img
          width={100}
          style={{
            backgroundColor: "transparent",
            marginTop: "-15px",
            cursor: "pointer",
          }}
          height={100}
          src={Logo}
          onClick={() => navigate("/")}
        />

        <Button
          onClick={() => navigate("/register")}
          style={{ borderRadius: "20px", padding: "0 25px" }}
          title="Register"
        />
      </header>
    </S.Header>
  );
};

export default Header;
