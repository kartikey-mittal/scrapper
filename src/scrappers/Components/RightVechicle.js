import React from 'react';
import { FaMotorcycle } from "react-icons/fa";

function RightVechicle() {
  return (
    <div style={{
      width: "20vw",
      backgroundColor: "#f4f4f4",
      height: "25vh",
      marginTop: "5rem",
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      border: ".5px solid grey"
      
    }}>
      <h3 style={{  color: "#33333b", fontFamily: "DMB",marginLeft:"1.3rem"}}>My Vehicle</h3>
      <FaMotorcycle style={{ fontSize: "5rem" ,alignSelf:"center",color:"#D30270"}} />
    </div>
  );
}

export default RightVechicle;
