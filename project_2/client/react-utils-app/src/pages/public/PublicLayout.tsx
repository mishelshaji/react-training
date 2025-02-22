import {Outlet} from "react-router-dom";
import PublicNavbar from "./shared/PublicNavbar.tsx";

function PublicLayout(){
    return (
        <>
            <PublicNavbar/>
            <Outlet/>
        </>
    )
}

export default PublicLayout
