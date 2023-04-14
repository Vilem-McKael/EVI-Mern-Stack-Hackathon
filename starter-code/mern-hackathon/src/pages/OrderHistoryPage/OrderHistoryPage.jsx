import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import MenuList from '../../components/MenuList/MenuList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderHistoryPage({ user, setUser }) {
    
    const [orders, setOrders] = useState([]);
    const [cart, setCart] = useState(null);
    
    useEffect(function() {
      async function getOrders() {
        const orders = await ordersAPI.getOrders();
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
        {/* Render an OrderList component (needs to be coded) */}

        <OrderDetail
          order={cart}
          handleChangeQty={null}
          handleCheckout={null}
        />

      </main>
  );
}