import React from 'react';
import pic from '../../assets/All-img/clinLab.jpg'
import pic2 from '../../assets/All-img/futurehealth.jpg'
import pic3 from '../../assets/All-img/regeindia.jpg'

const SpecialShow = () => {
    return (
        <div className='mb-16'>
            <div className='text-center py-16 text-3xl lg:text-4xl font-bold '>
                <h1>Special shows at MEDICAL FAIR BANGLADESH</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-5' >
                <div className="card  bg-slate-100 shadow-xl " data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h1 className='text-center py-5 text-3xl font-bold'>
                        Clin Lab BD
                    </h1>
                    <figure><img className='w-full h-[200px]' src={pic} alt="Shoes" /></figure>
                    <div className="card-body">
                        
                        <p className='text-lg font-medium text-center pb-4'>Clinical laboratories are facilities where medical tests are conducted on clinical specimens to obtain information about the health of a patient. These tests play a crucial role in the detection, diagnosis, and treatment of diseases. In Bangladesh, there are several clinical laboratories and diagnostic centers that offer a wide range of tests and services to patients</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-neutral">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-slate-100 shadow-xl " data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h1 className='text-center py-5 text-3xl font-bold'>
                        FTR4H - Future for Health
                    </h1>
                    <figure><img className='w-full h-[200px]' src={pic2} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p className='text-lg font-medium text-center pb-4'>FTR4H provides a platform for networking, knowledge exchange, and business development in the healthcare technology sector. Through events, conferences, and initiatives, FTR4H aims to drive the digital health ecosystem forward, exploring the latest technologies and trends that can revolutionize healthcare delivery and improve patient outcomes.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-neutral">Read more</button>
                        </div>
                    </div>
                </div>

                <div className="card  bg-slate-100 shadow-xl " data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h1 className='text-center py-5 text-3xl font-bold'>
                        Smart Hospitals
                    </h1>
                    <figure><img className='w-full h-[200px]' src={pic3} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p className='text-lg font-medium text-center pb-4'>Smart hospitals, also known as digital or intelligent hospitals, are healthcare institutions that leverage advanced technologies and data-driven insights to enhance the quality of patient care, streamline operations, improve efficiency, and reduce costs. These hospitals integrate various smart devices, sensors, and digital systems to create a connected healthcare environment</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-neutral">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialShow;