import React, { useState, useEffect } from 'react';;

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users data from the backend
        // getUsers().then(data => setUsers(data));
    }, []);

    const handleUpdateRole = (userId, role) => {
/*         updateUserRole(userId, role).then(updatedUser => {
            setUsers(users.map(user => (user.id === userId ? updatedUser : user)));
        }); */
    };

    const handleDeleteUser = (userId) => {
        // deleteUser(userId).then(() => {
        //     setUsers(users.filter(user => user.id !== userId));
        // });
    };

    return (
        <div>
            <h1>User Management</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - Role: {user.role}
                        <button onClick={() => handleUpdateRole(user.id, 'admin')}>Make Admin</button>
                        <button onClick={() => handleUpdateRole(user.id, 'service')}>Make Service</button>
                        <button onClick={() => handleUpdateRole(user.id, 'client')}>Make Client</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
