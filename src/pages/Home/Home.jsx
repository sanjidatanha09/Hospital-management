/* eslint-disable no-unused-vars */
import React from 'react';


import Banner from '../../Header/Banner/Banner';
import Service from '../../Component/Service/Service';
import AttendFair from '../../Component/AttendFair/AttendFair';
import SpecialShow from '../../Component/SpecialShow/SpecialShow';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const servic = useLoaderData()
    // console.log(servic)
   
    return (
        <div >

            
            <Banner></Banner>
            
            <div >
                <div className='text-center my-10'>
                    <p className='text-black font-medium text-sm lg:text-xl pb-2'>Our Commitment Is To Provide Comprehensive Quality Care</p>
                    <p className='font-bold text-3xl lg:text-5xl  text-black'> Our Services</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        servic.map(servi => <Service key={servi.id} servic={servi}>
                            
                        </Service>)
                    }

                </div>
               
            </div>
            <AttendFair></AttendFair>
            <SpecialShow></SpecialShow>
            
            
           
        </div>
    );
};

export default Home;