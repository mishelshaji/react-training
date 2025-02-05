import httpClient from "../httpClient.ts";
import Result from "../types/Result.ts";

export default class AuthService{

    static authenticate(email:string, password:string){
        return httpClient.post<Result<string>>('/authentication/login', {email, password});
    }

    static setToken(token:string){
        localStorage.setItem('token', token);
        console.log('Token saved.');
    }

    static getToken(){
        return localStorage.getItem('token');
    }

    static tokenExists(){
        return localStorage.getItem('token') !== null;
    }
}
