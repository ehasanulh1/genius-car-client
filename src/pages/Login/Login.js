import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";


const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div style={{ minHeight: '700px' }} className="hero">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" className="lg:w-3/4 m-5" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-4xl text-center my-3 font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className='text-center my-5'>
                            <p className='text-orange-600'>Or Sign In with</p>
                            <div className='flex justify-center my-5'>
                                <div className='p-3 rounded-full border'>

                                    <FaFacebookF />
                                </div>
                                <div className='p-3 mx-3 rounded-full border'>

                                    <FaLinkedinIn />
                                </div>
                                <div className='p-3  rounded-full border'>

                                    <FaGoogle />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;