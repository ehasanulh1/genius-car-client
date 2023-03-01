import React, { useContext } from 'react';
import { FaRegHeart, FaUserCircle } from 'react-icons/fa';
import { HiOutlineLogin, HiOutlineLogout, HiOutlineShoppingBag, HiOutlineUserAdd } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const menuItems = <>
        <li><Link to="/" className='text-lg'>Home</Link></li>
        <li><Link to="/" className='text-lg'>About</Link></li>
        <li><Link to="/" className='text-lg'>Services</Link></li>
        <li><Link to="/" className='text-lg'>Blog</Link></li>
        <li><Link to="/" className='text-lg'>Contact</Link></li>
    </>
    return (
        <div className="navbar h-20 mb-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

                <Link to='/' className='text-3xl mr-4' ><GoSearch /></Link>
                <Link to='/' className='text-3xl mr-4'><FaRegHeart /></Link>


                <div className="flex items-center">
                    {
                        user?.uid ?
                            <div className='flex items-center justify-center'>

                                <Link to='/' className='text-3xl mr-4'><HiOutlineShoppingBag /></Link>
                                <Link to='/' className='text-3xl mr-4'><BiUser /></Link>
                                <Link onClick={handleLogOut} to='/' className='text-3xl'><HiOutlineLogout /></Link>
                            </div>
                            :
                            <>
                                <Link to='/register' className='text-3xl mr-4'><HiOutlineUserAdd /></Link>
                                <Link to='/login' className='text-3xl mr-4'><HiOutlineLogin /></Link>
                                <Link to=""><button className="btn btn-outline btn-primary">Appointment</button></Link>

                            </>
                    }
                </div>
            </div>

        </div>
    );
};

export default Header;