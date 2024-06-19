import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    useEffect(() => {
        console.log('User:', user); // Log the user object to check its structure
    }, [user]);

    return (
        <nav>
            <ul>
                {user ? (
                    <>
                        {user.role === 1 && <li><Link to="/admin">Admin Panel</Link></li>}
                        {user.role === 2 && <li><Link to="/service">Service Panel</Link></li>}
                        {user.role === 3 && <li><Link to="/client">Client Panel</Link></li>}
                        <li><Link to="/inventory">Inventory</Link></li>
                        <li><Link to="/calendar">Calendar</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><Link to="/users">User Management</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
