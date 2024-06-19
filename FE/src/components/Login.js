import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// Przyk�adowi u�ytkownicy
const users = [
    { username: 'admin1', password: 'password1', role: 'admin' },
    { username: 'service1', password: 'password2', role: 'service' },
    { username: 'service2', password: 'password3', role: 'service' },
    { username: 'client1', password: 'password4', role: 'client' },
    { username: 'client2', password: 'password5', role: 'client' },
];

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Sprawdzenie danych logowania
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            login({ username: user.username, role: user.role });
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
