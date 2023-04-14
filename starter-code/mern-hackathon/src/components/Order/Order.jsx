import React from 'react'
require('./Order.css')

export default function Order({order, handleSelectOrder}) {

        const date = new Date(order.createdAt)

  return (
    <div className="orderContainer" onClick={() => handleSelectOrder(order)}>
      <div className='orderContainerCol'>
        <p>Order ID:{order._id.slice(-6).toUpperCase()}</p>
        <p>${order.orderTotal.toFixed(2)}</p>
      </div>
      <div className='orderContainerCol'>
        <p>{date.toLocaleDateString('en-US')}</p>
        <p>{order.totalQty} items</p>
      </div>
    </div>
  )
}
