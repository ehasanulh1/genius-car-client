import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div id='about' className='py-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative lg:w-1/2'>
                        <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt='person' />
                        <img src={parts} className="absolute right-5 top-1/2 border-8 w-3/5 rounded-lg shadow-2xl" alt='parts' />
                    </div>
                    <div className='lg:w-1/2'>
                        <p className='text-2xl font-bold text-orange-600'>About Us</p>
                        <h1 className="text-5xl my-5 font-bold leading-tight">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                        </p>
                        <p>
                            the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                        </p><br />
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;