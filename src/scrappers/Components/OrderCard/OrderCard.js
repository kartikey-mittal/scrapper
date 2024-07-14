import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function OrderCard({ onViewOrder, order }) {
  const { OrderID, Scrapper, TotalBill, Items, Status, Name } = order;

  const handleViewOrder = () => {
    console.log('View Order button pressed');
    onViewOrder(order); // Call parent function to show the correct BS
  };

  // Determine the status label and its styling based on Status value
  let statusLabel, statusStyle;

  if (Status === 2) {
    statusLabel = "ACCEPTED";
    statusStyle = { backgroundColor: '#a9ec93', color: 'black', padding: 5, borderRadius: 10,alignItems:'center',fontSize:'0.6rem', };
  } else if (Status === 3) {
    statusLabel = "CANCELLED";
    statusStyle = { backgroundColor: 'red', color: 'white', padding: 5, borderRadius: 10,alignItems:'center',fontSize:'0.6rem', };
  } else {
    statusLabel = "NEW";
    statusStyle = { backgroundColor: '#f7df6b', color: 'black', padding: 5, borderRadius: 10,alignItems:'center',fontSize:'0.6rem', };
  }

  return (
    <div style={{ width: "90%" }}>
      <div
        style={{
          overflowY: 'auto',
          padding: '1rem',
          borderRadius: 10,
          backgroundColor: "#fafafa",
          border: ".05rem solid black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: '90%',
        }}
      >
       <div style={{ 
  width: "5rem", 
  height: "5rem", 
  backgroundColor: "#d9ffe8", 
  borderRadius: 10,
  backgroundImage: "url('https://cdn0.iconfinder.com/data/icons/avatar-78/128/4-512.png')",
  backgroundSize: "cover",  // Ensure the image covers the entire div
  backgroundPosition: "center",  // Center the image within the div
  backgroundRepeat: "no-repeat",  // Prevent repeating the image
}}>
</div>

        <div style={{ display: "flex", flexDirection: "column", marginRight: "3rem" }}>
          <span style={{ color: "#33333b", fontFamily: "DMSB" }}># {OrderID}</span>
       
          <span style={statusStyle}>{statusLabel}</span>
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
          onClick={handleViewOrder}
        >
          View Order
        </button>
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
