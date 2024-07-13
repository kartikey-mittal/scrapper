import React from 'react';
import { FaMotorcycle } from "react-icons/fa";

function RightVechicle() {
  return (
    <div style={{
      width: "12vw",
      backgroundColor: "#f4f4f4",
      height: "25vh",
      marginTop: "5rem",
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: ".5px solid grey",
    }}>
      <h3 style={{ textAlign: "center", color: "#33333b", fontFamily: "DMB" }}>My Vehicle</h3>
      <FaMotorcycle style={{ fontSize: "5rem" }} />
    </div>
  );
}

export default RightVechicle;
