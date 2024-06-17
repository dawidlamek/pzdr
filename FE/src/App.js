import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import ServicePanel from './components/ServicePanel';
import ClientPanel from './components/ClientPanel';
import Inventory from './components/Inventory';
import Calendar from './components/Calendar';
import OrderProcess from './components/OrderProcess';
import UserManagement from './components/UserManagement';
import { AuthContext } from './contexts/AuthContext';

function App() {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                {user && user.role === 'admin' && (
                    <Route path="/admin" element={<AdminPanel />} />
                )}
                {user && user.role === 'service' && (
                    <Route path="/service" element={<ServicePanel />} />
                )}
                {user && user.role === 'client' && (
                    <Route path="/client" element={<ClientPanel />} />
                )}
                {user && (
                    <>
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/orders" element={<OrderProcess />} />
                        <Route path="/users" element={<UserManagement />} />
                    </>
                )}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
