import axios from 'axios';
import AuthService from "./authService.ts";

const httpClient = axios.create({
    baseURL: 'https://localhost:44377/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

httpClient.interceptors.request.use(config=>{
    if(AuthService.tokenExists()){
        config.headers!.Authorization = 'Bearer ' + AuthService.getToken();
    }
    return config;
});

export default httpClient;
