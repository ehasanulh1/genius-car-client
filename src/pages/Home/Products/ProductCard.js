import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { title, img, price, rating } = product;
    return (
        <div style={{ width: '368px' }} className="bg-base-100 shadow-xl border rounded-xl">
            <div style={{ width: '326px', height: '215px' }} className="flex justify-center items-center mx-5 mt-6 bg-gray-100 rounded-md">
                <div className='w-1/2'>
                    <img src={img} alt="Shoes" className="rounded-xl w-full" />
                </div>
            </div>
            <div className="card-body items-center text-center">
                <div className='flex'>
                    {
                        rating === 5 ?
                            <>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                            </>
                            :
                            <></>
                    }
                    {
                        rating === 4 ?
                            <>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className=' mr-1' />
                            </>
                            :
                            <></>
                    }
                    {
                        rating === 3 ?
                            <>
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='text-warning mr-1' />
                                <FaStar className='mr-1' />
                                <FaStar className='mr-1' />
                            </>
                            :
                            <></>
                    }

                </div>
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className='font-semibold text-xl text-red-500'>${price}.00</p>
            </div>
        </div>
    );
};

export default ProductCard;