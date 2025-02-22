class AuthService{
    static setToken(token:string){
        localStorage.setItem('token', token);
    }

    static getToken(){
        return localStorage.getItem('token');
    }

    static tokenExists(){
        return localStorage.getItem('token') !== null;
    }

    static removeToken(){
        localStorage.removeItem('token');
    }
}

export default AuthService;
