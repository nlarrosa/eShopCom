import React, { useContext, useReducer } from 'react'
import { CartReducer } from '../reducers/CartReducer'
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { types } from '../types/types';


const initialState = {
    isLoading: true,
    cart: [],
    msg: ''
}


export const CartProvider = ({ children }) => {
  
    const [  state, disptach ] = useReducer(CartReducer,  initialState);
    const { state: userData } = useContext(AuthContext);


    const addCart = async(productData) =>  {
        
        const addProduct = [
            ...state.cart,
            {
                id: productData.product.id,
                product: productData.product.name,
                price: productData.product.price,
                waist: productData.waist,
                qty: productData.qty,
                category: productData.product.categories.category
            }
        ]

        // await AsyncStorage.setItem('cart', JSON.stringify({
        //     userId: 4,
        //     products: addProduct 
        // }));

        disptach({
            type: types.cart.addCart,
            payload: {
                cart: addProduct
            }
        })

    }
  
  
    return (
        <CartContext.Provider value={{
            state,
            addCart,
        }}>
            { children }
        </CartContext.Provider>

  )
}
