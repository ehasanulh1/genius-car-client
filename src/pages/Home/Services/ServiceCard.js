import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="imageHere" /></figure>
                <h2 className="font-bold text-2xl pl-5 pt-5">{title}</h2>
                <div className="flex justify-between items-center p-5">
                    <p className='text-xl font-semibold text-orange-600'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <FaArrowRight className='text-xl' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;