import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import image from "../../assets/All-img/hospital-symbol.jpg"
import { FaConnectdevelop } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGithub, FaGofore } from 'react-icons/fa';



const Navbar = () => {
    const { user, logOUt } = useContext(AuthContext);

    const handleSignOut = () => {
        logOUt()
            .then()
            .catch()

    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/exhibitorlist">Conferences Overview</NavLink></li>
        <li><NavLink to="/visitors">Visitor</NavLink></li>
        

    </>


    return (
        <div>
            <div className='bg-slate-200'>
                <Marquee pauseOnHover={true}>
                    <h1 className='text-base md:text-xl lg:text-3xl font-bold m-7 '>Medical Fair Bangladesh 2023 </h1>
                </Marquee>

            </div>
            <div className="navbar border bg-gray-300 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navLinks}

                        </ul>
                    </div>
                    <div className='flex justify-between items-center'>
                        <img className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] rounded-3xl mr-2 lg:mr-4' src={image} alt="" />
                        <a className=" normal-case text-xs  md:text-xl lg:text-2xl text-gray-800 font-bold ">Clinical Consulting</a>

                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-bold">
                        {navLinks}

                    </ul>
                </div>
                <div className="navbar-end ">

                    <div className='flex justify-end items-center gap-5'>


                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-neutral'>Log Out</button>

                                :
                                <Link to="/login">
                                    <button className='btn text-sm lg:text-xl lg:font-bold btn-neutral'>Login</button>
                                </Link>

                        }
                        <div>
                            <p className='text-sm font-bold'>{user?.email}</p>
                            <img src="" alt="" />

                        </div>
                       

                    </div>

{/* 
                    <a className="btn"><FaConnectdevelop></FaConnectdevelop>Button</a> */}


                </div>
            </div>


        </div>
    );
};

export default Navbar;