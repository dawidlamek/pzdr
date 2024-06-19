const API_URL = 'http://localhost:8080';

// Funkcje do komunikacji z backendem

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

export const scheduleAppointment = async (appointment) => {
    const response = await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment),
    });
    return await response.json();
};

export const getInvoice = async (orderId) => {
    const response = await fetch(`${API_URL}/orders/${orderId}/invoice`);
    return await response.json();
};

export const getInventory = async () => {
    try {
        const response = await fetch(`${API_URL}/inventory`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching inventory:', error);
        throw error;
    }
};

export const addPart = async (part) => {
    const response = await fetch(`${API_URL}/inventory`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(part),
    });
    return await response.json();
};

export const updatePartQuantity = async (partId, quantity) => {
    const response = await fetch(`${API_URL}/inventory/${partId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity }),
    });
    return await response.json();
};

export const getAppointments = async () => {
    const response = await fetch(`${API_URL}/appointments`);
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
