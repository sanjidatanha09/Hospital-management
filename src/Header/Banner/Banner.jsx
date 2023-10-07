import React from 'react';
import banner from '../../assets/All-img/banner.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div className="hero h-[600px] bg-slate-100">
                <div className="hero-content flex-col lg:flex-row-reverse  h-[600px] justify-between items-center">
                    <img src={banner} className="w-[50%] rounded-lg shadow-2xl" />
                    <div className='text-center lg:pl-10'>
                        <h1 className="text-2xl font-bold ">Medical Fair Bangladesh 2023</h1>
                        <p className="pt-5">Provide Comprehensive Quality Care</p>

                        <p className="py-6 w-[470px]">
                            Medical Fair BD is an Bangladeshi healthcare exhibition and conference that fosters and nurtures business relationships.
                            With representatives from more than 20 countries participating, Medical Fair BD provides an opportunity to position the brand among competitors and further increase the level of visibility.</p>

                        {/* Participation in the event promotes:

                        detecting trends and responding to market pulses,
                        learning about solutions for diverse healthcare needs,
                        gaining new knowledge,
                        learning about the latest digital technologies and new approaches shaping healthcare. */}

                        <button className="btn btn-primary  w-[150px] ">VIEW Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;