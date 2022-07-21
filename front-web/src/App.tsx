import 'react-toastify/dist/ReactToastify.css'
import './core/assets/styles/custom.scss';
import './app.scss'
import Routes from './Routes';

import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { AuthContext, AuthContextData } from './AuthContext';

const App = () => {

    const [authContextData, setAuthContextData] = useState<AuthContextData>({
        authenticated: false
    });

    return (
        <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
            <Routes />
            <ToastContainer />
        </AuthContext.Provider>
    )
}

export default App;