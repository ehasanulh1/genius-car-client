import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='my-12'>
            <div className='text-center mb-12'>
                <p className='text-2xl font-bold text-orange-600 mb-5'>Popular Products</p>
                <h1 className="text-5xl font-bold mb-5">Browse Our Products</h1>
                <div className='flex justify-center'>
                    <p className="text-xl lg:w-2/3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center py-20'>
                <button className="btn btn-outline btn-primary">More Products</button>
            </div>
        </div>
    );
};

export default Products;