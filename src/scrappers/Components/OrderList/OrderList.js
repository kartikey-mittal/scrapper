import React, { useState } from 'react';
import './OrderList.css';
import Ordercard from '../Ordercard/Ordercard';

const OrderList = () => {
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
        <div style={{ height: '80vh', backgroundColor: '#D9FFE8', borderRadius: '15px', marginTop: '1.2rem', border: '1px solid black' }}>
           {/* on going order vala div */}

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

        </div>
    );
};

export default OrderList;
