import * as S from "./styles"
import ListProducts from "../../components/ListProducts";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const { products } = useSelector(state => state)

  const listProducts = (category) => {
    return products.filter((product) => product.category === category)
  }

  return (
    <S.Container>
      <Header/>
      <ListProducts listCategory={listProducts("processadores")} category="processadores" />
      <ListProducts listCategory={listProducts("memorias")} category="memorias" />
      <ListProducts listCategory={listProducts("graficos")} category="graficos" />
      <ListProducts listCategory={listProducts("placas mae")} category="placas mae" />
      <ListProducts listCategory={listProducts("kits")} category="kits" />
      <ListProducts listCategory={listProducts("perifericos")} category="perifericos" />
      <ListProducts listCategory={listProducts("utilitarios")} category="utilitarios" />
      <ListProducts listCategory={listProducts("videogames")} category="videogames" />
      <ListProducts listCategory={listProducts("moveis")} category="moveis" />
      <ListProducts listCategory={listProducts("notebooks")} category="notebooks" />
      <ListProducts listCategory={listProducts("celulares")} category="celulares" />
      <ListProducts listCategory={listProducts("telas")} category="telas" />
      <ListProducts listCategory={listProducts("armazenamento")} category="armazenamento" />
      <ListProducts listCategory={listProducts("especial")} category="especiais" />
      <ListProducts listCategory={listProducts("fontes")} category="fontes" />
      <ListProducts listCategory={listProducts("jogos")} category="jogos" />
    </S.Container>
  );
};
export default Home;