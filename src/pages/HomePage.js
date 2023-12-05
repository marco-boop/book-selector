// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
// import SignUp from '../components/SignUp';

const HomePage = () => {
    return (
        <div>
            <h1>The Glottal Stop</h1>
            {/* <SignUp /> */}
            <p>Welcome to your app!</p>
            <Link to="/book-selector">Go to Book Selector</Link>
        </div>
    );
};

export default HomePage;
