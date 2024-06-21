import React, { useState, useEffect } from 'react';
import { getInventory, addPart, updatePartQuantity } from '../services/api';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
    const [newPart, setNewPart] = useState({ name: '', quantity: 0 ,price: 0});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        getInventory()
            .then(data => setInventory(data))
            .catch(err => setError(err.message));
    }, []);

    const handleAddPart = async (e) => {
        e.preventDefault();
        try {
            const part = await addPart(newPart);
            setInventory([...inventory, part]);
            setNewPart({ name: '', quantity: 0 ,price: 0});
            setError(null);
            setSuccess('Part added successfully');
        } catch (err) {
            setSuccess(null);
            setError(err.message);
        }
    };

    const handleUpdateQuantity = async (partId, quantity) => {
        try {
            const updatedPart = await updatePartQuantity(partId, quantity);
            setInventory(inventory.map(part => (part.id === partId ? updatedPart : part)));
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Inventory</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleAddPart}>
                <label>
                    Part Name:
                    <input
                        type="text"
                        value={newPart.name}
                        onChange={(e) => setNewPart({ ...newPart, name: e.target.value })}
                    />
                </label>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={newPart.quantity}
                        onChange={(e) => setNewPart({ ...newPart, quantity: Number(e.target.value) })}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={newPart.price}
                        onChange={(e) => setNewPart({ ...newPart, price: Number(e.target.value) })}
                    />
                </label>
                <button type="submit">Add Part</button>
            </form>
            <ul>
                {inventory.map(part => (
                    <li key={part.id}>
                        {part.name} - Quantity: {part.quantity} - Price: {part.price}
                        <button onClick={() => handleUpdateQuantity(part.id, part.quantity + 1)}>+</button>
                        <button onClick={() => handleUpdateQuantity(part.id, part.quantity - 1)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;
