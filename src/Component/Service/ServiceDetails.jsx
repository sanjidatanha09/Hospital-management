import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const servi= useLoaderData();
    const {id} =useParams();
    const idInt = parseInt(id);
    const serv= servi.find(servi.id === idInt);

    console.log(serv);

    const handleApplybtn = () =>{
        saveServiceApplication(idInt);//localstorage theke asbe eta 
        alert('sucess')
    }
    return (
        <div>
            <div className='grid   gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <div className='border md:col-span-3'>
                    <h2> DEtails come </h2>
                    <h2>job details of:{serv.job_title}</h2>
                    <p>{serv.kcomapy}</p>

                </div>

                <div>
                    <h2>
                        side thing
                    </h2>
                    <button onClick={handleApplybtn}>click</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;