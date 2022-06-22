import React from 'react';
import { Navigate } from 'react-router-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import NavBar from './core/components/NavBar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export default function RoutesSystem() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Catalog />} >
                    <Route path=":productId" element={<ProductDetails />} />
                </Route>
                <Route path="/admin/" element={<Navigate  to="/admin/products" replace={true} />} /> 

                <Route path="/admin/*" element={<Admin />} >

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
