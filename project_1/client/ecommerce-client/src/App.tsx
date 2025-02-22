import {useEffect} from "react";
import AuthService from "./common/services/authService.ts";

function App() {
    useEffect(() => {
        AuthService.isInRole("");
    }, []);
    return (
        <>

        </>
    )
}

export default App
