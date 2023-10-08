import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGithub, FaGofore } from 'react-icons/fa';

const Login = () => {
    const { googleSignIn } =useContext(AuthContext)
    const { signIn } =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log('location login page',location)

    const handleGoogle = () => {
        googleSignIn().then(result => {
            console.log(result.user)
        });
    };



    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log( email, password);

        signIn(email,password)
            .then(result =>{
                console.log(result.user)
                //navigate after login

                navigate(location?.state ? location.state : '/')
            })
            .catch(error =>{
                console.error(error);
            })
        

    }
    return (
        <div className='mt-8 text-center'>
            <h1 className="text-5xl">this is login in page</h1>
            <form onSubmit={handleLogin} className=' md:w-3/4 lg:w-1/2 mx-auto card-body ' >


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
                    <button  className="btn btn-primary ">Login</button>
                </div>
               




            </form>
            <div className='text-center mt-5'>
                <h2 className="text-lg mb-2 font-bold ">or Login With</h2>
                <div className='flex  gap-5 justify-center items-center'>
                    <button onClick={handleGoogle} className='btn '>
                        <FaGofore></FaGofore>Google
                    </button>
                    <br />
                    <button className='btn '>
                        <FaGithub></FaGithub>Github
                    </button>

                </div>


            </div>
            <p>Dont have an account? <Link className='text-blue-600' to="/registration">Register</Link> </p>
        </div>
    );
};

export default Login;