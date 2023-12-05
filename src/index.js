// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRoutes from './routes/AppRoutes';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
        <AppRoutes />
    </React.StrictMode>
);

// For Hot Module Replacement (HMR) in development
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./routes/AppRoutes', () => {
        // Reload the updated AppRoutes component
        const NextAppRoutes = require('./routes/AppRoutes').default;
        ReactDOM.createRoot(root).render(
            <React.StrictMode>
                <NextAppRoutes />
            </React.StrictMode>
        );
    });
}
