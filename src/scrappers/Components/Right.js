import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./../../firebase"; // Make sure to import your Firebase configuration

import RightUp from "./RightUp";
import RightGraph from "./RightGraph";
import RightMaterials from "./RightMaterials";
import RightVechicle from "./RightVechicle";

const materialsData = [
  { name: "Iron", weight: "₹ 7/kg" },
  { name: "Copper", weight: "₹ 20/kg" },
  { name: "Aluminum", weight: "₹ 10/kg" },
  // Add more materials as needed
];

const Right = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalBalance, setTotalBalance] = useState("");

  useEffect(() => {
    // Function to fetch total number of orders
    const fetchTotalOrders = async () => {
      try {
        const ordersRef = collection(db, "orders");
        const ordersSnapshot = await getDocs(ordersRef);
        const totalOrdersCount = ordersSnapshot.size;
        setTotalOrders(totalOrdersCount);
      } catch (error) {
        console.error("Error fetching total orders: ", error);
      }
    };

    // Function to fetch total balance from scrappers collection based on a specific docId (e.g., 8076940848)
    const fetchTotalBalance = async (docId) => {
      try {
        const scrapperDocRef = doc(db, "scrappers", docId);
        const scrapperDocSnapshot = await getDoc(scrapperDocRef);
        if (scrapperDocSnapshot.exists()) {
          const totalBalanceValue = scrapperDocSnapshot.data().TotalBalance;
          setTotalBalance(totalBalanceValue);
        } else {
          console.error("Document does not exist");
        }
      } catch (error) {
        console.error("Error fetching total balance: ", error);
      }
    };

    fetchTotalOrders();
    fetchTotalBalance("8076940848"); // Replace with your actual docId from scrappers collection

    // Clean up function for useEffect (if needed)
    return () => {
      // Cleanup code (if any)
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#fafafa", height: "100vh" }}>
      <RightUp count1={totalOrders} count2={1} count3={3} />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        <RightGraph balance={totalBalance}/>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <RightMaterials materials={materialsData} />
          <RightVechicle />
        </div>
      </div>

      {/* Display fetched data */}
      {/* <div>
        <p>Total Orders: {totalOrders}</p>
        <p>Total Balance: {totalBalance}</p>
      </div> */}
    </div>
  );
};

export default Right;
