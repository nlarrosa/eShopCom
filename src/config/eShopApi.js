import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";



const urlApi = 'http://192.168.0.48:3031/api';

export const eShopApiUrl = axios.create({
    baseURL: urlApi,
    timeout: 120000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':  '*',
    }
});

eShopApiUrl.interceptors.request.use(

    async(config) => {
        const token = await AsyncStorage.getItem('e-token');
        if(token){
            config.headers['x-token-data'] = token;
        }

        return config;
    }
)

