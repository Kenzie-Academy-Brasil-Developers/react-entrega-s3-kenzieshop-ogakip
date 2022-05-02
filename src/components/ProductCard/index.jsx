import * as S from "./styles";
import Button from "../Button";
import cartIcon from "../../assets/img/shopping-cart.svg";
import { addProcutThunk } from "../../store/modules/cartProducts/thunks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ProductCard = ({ title, image, description, category, price, id }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const addProduct = () => {
    if (!localStorage.getItem("totalPrice")) {
      localStorage.setItem("totalPrice", JSON.stringify(0));
    }
    dispatch(addProcutThunk(id));
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <img src={image} alt={description} />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>R${price}</span>
        <Button onClickCallBack={addProduct}>
          Adicionar <img src={cartIcon} alt="cart icon" />
        </Button>
      </S.DescriptionContainer>
    </S.Container>
  );
};
export default ProductCard;
