import { ADD_PRODUCT } from "./actionTypes"
import { REMOVE_PRODUCT } from "./actionTypes"

export const addProduct = (add) => {
    return {
        type: ADD_PRODUCT,
        add,
    }
}

export const removeProduct = (newList) => {
    return {
        type: REMOVE_PRODUCT,
        newList,
    }
}