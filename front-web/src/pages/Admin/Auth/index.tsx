import { Route, Routes } from "react-router-dom";
import { ReactComponent as AuthImage } from "../../../core/assets/images/auth-image.svg";
const Auth = () => {
  return (
    <div className="auth-container">
        <div className="auth-banner-container">
            <h1>Divulgue seus produtos no DS Catalog</h1>
            <p>Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.</p>
            <AuthImage />
        </div>
        
        <div className="auth-form-container">
            <Routes>
                <Route path="/admin/auth/login" element={<h1>Card de Login</h1>}/>
                <Route path="/admin/auth/signup" element={<h1>Card de signup</h1>}/>
                <Route path="/admin/auth/recover" element={<h1>Card de recover</h1>}/>
            </Routes>
        </div>
        
    </div>
  )
}

export default Auth;