// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookSelectorPage from '../pages/BookSelectorPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/book-selector" element={<BookSelectorPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
