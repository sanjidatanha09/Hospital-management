import React from 'react';
import { NavLink } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import image from "../../assets/All-img/hospital-symbol.jpg"
import { FaConnectdevelop } from 'react-icons/fa';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/gallery">Gallery Pages</NavLink></li>
        <li><NavLink to="/medicalistShop">Medicalist Shop</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>


    return (
        <div>
            <div>
                <Marquee pauseOnHover={true}>
                    <h1 className='text-5xl font-bold m-7'>Square Hospital </h1>
                </Marquee>
                
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}

                        </ul>
                    </div>
                    <div className='flex justify-between items-center'>
                        <img className='w-[50px] h-[50px] rounded-3xl mr-4' src={image} alt="" />
                        <a className=" normal-case text-2xl font-bold">Hospital</a>

                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}

                    </ul>
                </div>
                <div className="navbar-end">
                   
                        
                    <a className="btn"><FaConnectdevelop></FaConnectdevelop>Button</a>
                        

                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;