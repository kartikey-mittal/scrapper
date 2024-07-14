import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Import necessary Firestore functions
import { db } from './../../firebase'; // Assuming db is your Firestore instance exported from firebase.js
import BS1 from './BS1';
import BS2 from './BS2';
import './OrderCard/OrderCard.css';
import Ordercard from './OrderCard/OrderCard';
import './OrderList.css';

const OrderList = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [newOrdersActive, setNewOrdersActive] = useState(true);
  const [ongoingOrdersActive, setOngoingOrdersActive] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // State to hold the selected order

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollectionRef = collection(db, 'orders');
        const snapshot = await getDocs(ordersCollectionRef);
        const ordersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersData);
        console.log('Fetched orders:', ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []); // Empty dependency array ensures this effect runs only once

  const toggleSheet1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false); // Close BS2 if open
  };

  const toggleSheet2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false); // Close BS1 if open
  };

  const handleNewOrdersClick = () => {
    setNewOrdersActive(true);
    setOngoingOrdersActive(false);
  };

  const handleOngoingOrdersClick = () => {
    setOngoingOrdersActive(true);
    setNewOrdersActive(false);
  };

  // Function to set the selected order
  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    // Automatically open BS1 or BS2 based on the Status
    if (order.Status === 2) {
      setIsOpen1(true);
      setIsOpen2(false);
    } else {
      setIsOpen1(false);
      setIsOpen2(true);
    }
  };

  return (
    <div style={{ height: '100%', backgroundColor: "#d9ffe8", borderRadius: 20, border: "0.1rem solid #cccccc" }}>
      <div className="order-type">
        <p onClick={handleNewOrdersClick} style={{ backgroundColor: newOrdersActive ? '#ffff' : 'initial' }}>New Orders</p>
        <hr />
        <p onClick={handleOngoingOrdersClick} style={{ backgroundColor: ongoingOrdersActive ? '#ffff' : 'initial' }}>Ongoing Orders</p>
      </div>

      {/* Render order cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '1rem', flexDirection: 'column', alignItems: 'center', marginTop: '18px' }}>
        {orders.map((order, index) => (
          <Ordercard key={index} order={order} onViewOrder={handleViewOrder} />
        ))}
      </div>

      {/* Buttons to toggle sheets */}
      {/* <button style={{height:0,width:0,}} onClick={toggleSheet1} className="toggle-button">
        {isOpen1 ? 'Close Sheet' : 'Open Sheet 1'}
      </button>
      <button onClick={toggleSheet2} className="toggle-button">
        {isOpen2 ? 'Close Sheet' : 'Open Sheet 2'}
      </button> */}

      {/* Pass selected order data to BS1 and BS2 */}
      {isOpen1 && selectedOrder && (
        <BS1 isOpen1={isOpen1} toggleSheet={toggleSheet1} order={selectedOrder} />
      )}
      {isOpen2 && selectedOrder && (
        <BS2 isOpen2={isOpen2} toggleSheet={toggleSheet2} order={selectedOrder} />
      )}
    </div>
  );
};

export default OrderList;
