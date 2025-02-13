import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import About from "./pages/About.tsx";
import Layout from "./pages/Layout.tsx";
import ListCategory from "./pages/admin/category/ListCategory.tsx";
import CreateCategory from "./pages/admin/category/CreateCategory.tsx";
import ListProduct from "./pages/admin/product/ListProduct.tsx";
import CreateProduct from "./pages/admin/product/CreateProduct.tsx";
import Login from "./pages/Login.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import CreateTag from "./pages/admin/tag/CreateTag.tsx";
import Error404 from "./pages/errors/Error404.tsx";
import ListTag from "./pages/admin/tag/ListTag.tsx";
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastContainer/>
        <BrowserRouter>
            <Routes>
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path="category" element={<ListCategory />} />
                    <Route path="category/create" element={<CreateCategory />} />
                    <Route path="category/edit/:id" element={<CreateCategory />} />
                    <Route path="tag" element={<ListTag />} />
                    <Route path="tag/create" element={<CreateTag />} />
                    <Route path="tag/edit/:id" element={<CreateTag />} />
                    <Route path="product" element={<ListProduct />} />
                    <Route path="product/create" element={<CreateProduct />} />
                </Route>

                {/* General Routes */}
                <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                {/* Error Routes */}
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
