import React from 'react';
import pic from '../../assets/All-img/clinLab.jpg'

const SpecialShow = () => {
    return (
        <div>
            <div className='text-center py-5 text-4xl font-bold'>
                <h1>Special shows at MEDICAL FAIR BANGLADESH</h1>
            </div>
            <div className='flex gap-5'>
                <div className="card w-96 bg-slate-100 shadow-xl ">
                    <h1 className='text-center'>
                        Clin Lab India
                    </h1>
                    <figure><img src={pic} alt="Shoes" /></figure>
                    <div className="card-body">
                        
                        <p>Clin Lab India is the exhibition & conference on the topic of laboratory medicine, Point of Care Testing, molecular medical diagnostics and clinical chemistry.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-100 shadow-xl ">
                    <h1 className='text-center'>
                        Clin Lab India
                    </h1>
                    <figure><img src={pic} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>Clin Lab India is the exhibition & conference on the topic of laboratory medicine, Point of Care Testing, molecular medical diagnostics and clinical chemistry.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-slate-100 shadow-xl ">
                    <h1 className='text-center'>
                        Clin Lab India
                    </h1>
                    <figure><img src={pic} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>Clin Lab India is the exhibition & conference on the topic of laboratory medicine, Point of Care Testing, molecular medical diagnostics and clinical chemistry.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialShow;