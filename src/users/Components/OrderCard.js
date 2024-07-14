import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function OrderCard({ onViewBill,order }) {
  const { OrderID, Scrapper, TotalBill, Items, Status, Name } = order;
  const handleBill = () => {
    console.log('Bill btn pressed');
    onViewBill(); // Call parent function to show PaymentCard
  };


  const orders = [
    { id: OrderID, date: Name },
//     { id: '#OD 49I30', date: '13 June 2024' },
//     { id: '#OD 49I31', date: '14 June 2024' },
//     { id: '#OD 49I32', date: '15 June 2024' },
//     { id: '#OD 49I33', date: '16 June 2024' },
    // Add more orders as needed
  ];

  return (
    <div>
      {/* <h2 style={{ paddingLeft: "1.5rem" }}>My Orders</h2> */}
      <div
        style={{
          // maxHeight: '400px',
          overflowY: 'auto',
          padding: '0.4rem 1rem',
          // backgroundColor: '#fafafa',
          // margin: '0rem rem',
          // border: '.05rem solid black',
          borderRadius: 10,
          width:"100%",
        }}
      >
        {orders.map((order, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "1rem",
              backgroundColor: "#fafafa",
              // margin: "",
              justifyContent: "space-around",
              alignItems: "center",
              border: ".05rem solid black",
              borderRadius: 10,width:'90%'
            }}
          >
            <div style={{ 
  width: "5rem", 
  height: "5rem", 
  backgroundColor: "#d9ffe8", 
  borderRadius: 10,
  backgroundImage: "url('https://img.freepik.com/premium-vector/indian-man-face-avatar_710508-12.jpg')",
  backgroundSize: "cover",  // Ensure the image covers the entire div
  backgroundPosition: "center",  // Center the image within the div
  backgroundRepeat: "no-repeat",  // Prevent repeating the image
}}></div>
            <div style={{ display: "flex", flexDirection: "column", marginRight: "3rem" }}>
              <span style={{ color: "#33333b",fontFamily:"DMSB" }}># {order.id}</span>
              <span style={{ color: "#c5c5c5", marginTop: "0.7rem" }}>Name:  {order.date}</span>
            </div>
            <button
              style={{
                backgroundColor: '#385aeb',
                color: '#ffffff',
                border: 'none',
                padding: '.8rem 2rem',
                borderRadius: '10px',
                fontSize: '1rem',
                fontFamily: 'DMB',
                cursor: 'pointer',
              }}
              onClick={handleBill}
            >
              View Bill
            </button>
          </div>
        ))}
       
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
        div {
          -ms-overflow-style: none;  /* For Internet Explorer and Edge */
          scrollbar-width: none;  /* For Firefox */
        }
      `}</style>
    </div>
  );
}

export default OrderCard;