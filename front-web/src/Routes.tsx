import React from 'react';
import { Navigate } from 'react-router-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import NavBar from './core/components/NavBar';
import Admin from './pages/Admin';
import Auth from './pages/Admin/Auth';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export default function RoutesSystem() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Catalog />} />
                <Route path="/products/:productId" element={<ProductDetails />} />

                <Route path="/admin/auth/" element={<Navigate to="/admin/auth/login" replace={true} />} />
                <Route path="/admin/auth/*" element={<Auth />} />

                <Route path="/admin/" element={<Navigate to="/admin/products" replace={true} />} />
                <Route path="/admin/*" element={<Admin />} />

            </Routes>
        </BrowserRouter>
    )
}
