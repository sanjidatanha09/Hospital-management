import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({servic}) => {
    const { id,name, image, card_description, price } =servic;
    


    return (
        <div className=''>
             
            <div className="card  bg-base-100 shadow-xl  rounded-b-lg" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <figure><img className='h-[250px] w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body h-[250px] bg-slate-300  rounded-b-lg">
                    <h2 className="card-title font-bold lg:text-2xl ">{name}</h2>
                    <p className='font-medium'>{card_description}</p>
                    <div className="card-actions flex justify-between items-center">

                        <Link to={`/servi/${id}`}>

                            <button className="btn btn-neutral">
                                See Details
                            </button>

                        </Link>

                        <p className='text-right font-bold text-xl'>${price}.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;