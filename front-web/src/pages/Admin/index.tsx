import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../../core/components/PrivateRoute';

import Navbar from './Navbar';
import './style.scss';
import Users from './User';



const Admin = () => {  

  return (
    <section className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>          

          <Route path="products" element={<ProtectedRoute outlet={<h1>Product CRUD</h1>} />} />         
          <Route path="categories" element={<ProtectedRoute outlet={<h1>Category CRUD</h1>} />} />          
          <Route path="users" element={<ProtectedRoute outlet={<Users />} />} />

        </Routes>
      </div>
    </section>
  )
}

export default Admin;