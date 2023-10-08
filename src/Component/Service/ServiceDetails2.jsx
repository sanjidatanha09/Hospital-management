import React from 'react';

const ServiceDetails2 = ({ servicedetailscard }) => {
    const { id, name, image, details_description } = servicedetailscard || {};


    return (
        <div className='m-32'>
            <div className="card bg-slate-300  w-[700px] mx-auto bg-base-100 shadow-xl">
                <figure><img className='w-full m-10 rounded-xl' src={image} alt="Shoes" /></figure>
                <div className="card-body px-10">
                    <h2 className="card-title py-5 font-bold text-3xl">{name}</h2>
                    <p className='pb-10 text-xl'>{details_description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails2;