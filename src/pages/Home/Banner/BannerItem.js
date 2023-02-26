import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img alt='imag' src={image} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white leading-tight'>Affordable <br />
                    Price For Car <br />
                    Servicing</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white capitalize'>There are many variations of passages of available, But the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn btn-outline btn-warning mr-5">Warning</button>
                <button className="btn btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;