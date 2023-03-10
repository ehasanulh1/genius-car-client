import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from '../../contexts/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { setAuthToken } from '../../api/auth';


const Login = () => {
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    // const twitterProvider = new TwitterAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setAuthToken(user)
                form.reset();
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setAuthToken(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)

            })
    }

    return (
        <div style={{ minHeight: '700px' }} className="hero mb-20">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" className="md:w-3/4 m-5" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-4xl text-center my-3 font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                    </form>
                    <div className='text-center mb-6'>
                        <p className='text-sm text-orange-600 py-1'>Or Sign In with</p>
                        <div className='flex justify-center my-4'>
                            <button className='p-3 rounded-full border  hover:bg-primary hover:text-white'><FaFacebookF /></button>
                            <button className='p-3 mx-3 rounded-full border hover:bg-primary hover:text-white'><FaLinkedinIn /></button>
                            <button onClick={handleGoogleSignIn} className='p-3 rounded-full border hover:bg-primary hover:text-white'><FaGoogle /></button>
                        </div>
                        <p className='text-sm py-4'>Don't have an account? <Link className='underline text-primary' to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;