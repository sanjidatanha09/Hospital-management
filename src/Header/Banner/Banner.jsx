import React from 'react';
import banner from '../../assets/All-img/banner.jpg'

const Banner = () => {
    return (
        <div className='' >
            <div className="hero h-[600px] bg-slate-100">
                <div className="hero-content flex-col lg:flex-row-reverse  h-[600px] justify-between items-center">
                    <img src={banner} className="lg:w-[50%] h-full rounded-xl lg:rounded-full shadow-2xl" />
                    <div className='text-center lg:pl-10' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h1 className="text-xl lg:text-3xl font-bold ">Medical Fair Bangladesh 2023</h1>
                        <p className="pt-5 lg:text-xl font-medium">Provide Comprehensive Quality Care</p>

                        <p className="py-6 lg:w-[470px] text-sm font-medium">
                            Medical Fair BD is an Bangladeshi healthcare exhibition and conference that fosters and nurtures business relationships.
                            With representatives from more than 20 countries participating.</p>

                        {/* Participation in the event promotes:

                        detecting trends and responding to market pulses,
                        learning about solutions for diverse healthcare needs,
                        gaining new knowledge,
                        learning about the latest digital technologies and new approaches shaping healthcare. */}

                        <button className="btn btn-neutral  w-[150px] ">VIEW Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;