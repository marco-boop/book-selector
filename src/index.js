import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// For Hot Module Replacement (HMR) in development
// if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./routes/AppRoutes', () => {
//         // Reload the updated AppRoutes component
//         const NextAppRoutes = require('./routes/AppRoutes').default;
//         render(NextAppRoutes);
//     });
// }