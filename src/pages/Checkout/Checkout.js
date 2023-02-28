import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import image1 from '../../assets/images/checkout/checkout.png';
import './Checkout.css'

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        // for set today date
        let today = new Date();
        const date = String(today.getDate()).padStart(2, '0') + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + today.getFullYear();

        // for send to server side
        const order = {
            service_id: _id,
            serviceName: title,
            price,
            customer: name,
            date,
            email,
            phone,
            message
        }

        // if (phone.length > 10) {
        //     alert('Phone number should be 10 character or longer')
        // }
        // else{
        //     //other code here, fetch
        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='mx-2 lg:mx-0'>
            <div className='relative'>
                <div className='checkout-img'>
                    <img className='w-full rounded-xl' src={image1} alt="" />
                </div>
                <div className='absolute transform -translate-y-1/2 left-1/4 lg:left-24 top-1/2'>
                    <h1 className='text-3xl md:text-5xl font-bold text-white'>Check Out</h1>
                </div>
            </div>

            <div className='flex justify-center bg-gray-100 rounded-xl py-10 lg:py-24 my-10 lg:my-24'>
                <form onSubmit={handleSubmit} className='w-4/5 py-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                        <input className='input input-bordered input-primary w-full' type="text" name='firstName' placeholder='First Name' required />
                        <input className='input input-bordered input-primary w-full' type="text" name='lastName' placeholder='Last Name' />
                        <input className='input input-bordered input-primary w-full' type="text" name='phone' placeholder='Phone Number' required />
                        <input className='input input-bordered input-primary w-full' defaultValue={user?.email} type="email" name='email' placeholder='Your Email' />
                    </div>
                    <div className='mt-6'>
                        <textarea style={{ height: '260px' }} className="textarea textarea-primary w-full" type='text' name='message' placeholder="Text here"></textarea>
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-primary w-full'>Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Checkout;