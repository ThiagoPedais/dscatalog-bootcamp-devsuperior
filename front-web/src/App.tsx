import React, { useState } from 'react';
import './core/assets/styles/custom.scss';
import './app.scss'
import Routes from './Routes';
import { AuthContext, AuthContextData } from './AuthContext';

const App = () => {

    const [authContextData, setAuthContextData] = useState<AuthContextData>({
        authenticated: false
    });

    return (
        <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
            <Routes />
        </AuthContext.Provider>
    )
}

export default App;