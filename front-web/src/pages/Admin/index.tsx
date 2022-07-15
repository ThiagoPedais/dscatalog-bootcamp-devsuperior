import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../../core/components/PrivateRoute';

import Navbar from './Navbar';
import Products from './Products';
import './style.scss';
import Users from './Users';



const Admin = () => {  

  return (
    <section className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>          

          <Route path="products/*" element={<ProtectedRoute outlet={<Products />} />} />         
          <Route path="categories" element={<ProtectedRoute outlet={<h1>Category CRUD</h1>} />} />          
          <Route path="users" element={<ProtectedRoute outlet={<Users />} roles={['ROLE_ADMIN']} />} />

        </Routes>
      </div>
    </section>
  )
} 

export default Admin;