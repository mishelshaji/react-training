import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import About from "./pages/About.tsx";
import Layout from "./pages/Layout.tsx";
import ListCategory from "./pages/admin/ListCategory.tsx";
import CreateCategory from "./pages/admin/CreateCategory.tsx";
import ListProduct from "./pages/admin/ListProduct.tsx";
import CreateProduct from "./pages/admin/CreateProduct.tsx";
import Login from "./pages/Login.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<App/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/admin/category" element={<ListCategory/>}></Route>
                <Route path="/admin/category/create" element={<CreateCategory/>}></Route>
                <Route path="/admin/category/edit/:id" element={<CreateCategory/>}></Route>
                <Route path="/admin/product" element={<ListProduct/>}></Route>
                <Route path="/admin/product/create" element={<CreateProduct/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
