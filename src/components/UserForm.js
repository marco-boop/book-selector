// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [userName, setUserName] = useState('');

    const handleInputChange = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to add a new user
            const response = await axios.post('http://localhost:3001/users', {
                name: userName,
            });

            console.log('New user added:', response.data);
            // Optionally, you can update the UI or perform other actions after a successful submission
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a new user to the table here:</h3>
            <label>
                User Name:
                <input type="text" value={userName} onChange={handleInputChange} />
            </label>
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;