// OrderList.js
import React, { useState } from 'react';
import BS1 from './BS1';
import BS2 from './BS2';
import './OrderCard/OrderCard.css'
import Ordercard from './OrderCard/OrderCard';
import './OrderList.css'
const OrderList = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleSheet1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleSheet2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [newOrdersActive, setNewOrdersActive] = useState(true);
  const [ongoingOrdersActive, setOngoingOrdersActive] = useState(false);

  const handleNewOrdersClick = () => {
      setNewOrdersActive(true);
      setOngoingOrdersActive(false);
  };

  const handleOngoingOrdersClick = () => {
      setOngoingOrdersActive(true);
      setNewOrdersActive(false);
  };


  return (
    <div style={{height:'100%',backgroundColor:"#d9ffe8",borderRadius:20, border: "0.1rem solid #cccccc",}}>
        
        <div className="order-type">
                <p onClick={handleNewOrdersClick} style={{ backgroundColor: newOrdersActive ? '#ffff' : 'initial' }}>New Orders</p>
                <hr />
                <p onClick={handleOngoingOrdersClick} style={{ backgroundColor: ongoingOrdersActive ? '#ffff' : 'initial' }}>Ongoing Orders</p>
            </div>
            {/* order card ... */}
            
           <div style={{display:'flex',flexWrap: 'wrap',justifyContent: 'space-around',gap: '1rem',flexDirection:'column' ,alignItems:'center',marginTop:'18px'}}>
           <Ordercard/>
            <Ordercard/>
            
            
           </div>
     
      <button onClick={toggleSheet1} className="toggle-button">
        {isOpen1 ? 'Close Sheet' : 'Open Sheet 1'}
      </button>
      <button onClick={toggleSheet2} className="toggle-button">
        {isOpen2 ? 'Close Sheet' : 'Open Sheet 2'}
      </button>
      <BS1 isOpen1={isOpen1} toggleSheet={toggleSheet1} />
      <BS2 isOpen2={isOpen2} toggleSheet={toggleSheet2} />
    </div>
  );
};

export default OrderList;
