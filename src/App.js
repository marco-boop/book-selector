// src/App.js
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from './firebase';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookSelectorPage from './pages/BookSelectorPage';

// Create a context
const MyContext = React.createContext();

const initialState = { username: null };

// Create a provider component
const MyProvider = ({ children }) => {
    const [state, setState] = React.useState(initialState);

    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    );
};

const App = () => {
    // Use the context inside the App component
    const { state, setState } = React.useContext(MyContext);

    useEffect(() => {
        const auth = getAuth(firebaseApp);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setState({ user: user });
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, [setState]);

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage state={state} />} />
                <Route path="/book-selector" element={<BookSelectorPage />} />
            </Routes>
        </>
    );
};

// Wrap the entire application with the context provider
const MyApp = () => (
    <MyProvider>
        <App />
    </MyProvider>
);

export default MyApp;
