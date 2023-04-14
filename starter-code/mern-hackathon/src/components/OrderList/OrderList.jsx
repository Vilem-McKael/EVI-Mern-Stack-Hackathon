import React from 'react';
import Order from '../Order/Order';

export default function OrderList({orders, handleSelectOrder}) {
  return (
    <div>
        {orders.map((order, idx) => <Order key={idx} order={order} onClick={() => handleSelectOrder(order)}  />)}
    </div>
  )
}