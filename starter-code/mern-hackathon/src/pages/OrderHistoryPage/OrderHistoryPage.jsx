import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import MenuList from '../../components/MenuList/MenuList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';

export default function OrderHistoryPage({ user, setUser }) {
    
    const [orders, setOrders] = useState([]);
    const [cart, setCart] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    
    function handleSelectOrder(order) {
      setSelectedOrder(order);
      console.log('this is our onclick func')
    } 
    
    useEffect(function() {
      async function getOrders() {
        const orders = await ordersAPI.getOrders();
        console.log(orders)
        setOrders(orders);
      }
      getOrders();
    }, []);
    
    return (
      <main className="OrderHistoryPage">
        <aside>
          <Logo />
          <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
          <UserLogOut user={user} setUser={setUser} />
        </aside>
        <div className='order-history-container'>
        <OrderList orders={orders} handleSelectOrder={handleSelectOrder}/>
        </div>
        <OrderDetail
          order={selectedOrder}
          handleChangeQty={null}
          handleCheckout={null}
        />
      </main>
  );
}