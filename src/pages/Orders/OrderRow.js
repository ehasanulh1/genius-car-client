import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';

const OrderRow = ({ order }) => {
    const [orderService, setOrderService] = useState([])
    const { _id, service_id, serviceName, email, date, phone } = order;

    const handleDelete = id => {
        const agree = window.confirm(`Are you sure! you want to delete:${serviceName}`)
        if (agree) {
            console.log('delete order', id)
            fetch(`http://localhost:3000/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service_id}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service_id])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline text-2xl"><MdDelete /></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-20 rounded">
                            {
                                orderService?.img && <img src={orderService?.img} alt="Service images" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                <span>{email}</span>
            </td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRow;