import React, { useReducer } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { eShopApiUrl } from '../config/eShopApi';
import { types } from '../types/types';
import { ProductReducer } from '../reducers/ProductReducer';

const initialState = {
    isLoading: true,
    errorMessage: '',
    products: null,
}

export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);


    const getProducts = async() => {

        try {
            const products = await eShopApiUrl.get('/products?limit=10&page=1');

            if(!products){
                dispatch({
                    type: types.products.error,
                    payload: {
                        errorMessage: 'No existen Productos activos'
                    }
                })
            }
            
            dispatch({
                type: types.products.getProducts,
                payload:  {
                    products:products.data.res,
                }
            })

            
        } catch (error) {
            dispatch({
                type: types.products.error,
                payload:  {
                    errorMessage: error.response.data.msg
                }
            })
        }
    }


    return (
        <ProductContext.Provider value={{
            state,
            getProducts,
        }}>
            { children}
        </ProductContext.Provider>
  )
}
