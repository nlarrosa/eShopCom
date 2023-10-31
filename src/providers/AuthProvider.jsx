import { useReducer } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { AuthReducer } from "../reducers/AuthReducer"
import { eShopApiUrl } from "../config/eShopApi"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { types } from "../types/types"

const initialState  = {
    user: null,
    isLogged: false,
    isLoading: true,
    errorMessage: ''
}


export const AuthProvider  = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer,  initialState);

    const login = async(email, password) =>  {
        try {

            const user = await eShopApiUrl.post('/auth/user/login', {
                email,
                password
            });

            await AsyncStorage.setItem('e-token', user.data.res.token);
    
            dispatch({
                type: types.auth.login,
                payload: {
                    user: user.data.res
                }
            });
            
        } catch (error) {
            dispatch({
                type: types.auth.error,
                payload:  {
                    errorMessage: error.response.data.msg
                }
            })
        }
    }


    const checkToken = async() => {
        try {
            const token = await AsyncStorage.getItem('e-token');
            if(!token){
                dispatch({
                    type: types.auth.logout
                });
            }
            
            const { data } = await eShopApiUrl.get('/auth/user/review/token');
            console.log(data.res)
            
            dispatch({
                type: types.auth.login,
                payload: {
                    user: data.res
                }
            });
            
        } catch (error) {
            return dispatch({
                type:types.auth.error,
            })
        }
    }

    return (
        <AuthContext.Provider value={{
            state,
            login,
            checkToken,
        }}

        >
            { children  }
        </AuthContext.Provider>
    )
}