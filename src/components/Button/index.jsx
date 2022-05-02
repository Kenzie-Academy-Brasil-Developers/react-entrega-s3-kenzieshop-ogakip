import * as S from "./styles";

const Button = ({ children, onClickCallBack }) => {
  return (
    <S.Container>
      {onClickCallBack ? (
        <button onClick={onClickCallBack}>{children}</button>
      ) : (
        <button>{children}</button>
      )}
    </S.Container>
  );
};
export default Button;
