import React from 'react';

const AttendFair = () => {
    return (
        <div>
            <div className='text-center my-16'>
                <h1 className='text-2xl lg:text-5xl font-bold text-black'>5 reasons to attend MEDICAL FAIR BANGLADESH</h1>
            </div>
            <div className='' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="border lg:w-full card card-side bg-base-100 shadow-xl mt-5 grid lg:grid-cols-2 ">


                    <div className="card-body  border " >
                        <h2 className="card-title lg:text-3xl font-bold">Business</h2>
                        <p className='font-medium lg:text-xl'>MEDICAL FAIR BANGLADESH is India’s no. 1 exhibition and conference for healthcare, which act as a platform where connections are made and business relationships are nurtured.</p>

                    </div>
                    <div className="card-body  border">
                        <h2 className="card-title lg:text-3xl font-bold">Positioning</h2>
                        <p className='font-medium lg:text-xl'>With participation from over 20 countries, MEDICAL FAIR BANGLADESH provides an opportunity to position your brand among competitors and further increase your level of visibility.</p>

                    </div>
                </div>


                <div className='grid lg:grid-cols-3'>
                    <div className="card-body  border">
                        <h2 className="card-title lg:text-3xl font-bold">Trends</h2>
                        <p className='font-medium lg:text-xl'>MEDICAL FAIR INDIA is well known for its ability to detect trends and respond to market impulse.</p>

                    </div>
                    <div className="card-body  border">
                        <h2 className="card-title lg:text-3xl font-bold">Solutions</h2>
                        <p className='font-medium lg:text-xl'>Find diverse solutions to your diverse healthcare needs.</p>

                    </div>
                    <div className="card-body  border">
                        <h2 className="card-title lg:text-3xl font-bold">Innovations</h2>
                        <p className='font-medium lg:text-xl'>Explore how the latest digital technologies and new approaches shaping healthcare.</p>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AttendFair;