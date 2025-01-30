import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

httpClient.interceptors.request.use(config=>{
    console.log('Request: ', config.method, config.url);
    return config;
});

export default httpClient;
