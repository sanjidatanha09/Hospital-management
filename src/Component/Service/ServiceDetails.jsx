import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceDetails2 from './ServiceDetails2';


const ServiceDetails = () => {

    const [servicedetailscard , setServicedetailscard] = useState();

    const {id} = useParams()
   
    
    const detailCard = useLoaderData();

    useEffect(() =>{
        
        const findCard = detailCard?.find(servicedetailscard => servicedetailscard.id === id);
        setServicedetailscard(findCard);


    }, [id,detailCard]);

    // console.log(servicedetailscard)


    

    return (
        <div>
            <ServiceDetails2 servicedetailscard={servicedetailscard}></ServiceDetails2>
    
        </div>
    );
};

export default ServiceDetails;