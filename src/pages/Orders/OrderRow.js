import React, { useEffect, useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';

const OrderRow = ({ order }) => {
    const [orderService, setOrderService] = useState([])
    const { service_id, serviceName, email, phone } = order;

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service_id}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service_id])

    return (
        <tr>
            <th>
                <label>
                    <button className="btn text-2xl btn-circle"><RiDeleteBinFill /></button>
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
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRow;