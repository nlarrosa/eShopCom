import { types } from "../types/types"




export const CartReducer =  (state={}, action) => {

    switch (action.type) {

        case types.cart.addCart:
            return {
                ...state,
                isLoading:  false,
                cart: action.payload.cart
            }

        case types.cart.removeCart:
            return {
                ...state,
                isLoading:  false,
                cart: []
            }
        
        case types.cart.msgCart:
            return {
                ...state,
                isLoading: false,
                msg: action.payload.msg
            }
    
        default:
            return state
    }
}