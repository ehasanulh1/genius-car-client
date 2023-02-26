import React from 'react';
import img1 from '../../../assets/icons/a1.svg';
import img2 from '../../../assets/icons/a2.svg';
import img3 from '../../../assets/icons/a3.svg';

const Address = () => {
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 py-10 lg:p-24 mx-3 lg:mx-0 mb-24 rounded-xl bg-base-content'>
            <div className='flex justify-center items-center my-5'>
                <div className='pr-5'>
                    <img src={img1} alt="" />
                </div>
                <div className='text-white'>
                    <p className='text-base'>We are open monday-friday</p>
                    <p className='font-bold text-2xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex justify-center items-center my-5'>
                <div className='pr-5'>
                    <img src={img2} alt="" />
                </div>
                <div className='text-white'>
                    <p className='text-base'>Have a question?</p>
                    <p className='font-bold text-2xl'>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex justify-center items-center my-5'>
                <div className='pr-5'>
                    <img src={img3} alt="" />
                </div>
                <div className='text-white'>
                    <p className='text-base'>Need a repair? our address</p>
                    <p className='font-bold text-2xl'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Address;