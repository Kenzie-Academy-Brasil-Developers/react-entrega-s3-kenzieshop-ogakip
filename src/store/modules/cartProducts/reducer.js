import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes"

const localCart = JSON.parse(localStorage.getItem("cartProduct"))

const cartReducer = (state = localCart, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const { add } = action;
            const newProduct = {
                ...add,
                quantity: 1
            }
            localStorage.setItem("cartProduct", JSON.stringify([...state, newProduct]))
            return [...state, newProduct]
            break;

        case REMOVE_PRODUCT:
            const { newList } = action;
            localStorage.setItem("cartProduct", JSON.stringify(newList))
            return [...newList]

        default:
            return state
    }
}
export default cartReducer