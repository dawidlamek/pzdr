const API_URL = 'http://localhost:8080';

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include' // Ensure credentials are included
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return await response.json();
};

export const getInventory = async () => {
    const response = await fetch(`${API_URL}/inventory`, {
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch inventory');
    }

    return await response.json();
};

export const addPart = async (part) => {
    const response = await fetch(`${API_URL}/inventory`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(part),
        credentials: 'include' // Include credentials in the request
    });

    if (!response.ok) {
        throw new Error('Failed to add part');
    }

    return await response.json();
};

export const updatePartQuantity = async (partId, quantity) => {
    const response = await fetch(`${API_URL}/inventory/${partId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
        credentials: 'include' // Include credentials in the request
    });

    if (!response.ok) {
        throw new Error('Failed to update part quantity');
    }

    return await response.json();
};

export const getAppointments = async () => {
    const response = await fetch(`${API_URL}/appointments`, {
        credentials: 'include' // Ensure credentials are included
    });
    if (!response.ok) {
        throw new Error('Failed to fetch appointments');
    }
    return await response.json();
};

export const scheduleAppointment = async (appointment) => {
    const response = await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment),
        credentials: 'include' // Ensure credentials are included
    });
    if (!response.ok) {
        throw new Error('Failed to schedule appointment');
    }
    return await response.json();
};

/// WORKING

export const getServiceOrders = async () => {
    const response = await fetch(`${API_URL}/service/orders`);
    return await response.json();
};

export const updateOrderStatus = async (orderId, status) => {
    const response = await fetch(`${API_URL}/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
    });
    return await response.json();
};

export const getClientOrders = async () => {
    const response = await fetch(`${API_URL}/client/orders`);
    return await response.json();
};

export const getInvoice = async (orderId) => {
    const response = await fetch(`${API_URL}/orders/${orderId}/invoice`);
    return await response.json();
};

export const getOrders = async () => {
    const response = await fetch(`${API_URL}/orders`);
    return await response.json();
};

export const getUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    return await response.json();
};

export const updateUserRole = async (userId, role) => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role }),
    });
    return await response.json();
};

export const deleteUser = async (userId) => {
    await fetch(`${API_URL}/users/${userId}`, { method: 'DELETE' });
};

// Dodajemy brakuj�ce funkcje
export const getMargins = async () => {
    const response = await fetch(`${API_URL}/margins`);
    return await response.json();
};

export const updateMargin = async (category, margin) => {
    const response = await fetch(`${API_URL}/margins/${category}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ margin }),
    });
    return await response.json();
};
