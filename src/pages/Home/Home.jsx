/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import GoogleLog from '../../GoogleLog/GoogleLog';


const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <h2 className="text-3xl">This is home</h2>
            <GoogleLog></GoogleLog>
        </div>
    );
};

export default Home;