import Button from "../button";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");

  return (
    <S.Header>
      <header>
        <h1>Travel App</h1>
        <div className="controls">
          <Button onClick={handleLogin} size="small" title="Login" />
          <Button
            onClick={handleRegister}
            size="small"
            hasBackground
            title="Join Now"
          />
        </div>
      </header>
    </S.Header>
  );
};

export default Header;
