import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import App from './App';
import OrderList from './pages/OrderList/OrderList';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';




// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            
            <Route path="/OrderList" element={<OrderList />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            
        </Routes>
    </BrowserRouter>
   
);
