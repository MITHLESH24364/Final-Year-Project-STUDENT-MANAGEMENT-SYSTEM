// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="content-layout " >
                <Sidebar />
                <div className="main-content" style={{ marginBottom: '5%' }}>
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
