import Navbar from "../components/Navbar.tsx";
import {Outlet} from "react-router";

function Layout(){
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default Layout
