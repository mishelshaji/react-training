import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css'
import PublicLayout from "./pages/public/PublicLayout.tsx";
import UserLayout from "./pages/user/UserLayouut.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import Error404 from "./pages/shared/Error404.tsx";
import Home from "./pages/public/Home.tsx";
import Login from "./pages/public/Login.tsx";
import Register from "./pages/public/Register.tsx";
import UserHome from "./pages/user/UserHome.tsx";
import AdminHome from "./pages/admin/AdminHome.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={ <PublicLayout/> }>
                    <Route path={''} element={ <Home/> }></Route>
                    <Route path={'login'} element={ <Login/> }></Route>
                    <Route path={'register'} element={ <Register/> }></Route>
                </Route>

                <Route path={'/user'} element={ <UserLayout /> }>
                    <Route path={'home'} element={ <UserHome/> }></Route>
                </Route>

                <Route path={'/admin'} element={<AdminLayout />}>
                    <Route path={'home'} element={ <AdminHome/> }></Route>
                </Route>

                <Route path={'*'} element={<Error404/>}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
