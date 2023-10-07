import React from 'react';
import { FaGithub, FaGofore } from 'react-icons/fa';

const GoogleLog = () => {
    return (
        <div>
            <div className='p-4 space-y-3 text-center border w-[500px] mx-auto pb-10 pt-5'>
                <h2 className="text-3xl font-bold ">Login With</h2>
                <button className='btn btn-outline'>
                    <FaGofore></FaGofore> Login With Google
                </button>
                <br />
                <button className='btn btn-outline'>
                    <FaGithub></FaGithub> Login With Github
                </button>

            </div>
            
        </div>
    );
};

export default GoogleLog;