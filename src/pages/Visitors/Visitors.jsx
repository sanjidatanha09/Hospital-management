import React from 'react';
import picture from '../../assets/All-img/data1.jpg'
import picture1 from '../../assets/All-img/data2.jpg'


const Visitors = () => {
    return (
        <div>

            <div className='my-10'>
                <h1 className='font-bold text-3xl lg:text-5xl'>A visit that pays off!</h1>
                <p className='py-4 lg:pl-16 text-lg lg:text-xl font-medium'>All the information you need in preparation of your visit to the trade fair like opening hours, admission fees, floor plan and more.</p>
            </div>
            <div className='mt-7'>
                <h1 className=' text-3xl  lg:text-5xl font-bold'>Data & Facts</h1>
                <div className='lg:flex gap-16 lg:w-[900px]  mx-auto my-10'>
                    <div className="card  bg-slate-100 shadow-xl ">
                        <h1 className='text-center py-5 text-3xl font-bold'>
                            Date & Opening hours
                        </h1>
                        <figure><img className='w-full h-[300px]' src={picture} alt="Shoes" /></figure>
                        <div className="card-body">

                            <p className='text-lg font-medium text-center pb-4'>Here you'll find all the information you need in preparation of your visit to MEDICAL FAIR BD 2024.</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-neutral">Read more</button>
                            </div>
                        </div>
                    </div>

                    <div className="card  bg-slate-100 shadow-xl ">
                        <h1 className='text-center py-5 text-2xl font-bold'>
                            About MEDICAL FAIR INDIA
                        </h1>
                        <figure><img className='w-full h-[300px]' src={picture1} alt="Shoes" /></figure>
                        <div className="card-body">

                            <p className='text-lg font-medium text-center pb-4'>Find out more about India's No. 1 Trade Fair for Hospitals, Health Centres and Clinics</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-neutral">Read more</button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
          
            


        </div>
         
    );
};

export default Visitors;