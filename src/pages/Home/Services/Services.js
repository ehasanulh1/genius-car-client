import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/services?order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc])
    return (
        <div id='services' className='my-10'>
            <div className='text-center mb-12'>
                <p className='text-2xl font-bold text-orange-600 mb-5'>Service</p>
                <h1 className="text-5xl font-bold mb-5">Our Service Area</h1>
                <div className='flex justify-center'>
                    <p className="text-xl lg:w-2/3">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                </div>
                <div>
                    <button className='btn btn-outline' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
                </div>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center py-20'>
                <button className="btn btn-outline btn-primary">More Services</button>
            </div>
        </div>
    );
};

export default Services;