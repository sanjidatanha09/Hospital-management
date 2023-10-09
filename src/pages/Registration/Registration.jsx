import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer, FaRegEyeSlash, FaEye } from 'react-icons/fa';

const Registration = () => {
    const [registererror, setRegistererror] = useState('');
    const [showpassword , setShowpassword] =useState(false);
   
    const { createUser }= useContext(AuthContext)


    const handleRegistration = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photourl = form.get('photourl')
        const email =form.get('email')
        const password = form.get('password')
        console.log(name, photourl,email, password);

        //reset error
        setRegistererror('');

    
        if (password.length < 6) {
            setRegistererror('password is less than 6 characters');
            return;
        }
        
        else if (!/[A-Z]/.test(password)) {
            setRegistererror('shoult have atleast one capital letter');
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            setRegistererror('please use spcecial character');
            return;
        }


       

        //create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            // setSuccess('user created successfully')
            toast('user created successfully')
            
        })
        .catch(error =>{
            console.error(error);
            toast(error.message);
            
        })

    }

    return (
        <div className='my-16 text-center'>
            <h1 className="text-3xl lg:text-5xl font-bold mb-10">Please Registration </h1>
            {
                registererror && <p className=' text-black mb-5 text-xl font-semibold'>{registererror}</p>
            }
    
            
            <div className='bg-slate-300 rounded-lg shadow-lg md:w-3/4 lg:w-1/2 mx-auto h-[650px]'>
                
                <form onSubmit={handleRegistration} className='  card-body ' >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold lg:text-2xl">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold lg:text-2xl">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photourl" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold lg:text-2xl">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold lg:text-2xl">Password</span>
                        </label>
                        <div className=' relative'>
                            <input
                                type={showpassword ? "text" : "password"}
                                name='password'
                                placeholder="password"
                                className="input input-bordered w-full"
                                required />
                            <span className='bottom-4 lg:bottom-[14px] right-4 absolute' onClick={() => setShowpassword(!showpassword)}>
                                {
                                    showpassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
                                }

                            </span>
                            
                        </div>
                       

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral w-[250px] mx-auto font-bold">Registar</button>
                    </div>





                </form>
                <p className='font-bold mb-3'>Already have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link> </p>
           </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;