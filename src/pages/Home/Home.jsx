/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import GoogleLog from '../../GoogleLog/GoogleLog';
import Banner from '../../Header/Banner/Banner';
import Service from '../../Component/Service/Service';
import AttendFair from '../../Component/AttendFair/AttendFair';
import SpecialShow from '../../Component/SpecialShow/SpecialShow';


const Home = () => {
    return (
        <div>

            
            <Banner></Banner>
            <Service></Service>
            <AttendFair></AttendFair>
            <SpecialShow></SpecialShow>
            
            <GoogleLog></GoogleLog>
           
        </div>
    );
};

export default Home;