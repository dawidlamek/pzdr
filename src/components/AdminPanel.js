import React, { useState, useEffect } from 'react';
import UserManagement from './UserManagement';
import { getMargins, updateMargin } from '../services/api';

const AdminPanel = () => {
    const [margins, setMargins] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [newMargin, setNewMargin] = useState('');

    useEffect(() => {
        // Fetch margins data from the backend
        getMargins().then(data => setMargins(data));
    }, []);

    const handleUpdateMargin = (e) => {
        e.preventDefault();
        updateMargin(selectedCategory, newMargin).then(updatedMargin => {
            setMargins(margins.map(margin =>
                margin.category === selectedCategory ? updatedMargin : margin
            ));
            setSelectedCategory('');
            setNewMargin('');
        });
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <h2>Manage Users</h2>
            <UserManagement />

            <h2>Manage Margins</h2>
            <form onSubmit={handleUpdateMargin}>
                <label>
                    Category:
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        {margins.map(margin => (
                            <option key={margin.category} value={margin.category}>
                                {margin.category}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    New Margin:
                    <input
                        type="number"
                        value={newMargin}
                        onChange={(e) => setNewMargin(e.target.value)}
                    />
                </label>
                <button type="submit">Update Margin</button>
            </form>

            <h2>Current Margins</h2>
            <ul>
                {margins.map(margin => (
                    <li key={margin.category}>
                        {margin.category}: {margin.margin}%
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
