import { addProduct, removeProduct } from "./actions";
import { toast } from "react-toastify"

export const addProcutThunk = (productId) => (dispatch, getState) => {
    const { products } = getState();
    const { cart } = getState();
    const findProduct = products.find((product) => product.id === productId)
    const findOnCart = cart.find((product) => product.id === productId)
    if (findOnCart) {
        findOnCart.quantity++
        localStorage.setItem("cartProduct", JSON.stringify(cart))
        toast.success(`${findProduct.title} adicionado novamente com sucesso!`)
    } else {
        dispatch(addProduct(findProduct))
        toast.success(`${findProduct.title} adicionado com sucesso!`)
    }
}

export const removeProductThunk = (productId) => (dispatch, getState) => {
    const { cart } = getState();
    const findProduct = cart.find((product) => product.id === productId)
    const filteredList = cart.filter((product) => product.id !== productId)
    if (findProduct.quantity >= 2) {
        findProduct.quantity--
        dispatch(removeProduct(cart))
    } else {
        toast.success(`${findProduct.title} removido do carrinho com sucesso`)
        dispatch(removeProduct(filteredList))
    }
}