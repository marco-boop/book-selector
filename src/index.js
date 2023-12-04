// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserForm from './components/UserForm';
import UserList from './components/UserList';


const root = document.getElementById('root');

const renderApp = () => {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
            <UserList />
            <UserForm />
        </React.StrictMode>
    );
};

renderApp();

// For Hot Module Replacement (HMR) in development
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App', () => {
        // Reload the updated App component
        renderApp();
    });
}
