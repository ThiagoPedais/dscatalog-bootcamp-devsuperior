import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './style.scss';



const Admin = () => {
  return (
    <section className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="/admin/products" >
           
          </Route>
          <Route path="/admin/categories">
          </Route>
          <Route path="/admin/users">
          </Route>
        </Routes>
      </div>
    </section>
  )
}

export default Admin;