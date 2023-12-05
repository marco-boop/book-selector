// src/App.js
import React from 'react';
import SignUp from './components/SignUp';
import CheckAuth from './components/CheckAuthState';
import SignOutButton from './components/SignOut';

const App = () => {
    CheckAuth
    return (
        <div>
            <h2>I am the App component</h2>
            <SignUp />
            {/* Other components or content */}
            <SignOutButton />
        </div>
    );
};

export default App;