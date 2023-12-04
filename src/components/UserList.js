// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        // Fetch user names when the component mounts
        const fetchUserNames = async () => {
            try {
                const response = await axios.get('http://localhost:3001/getUsers');
                setUserNames(response.data);
            } catch (error) {
                console.error('Error fetching user names:', error);
            }
        };

        fetchUserNames();
    }, []); // Empty dependency array ensures the effect runs once when the component mounts

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {userNames.map((userName, index) => (
                    <li key={index}>{userName}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;