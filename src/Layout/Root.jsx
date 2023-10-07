/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Header/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
            
            
        </div>
        
    );
};

export default Root;