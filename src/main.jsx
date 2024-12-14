import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ShopContextProvider from './Context/ShopContext';

const container = ReactDOM.createRoot(document.getElementById('root'));
container.render(
    <React.StrictMode>
        <ShopContextProvider>
            <App />
        </ShopContextProvider>
    </React.StrictMode>
)