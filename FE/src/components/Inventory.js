import React, { useState, useEffect } from 'react';
import { getInventory, addPart, updatePartQuantity } from '../services/api';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
    const [newPart, setNewPart] = useState({ name: '', quantity: 0 ,price: 0});

    useEffect(() => {
        // Fetch inventory data from the backend
        getInventory().then(data => setInventory(data));
    }, []);

    const handleAddPart = (e) => {
        e.preventDefault();
        addPart(newPart).then(part => {
            setInventory([...inventory, part]);
            setNewPart({ name: '', quantity: 0 ,price: 0});
        });
    };

    const handleUpdateQuantity = (partId, quantity) => {
        updatePartQuantity(partId, quantity).then(updatedPart => {
            setInventory(inventory.map(part => (part.id === partId ? updatedPart : part)));
        });
    };

    return (
        <div>
            <h1>Inventory</h1>
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
                        type="float"
                        value={newPart.price}
                        onChange={(e) => setNewPart({ ...newPart, price: Number(e.target.value) })}
                    />
                </label>
                <button type="submit">Add Part</button>
            </form>
            <ul>
                {inventory.map(part => (
                    <li key={part.id}>
                        {part.name} - Quantity: {part.quantity}
                        <button onClick={() => handleUpdateQuantity(part.id, part.quantity + 1)}>+</button>
                        <button onClick={() => handleUpdateQuantity(part.id, part.quantity - 1)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;
