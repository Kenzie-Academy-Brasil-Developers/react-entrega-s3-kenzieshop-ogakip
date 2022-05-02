import * as S from "./styles"
import Button from "../Button"
import cartIcon from "../../assets/img/shopping-cart.svg"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <S.Container>
                <S.LogoContainer>
                    <h1>Kenzie Tech</h1>
                    <Link to="/" ><Button>Página inicial</Button></Link>
                </S.LogoContainer>
            <Link to="/cart" ><Button>Seu carrinho <img src={cartIcon} alt="cart icon"/></Button></Link>
        </S.Container>
    )
}
export default Header