import React from 'react';
import Banner from '../../Header/Banner/Banner';
import img1 from '../../assets/All-img/confa1.png'
import img2 from '../../assets/All-img/confa2.jpg'
import img3 from '../../assets/All-img/confa3.jpg'
import img4 from '../../assets/All-img/confa4.png'

const ExhibitorList = () => {
    return (
        <div>
            
            <div className='my-16'>
                <h1 className='text-2xl lg:text-5xl font-bold  pb-10'>Conferences & Forums Overview</h1>

                <div className='grid gap-10 grid-cols-1 lg:grid-cols-2'>
                    <div className="card  bg-slate-100 shadow-xl ">
                        
                        <figure><img className=' w-[190px] h-[150px] mt-10 ' src={img1} alt="Shoes" /></figure>
                        <div className="card-body">

                            <h1 className=' py-5 text-xl lg:text-3xl font-bold'>
                                WEARABLE TECHNOLOGIES
                            </h1>
                            <p className='leading-3 font-bold'>13 september 2023,Wednesday</p>
                            <p className='leading-3 font-bold pb-5'>Conference Hall,Hall 99</p>

                            <p className='text-sm lg:text-lg font-medium  pb-4'>The 45th WT | Wearable Technologies Conference Bd, co-organised by Medical Fair Thailand, will be held at Bangkok Internation Trade & Exibiton centre.</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-neutral">Find Out More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card  bg-slate-100 shadow-xl ">

                        <figure><img className=' w-[190px] h-[150px] mt-10 ' src={img2} alt="Shoes" /></figure>
                        <div className="card-body">

                            <h1 className=' py-5 text-xl lg:text-3xl font-bold'>
                                THAI MEDICAL DEVICE 
                            </h1>
                            <p className='leading-3 font-bold'>3 september 2023,Wednesday</p>
                            <p className='leading-3 font-bold pb-5'>Conference Hall,Hall 199</p>

                            <p className='text-sm lg:text-lg font-medium  pb-4'>A half day seminar focused on understanding how software as medical device and AI will be regulated and registered in Thailand</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-neutral">Find Out More</button>
                            </div>
                        </div>
                    </div>


                    <div className="card  bg-slate-100 shadow-xl ">

                        <figure><img className=' w-[190px] h-[150px] mt-10 ' src={img3} alt="Shoes" /></figure>
                        <div className="card-body">

                            <h1 className=' py-5 text-xl lg:text-3xl font-bold'>
                                HOSPITAL CIO FORUM
                            </h1>
                            <p className='leading-3 font-bold'>14 september 2023,Thursday</p>
                            <p className='leading-3 font-bold pb-5'>Conference Hall,Hall 99</p>

                            <p className='text-sm lg:text-lg font-medium  pb-4'>Digitalisaton and innovation in the healthcare market will be a key theme discussed at the upcoming Hospital cio forum.</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-neutral">Find Out More</button>
                            </div>
                        </div>
                    </div>


                    <div className="card  bg-slate-100 shadow-xl ">

                        <figure><img className=' w-[190px] h-[150px] mt-10 ' src={img4} alt="Shoes" /></figure>
                        <div className="card-body">

                            <h1 className=' py-5 text-xl lg:text-3xl font-bold'>
                               IVAM FORUM
                            </h1>
                            <p className='leading-3 font-bold'>15 september 2023,Friday</p>
                            <p className='leading-3 font-bold pb-5'>Conference Hall,Hall 99</p>

                            <p className='text-sm lg:text-lg font-medium  pb-4'>Business opportunities in the medical technology market in southest asia .Thailand in an atttractice market for medical technology companies.</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-neutral">Find Out More</button>
                            </div>
                        </div>
                    </div>

                    

                

                </div>

            </div>
            
            

        </div>
    );
};

export default ExhibitorList;