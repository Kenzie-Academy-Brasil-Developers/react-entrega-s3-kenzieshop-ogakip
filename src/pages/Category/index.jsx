import * as S from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";

const Category = () => {
  const { category } = useParams();
  const { products } = useSelector((state) => state);
  const listProducts = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <S.Container>
      <Header />
      <ListProducts
        listCategory={listProducts(`${category}`)}
        category={category}
        full
      />
    </S.Container>
  );
};
export default Category;
