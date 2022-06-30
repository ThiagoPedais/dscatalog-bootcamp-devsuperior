import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import { Navigate } from 'react-router-dom';
import {
    Router,
    Routes,
    Route,
} from 'react-router-dom';
import NavBar from './core/components/NavBar';
import Admin from './pages/Admin';
import Auth from './pages/Admin/Auth';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import history from './util/history';

export default function RoutesSystem() {
    return (
        <HistoryRouter history={history}>
            <NavBar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Catalog />} />
                <Route path="/products/:productId" element={<ProductDetails />} />

                <Route path="/admin/auth/" element={<Navigate to="/admin/auth/login" replace={true} />} ></Route>
                <Route path="/admin/auth/*" element={<Auth />} ></Route>

                <Route path="/admin/" element={<Navigate to="/admin/products" replace={true} />} />
                <Route path="/admin/*" element={<Admin />} />

            </Routes>
        </HistoryRouter>
    )
}
