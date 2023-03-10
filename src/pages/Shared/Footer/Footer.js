import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-f.svg';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-base-content text-white">
            <div>
                <img className='pb-3' src={logo} alt="" />
                <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
            </div>
            <div>
                <span className="footer-title py-3">Services</span>
                <Link to="" className="link link-hover">Branding</Link>
                <Link to="" className="link link-hover">Design</Link>
                <Link to="" className="link link-hover">Marketing</Link>
                <Link to="" className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title py-3">Company</span>
                <Link to="" className="link link-hover">About us</Link>
                <Link to="" className="link link-hover">Contact</Link>
                <Link to="" className="link link-hover">Jobs</Link>
                <Link to="" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title py-3">Legal</span>
                <Link to="" className="link link-hover">Terms of use</Link>
                <Link to="" className="link link-hover">Privacy policy</Link>
                <Link to="" className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;