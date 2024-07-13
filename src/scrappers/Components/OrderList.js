// OrderList.js
import React, { useState } from 'react';
import BS1 from './BS1';
import BS2 from './BS2';
import './OrderList.css';

const OrderList = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleSheet1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleSheet2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div style={{backgroundColor: 'yellow',height:'100%'}}>
        
   
      <span>Order List Component</span>
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
