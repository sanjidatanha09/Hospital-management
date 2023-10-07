import React, { useContext } from 'react';
import { AuthContext } from '../../Hook/Authprovider';
import { FaGithub, FaGofore } from 'react-icons/fa';

const Login = () => {

    const { googleSignIn } = useContext(AuthContext);

    return (
        <div>
            <div className="hero hero-content h-[650px] bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className='text-center mt-5'>
                            <h2 className="text-lg mb-2 font-bold ">or Login With</h2>
                            <div className='flex  gap-5 justify-center items-center'>
                                <button className='btn '>
                                    <FaGofore></FaGofore>Google
                                </button>
                                <br />
                                <button className='btn '>
                                    <FaGithub></FaGithub>Github
                                </button>

                            </div>
                            

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;