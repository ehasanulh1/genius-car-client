import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import image1 from '../../assets/images/others/Rectangle 1548.png';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    console.log(orders)

    useEffect(() => {

        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    return (
        <div className='mx-2 lg:mx-0'>
            <div className='relative'>
                <div className='checkout-img'>
                    <img className='w-full rounded-xl' src={image1} alt="" />
                </div>
                <div className='absolute transform -translate-y-1/2 left-16 md:left-1/3 lg:left-24 top-1/2'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white'>Manage All Orders</h1>
                </div>
            </div>

            <div className='flex justify-center rounded-xl my-10 lg:my-24'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Remove</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <OrderRow
                                    key={order._id}
                                    order={order}
                                ></OrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;