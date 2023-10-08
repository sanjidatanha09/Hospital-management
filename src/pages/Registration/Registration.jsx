/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Hook/Authprovider';



const Registration = () => {

    const {createUser} =useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // const email = form.get('email');
        // const password = form.get("password");
        const email =form.get('email');
        const password = form.get("password");
        console.log(email,password);


        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>


            <form onSubmit={handleRegister} className="card-body">
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
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Registration</button>
                </div>


            </form>
            <p>already have an account <Link to='/login'>Login</Link></p>
            
        </div>
    );
};

export default Registration;