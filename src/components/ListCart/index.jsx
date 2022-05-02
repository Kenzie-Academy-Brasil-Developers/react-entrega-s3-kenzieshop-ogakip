import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import badFace from "../../assets/img/frown.svg"
import Button from "../Button";
import { Link } from "react-router-dom";
import { removeProductThunk } from "../../store/modules/cartProducts/thunks";
import { useEffect } from "react";

const ListCart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch()

  const removeProduct = (id) => {
      dispatch(removeProductThunk(id))
  }


  return (
    <S.Container>
      <S.UlContainer>
          {cart && <>{cart.length === 0 ? (
              <S.EmptyContainer>
                  <img src={badFace} alt="bad face" />
                  <p>Você ainda não tem produtos no carrinho</p>
                  <Link to="/"><Button>Ir as compras!</Button></Link>
              </S.EmptyContainer>
          ) : (
              <>{cart.map((product) => <li>
                  <img src={product.urlImg} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>x{product.quantity}</p>
                  <span>R${product.price}</span>
                  <Button onClickCallBack={() => removeProduct(product.id)} >Remover</Button>
              </li>)}</>
          )}    </>}
      </S.UlContainer>
    </S.Container>
  );
};
export default ListCart;
