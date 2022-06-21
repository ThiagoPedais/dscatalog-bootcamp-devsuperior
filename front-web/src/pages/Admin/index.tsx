import Navbar from './Navbar';
import './style.scss';



const Admin = () => {
  return (
    <section className="admin-container">
      <Navbar />
      <div className="admin-content">
        <h1>Conteudo</h1>
      </div>
    </section>
  )
}

export default Admin;