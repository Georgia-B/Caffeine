import React from 'react';
import PropTypes from 'prop-types';
import './OrderList.css';

const OrderList = ({ orders }) => {
    return (
        <ul className="orderlist">
            <div className="orderlist__header">
                <span className="orderlist__title">Order</span>
                <span>Status</span>
            </div>
            {orders.length === 0 ?
                <div className="orderlist--empty">No orders</div>
                :
                orders.map((order) => {
                    return <li key={order.type} className="orderlist__item">
                        <span className="orderlist__item__title">{order.size} {order.milk} {order.type}</span>
                        <span>{order.status}</span>
                    </li>;
                })
            }
        </ul>
    );
};

OrderList.propTypes = {
    orders: PropTypes.array,
};

export default OrderList;
