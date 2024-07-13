// Left.js
import React from 'react';
import OrderList from './OrderList';
import './Left.css';
import ToggleContainer from './ToogleContainer';

const Left = () => {
  return (
    <div style={{
        backgroundColor: 'white',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
//  borderRightWidth:1,borderRightColor:'black',
 borderRight: "0.02rem solid #ccc"
 
      }}>
        <div style={{height:'20%',margin:5}}>
          <ToggleContainer/>
        </div>
     
      <div style={{flex:1,backgroundColor:'transparent',margin:10}}>     <OrderList /></div>
 
    </div>
  );
};

export default Left;
