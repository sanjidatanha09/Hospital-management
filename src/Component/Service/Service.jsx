import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({servic}) => {
    const { id,name, image, card_description, price } =servic;
    


    return (
        <div className=''>
             
            <div className="card  bg-base-100 shadow-xl  ">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{card_description}</p>
                    <div className="card-actions flex justify-between items-center">

                        <Link to={`/servi/${id}`}>

                            <button className="btn btn-primary">
                                Buy Now
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