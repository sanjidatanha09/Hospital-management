import React from 'react';

const AttendFair = () => {
    return (
        <div>
            <div className='text-center mt-10'>
                <h1 className='text-5xl font-bold'>5 reasons to attend MEDICAL FAIR BANGLADESH</h1>
            </div>
            <div>
                <div className="border w-full card card-side bg-base-100 shadow-xl mt-5">


                    <div className="card-body w-[50%] border">
                        <h2 className="card-title">Business</h2>
                        <p>MEDICAL FAIR BANGLADESH is India’s no. 1 exhibition and conference for healthcare, which act as a platform where connections are made and business relationships are nurtured.</p>

                    </div>
                    <div className="card-body w-[50%] border">
                        <h2 className="card-title">Positioning</h2>
                        <p>With participation from over 20 countries, MEDICAL FAIR BANGLADESH provides an opportunity to position your brand among competitors and further increase your level of visibility.</p>

                    </div>
                </div>


                <div className='flex'>
                    <div className="card-body w-[50%] border">
                        <h2 className="card-title">Trends</h2>
                        <p>MEDICAL FAIR INDIA is well known for its ability to detect trends and respond to market impulse.</p>

                    </div>
                    <div className="card-body w-[50%] border">
                        <h2 className="card-title">Solutions</h2>
                        <p>Find diverse solutions to your diverse healthcare needs.</p>

                    </div>
                    <div className="card-body w-[50%] border">
                        <h2 className="card-title">Innovations</h2>
                        <p>Explore how the latest digital technologies and new approaches shaping healthcare.</p>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AttendFair;