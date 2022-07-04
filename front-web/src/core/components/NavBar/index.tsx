import { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss'
import 'bootstrap/js/src/collapse.js'
import { getTokenData, isAuthenticated, removeAuthData } from '../../../util/requests';
import history from '../../../util/history';
import { AuthContext } from '../../../AuthContext';




const Navabar = () => {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {

        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData()
            });
        }
        else {
            setAuthContextData({
                authenticated: false,
                tokenData: getTokenData()
            });
        }
    }, [setAuthContextData])

    const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthContextData({
            authenticated: false,
            tokenData: getTokenData()
        });
        history.replace('/');
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid">
                <Link to="/" className="nav-logo-text">
                    <h4>DS Catalog</h4>
                </Link>

                <button
                    className="navbar-toggler iconNav"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dscatalog-navbar"
                    aria-controls="dscatalog-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>

            <div className="collapse navbar-collapse" id="dscatalog-navbar">
                <ul className="navbar-nav offset-md-2 main-menu">
                    <li>
                        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)' })}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" style={({ isActive }) => ({ color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)' })}>Catálogo</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" style={({ isActive }) => ({ color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)' })}>Admin</NavLink>
                    </li>
                </ul>

            </div>
            <div className='nav-login-logout'>
                {
                    authContextData.authenticated ? (
                        <>
                            <span className='nav-username'>{authContextData.tokenData?.user_name}</span>
                            <Link to="#logout" onClick={handleLogoutClick}>LOGOUT</Link>
                        </>
                    ) : (
                        <Link to="/admin/auth">LOGIN</Link>
                    )
                }
            </div>

        </nav>
    )
}


export default Navabar