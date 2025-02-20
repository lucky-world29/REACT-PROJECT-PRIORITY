
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import OtpVerification from './components/OtpVerification';
import AddProduct from './components/AddProduct';
import AddCategory from './components/AddCategory';
import ProductList from './components/ProductList';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/verify-otp" element={<OtpVerification />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <div>Welcome to the Dashboard!</div>
                        </ProtectedRoute>
                    }
                />
                <Route path="/add-category" element={<AddCategory />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/ view-product" element={<ProductList />} />
            </Routes>
        </Router>
    );
};

export default App;
