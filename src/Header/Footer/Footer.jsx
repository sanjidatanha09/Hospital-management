import React from 'react';
import { FaChrome, FaFacebookF, FaInstagram, FaInvision } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className=' '>
                <div className="footer p-10 bg-neutral text-neutral-content w-full">
                    <nav className=' '>
                        <header className="footer-title">GYNECOLOGY <span className=''>ATLANTA</span></header>
                        <p>Compassionate, Quality Care</p>
                        <p>With a robust team of specialists working together,
                            <br /> you can rest assured that you can depend on Emory ,<br />Healthcare to work with you to develop a personalized ,<br />treatment plan that is tailored specifically for you.</p>

                        <div className='flex items-center justify-center text-3xl mt-5'>
                            <FaInstagram className='mr-5 '></FaInstagram>
                            <FaInvision className='mr-5'></FaInvision>
                            <FaChrome className='mr-5'></FaChrome>
                            <FaFacebookF></FaFacebookF>
                        </div>


                    </nav>
                    <nav className=''>
                        <header className="footer-title">Helpful Links</header>
                        <a className="link link-hover ">Life Support Learning class</a>
                        <a className="link link-hover">Healthcare Worker Safety</a>
                        <a className="link link-hover">Chaplaincy Services</a>
                        <a className="link link-hover">Pastoral Education</a>
                        <a className="link link-hover">Occupational Health</a>
                        <a className="link link-hover">Therapy Services</a>

                    </nav>
                    <nav className=''>
                        <header className="footer-title">OPENING HOURS</header>
                        <p>Monday -- <span>8am to 7 pm</span></p>
                        <p>Tuesday -- <span>8am to 7 pm</span></p>
                        <p>Wednesday -- <span>8am to 7 pm</span></p>
                        <p>Thursday -- <span>8am to 7 pm</span></p>
                        <p>Friday -- <span>8am to 7 pm</span></p>
                        <p>Saturday -- <span>8am to 7 pm</span></p>
                    </nav>
                </div>

                <div className="footer footer-center p-4 bg-base-300 text-base-content">
                    <aside>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </div>


            </footer>
        </div>
    );
};

export default Footer;