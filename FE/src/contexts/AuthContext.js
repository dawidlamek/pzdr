import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Assume we have a function to check the user session
        const fetchUser = async () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (userData) {
                setUser(userData);
            }
        };
        fetchUser();
    }, []);

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
