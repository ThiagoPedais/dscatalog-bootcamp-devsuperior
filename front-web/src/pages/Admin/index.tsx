import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './style.scss';
import Users from './User';



const Admin = () => {
  return (
    <section className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="products" element={<h1>Product CRUD</h1>}>
           
          </Route>
          <Route path="categories" element={<h1>Category CRUD</h1>}>
          </Route>
          <Route path="users" element={<Users />}>
          </Route>
        </Routes>
      </div>
    </section>
  )
}

export default Admin;