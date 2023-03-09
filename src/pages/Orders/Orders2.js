import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import image1 from '../../assets/images/others/Rectangle 1548.png';
import OrderRow from './OrderRow';

const Orders2 = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const handleDelete = id => {
        const agree = window.confirm('Are you sure you want to delete?')
        if (agree) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully')
                        const remaining = orders.filter(ord => ord._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: true })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const changing = orders.find(odr => odr._id === id)
                    changing.status = 'Approved'
                    const newOrders = [changing, ...remaining];
                    setOrders(newOrders)
                }
            })
    }


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email, logOut])

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

            <div style={{ minHeight: '600px' }} className='flex justify-center rounded-xl my-10 lg:my-24'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Remove</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <OrderRow
                                    key={order._id}
                                    order={order}
                                    handleDelete={handleDelete}
                                    handleStatusUpdate={handleStatusUpdate}
                                ></OrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders2;