import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Registration = () => {

    const { createUser }= useContext(AuthContext)


    const handleRegistration = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const address = form.get('address')
        const email =form.get('email')
        const password = form.get('password')
        console.log(name, address,email, password);

        //create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })

    }

    return (
        <div className='mt-8 text-center'>
            <h1 className="text-5xl">this is Registration  page</h1>
            <form onSubmit={handleRegistration} className=' md:w-3/4 lg:w-1/2 mx-auto card-body ' >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="address" name="address" className="input input-bordered" required />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary ">Login</button>
                </div>
               




            </form>
            <p>Already have an account? <Link className='text-blue-600' to="/login">Login</Link> </p>
        </div>
    );
};

export default Registration;