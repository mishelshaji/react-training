import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
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
import ContextDemo from "./pages/public/contextHook/ContextDemo.tsx";
import UseMemoDemo from "./pages/public/useMemoHook/UseMemoDemo.tsx";
import {Provider} from "react-redux";
import {store} from "./state/store.ts";
import App from "./App.tsx";
import Todo from "./pages/public/Todo.tsx";
import Demo from "./pages/public/Demo.tsx";
import Cleanup from "./pages/public/Cleanup.tsx";
import Colors from "./pages/tailwind/Colors.tsx";
import Effects from "./pages/tailwind/Effects.tsx";
import Border from "./pages/tailwind/Border.tsx";
import Roundness from "./pages/tailwind/Roundness.tsx";
import HeightAndWidth from "./pages/tailwind/HeightAndWidth.tsx";
import Grid from "./pages/tailwind/Grid.tsx";
import Responsive from "./pages/tailwind/Responsive.tsx";

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
            <ToastContainer/>
            <Routes>
                <Route path={'/'} element={ <PublicLayout/> }>
                    <Route path={''} element={ <Home/> }></Route>
                    <Route path={'login'} element={ <Login/> }></Route>
                    <Route path={'register'} element={ <Register/> }></Route>
                    <Route path={'todo'} element={ <Todo/> }></Route>
                    <Route path={'demo'} element={ <Demo/> }></Route>
                    <Route path={'cleanup'} element={ <Cleanup/> }></Route>
                </Route>

                <Route path={'/user'} element={ <UserLayout /> }>
                    <Route path={'home'} element={ <UserHome/> }></Route>
                </Route>

                <Route path={'/admin'} element={<AdminLayout />}>
                    <Route path={'home'} element={ <AdminHome/> }></Route>
                </Route>

                <Route path={'/tw'} element={<PublicLayout />}>
                    <Route path={'colors'} element={ <Colors/> }></Route>
                    <Route path={'effects'} element={ <Effects/> }></Route>
                    <Route path={'border'} element={ <Border/> }></Route>
                    <Route path={'roundness'} element={ <Roundness/> }></Route>
                    <Route path={'hw'} element={ <HeightAndWidth/> }></Route>
                    <Route path={'grid'} element={ <Grid/> }></Route>
                    <Route path={'responsive'} element={ <Responsive/> }></Route>
                </Route>

                <Route path="/context" element={<ContextDemo/>}/>
                <Route path="/memo" element={<UseMemoDemo/>}/>
                <Route path="/store" element={<App/>}/>

                <Route path={'*'} element={<Error404/>}></Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    // </StrictMode>,
)
