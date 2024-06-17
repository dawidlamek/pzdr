import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <ul>
                {user ? (
                    <>
                        {user.role === 'admin' && <li><Link to="/admin">Admin Panel</Link></li>}
                        {user.role === 'service' && <li><Link to="/service">Service Panel</Link></li>}
                        {user.role === 'client' && <li><Link to="/client">Client Panel</Link></li>}
                        <li><Link to="/inventory">Inventory</Link></li>
                        <li><Link to="/calendar">Calendar</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><Link to="/users">User Management</Link></li>
                        <li><button onClick={logout}>Logout</button></li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
