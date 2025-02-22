import httpClient from "../httpClient.ts";
import Result from "../types/Result.ts";
import { jwtDecode } from "jwt-decode";


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

    static isInRole(role: string){
        if(!this.tokenExists())
            return false

        const tokenText = this.getToken();
        const token:any = jwtDecode(tokenText!);
        const roleInToken = token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        return roleInToken === role
    }
}
