import AuthService from "../services/authService.ts";
import {redirect} from "react-router";

export const isAdminRoute = () => {
    if(AuthService.tokenExists()){
        return redirect('/');
    }
    return redirect('/');
}
