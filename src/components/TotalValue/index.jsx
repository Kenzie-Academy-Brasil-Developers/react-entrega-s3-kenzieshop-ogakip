import * as S from "./styles"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"

const TotalValue = () => {
    const { cart } = useSelector(state => state)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(cart.reduce((curr, next) => curr + (next.price * next.quantity), 0))
    }, [cart])

    return (
        <S.Container>
            Preço total: <span>R$ {totalPrice}</span>
        </S.Container>
    )
}
export default TotalValue