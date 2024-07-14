import React, { useState, useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import OrderCard from "./OrderCard";
import PaymentCard from "./PaymentCard";
import { db } from "./../../firebase"; // Import Firestore instance from your firebase.js

import { collection, getDocs, doc, getDoc } from "firebase/firestore"; // Import Firestore methods for querying

const Left = () => {
  
  // const [userAddress, setUserAddress] = useState("");
  const [orders, setOrders] = useState([]); // State to store fetched orders
  const [showPaymentCard, setShowPaymentCard] = useState(false); // Initially hide PaymentCard
  const [showOrderCard, setShowOrderCard] = useState(true); // Initially show OrderCard
  const userAddress = localStorage.getItem("userAddress");
  const userPhone = localStorage.getItem("userPhone");
 
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userRef = doc(db, "users", userPhone); // Reference to user document with ID '997458922985'
        const userSnap = await getDoc(userRef); // Get user document snapshot

        if (userSnap.exists()) {
          const userData = userSnap.data();
          if (userData && userData.Orders) {
            const ordersArray = userData.Orders; // Assuming Orders is an array of order IDs

            // Fetch details for each order using Promise.all
            const ordersData = await Promise.all(
              ordersArray.map(async (orderId) => {
                const orderRef = doc(db, "orders", orderId);
                const orderSnap = await getDoc(orderRef);
                if (orderSnap.exists()) {
                  return { id: orderSnap.id, ...orderSnap.data() };
                }
                return null;
              })
            );

            // Filter out null values and update state with fetched orders
            setOrders(ordersData.filter((order) => order !== null));
          }
        } else {
          console.log("User document does not exist");
        }
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };

    fetchOrders(); // Fetch orders when component mounts
  }, []);

  const handlePaymentComplete = () => {
    setShowPaymentCard(false); // Hide PaymentCard
    setShowOrderCard(true); // Show OrderCard
  };

  const handlePay = () => {
    setShowPaymentCard(false); // Hide PaymentCard
  };

  const handleViewBill = () => {
    setShowPaymentCard(true); // Show PaymentCard
    setShowOrderCard(false); // Hide OrderCard
  };

  return (
    <div
      style={{
        backgroundColor: "#fffefe",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          height: "15vh",
          backgroundColor: "#d2eef9",
          width: "90%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: ".05rem solid #b8b8b8",
          borderRadius: 10,
          marginTop: "2rem",
        }}
      >
        <ImLocation2
          style={{ fontSize: "3rem", color: "#318216", marginLeft: "1rem" }}
        />
        <div style={{ width: "70%", marginLeft: "2rem", backgroundColor: "transparent" }}>
          <span style={{ fontWeight: "DMR",color:"#707070",fontSize:'1.2rem' }}>{userAddress}</span>
        </div>
      </div>
      <div
        style={{
          height: "74vh",
          backgroundColor: "#d9ffe8",
          width: "90%",
          border: ".05rem solid #b8b8b8",
          borderRadius: 30,
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          overflowY: "auto", // Enable scrolling if necessary
        }}
      >
           <h2 style={{marginLeft:20,color:"#a0a0a0",fontFamily:'DMB',alignSelf:'center'}}>ORDER HISTORY</h2>
        {showOrderCard && orders.map((order) => (
          <>
       
          <OrderCard key={order.id} order={order} onViewBill={handleViewBill} />
          </>
        ))}
        {/* Conditional rendering of PaymentCard */}
        {showPaymentCard &&  orders.map((order) => (
        
        <PaymentCard onPay={handlePay} key={order.id} order={order} />  ))}
      </div>
    </div>
  );
};

export default Left;
