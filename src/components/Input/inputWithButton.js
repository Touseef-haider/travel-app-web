import Button from "../button";
import * as S from "./styled";

const InputWithButton = (props) => {
  return (
    <S.InputWithButton {...props}>
      <p className="label">{props?.label}</p>
      <input
        value={props?.value}
        placeholder={props?.placeholder}
        onChange={props?.onChange}
        {...props}
      />
      <Button
        title={props.buttonTitle}
        value={props.value}
        hasBackground
        onChange={props.onChange}
        className="inputButton"
      />
      <small className="error">{props?.error ? props?.error : ""}</small>
    </S.InputWithButton>
  );
};

export default InputWithButton;
