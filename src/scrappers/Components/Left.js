// Left.js
import React from 'react';
import OrderList from './OrderList';
import './Left.css';
import ToggleContainer from './ToogleContainer';

const Left = () => {
  return (
    <div style={{
        backgroundColor: 'green',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
 
 
      }}>
        <div style={{height:'20%',}}>
          <ToggleContainer/>
        </div>
     
      <div style={{flex:1,backgroundColor:'pink',margin:10}}>     <OrderList /></div>
 
    </div>
  );
};

export default Left;
