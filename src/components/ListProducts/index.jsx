import { Link } from "react-router-dom";
import * as S from "./styles";
import ProductCard from "../ProductCard";
import Button from "../Button";

const ListProducts = ({ listCategory, category, full = null }) => {
  return (
    <S.Container>
      <S.UlContainer>
        <S.UlHeader>
          <h2>{category}</h2>
          {!full && (
            <>
              {listCategory.length >= 10 && (
                <Link to={`/category/${category}`}>
                  <Button>Ver todos</Button>
                </Link>
              )}
            </>
          )}
        </S.UlHeader>
        <S.UlBody>
          {full ? (
            <S.UlFull>
              {listCategory.map((product) => (
                <ProductCard
                  title={product.title}
                  image={product.urlImg}
                  description={product.description}
                  price={product.price}
                  id={product.id}
                  category={product.category}
                  key={product.id}
                  button="Adicionar"
                />
              ))}
            </S.UlFull>
          ) : (
            <S.UlHalf>
              {listCategory.length >= 9
                ? listCategory
                    .slice(0, 10)
                    .map((product) => (
                      <ProductCard
                        title={product.title}
                        image={product.urlImg}
                        description={product.description}
                        price={product.price}
                        id={product.id}
                        category={product.category}
                        key={product.id}
                        button="Adicionar"
                      />
                    ))
                : listCategory.map((product) => (
                    <ProductCard
                      title={product.title}
                      image={product.urlImg}
                      description={product.description}
                      price={product.price}
                      id={product.id}
                      category={product.category}
                      key={product.id}
                      button="Adicionar"
                    />
                  ))}
            </S.UlHalf>
          )}
        </S.UlBody>
      </S.UlContainer>
    </S.Container>
  );
};
export default ListProducts;
